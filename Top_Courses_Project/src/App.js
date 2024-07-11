import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data.js";
import toast from "react-hot-toast";

const App = () => {
  const [courses, setCourses] = useState(null);
  const[loading,setLoading]=useState(false)
  const[category,setCategory]=useState(filterData[0].title)

  useEffect(() => {
    
    const coursesData = async () => {
      setLoading(true)
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data)
        console.log(output.data)
        
        
      } catch (error) {
        toast.error("data fetch error");
      }
      setLoading(false)
    };

    coursesData();
    
    // toast.success("data fetched successfully")

  }, []);

  return (
    <div className="bg-blue-300 w-full">
      <Navbar />

      <Filter filterData={filterData} category={category} setCategory={setCategory} />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
        {
          loading?(<div className="spinner  text-black"></div>):(<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
  );
};

export default App;
