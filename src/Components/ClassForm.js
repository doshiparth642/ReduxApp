import React from "react";


class ClassForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            errors: {},
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formValidation = ()=>{
        const {userName, password} = this.state;
      let  isValid = true
        const errors = {};
        if(userName.length == 0){
            errors.userName = 'Username is required';
            isValid =false
        }
        if(password.trim().length == 0){
            errors.password = 'Password must be required';
            isValid =false
        }
        if(password.trim().length < 8){
            errors.password= 'Password must be 8 charactars required';
            isValid =false
        }
      this.setState({errors: errors})
        return isValid
 //return errors
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const isvalid = this.formValidation()
         if(isvalid === true){
            console.log(this.state)
            this.setState({
                userName: '',
                password : ''
            })
        }

    
    }

    render() {

        const { userName, password, errors } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>userName</label>
                    <input type='text' name='userName' placeholder="Enter Name" value={userName} onChange={this.handleChange} />
                   <p>{errors.userName}</p>
                    <br/>
                    <label>Password</label>
                    <input type='password' name='password' placeholder="Enter Password" value={password} onChange={this.handleChange} />
                   <p>{errors.password}</p>
                   <br/>
                   <button type="submit">Login</button>
                  {/* {Object.keys(errors).map((key)=>{
                       return <div key={key}>{errors[key]}</div>
                   })} */}
                </form>
            </div>
        )
    }
}

export default ClassForm