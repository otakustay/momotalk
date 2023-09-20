import {CSSProperties} from 'react';
import {CharacterInfo, CharacterOrganization} from '@/api/character';
import './Character.less';

function resolveAvatarUrl(id: number) {
    return `https://schale.gg/images/student/collection/${id}.webp`;
}

function resolveOrganizationIconUrl(name: CharacterOrganization) {
    return `https://schale.gg/images/schoolicon/School_Icon_${name.toUpperCase()}_W.png`;
}

interface Props extends CharacterInfo {
    style?: CSSProperties;
}

export default function Character({id, name, message, organization, style}: Props) {
    return (
        <div className="character-list-item" style={style}>
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
