import React, {Component} from 'react';
import Header from '../vbjComponents/HeaderView';
import { Card, CardText } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

const RenderStats = (props) => {
	if(props.data !== undefined && props.data !== null){		
		return(			
			Object.keys(props.data.districtData).map((dist) => {
				return(
					<Card className="cards">
		                <strong><CardText className="title">{dist}</CardText></strong>		                
		                <hr id="hrcard" />
		                <div className="row">
		                <CardText className="textl" style={{color : 'orange'}} >{props.data.districtData[dist].confirmed} Cases</CardText>
		                <CardText className="textr" style={{color : 'blue'}} >{props.data.districtData[dist].active} Active</CardText>
	                	</div>
		                <div className="row">
		                <CardText className="textl" style={{color : '#00ba07'}} >{props.data.districtData[dist].recovered} Recovered</CardText> 
		                <CardText className="textr" style={{color : 'red'}} >{props.data.districtData[dist].deceased} Deaths</CardText>		                             
	                	</div>
		            </Card>    					
				);
			})
		);
	}

	else{
		return(
			<div></div>
		)
	}
}


class Stats extends Component{

	constructor(props) {
        super(props);	
	
		this.state = {
			data: [],
			values: ''
		};

		this.handleChange = this.handleChange.bind(this);

    }

    async componentDidMount(){
		const api = "https://api.covid19india.org/state_district_wise.json";
		const res = await fetch(api);
		this.state.data = await res.json();	
		console.log(this.state.data);	
	}

    handleChange(e){
    	this.setState({values : e.target.value} , () =>{ 
    	console.log(this.state.values);
    	console.log(this.state.data[this.state.values]);
    	console.log(Object.keys(this.state.data[this.state.values].districtData));  
    	});
    }

		    

	render(){
		return(
			<div className="statpage">
				<Header name="Statistics" />
				<AvForm className="margin">
                    <AvField type="select" value={this.state.values} onChange={this.handleChange} name="sname" id="sname">
                        <option value="" disabled selected>...</option>
                        <option>Andaman and Nicobar Islands</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                        <option>Bihar</option>
                        <option>Chandigarh</option>
                        <option>Chhattisgarh</option>
                        <option>Delhi</option>
                        <option>Goa</option>
                        <option>Gujarat</option>
                        <option>Haryana</option>
                        <option>Himachal Pradesh</option>
                        <option>Jammu and Kashmir</option>
                        <option>Jharkhand</option>
                        <option>Karnataka</option>
                        <option>Kerala</option>
                        <option>Ladakh</option>
                        <option>Lakshadweep</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Manipur</option>
                        <option>Meghalaya</option>
                        <option>Mizoram</option>
                        <option>Nagaland</option>
                        <option>Odisha</option>
                        <option>Puducherry</option>
                        <option>Punjab</option>
                        <option>Rajasthan</option>
                        <option>Sikkim</option>
                        <option>Tamil Nadu</option>
                        <option>Telengana</option>
                        <option>Tripura</option>
                        <option>Uttar Pradesh</option>
                        <option>Uttarakhand</option>
                        <option>West Bengal</option>
                    </AvField>
                </AvForm>
				<div className="row">
					<RenderStats data = {this.state.data[this.state.values]} />
				</div>
			</div>
		)
	}

}

export default Stats;