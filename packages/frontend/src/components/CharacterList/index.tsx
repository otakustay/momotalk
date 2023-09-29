import {CSSProperties} from 'react';
import {useElementSize} from 'huse';
import {withBoundary} from 'react-suspense-boundary';
import {FixedSizeList} from 'react-window';
import {CharacterInfo} from '@/api/character';
import {useCharacterSearchKeywordState, useFilteredCharacters} from '@/atoms/character';
import {useSelectChatTarget} from '@/atoms/chat';
import Input from '@/components/Input';
import IconSearch from './Search.svg?react';
import Character from './Character';
import './index.less';

interface RowData {
    dataSource: CharacterInfo[];
    onSelect: (value: CharacterInfo) => void;
}

interface RowProps {
    style: CSSProperties;
    index: number;
    data: RowData;
}

function Row({style, index, data}: RowProps) {
    const character = data.dataSource[index];

    return <Character style={style} {...character} onSelect={data.onSelect} />;
}

function CharacterList() {
    const [keyword, setKeyword] = useCharacterSearchKeywordState();
    const characters = useFilteredCharacters();
    const selectCharacter = useSelectChatTarget();
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
                            itemCount={characters.length}
                            itemSize={98}
                            itemData={{dataSource: characters, onSelect: selectCharacter}}
                            itemKey={(index, item) => item.dataSource[index].id}
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
