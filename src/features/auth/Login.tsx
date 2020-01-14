import React from 'react';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <h3>Login</h3>
            <form>
                <input type="text" placeholder="Email..."/>
                <input type="password" placeholder="Password.."/>
                <button>Sign In</button>
            </form>
            <Link to="/register">Don't have an account?</Link>
        </>
    );
};

export default Login;
