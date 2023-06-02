import React from 'react'

export const PostCard = ({name, text}) => {
  return (
    <div className='rounded border border-emerald-400 py-2 mx-5 bg-stone-800 text-stone-100 mt-5 px-5'>
      <div className='font-bold'>
        <p>{name}</p>
      </div>
      <div>
        {text}
      </div>

    </div>
  )
}
