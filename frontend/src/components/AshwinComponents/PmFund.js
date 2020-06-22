import React, { Component } from 'react';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { FormGroup, Button } from 'reactstrap';
import Header from '../vbjComponents/HeaderView';
import * as ROUTES from '../../constants/routes';
import {Redirect} from 'react-router-dom';

class PmFund extends Component{
	constructor(props) {
        super(props);
		
		this.handleSubmit = this.handleSubmit.bind(this);
	
		this.state = {
			flag: false
		};
    }	

    handleSubmit() {		
			this.setState({
				flag: true
			})
		
    }

    render(){
		if(this.state.flag){
			window.alert("Thanks for Your Help ..!!")
			return <Redirect to={ROUTES.DASHBOARD} />
		}

		return(
            <div id="scroll">
            	<Header name="Covid 19 Fund" />
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="myImage" src="https://ak.picdn.net/shutterstock/videos/28458976/thumb/10.jpg?ip=x480" width="600px" height="530px" alt="img"></img>
                    </div>

                    <div className="col-12 col-sm-6">
	                    <div className="fund">
		                    <h2 style={{textAlign: "center", marginBottom: '40px'}}>Make Your Contribution</h2>
		                    <AvForm className="margin" onSubmit={this.handleSubmit}>
		                        <AvField className="fundinput" name="pmname" id="pmname" label="Name" type="text" innerRef={(input)=> this.pmname=input } errorMessage="Name Required ..!!" required ></AvField>
								<AvField className="fundinput" name="amount" id="amount" label="Amount" type="text" innerRef={(input)=> this.amount=input } errorMessage="Enter Amount ..!!" validate={{ number: true, required: true}} ></AvField>
		                        
		                        <p style={{marginTop: '20px', fontSize: '18px'}} >Feedback</p>
		                        <AvInput type="textarea" name="notes" id="notes" placeholder="Your Feedback ..."/>
		                        
								<FormGroup className="butpm">
								    <Button style={{fontSize : '17px'}} color="danger" outline="none" ><i class='fas fa-money-check-alt' style={{marginRight: '7px'}} ></i>Donate</Button>
								</FormGroup>

		                    </AvForm>
		               </div>
            		</div>
            	</div>
            </div>
        )
	}
}


export default PmFund;