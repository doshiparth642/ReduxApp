import React, { useState, useEffect } from "react";
//import './Form.css';

const Form = () => {

    const initialValues = { username: '', email: '', password: '' };
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formError).length == 0){
            setIsSubmit(true)
            console.log(formValues) 
        }
        setFormError(validation(formValues));
        setFormValues(initialValues)

    }

    /*useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formError])*/

    const validation = (values) => {
        const error = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            error.username = "username is required"
        }
        if (!values.email) {
            error.email = "email is required"
        } else if (!regex.test(values.email)) {
            error.email = "this email is not valid format"
        }
        if (!values.password) {
            error.password = "password is required"
        } else if (values.password.length < 4) {
            error.password = "password is more then 4 characters required"
        } else if (values.password.length > 10) {
            error.password = "password is less then 10 characters required"
        }
        return error
    }
    return (
        <div className="container">
            {Object.keys(formError).length == 0 && isSubmit ? (<div className="ui message success">Signed in Successful</div>) : (
                <div>
                    <pre>{JSON.stringify(formValues, null, 2)}</pre>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color: 'red'}}>{formError.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color: 'red'}}>{formError.email}</p>

                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p style={{color: 'red'}}>{formError.password}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Form