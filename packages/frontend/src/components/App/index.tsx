import OutlineBox from '@/components/OutlineBox';
import CharacterList from '@/components/CharacterList';
import './index.less';

export default function App() {
    return (
        <div className="root">
            <OutlineBox>
                <CharacterList />
            </OutlineBox>
        </div>
    );
}
