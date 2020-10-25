import React from 'react'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {confirmAuthThunk, isAuthAction} from "../redux/actions";


const Header = ({isAuth, confirmAuthThunk, isAuthAction}) => {

    const logout = () => {
        confirmAuthThunk(0)
        isAuthAction(0)
    }

    return (
        <nav className="navbar navbar-dark bg-dark view overlay">
            <div className={"container view overlay"}>
                <div>
                    <button type="button" class="btn btn-dark">
                        <NavLink exact to={'/tasks'} className="navbar-brand">
                            Home
                        </NavLink>
                    </button>
                    <button type="button" className="btn btn-dark">
                        <NavLink exact to={'/addtask'} className="navbar-brand">
                            Add Task
                        </NavLink>
                    </button>
                </div>
                <div>
                    { isAuth ? <button onClick={logout} type="button" className="btn btn-light">Logout</button>
                        :
                    <NavLink exact to={'/auth'} className="nav-link">
                        <button type="button" className="btn btn-light">Loginning</button>
                    </NavLink> }
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.toDoDatas.isAuth
})

export default connect(mapStateToProps, {confirmAuthThunk, isAuthAction})(Header)
