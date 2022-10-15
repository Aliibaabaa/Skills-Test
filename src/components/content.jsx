import React, {useState, useEffect } from 'react';
import './css/content.css';
import $ from 'jquery';
import load from './images/loading.gif'
import Spinner from 'react-bootstrap/Spinner';

function Content() {
//--- FETCH DATA ---//
    const[data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        await fetch("https://api.spacexdata.com/v4/launches/")  
          .then((res) => res.json())
          .then((data) => {
              setData(data);
            //   console.log(data)
          });
    };
      fetchData();
    }, []);
  

    if(!data.length) 
    return 
    <div>
        Loading... <br/>
       {/* <img src={load} className="h-gif" responsive /> */}
        <Spinner animation="border" variant="warning" />
    </div>

//--- LAZY LOAD ---//
    $(document).on("scroll", function() {
        var topViewport = $(document).scrollTop();
        var bottomViewport = topViewport + $(window).height();
        var result = $(".content");
    
        for (var i = 0; i < result.length; i++) {
        var content = result[i];
    
        if ($(content).position().top < bottomViewport) {
            $(content).addClass("visible");
        } else {
            $(content).removeClass("visible");
        }
        }
    });


 return (
    <> 
         <div className='container-2'>

         <div className='content'> 
             <div className='wrapper-1 '>
                <div className="w-img"> 
                </div>
           
                <div className='wrapper-2'>
                    <div>
                       <b className='title_'> 
                            Flight number: {data[0].flight_number}  | {data[0].name} | ({data[0].date_utc}) </b> 
                        <p> 
                            {data[0].details} 
                        </p>
                    </div>
                </div>
             </div>
        </div>

        <div className='content'> 
             <div className='wrapper-1 '>
                <div className="w-img"> 
                </div>
           
                <div className='wrapper-2'>
                    <div>
                        <b className='title_'> 
                            Flight number: {data[7].flight_number}  | {data[7].name} | ({data[7].date_utc}) </b> 
                        <p> 
                            {data[7].details} 
                        </p>
                    </div>
                </div>
             </div>
        </div>

        <div className='content'> 
             <div className='wrapper-1 '>
                <div className="w-img"> 
                </div>
           
                <div className='wrapper-2'>
                    <div>
                        <b className='title_'> 
                            Flight number: {data[35].flight_number}  | {data[35].name} | ({data[35].date_utc}) </b> 
                        <p> 
                            {data[35].details} 
                        </p>
                    </div>
                </div>
             </div>
        </div>

        <div className='content'> 
             <div className='wrapper-1 '>
                <div className="w-img"> 
                </div>
           
                <div className='wrapper-2'>
                    <div>
                        <b className='title_'> 
                            Flight number: {data[49].flight_number}  | {data[49].name} | ({data[49].date_utc}) </b> 
                        <p> 
                            {data[49].details} 
                        </p>
                    </div>
                </div>
             </div>
        </div>

        <div className='content'> 
             <div className='wrapper-1 '>
                <div className="w-img"> 
                </div>
           
                <div className='wrapper-2'>
                    <div>
                        <b className='title_'> 
                            Flight number: {data[94].flight_number}  | {data[94].name} | ({data[94].date_utc}) </b> 
                        <p> 
                            {data[94].details} 
                        </p>
                    </div>
                </div>
             </div>
        </div>
                
        </div>
        

       
    </>
    );
};

export default Content;



