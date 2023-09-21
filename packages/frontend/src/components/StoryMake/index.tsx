import {useConstantResource, useResource} from 'react-suspense-boundary';
import storyApi from '@/api/story';
import characterApi from '@/api/character';
import CharacterList from '@/components/CharacterList';
import ChatList from '@/components/ChatList';
import './index.less';

export default function StoryMake() {
    const [characters] = useConstantResource(characterApi.list);
    const [story] = useResource(storyApi.findById, 1);

    return (
        <div className="story-make">
            <CharacterList />
            <div className="story-make-workspace">
                <ChatList characters={characters} messages={story.messages} />
                <div style={{backgroundColor: '#eee'}}>Textbox</div>
                <div style={{backgroundColor: '#f4f7f8'}}>Action</div>
            </div>
        </div>
    );
}
