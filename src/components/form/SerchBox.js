import React from 'react'

export const  SerchBox = ({onSearch, querySaerch}) => {
    return <input 
                placeholder='Searc...' 
                className='form-control mb-3' 
                name='query' 
                value={querySaerch}
                onChange={e => onSearch(e.currentTarget.value)}/>
}
