import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "./common/FormControl";
import {maxTextLength, notEmail, required} from "./common/validators";

const length20 = maxTextLength(20)
const length100 = maxTextLength(100)

const AddToDoForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={Input} name={'name'} label={'Your name'} validate={[required, length20]}/>
        </div>
        <div>
            <Field component={Input} name={'email'} label={'Your email'} validate={[required, notEmail]} type={'email'}/>
        </div>
        <div>
            <Field component={Textarea} name={'todo'} label={'Description of new ToDo'} validate={[required, length100]}/>
        </div>
        <div>
            <button type="submit" className={"btn btn-dark"}>Add new ToDo</button>
        </div>
    </form>
}

export default reduxForm({form: 'newToDo'})(AddToDoForm);