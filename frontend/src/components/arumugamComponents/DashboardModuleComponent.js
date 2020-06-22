import React,{Component} from "react"

class DashboardModuleComponent extends Component{

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        let name = event.target.id;
        this.props.history.push(`/${name}`);
    }
    render(){
        return(
            <div className="moduleComponent" id={this.props.name} onClick={this.clickHandler}>
                {this.props.name}
            </div>
        )
    }
}

export default DashboardModuleComponent