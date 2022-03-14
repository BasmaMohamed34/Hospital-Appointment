import { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
// import Book from "./book";

export default class DoctorsList extends Component{
    constructor(){
        super()
        this.state={
            doctorsData:[],
             url:"http://localhost:3001/doctor"
        }
    }
    componentDidMount(){
        fetch(this.state.url)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            this.setState({doctorsData:data})
        })
    }
    renderDoctorsList(list){
        return(
            list.map(data=>{
                return(
                    <div key={data.id} className="card col-12 col-md-4 text-center p-2 pt-4 col-lg-3 h-50 shadow m-1">
                        <img className="card-img-top w-25 m-auto mb-2 rounded-circle" height="80px" src={data.picture} alt=""/>
                        
                        {this.props.user.username === "admin" ?

                        <div className="btn-group dropdown w-25 d-inline" style={{marginTop:"-100px",marginBottom:"60px"}}>
                            <button type="button" className=" btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu">
                                <li onClick={()=>{
                                    fetch(this.state.url+"/"+data.id,{method:"DELETE"})
                                    .then(res=>{console.log(res);this.render()})
                                }} style={{cursor:"pointer"}}>Delete</li>
                            </ul>
                        </div>
                        : ""
                         }
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <h5 className="card-title text-danger">{data.specialization}</h5>
                            <p className="card-text" style={{fontSize:"12px"}}>{data.experience}</p>
                            <Link to="/book"><button className="btn btn-primary">Book</button></Link>
                            
                        </div>
                    </div>
                )
            })
        )
    }
    
    render(){
        return(
            <div className="bg-light">
                <nav className="navbar navbar-dark p-2 bg-dark">
                    <h3 className="navbar-brand">Hospital Appointment</h3>
                        {this.props.user.username?
                            <div className="d-flex">
                            <h6 className="text-light">Welcome {this.props.user.username}</h6>
                            <img src="user.png" alt="" className="rounded-circle" width="30px"/>
                            </div>
                            :
                            <div>
                                <Link to="/login" style={{marginRight:"10px",textDecoration:"none"}}>Login</Link>
                                <Link to="/signup" style={{textDecoration:"none"}}>SignUp</Link>
                            </div>
                        }
                </nav>
                <div style={{ backgroundImage: "url(/header.jpg)",backgroundPosition:"center",backgroundSize:"cover",height:"400px"}}>
                    
                </div>
                <h3 className="text-center p-5">Available Doctors</h3>
                <div className="row d-flex justify-content-around">
                    {this.renderDoctorsList(this.state.doctorsData)}
                </div>
                <Footer/>
            </div>
        )
    }
}