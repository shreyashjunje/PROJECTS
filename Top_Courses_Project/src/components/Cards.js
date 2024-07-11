import React from 'react'
import Card from './Card'
import toast from 'react-hot-toast';

const Cards = ({courses,category}) => {

    if(courses==null){
        return toast.error("undefined")
    }
    function getllCourses(){
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((array)=>{
                (array).forEach(course=>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category]
        }
        
    }

  return (
    <div className='flex flex-wrap  justify-center gap-5 my-4  '>
       {
        getllCourses()?.map((course)=>{
            return(
                <Card course={course} key={course.id}/>
            )
        })
       }
    </div>
  )
}

export default Cards