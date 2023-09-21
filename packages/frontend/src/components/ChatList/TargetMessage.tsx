import {ReactElement} from 'react';
import {CharacterInfo} from '@/api/character';
import {resolveAvatarUrl} from '@/utils/character';
import './TargetMessage.less';

interface Props {
    character: CharacterInfo;
    children: ReactElement;
}

export default function TargetMessage({character, children}: Props) {
    return (
        <div className="chat-message-target">
            <img className="chat-message-target-avatar" src={resolveAvatarUrl(character.id)} alt={character.name} />
            <span className="chat-message-target-name">{character.name}</span>
            <div className="chat-message-target-content">
                {children}
            </div>
        </div>
    );
}
