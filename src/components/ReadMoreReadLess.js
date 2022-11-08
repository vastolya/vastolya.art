import { React, useState } from 'react'

const ReadMoreReadLess = ( { children } ) => {
  
    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
  
    return (
    <div className='flex flex-col'>
        {isReadMoreShown ? children : children.substr(0, 100)}
        <button onClick={toggleBtn} className="text-sm text-gray-500 py-4">
            {isReadMoreShown ? "...read less" : "read more..."}
        </button>
    </div>
  )
}

export default ReadMoreReadLess