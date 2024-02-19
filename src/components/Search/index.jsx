import FeatherIcon from 'feather-icons-react';
import React, {useState} from 'react';
import { useSearchParams } from 'react-router-dom';

function Search( {placeholder}) {
    const [search, setSearch] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        setSearchParams({search: search});
        setSearch("");
    };

    return (
        <div className='my-8 flex items-center justify-center '>
            <input
                className='w-3/5 h-10 border-2 border-gray-700 rounded-lg px-2 mt-1 box-border'
                placeholder={placeholder}
                type='text'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleClick()}
            />
            <div className='relative'>
                <FeatherIcon className='absolute top-[-16px] right-1 px-2 py-1 box-content cursor-pointer' icon='search' onClick={handleClick} />
            </div>
        </div>
  )
}

export default Search