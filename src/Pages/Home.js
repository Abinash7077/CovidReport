import React,{useState} from "react";
import Header from "../Component/Header";
import Continent from "../Component/Continent";


const Home = () => {
  
  const data = [
    {
      id: 1,
      name: "Asia",
    },
    {
      id: 2,
      name: "Europe",
    },
    {
      id: 3,
      name: "North-America",
    },
    {
      id: 4,
      name: "Antarctica",
    },
    {
      id: 5,
      name: "South-America",
    },
    {
      id: 6,
      name: "Africa",
    },
    {
      id: 7,
      name: "Oceania",
    },
  ];
  return (
    <>
      <Header />
      <h1 className="text-center font-sans font-semibold hover:text-orange-700 text-[20px] sm:text-[28px] lg:text-[35px] xl:text-[35px]">
        Covid19 Report Continent and country wise
      </h1>
      <div className="w-[80%] mt-4 mx-auto h-[450px] border-2 shadow-lg">
        <div className="w-full  my-2">
            {
                data.map((item)=>(
                    <Continent
                    id={item.id}
                    name={item.name}
                    />
                ))
            }
           
           
           
        </div>
      </div>
      

      {/* <div className="border-2 w-[75%] h-[75vh]">
                    <CountryData/>
                    </div> */}
    </>
  );
};

export default Home;
