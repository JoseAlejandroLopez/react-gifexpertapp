import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//rafc
const GifExpertApp = () => {

    // const categories = ['Tanjiro', 'Inosuke', 'Zenitsu']; asi seria inmutable y dificil de re-renderizar
    // const [categories, setCategories] = useState(['Tanjiro', 'Inosuke', 'Zenitsu']);
    const [categories, setCategories] = useState(['Kimetsu No Yaiba']);

/*  const handleAdd = () => {    
//      setCategories( [...categories, 'Nezuko'] ); es valido, pero no optimo
        setCategories( categories => [...categories, 'Nezuko'] ); 
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory setCategories={ setCategories } />
            {/* property       clave  =   valor                
                              nombre  =   referencia                  */}
 
            {/* <ol>
                {
                    categories.map( category => (
                        <li key= { category } > { category } </li>
                    ))
                }
            </ol> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key= { category } 
                            category={ category }
                        />
                    ))
                }
            </ol>


        </>
    );

}


export default GifExpertApp;