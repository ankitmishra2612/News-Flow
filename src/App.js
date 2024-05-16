import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; // import all this properly as in new version switch is not used 
import LoadingBar from 'react-top-loading-bar'


// alt + shift + cursor sa multi select ho ja aa ga 
export default class App extends Component {
  pageSize= 5 // variable render k bhar declare kra ga 
  apiKey=process.env.REACT_APP_NEWS // Environmental Variable used to hide API Key 
   //  process.env.(then name of the variable Capital letter which is on .env.local)
  state ={
    progress : 0
  }

  setprogress = (progress)=>{
    this.setState({progress,progress})
  }
  render() {
    return (
      <div>
        <Router>
              <Navbar/>
             {/* <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            /> */}
              <Routes>
              <Route exact path="/" element={<News setprogress={this.setprogress} apiKey={this.apiKey} pageSize={this.pageSize} country={"in"}/>}></Route>
              <Route exact path="/business" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={"in"} category={"business"}/>}></Route>
              <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}></Route>
              <Route exact path="/general" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={"in"} category={"general"}/>}></Route>
              <Route exact path="/health" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={"in"} category={"health"}/>}></Route>
              <Route exact path="/science" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={"in"} category={"science"}/>}></Route>
              <Route exact path="/sports" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={"in"} category={"sports"}/>}></Route>
              <Route exact path="/technology" element={<News setprogress={this.setprogress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={"in"} category={"technology"}/>}></Route>
              </Routes>
        </Router>
      </div>
    )
  }
}
//The Router component is the root component that wraps your entire application and provides the routing context.
//React Router provides different types of routers such as BrowserRouter, HashRouter, MemoryRouter, etc. 
//Each type of router has its own way of managing the URL and history.
//The Routes component is used to define the routing configuration for your application.
//Inside the Routes component, you specify the paths and the components that should be rendered when those paths match the current URL.
// rcc type krna sa aa ja aa ga react based component class 
// react m kam code likhna pdta h as compare to vanilla javascript har component ko alg alg likh skta h  
