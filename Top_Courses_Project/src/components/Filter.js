import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
    function clickhandler(title){
        setCategory(title)
    }
  return (
    <div className='flex justify-center gap-5 '>
        {
            filterData.map((btn)=>{
                return(
                    <button onClick={()=>clickhandler(btn.title)} key={btn.id} className='bg-blue-950 text-white font-semibold p-2 rounded-lg my-2'>
                        {btn.title}
                    </button>
                )
            })
        }
    </div>
  )
}

export default Filter