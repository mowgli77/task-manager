import React from 'react';
import {connect} from "react-redux";
import AutorizationForm from "./AutorizationForm";
import {loginThunk, showAlert} from "../redux/actions";
import Redirect from "react-router-dom/es/Redirect";


const Autorization = ({autorization, alert, loginThunk, isAuth, showAlert}) => {

    const loginning = (values) => {
        console.log(values)
        if (values.login.trim().length > 0 && values.password.trim().length > 0) {
            const reqBody = {
                login: values.login,
                password: values.password
            }
            loginThunk(reqBody)
            autorization.values.login = autorization.values.password = ''
        } else {
            showAlert('The fields are empty')
        }
    }
    return (
        <>
            {isAuth == true && <Redirect to={'/'}/>}
            {alert && <div className="alert alert-danger mt-3" role="alert">
                {alert}
            </div>}
            <div className={"d-flex justify-content-center mt-5"}>
                <AutorizationForm onSubmit={loginning}/>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    alert: state.toDoDatas.alert,
    autorization: state.form.autorization,
    isAuth: state.toDoDatas.isAuth
})
export default connect(mapStateToProps, {loginThunk, showAlert})(Autorization)
