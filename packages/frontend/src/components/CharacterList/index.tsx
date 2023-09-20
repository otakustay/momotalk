import {CSSProperties} from 'react';
import {useElementSize} from 'huse';
import {useConstantResource, withBoundary} from 'react-suspense-boundary';
import {FixedSizeList} from 'react-window';
import characterApi, {CharacterInfo} from '@/api/character';
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
    const [dataSource] = useConstantResource(characterApi.list);
    const [root, size] = useElementSize();

    return (
        <div ref={root} className="character-list">
            {
                !!size && (
                    <FixedSizeList {...size} itemCount={dataSource.length} itemSize={98} itemData={dataSource}>
                        {Row}
                    </FixedSizeList>
                )
            }
        </div>
    );
}

export default withBoundary({pendingFallback: null})(CharacterList);
