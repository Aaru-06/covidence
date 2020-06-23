import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = props => {
    return(
        <Jumbotron className="jumbotron">
            
                <div className="row row-header">
                    <div className="col-12 col-sm-1">
                        <img src="https://www.freshapproach.org/wp-content/uploads/2020/03/coronavirus.jpg" width="100px" height="60px" alt="heros" style={{borderRadius: '30px'}} ></img>    
                    </div>
                    <div className="col-12 col-sm-10">    
                        <h1 id="h1" style={{marginLeft: '50px', marginTop: '10px'}} >{props.name}</h1>
                        <p></p>
                    </div>
                </div>
           
        </Jumbotron>
    )
}

export default Header;