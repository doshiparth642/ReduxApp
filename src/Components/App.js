import React from "react";
import './App.css'
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ProductDetail from "./ProductDetail";
import ProductListing from "./ProductListing";
import Form from "./Form";
import {add, sub, mul, div} from './Calcultor'
import ClassForm from "./ClassForm";
import Search from "./Search";

function App() {
    return (
        <div className="App">
        <Router>
                <Header />
                <Switch>
                    <Route path='/' component={ProductListing} exact />
                    <Route path='/product/:productId'  component={ProductDetail} />
                    <Route path='/search' component={Search}  />
                    <Redirect to='/' />

                </Switch>
    </Router>
   {/* <Form />

    <ClassForm />*/}
    
        </div>
    )
}

export default App