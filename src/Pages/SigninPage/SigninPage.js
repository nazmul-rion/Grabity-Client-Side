import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../Context/Authentication/useAuth';

const SigninPage = () => {

    const { signInWithGoogle, signInUser, error } = useAuth();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [validated, setValidated] = useState(false);

    const handleEmailChange = e => {
        setEmail(e.target.value);
        setValidated(true);
    }

    const handlePassChange = e => {
        setPass(e.target.value);
        setValidated(true);
    }

    const signinWithEmailPasswordHandler = e => {
        e.preventDefault();
        if (email !== '' && pass !== '') {
            signInUser(email, pass);
        }
    }
    return (
        <div>
            <div className='container'>
                <h2 className='text-center'>Log In To Grabity</h2>
                <hr />

                <div>
                    <button >Login with Facebook</button>
                    <button onClick={signInWithGoogle}>Login with Google</button>
                    <button>Login with Twitter</button>
                </div>

                <div className="container">
                    <div className='d-flex justify-content-between align-items-center'>
                        <hr className='orhr' />
                        <span className='px-2'>OR</span>
                        <hr className='orhr' />
                    </div>
                </div>

                <Form validated={validated} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fw-bold">Email address:</Form.Label>
                        <Form.Control
                            onBlur={handleEmailChange}
                            type="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fw-bold">Password:</Form.Label>
                        <Form.Control
                            onBlur={handlePassChange}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me?" />
                    </Form.Group>

                    {
                        error !== '' ? (<p className="text-danger"> {error}</p>) : (<></>)
                    }

                    <Button onClick={signinWithEmailPasswordHandler} className="custom-button" type="submit">
                        Login
                    </Button>
                    <p className="text-center pt-3 m-0">
                        dont have an account? <Link to="/signup">Register Now</Link>
                    </p>
                </Form>



            </div>
        </div>
    )
}

export default SigninPage