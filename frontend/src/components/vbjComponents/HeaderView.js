import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return(
        <Jumbotron className="jumbotron">
            
                <div className="row row-header">
                    <div className="col-12 col-sm-1">
                        <img src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-us.s3.amazonaws.com%2Fd95af3ac-7448-11ea-90ce-5fb6c07a27f2?fit=scale-down&source=next&width=700" width="40px" height="40px" alt="heros" ></img>    
                    </div>
                    <div className="col-12 col-sm-10">    
                        <h1>Welcome</h1>
                        <p></p>
                    </div>
                </div>
           
        </Jumbotron>
    )
}

export default Header;