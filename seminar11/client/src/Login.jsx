import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState('');

    const navigate = useNavigate();

    // console.log(process.env.REACT_API)

    const updateFormState = (key, value) => {
        setFormState(() => {
            const newState = {
                ...formState,
                [key]: value
            }

            setFormState(newState);
        })
    }

    const fetchLogin = async () => {
        if (formState.username.length === 0 || formState.password.length === 0) {
            setError('Empty username or password');
            return;
        }

        if(error.length > 0) {
            setError('');
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        }

        const result = await fetch(`${import.meta.env.VITE_API}/auth/login`, options);
        const json = await result.json();

        if (!json.success) {
            setError(json.message);
        } else {
            localStorage.setItem('token', json.data.token);
            navigate('/');
        }
    }

    return <div>
        <label htmlFor="username">Username</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Username"
            onChange={(e) => updateFormState('username', e.target.value)}
        /><br/><br/>

        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="password"
            onChange={(e) => updateFormState('password', e.target.value)}
        /><br/><br/>

        <button onClick={fetchLogin}>Login</button>
        <br/><br/>
        {error.length > 0 && <span style={{ color: "red"}}>{error}</span>}
    </div>
}

export default Login;