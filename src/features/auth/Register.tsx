import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <>
            <h3>Register</h3>
            <form>
                <input type="text" placeholder="Name..."/>
                <input type="text" placeholder="Email..."/>
                <input type="password" placeholder="Password.."/>
                <button>Register</button>
            </form>
            <Link to="/login">Or sign in with your email</Link>
        </>
    );
};

export default Register;
