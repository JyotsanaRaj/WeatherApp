import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { red } from '@mui/material/colors';

function SearchBox({ updateInfo }){
    let[city,setCity]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ffda29c72f5cb3c71df7955c5456bb9b";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metrics`);
            let jsonResponse = await response.json();
    
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
    
            };
            console.log(result);  
            return result;  
        } catch(err){
            throw err;
        }
    };
    

    
    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event) => {
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err)
        {
            setError(true);

        }
    };
    

    return(
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}
export default SearchBox;