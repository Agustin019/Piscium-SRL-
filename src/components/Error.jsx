import React from 'react'

function Error({ children }) {
    return (
        <div className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'>
            {children}
        </div>
    )
}

export default Error