import React from 'react'

const Card = ({course}) => {
  return (
    <div className= ' bg-blue-950 flex-col w-[300px] overflow-hidden p-1'>
        {/* <div className='w-[300px] h-[50px]'> */}
            <img className='w-[300px] h-[200px] border-1 border-white mb-2' src={course.image.url} alt={course.image.alt}/>
        {/* </div> */}
        <div className='flex flex-col p-1 gap-1'>
            <h2 className='font-bold text-white text-sm'>{course.title}</h2>
            <p className='text-white  text-sm'>{(course.description).slice(0,400)}...</p>
        </div>
    </div>
  )
}

export default Card