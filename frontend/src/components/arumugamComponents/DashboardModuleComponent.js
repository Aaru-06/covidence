import React,{Component} from "react"

class DashboardModuleComponent extends Component{

    constructor(){
        super()
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event){
        window.alert(this.props.name+" is clicked .. \\testing purpose")
    }
    render(){
        // console.log("modules rendered")
        return(
            <div className="moduleComponent" name={this.props.name} onClick={this.clickHandler}>
                {this.props.name}
            </div>
        )
    }
}

export default DashboardModuleComponent