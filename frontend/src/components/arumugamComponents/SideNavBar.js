import React,{Component} from 'react'
import Modules from "../../constants/Modules.json"
import SideNav, {Nav,NavItem,NavText} from "@trendmicro/react-sidenav"
import "./styles/sidenavbar-styles/react-sidenav.css"

class SideNavBar extends Component{
    constructor(){
        super()
        this.modules = Modules.dashboardModules;
        this.handleNavItemClick = this.handleNavItemClick.bind(this);
    }


    handleNavItemClick(event){
        this.props.history.push(event.target.innerHTML);
    }

    render(){
        // console.log(this.props)
        // navigation code to be written in onSelect props of sidenav
        return(
            <SideNav className="snb">
                <Nav>
                    {this.modules.map((obj,index)=> <NavItem className="navitem" key={index} onClick={this.handleNavItemClick}><NavText className="navtext" key={index}>{obj}</NavText></NavItem>)}
                </Nav>
            </SideNav>
        )
    }

    
}
export default SideNavBar