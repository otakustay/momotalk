import {CharacterOrganization} from '@/api/character';

export function resolveAvatarUrl(id: number) {
    return `https://schale.gg/images/student/collection/${id}.webp`;
}

export function resolveOrganizationIconUrl(name: CharacterOrganization) {
    return `https://schale.gg/images/schoolicon/School_Icon_${name.toUpperCase()}_W.png`;
}
