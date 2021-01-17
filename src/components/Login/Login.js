import React from 'react';
import './Login.css';
import { Col, Container, Image, Row} from "react-bootstrap";
import loginImage from "../../media/images/login.svg";

const Login = () => {
    return (
        <Container fluid>
        <Row className="user__login">
          <Col className="image__part d-none d-md-flex ">
              <Container fluid className="m-auto d-flex text-center">
                  <Container fluid>
                      <h1 className="mb-4" style={{color:"#6C63FF", fontSize:"2.4rem"}}>Welcome to Amar Teacher</h1>
                  <Image src={loginImage} alt="login_image" className="m-auto" fluid style={{width:'50%'}} /> 
                  </Container>  
              </Container>
          </Col>
          <Col className="d-flex">
          <form action="" className="m-auto login__form">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="submit" value="Login"></input>
            </form>  
          </Col>
        </Row>
      </Container>
    );
};

export default Login;