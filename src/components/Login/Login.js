import Form from 'react-bootstrap/Form';
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useState } from 'react';
import UserPool from "../../UserPool";
import classes from './Login.module.css';
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const user = new CognitoUser({
            Username: username,
            Pool: UserPool
        });
        const authDetails = new AuthenticationDetails({
            Username: username,
            Password: password
        });
        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log("onSuccess:", data);
            },

            onFailure: err => {
                console.error("onFailure:", err);
            },

            newPasswordRequired: data => {
                console.log("newPasswordRequired:", data);
            }
        });

    };
    return (
        <Container fluid >
            <Row>
                <Col xs={6} className={classes.form_container}>
                    <Form onSubmit={onSubmit} className={classes.form}>
                        <div className={classes.form_content}>
                            <h3 className={classes.form_title}>Log In</h3>
                            <div className="form-group mt-3">
                                <label className={classes.label}>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                    autoFocus value={username} onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="d-grid mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                </Col>
                <Col xs={6} className={classes.side_sec}>
                    <div >
                        <div >

                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
        // <div className="row">
        //     <div className='col-6'>

        //     </div>

        // </div>

    )

}

export default Login;