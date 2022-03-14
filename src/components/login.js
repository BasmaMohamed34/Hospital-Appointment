import { Component } from "react";
import { Link} from "react-router-dom";
 
class Login extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    componentWillUnmount(){
        this.props.userData(this.state)
    }
    render(){
        return(
            <div className="w-50 m-auto border text-center shadow rounded pt-4 pb-5 mt-5">
                <h3 className="text-primary pb-3">Login</h3>
                <form>
                    <input type="text"  placeholder="Username" required className="form-control w-50 m-auto text-center" onChange={(e)=>{
                        this.setState({username:e.target.value})
                    }}/><br/>
                    <input type="password" placeholder="Password" required className="form-control w-50 m-auto text-center" onChange={(e)=>{
                        this.setState({password:e.target.value})
                    }}/><br/>
                   <Link to="/"><button type="submit" className="btn btn-primary w-50">Login</button></Link> <br/>
                    <p>Have no account, <Link to="/signup" className="text-success">Signup</Link></p>
                </form>
            </div>
        )
    }
}

export default Login;