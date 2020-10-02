import React from "react"
import "./index.css"

function Appcontainer(props){
    return(
        <div>
            <center className="header">
                <h1>COVID 19 INFORMATION</h1>
            </center>
            <div className="container-total">
                <center>
                    <h1 className="info">TOTAL CASES</h1>
                    <h1 className="data">{props.world.cases}</h1>
                </center>    
            </div>
            <div className="container-today">
                <center>
                    <h1 className="info">TODAY CASES </h1>
                    <h1 className="data">{props.world.todayCases}</h1>
                </center>    
            </div>
            <div className="container-death">
                <center>
                    <h1 className="info">TOTAL DEATHS</h1>
                    <h1 className="data">{props.world.deaths}</h1>
                </center>    
            </div>
            <div className="container-recovered">
                <center>
                    <h1 className="info">RECOVERED</h1>
                    <h1 className="data">{props.world.recovered}</h1>
                </center>    
            </div>
            <div className="container-active">
                <center>
                    <h1 className="info">ACTIVE CASES</h1>
                    <h1 className="data">{props.world.active}</h1>
                </center>    
            </div>
            <div className="container-tests">
                <center>
                    <h1 className="info">TOTAL TESTS</h1>
                    <h1 className="data">{props.world.tests}</h1>
                </center>    
            </div>
            <div className="container-countries">
                <center>
                    <h1 className="info">AFFECTED COUNTRIES</h1>
                    <h1 className="data">{props.world.affectedCountries}</h1>
                        <div>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197484.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197419.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197386.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197408.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197575.svg" height="50" width="50"></img>
                        </div>
                </center> 
            </div>
            <div>   
                <center className="footer">
                    <h1>Source : disease.sh</h1>
                </center>
            </div>
       </div>
        )
    
}
export default Appcontainer