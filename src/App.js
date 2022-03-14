import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "jquery/dist/jquery";
import "@popperjs/core/dist/cjs/popper"
import Login from './components/login';
import Signup from './components/signup';
import DoctorsList from './components/doctorsList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Book from './components/book';
import { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state={
      user:{}
    }
  }
  handleUserData=userData=>{
    console.log(userData)
    this.setState({user:userData});
    console.log("data changed")
  }
  render(){
      return (
        <Router>
          <Routes>
            <Route path='/' exact element={<DoctorsList user={this.state.user}/>}/>
            <Route path='/login' exact  element={<Login userData={this.handleUserData}/>}/>
            <Route path='/signup' exact element={<Signup userData={this.handleUserData}/>}/>
            <Route path='/book' exact element={<Book user={this.state.user} style={{ backgroundImage: "url(/bookBG.jpg)" }}/>}/>
          </Routes>
        </Router>
  );
}
}

export default App;
