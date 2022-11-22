import { React, useState } from 'react'

const ReadMoreReadLess = ( { children } ) => {
  
    const [isReadMoreShown, setReadMoreShown] = useState(false)

    const toggleBtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
  
    return (
    <div className='flex flex-col  md:pb-8'>
        {isReadMoreShown ? children : children.substr(0, 100)}
        <button onClick={toggleBtn} className="text-sm text-gray-500 py-4 md:hidden">
            {isReadMoreShown ? "...read less" : "read more..."}
        </button>
    </div>
  )
}

export default ReadMoreReadLess