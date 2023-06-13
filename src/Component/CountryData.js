import React,{useEffect, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const CountryData = () => {
  const newName=useSelector((state)=>state.dispatchName)
 
  const[data,setData]=useState("")
  const[page,setPage]=useState(1)
  const[postPerPage,setPostPerPage]=useState(10)
 
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    fetchCovidStatistics();
  }, []);

  const fetchCovidStatistics = async () => {
    try {
      const response = await axios.get('https://covid-193.p.rapidapi.com/statistics', {
          headers: {
              'X-RapidAPI-Key': 'a2fcb18a97msh6ddf59fcf92a993p13d101jsn2a03d663d5c2',
              'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            },
      });

      setStatistics(response.data.response);
    } catch (error) {
      console.error('Error fetching COVID-19 statistics:', error);
    }
  };
  const selectPageHandler=(selectPage)=>{
    if(selectPage>=1 && selectPage<=statistics.length/5 && selectPage!= page)
    setPage(selectPage)
  }
  console.log((statistics))
  /* fetch done */
  
 
  return (
    <div>
      <div className="w-full py-1 bg-orange-300" >
        <h1 className="text-center text-white text-[30px]">
          Countries Covid statisticsrt
        </h1>
        <div className="flex items center justify-center my-1 w-[60%] mx-auto "> <input type="text" placeholder="Search Data Here" className="w-full py-1 text-[14px] focus:outline-gray-400 rounded-lg px-8" value={data} onChange={(e)=>setData(e.target.value)}/></div>
      </div>
      <table className="w-full items-center justify-center">
        <thead><tr className="text-center bg-blue-100">
          <th className="text-[18px] border-r-2 border-slate-700 py-2 text-slate-700 ">Continent</th>
          <th className="text-[18px] border-r-2 border-slate-700 py-2 text-slate-700 ">Country</th>
          
          <th className="text-[18px] border-r-2 border-slate-700 py-2 text-slate-700 ">Population</th>
          <th className="text-[18px] border-r-2 border-slate-700 py-2 text-slate-700 ">Total Cases</th>
          <th className="text-[18px]  py-2 text-slate-700 ">Death Case</th>
        </tr></thead>
        
        
       <tbody>
          {statistics.filter((item)=>{
            return data.slice(page*10-10,page*10).toLowerCase()===''?item:item.country.toLowerCase().includes(data) 
          }).map((item) => (
            <>
             <tr className={`text-center border-2 shadow-lg  ${item.clr} `} key={item.continent}>
             <td className="text-[16px] py-3  font-400 md:text-[16px]">{item.continent}</td>
              <td className="text-[16px] py-3  font-400 md:text-[16px]">{item.country}</td>
              <td className="text-[16px] py-3  font-400 md:text-[16px]">{item.cases.total}</td>
              <td className="text-[16px] py-3  font-400 md:text-[16px]">{item.deaths.total}</td>
              <td className="text-[16px] py-3  font-400 md:text-[16px]">{item.cases.recovered}</td>
              </tr>
              
            </>
          ))}
          </tbody>
        
      </table>
   
      
     



    
    </div>
  );
};

export default CountryData;
