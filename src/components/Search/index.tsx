import React, {useEffect, useState} from 'react';

import Form from 'react-bootstrap/Form';

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

        <Form>
            <Form.Group className="mb-8">
                <Form.Control className=" "  data-testid="search" value={searchString} onChange={handleChange} type="search" id="default-search" placeholder="Search heare..." required />
            </Form.Group> 
        </Form>
      
    ); 
}