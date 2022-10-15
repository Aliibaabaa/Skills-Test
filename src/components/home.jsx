import React, {useState, useEffect } from 'react';
import './css/home.css';
import Form from 'react-bootstrap/Form';
import Content from './content.jsx'
import CircleLoader from "react-spinners/CircleLoader";

function Home() {
//--- LOADING INDICATOR ---//

    const [loading, setLoading] = useState(false)
    const [setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
  
    useEffect(() => {
      setLoading(true)
      fetch("https://api.spacexdata.com/v4/launches/")
        .then((response) => response.json())
        .then((response) => {
           setUsers(response.data)
           setLoading(false)
          //  setTimeout(() => {
          //   setLoading(false)
          //  }, 3000)
        })
        .catch(() => {
          setErrorMessage("Error fetching list");
          setLoading(false); 
        })
    })

   

    return (
    <> 

        <div className='container-1'>
          <Form.Control type="text" placeholder="Enter keywords" id='searchbar' />
            <br/>

            {
                loading ? 
                     <CircleLoader  color={"#da6125"} loading={loading}  size={100}  className='loading'
                />
                : 
                     <Content/>
            }       
        </div>
        
    </>
)}
export default Home