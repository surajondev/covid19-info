import React from "react"
import "./index.css"

function Appcontainer(props){
    return(
        <div>
            <center className="header">
                <h1>COVID 19 INFORMATION</h1>
            </center>
           <div className="container">
            <div className="col col-small">
                <center>
                    <h1 className="name">TOTAL CASES</h1>
                    <h1>{props.world.cases}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TODAY CASES </h1>
                    <h1 >{props.world.todayCases}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TOTAL DEATHS</h1>
                    <h1>{props.world.deaths}</h1>
                </center>    
            </div>
            </div>
            <div className="container">
            <div className="col col-small">
                <center>
                    <h1 className="name">RECOVERED</h1>
                    <h1>{props.world.recovered}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">ACTIVE CASES</h1>
                    <h1>{props.world.active}</h1>
                </center>    
            </div>
            <div className="col col-small">
                <center>
                    <h1 className="name">TOTAL TESTS</h1>
                    <h1>{props.world.tests}</h1>
                </center>    
            </div>
            </div>
            <div className="container">
            <div className="col col-big">
                <center>
                    <h1 className="name">AFFECTED COUNTRIES</h1>
                    <h1>{props.world.affectedCountries}</h1>
                        <div>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197484.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197419.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197386.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197408.svg" height="50" width="50"></img>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/197/197575.svg" height="50" width="50"></img>
                        </div>
                </center> 
            </div>
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
