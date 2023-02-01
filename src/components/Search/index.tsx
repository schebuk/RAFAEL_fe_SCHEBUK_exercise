import React, {useEffect, useState} from 'react';

interface Props {
    items: any[];
    filterItems: (items:any[]) => void;
}


export default function Search({items, filterItems}:Props) {
    const [searchString, setSearchString] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setSearchString(e.target.value);  
        if(e.target.value.length  === 0) {
          filterItems(undefined); 
        }
    };
 
    useEffect(() => {
        // set the current state
        if(searchString.length > 0) {
            const itemsFiltered = items.filter(item => {           
                if(item.name &&  item.name.toLocaleLowerCase().indexOf(searchString) > -1 ) {
                    return true;
                }
                return false;            
            } );
           filterItems(itemsFiltered); 
        }
      
      
      }, [searchString]);
    return (

        <div className="flex items-center mt-8 m-8">   
            <div className="relative w-full">
                <input data-testid="search" value={searchString} onChange={handleChange} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search heare..." required />
            </div>
        </div>
      
    ); 
}