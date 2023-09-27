import {useCallback} from 'react';
import {CharacterInfo} from '@/api/character';
import {useChatCharacterTargets, useSelectChatCharacter} from '@/atoms/chat';
import {resolveAvatarUrl} from '@/utils/character';
import './AvatarStack.less';

interface AvatarProps {
    character: CharacterInfo;
    index: number;
}

function Avatar({character, index}: AvatarProps) {
    const select = useSelectChatCharacter();
    const click = useCallback(
        () => {
            select(character);
        },
        [character, select]
    );

    return (
        <img
            className="chat-action-section-avatar-stack-item"
            style={{zIndex: 10 - index}}
            src={resolveAvatarUrl(character.id)}
            alt={character.name}
            onClick={click}
        />
    );
}

export default function AvatarStack() {
    const characters = useChatCharacterTargets();
    const renderItem = (character: CharacterInfo, index: number) => (
        <Avatar key={character.id} character={character} index={index} />
    );

    return (
        <div className="chat-action-section-avatar-stack">
            {characters.map(renderItem)}
        </div>
    );
}
