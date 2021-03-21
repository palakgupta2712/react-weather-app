import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SimpleCard from './components/SimpleCard'
import './App.css';


function App(){
    const API_BASE_URL = 'http://api.openweathermap.org/data/2.5'
    const API_KEY = '3b3049cb3992154857385dba93415d1a'
    const [city, setCity] = useState("")
    const [data, setData] = useState("")
    const [cityData, setCityData] = useState("")
    const [weather, setWeather] = useState("")
    function handleInput(e){
        setCity(e.target.value)
    }

   
    function onSearch(){
        fetch(`${API_BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
              setData(result.main)
              setWeather(result.weather)
              setCityData(result)
            })
        };

    return(
        <div >
          <div className="inputForm">
          <form  noValidate autoComplete="off" align="center" onSubmit={e => { e.preventDefault() }}>
          
              <TextField 
                  required
                  id="standard-required" 
                  name="city"
                  type="text"
                  placeholder="Location" 
                  onChange={handleInput}
                  value={city} 
                  className="formInput"
              />
              <Button variant="outlined" color="secondary"  onClick={() => onSearch(city)}>
                Search
              </Button>
              {!data ? (<p>"No Data Found"</p>) : <SimpleCard data={data} weather={weather} cityData={cityData}/>}
          </form>
          
          </div>
            
        </div>
        
        
      
    )
}
export default App