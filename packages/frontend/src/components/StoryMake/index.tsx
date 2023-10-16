import {useResource} from 'react-suspense-boundary';
import {useCallback, useState} from 'react';
import storyApi, {MessageCreatePayload} from '@/api/story';
import CharacterList from '@/components/CharacterList';
import ChatList from '@/components/ChatList';
import InputSection from './InputSection';
import './index.less';
import ActionSection from './ActionSection';

export default function StoryMake() {
    const [story, {refresh}] = useResource(storyApi.findById, 1);
    const [messageSending, setMessageSending] = useState<MessageCreatePayload | null>(null);
    const send = useCallback(
        async (message: MessageCreatePayload) => {
            if (!message.content.trim().length) {
                return;
            }

            setMessageSending(message);
            await storyApi.sendMessage(story.id, message);
            await refresh();
            setMessageSending(null);
        },
        [refresh, story.id]
    );

    return (
        <div className="story-make">
            <CharacterList />
            <div className="story-make-workspace">
                <ChatList messages={story.messages} sending={messageSending} />
                <InputSection onSend={send} />
                <ActionSection onSend={send} />
            </div>
        </div>
    );
}
