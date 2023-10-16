import {CSSProperties, useCallback} from 'react';
import {CharacterInfo} from '@/api/character';
import {resolveAvatarUrl, resolveOrganizationIconUrl} from '@/utils/character';
import {useAllCharacters} from '@/atoms/character';
import './Character.less';

interface Props extends CharacterInfo {
    style?: CSSProperties;
    onSelect: (value: CharacterInfo) => void;
}

export default function Character({style, onSelect, id, name, message, organization}: Props) {
    const characters = useAllCharacters();
    const select = useCallback(
        () => {
            const character = characters.find(c => c.id === id);
            if (character) {
                onSelect(character);
            }
        },
        [characters, id, onSelect]
    );

    return (
        <div className="character-list-item" style={style} onClick={select}>
            <img src={resolveAvatarUrl(id)} alt={name} className="character-list-item-avatar" />
            <span className="character-list-item-name">{name}</span>
            <span className="character-list-item-message">{message}</span>
            <img
                src={resolveOrganizationIconUrl(organization)}
                alt={organization}
                className="character-list-item-organization"
            />
        </div>
    );
}
