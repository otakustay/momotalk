import {useCallback} from 'react';
import ChatTargetAvatar from '@/components/ChatTargetAvatar';
import {MessageCreatePayload} from '@/api/story';
import AvatarStack from './AvatarStack';
import IconSplit from './Split.svg?react';
import './index.less';

interface Props {
    onSend: (message: MessageCreatePayload) => void;
}

export default function ActionSection({onSend}: Props) {
    const addSplit = useCallback(
        () => {
            const message: MessageCreatePayload = {
                side: 'system',
                type: 'split',
                content: '',
            };
            onSend(message);
        },
        [onSend]
    );

    return (
        <div className="chat-action-section">
            <ChatTargetAvatar selectable target="self" />
            <ChatTargetAvatar selectable target="event" />
            <ChatTargetAvatar selectable target="info" />
            <ChatTargetAvatar selectable target="reply" />
            <div className="chat-action-section-button" onClick={addSplit}>
                <IconSplit />
            </div>
            <AvatarStack />
        </div>
    );
}