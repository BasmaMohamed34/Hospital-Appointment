import { Component } from "react";
import { Link} from "react-router-dom";
 
class Signup extends Component{
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
            <h3 className="text-success pb-3">Sign Up</h3>
            <form>
                <input type="text"  placeholder="Username" className="form-control w-50 m-auto text-center" onChange={(e)=>
                        this.setState({username:e.target.value})
                    }/><br/>
                <input type="email" placeholder="Email" className="form-control w-50 m-auto text-center"/><br/>
                <input type="number" placeholder="Age" className="form-control w-50 m-auto text-center" min="18"/><br/>
                <input type="password" placeholder="Password" className="form-control w-50 m-auto text-center" onChange={(e)=>{
                    this.setState({password:e.target.value})
                }}/><br/>
                <Link to="/"><button className="btn btn-success w-50">Signup</button></Link> 
                <br/>
                <p>Already have account, <Link to="/login">Login</Link></p>
            </form>
            </div>
        )
    }
}

export default Signup;