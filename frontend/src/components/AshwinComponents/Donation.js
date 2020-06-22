import React, { Component } from 'react';
import { AvForm, AvField, AvInput, AvCheckbox,AvCheckboxGroup } from 'availity-reactstrap-validation';
import { FormGroup, Button, Label } from 'reactstrap';
import firebase from '../../config/firebase';
import Header from '../vbjComponents/HeaderView';
import * as ROUTES from '../../constants/routes';
import {Redirect, Link} from 'react-router-dom';
import HelpCarousel from './HelpCarousel';

class Donation extends Component{
	constructor(props) {
        super(props);

        this.handleCheck = this.handleCheck.bind(this);		
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handletext = this.handletext.bind(this);
	
		this.state = {
			food: false,
			cloth: false,
			flag: false,
			others: false,
			text: ''
		};
    }	

    handleCheck = (event) => {
	   let name = event.target.name
	   this.setState({[name]: !this.state[name]})
	}

	handletext(event) {
	    this.setState({text: event.target.value})
	  }

    handleSubmit(event,errors,values) {
		event.preventDefault();
		let ref = firebase.database().ref();
		this.setState({errors,values})

		if(errors.length === 0){

			let data = ''
			if(this.state.food)
				data = data + 'Food '
			if(this.state.cloth)
				data = data + 'Cloths '
			if(this.state.others)
				data = data + this.state.text

			console.log(data)
			
			ref.child('Donations').push({ data })
			this.setState({
				flag: true
			})
		}
		else{
			console.log(errors);
			
		}
    }

    render(){
		if(this.state.flag){
			window.alert("Thanks for Your Donation ..!!")
			return <Redirect to={ROUTES.DASHBOARD} />
		}

		return(
            <div id="scroll">
            	<Header name="Donations" />
            	<HelpCarousel />
                    <div className="container donc">
	                    <h2 style={{textAlign: "center", marginBottom: '40px'}}>Donation Forum</h2>	                    
	                    <AvForm className="margin" onSubmit={this.handleSubmit}>
	                    	<div>
  			              	<AvCheckboxGroup inline required id="doncheck" errorMessage="Pick one ..!!" name="doncheck" validate={{min: {value: 1}}}>
	                        <AvCheckbox className="cbox" type="checkbox" label="Food" name="food" onChange={this.handleCheck} checked={this.state.food}/>
	                        <AvCheckbox className="cbox" type="checkbox" label="Clothing" name="cloth" onChange={this.handleCheck} checked={this.state.cloth} />
	                        <AvCheckbox className="cbox" type="checkbox" label="Extras" name="others" onChange={this.handleCheck} checked={this.state.others} />
	                        </AvCheckboxGroup>			            
       	                    </div>

	                        <AvInput type="textarea" name="otherdonate" id="notes" value={this.state.text} onChange={this.handletext} placeholder="Your Donation ..." disabled={!this.state.others} />
	                        
	                        <FormGroup className="butdon">
							    <Button type="submit" style={{fontSize : '17px', marginBottom: '40px'}} color="danger" outline="none" ><i class='far fa-handshake' style={{marginRight: '7px'}}></i>Donate</Button>	
							    <Link to={ROUTES.PM_FUND}>
    							<Button style={{fontSize : '17px', float: 'right', marginBottom: '40px'}} color="danger" outline="none" ><i class='fas fa-money-check-alt' style={{marginRight: '7px'}} ></i>Covid Fund</Button>					    					    
								</Link>
							</FormGroup>
	                    </AvForm>
	               </div>
            </div>
        )
	}
}

export default Donation;