import React, { useEffect, useState } from "react";
import { SearchProps } from "../types/searchBar";
import useDebounce from "../hooks/useDebounce";
import './SearchBar.css' 

interface Props {
    data: SearchProps[],
    isLoading: boolean;
}

const SearchBar = ({ data, isLoading }: Props) => {
    const [inputText, setInputText] = useState<string>('')
    const [filteredData,setFilteredData]=useState<SearchProps[]>([])
    const debouncedSearch = useDebounce(inputText, 300)
    const handleOnChange = (input: string) => {
        setInputText(input);
       
        
    }
    useEffect(()=>{
        if (debouncedSearch.trim() !== '') {
            let newFilteredData = data.filter((user) => user.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
            setFilteredData(newFilteredData)
        }
        else{
            setFilteredData([])
        }
    },[debouncedSearch,data])
    return (
        <div className="search-container">
            <div className="search-input-wrapper">
                <input 
                    className="search-input"
                    type="text" 
                    value={inputText} 
                    onChange={(e) => handleOnChange(e.target.value)}
                    placeholder="Search users..."
                />
                {inputText && (
                    <button onClick={() => setInputText('')}>✕</button>
                )}
            </div>
            {isLoading && <p>Loading...</p>}
            {filteredData.length > 0 && (
                <div className="search-results">
                    {filteredData.map((user: SearchProps) => (
                        <div key={user.id} className="search-result-item">{user.name}</div>
                    ))}
                </div>
            )}
            {!isLoading && filteredData.length < 1 && inputText && (
                <p>No results found!</p>
            )}
        </div>
    )
}

export default SearchBar