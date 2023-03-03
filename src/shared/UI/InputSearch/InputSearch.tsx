import { useState } from "react";

interface search{
    name: string,
    placeholder: string,
    fontSize?: string,
    maxLength?: number,
}

const InputSearch = ({name, placeholder, fontSize, maxLength}: search) => {
    const [search, setSearch] = useState('');

    return(
        <input 
            type='search'
            name={name}
            placeholder={placeholder}
            value={search}
            maxLength={maxLength}
            onChange={(e) => {
                setSearch(e.target.value)
            }}
        />
    )
}

export default InputSearch;