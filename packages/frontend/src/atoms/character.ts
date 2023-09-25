import {atom, useAtom, useAtomValue} from 'jotai';
import {useDebouncedValue} from 'huse';
import Fuse from 'fuse.js';
import characterApi from '@/api/character';

const characters = atom(characterApi.list);

const searchKeyword = atom('');

export function useAllCharacters() {
    return useAtomValue(characters);
}

export function useCharacterSearchKeywordState() {
    return useAtom(searchKeyword);
}

export function useFilteredCharacters() {
    const characters = useAllCharacters();
    const [searchKeyword] = useCharacterSearchKeywordState();
    const keyword = useDebouncedValue(searchKeyword, 150);
    const search = keyword.trim();
    if (search) {
        const fuse = new Fuse(characters, {findAllMatches: true, keys: ['name', 'organization']});
        return fuse.search(search).map(v => v.item);
    }
    return characters;
}
