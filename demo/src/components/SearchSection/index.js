import React from 'react';
import { FiSearch } from "react-icons/fi";
import { SearchContainer ,SearchWrap,SearchLabel,SearchInput,SearchIcon} from './SearchElements';

function SearchSection() {
    return (
        <>
            <SearchContainer>
                <SearchWrap>
                    <SearchLabel>Search:</SearchLabel>
                    <SearchInput />
                    <SearchIcon>
                        <FiSearch/>
                    </SearchIcon>
                </SearchWrap>
            </SearchContainer>
        </>
    )
}

export default SearchSection
