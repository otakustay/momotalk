import {CharacterInfo} from '@/api/character';
import {useRecentChatCharacters} from '@/atoms/chat';
import ChatTargetAvatar from '@/components/ChatTargetAvatar';
import './AvatarStack.less';

export default function AvatarStack() {
    const characters = useRecentChatCharacters();
    const renderItem = (character: CharacterInfo, index: number) => (
        <ChatTargetAvatar
            selectable
            key={character.id}
            style={{zIndex: 10 - index}}
            className="chat-action-section-avatar-stack-item"
            target={character}
        />
    );

    return (
        <div className="chat-action-section-avatar-stack">
            {characters.map(renderItem)}
        </div>
    );
}
