import React, {useEffect} from 'react';
import './App.css';
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import {Route, Switch, Redirect} from "react-router-dom";
import Autorization from "./components/Autorization";
import {connect} from "react-redux";
import {getAuthThunk} from "./redux/actions";

function App({getAuthThunk}) {

    useEffect(() => {
        getAuthThunk()
    }, [])
    return (
        <>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path={'/'}
                           render={() => <ToDoList/>}/>
                    <Route exact path={'/addtask'}
                           render={() => <AddToDo/>}/>
                    <Route exact path={'/auth'}
                           render={() => <Autorization/>}/>
                </Switch>
            </div>
        </>
    );
}

export default connect(null, {getAuthThunk})(App)
