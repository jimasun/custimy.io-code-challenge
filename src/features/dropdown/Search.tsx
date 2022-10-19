import { ChangeEvent, ReactElement } from "react";

import './Search.css'


export const Search = ({ query, handleQuery }:
    {
        query: string,
        handleQuery: (event: ChangeEvent<HTMLInputElement>) => void
    }): ReactElement =>

    <input className="search" placeholder="Search options" value={query} onChange={handleQuery} />

export default Search