import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "./common/FormControl";
import {required} from "./common/validators"

const AutorizationForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input} name={'login'} label={'Your login'} validate={[required]}/>
        </div>
        <div>
            <Field component={Input} name={'password'} label={'Your password'} validate={[required]}
                   type={'password'}/>
        </div>
        <div>
            <button type="submit" className={"btn btn-dark"}>Login</button>
        </div>
    </form>
}

export default reduxForm({form: 'autorization'})(AutorizationForm)