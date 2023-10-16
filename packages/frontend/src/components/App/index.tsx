import OutlineBox from '@/components/OutlineBox';
import StoryMake from '@/components/StoryMake';
import './index.less';

export default function App() {
    return (
        <div className="root">
            <OutlineBox>
                <StoryMake />
            </OutlineBox>
        </div>
    );
}
