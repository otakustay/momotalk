import {CSSProperties, useMemo, useState} from 'react';
import {useDebouncedValue, useElementSize} from 'huse';
import Fuse from 'fuse.js';
import {useConstantResource, withBoundary} from 'react-suspense-boundary';
import {FixedSizeList} from 'react-window';
import characterApi, {CharacterInfo} from '@/api/character';
import Input from '@/components/Input';
import IconSearch from './Search.svg?react';
import Character from './Character';
import './index.less';

interface RowProps {
    style: CSSProperties;
    index: number;
    data: CharacterInfo[];
}

function Row({style, index, data}: RowProps) {
    return <Character style={style} {...data[index]} />;
}

function CharacterList() {
    const [keyword, setKeyword] = useState('');
    const searchKeyword = useDebouncedValue(keyword, 150);
    const [characters] = useConstantResource(characterApi.list);
    const dataSource = useMemo(
        () => {
            const search = searchKeyword.trim();
            if (search) {
                const fuse = new Fuse(characters, {findAllMatches: true, keys: ['name', 'organization']});
                return fuse.search(search).map(v => v.item);
            }
            return characters;
        },
        [characters, searchKeyword]
    );
    const [list, size] = useElementSize();

    return (
        <div className="character-list">
            <div className="character-list-search">
                <Input
                    className="character-list-search-input"
                    prefixIcon={<IconSearch />}
                    placeholder="Type to search"
                    value={keyword}
                    onChange={setKeyword}
                />
            </div>
            <div ref={list} key="a">
                {
                    !!size && (
                        <FixedSizeList
                            className="character-list-scroll"
                            {...size}
                            itemCount={dataSource.length}
                            itemSize={98}
                            itemData={dataSource}
                            itemKey={(index, item) => item[index].id}
                        >
                            {Row}
                        </FixedSizeList>
                    )
                }
            </div>
        </div>
    );
}

export default withBoundary({pendingFallback: null})(CharacterList);
