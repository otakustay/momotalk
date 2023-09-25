import {useCallback} from 'react';
import {atom, useAtomValue, useSetAtom} from 'jotai';
import {uniqBy} from 'ramda';
import {CharacterInfo} from '@/api/character';

const chatCharacterTargets = atom<CharacterInfo[]>([]);

export function useChatCharacterTargets() {
    return useAtomValue(chatCharacterTargets);
}

export function useSelectChatCharacter() {
    const setValue = useSetAtom(chatCharacterTargets);
    const select = useCallback(
        (character: CharacterInfo) => setValue(v => uniqBy(v => v.id, [character, ...v]).slice(0, 5)),
        [setValue]
    );
    return select;
}

export function useChatTarget() {
    const characters = useChatCharacterTargets();
    return characters.at(0) ?? null;
}
