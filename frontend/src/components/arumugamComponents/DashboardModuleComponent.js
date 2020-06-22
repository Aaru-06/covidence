import React,{Component} from "react"
import { Link } from 'react-router-dom';

class DashboardModuleComponent extends Component{

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        window.alert(this.props.name+" is clicked .. \\testing purpose")
    }
    render(){
        return(
        	<Link className="link" to={{pathname: `/${this.props.name}`}} >
            <div className="moduleComponent" name={this.props.name} onClick={this.clickHandler}>
                {this.props.name}
            </div>
            </Link>
        )
    }
}

export default DashboardModuleComponent