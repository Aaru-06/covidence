import React from 'react';
import modules from '../../constants/Modules';
import Header from './HeaderView';
import DashboardModuleComponent from '../arumugamComponents/DashboardModuleComponent';
import img from "../../images/covid.jpg"
import SideNavBar from "../arumugamComponents/SideNavBar"
const Dashboard = props  => {
    // console.log("dashboard rendered")
    // console.log(modules)
    return(
        <div>
            <Header name="Dashboard" />
            <SideNavBar history={props.history}/>
            <div className="moduleContainer">
                {
                    modules.dashboardModules.map((obj,index)=> <DashboardModuleComponent key={index} name={obj} img={img} history={props.history}/>)
                }
            </div>
        </div>
    )
}


export default Dashboard;