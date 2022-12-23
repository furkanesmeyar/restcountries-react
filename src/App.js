
import {useEffect, useState} from "react";
import axios from "axios";
import {capitalIcon, githubIcon, searchIcon} from "./icons";

function App() {
  const [APIData, setAPIData] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredResults, setFilteredResults] = useState([])

  useEffect(()=> {
    axios.get('https://restcountries.com/v2/all')
        .then(data => setAPIData(data.data))
        .catch(err => console.log(err))
  },[])

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = APIData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else{
      setFilteredResults(APIData)
    }
  }



  return (
      <>
        <div className="container mx-auto">
          <header className="grid items-center justify-items-center gap-y-2.5 columns-1 my-10  border-b-2 border-b-red-600 rounded-b-xl">
            <a className="text-white hover:rotate-12 duration-1000" href="https://github.com/furkanesmeyar" target="_blank">{githubIcon('#fff',36)}</a>
            <h1 className="text-5xl text-white font-IBM3270">REST Countries</h1>
            <h2 className="text-white">React, Axios and TailwindCSS</h2>


            <form className="w-full  px-4 pb-2">
              <div className="relative">
                {searchIcon()}
                <input
                    type="text"
                    placeholder="Search Countries"
                    onChange={(e) => searchItems(e.target.value)}
                    className="w-full py-3 pl-12 pr-4 text-white  rounded-md outline-none bg-dark-data focus:bg-dark-second"
                />
              </div>
            </form>


          </header>



          <div className="content text-white grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3">
            {
              searchInput.length > 1 ?


                  filteredResults.map((data,index) => (

                      <div key={index}
                           className="bg-dark-data hover:bg-dark-second duration-500  w-full grid columns-1 justify-items-center items-center text-center p-3 rounded-xl">
                        <img width={100} src={data.flag} alt=""/>
                        <h5 className="font-bold text-xl">{data.name}</h5>
                        <div className="flex gap-2">
                          {capitalIcon('#fff', 24)}
                          <span className="font-serif">{data.capital}</span>
                        </div>
                      </div> ))


                  :
                  APIData.map((data,index) => (

                      <div key={index}
                           className="bg-dark-data hover:bg-dark-second duration-500  w-full grid columns-1 justify-items-center items-center text-center p-3 rounded-xl">
                        <img width={100} src={data.flag} alt=""/>
                        <h5 className="font-bold text-xl">{data.name}</h5>
                        <div className="flex gap-2">
                          {capitalIcon('#fff', 24)}
                          <span className="font-serif">{data.capital}</span>
                        </div>
                      </div> ))
            }
          </div>

        </div>
      </>

  );
}

export default App;
