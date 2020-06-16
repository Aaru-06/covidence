import React from 'react';
import modules from "../../constants/Modules"
import DashboardModuleComponent from '../arumugamComponents/DashboardModuleComponent';
import img from "../../images/covid.jpg"
const Dashboard = props  => {
    // console.log("dashboard rendered")
    // console.log(modules)
    return(
        <div>
            <div className="moduleContainer">
                {/* <h1>{props.user}</h1> */}
                {
                    modules.dashboardModules.map((obj,index)=> <DashboardModuleComponent key={index} name={obj} img={img}/>)
                }
            </div>
        </div>
    )
}


export default Dashboard;