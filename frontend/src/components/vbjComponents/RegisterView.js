import React, { Component } from 'react';
import { AvForm, AvField, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { FormGroup, Button } from 'reactstrap';

class RegisterView extends Component{

	constructor(props) {
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }	

    handleSubmit() {

    }

	render(){
		return(
			<div>
				<div className="row">
                    <div className="col-12 col-sm-6">
                        <img className="myImage" src="https://cdn.pixabay.com/photo/2020/03/31/14/04/covid-19-4987797__340.jpg" width="600px" height="800px" alt="img"></img>
                    </div>

                    <div className="col-12 col-sm-6">
	                    <div className="reg">
							<h3 id="regh3">REGISTER ..!!</h3>
							<AvForm onSubmit={this.handleSubmit}>
								<AvField className="reginput" name="idname" id="idname" label="Name" type="text" innerRef={(input)=> this.idname=input } errorMessage="Name Required ..!!" required ></AvField>
								<AvField className="reginput" name="address" id="address" label="Address" type="text" innerRef={(input)=> this.address=input } errorMessage="Address Required ..!!" required ></AvField>
								
								<AvField className="reginput" name="pincode" id="pincode" label="Pincode" type="text" innerRef={(input)=> this.pincode=input } errorMessage="Pincode Required ..!!" validate={{ number: true, required: true}} ></AvField>
								<AvField className="reginput" name="dob" id="dob" label="Date of Birth" type="date" innerRef={(input)=> this.dob=input } errorMessage="Date of Birth Required ..!!" required ></AvField>
								
								<AvRadioGroup className="reginput" name="gender" label="Gender" required errorMessage="Pick one ..!!">
						            <AvRadio className="genopt" customInput label="Male" value="male" />
						            <AvRadio className="genopt" customInput label="Female" value="female" />						        
						        </AvRadioGroup>						        

						        <FormGroup id="regbut">
						            <Button style={{fontSize : '18px'}} color="danger" outline="none" ><i class="fa fa-user-circle-o" aria-hidden="true" style={{marginRight: '7px'}} ></i>Register</Button>
						        </FormGroup>
						    </AvForm>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterView;