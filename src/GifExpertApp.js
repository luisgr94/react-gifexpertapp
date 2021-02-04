import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Saitama'])

    return (
        <div>
            <h2>Gif Expert app</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => (
                        < GifGrid 
                        key={ category }
                        category={ category } />
                    ))
                }
            </ol>

        </div>
    )
}
