import {useCallback} from 'react';
import {atom, useAtomValue, useSetAtom} from 'jotai';
import {uniqBy} from 'ramda';
import {CharacterInfo} from '@/api/character';

export type FixedChatTarget = 'self' | 'event' | 'reply' | 'info';

export type ChatTarget = CharacterInfo | FixedChatTarget;

interface ChatTargetStore {
    current: ChatTarget;
    recent: CharacterInfo[];
}

const chatTarget = atom<ChatTargetStore>({current: 'self', recent: []});

export function useCurrentChatTarget() {
    const value = useAtomValue(chatTarget);
    return value.current;
}

export function useRecentChatCharacters() {
    return useAtomValue(chatTarget).recent;
}

export function useSelectChatTarget() {
    const setTarget = useSetAtom(chatTarget);
    const select = useCallback(
        (target: ChatTarget) => {
            const update = ({recent}: ChatTargetStore): ChatTargetStore => {
                return {
                    current: target,
                    recent: typeof target === 'string'
                        ? recent
                        : uniqBy(v => v.id, [target, ...recent]).slice(0, 5),
                };
            };
            setTarget(update);
        },
        [setTarget]
    );
    return select;
}
