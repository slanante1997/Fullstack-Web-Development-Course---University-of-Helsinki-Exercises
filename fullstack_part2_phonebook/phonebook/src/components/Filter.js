import React, { useState } from 'react'

const Filter = ({ onFilter }) => {
    const [filter, setFilter] = useState('')
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
        onFilter(event.target.value)
    }
    
    return (
        <div>
        <div>filter shown with 
            <input value={filter}
             onChange = {handleFilterChange} />
        </div>
        </div>
    )
}

export default Filter