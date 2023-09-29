import ChatTargetAvatar from '@/components/ChatTargetAvatar';
import AvatarStack from './AvatarStack';
import './index.less';

export default function ActionSection() {
    return (
        <div className="chat-action-section">
            <ChatTargetAvatar selectable target="self" />
            <ChatTargetAvatar selectable target="event" />
            <ChatTargetAvatar selectable target="info" />
            <ChatTargetAvatar selectable target="reply" />
            <AvatarStack />
        </div>
    );
}
