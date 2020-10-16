import React from 'react';
import {connect} from "react-redux";
import {addNewToDoThunk, getToDosThunk} from "../redux/actions";
import AddToDoForm from "./AddToDoForm";


const AddToDo = ({addNewToDoThunk, newToDo, alert, getToDosThunk}) => {

    const addNewToDo = (values) => {
        if (values.name.trim().length > 0 && values.email.trim().length > 0 && values.todo.trim().length > 0) {
            const reqBody = {
                id: Date.now(),
                name: values.name,
                email: values.email,
                todo: values.todo,
                status: 0,
                changed: 0
            }
            addNewToDoThunk(reqBody)
            getToDosThunk()
            newToDo.values.name = newToDo.values.email = newToDo.values.todo = ''
        }
    }
    return (
        <div className={"mt-5"}>
            {alert && <div className="alert alert-success" role="alert">
                    {alert}
                </div>}
            <AddToDoForm onSubmit={addNewToDo}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.toDoDatas.todos,
    alert: state.toDoDatas.alert,
    newToDo: state.form.newToDo,
})
export default connect(mapStateToProps, {addNewToDoThunk, getToDosThunk})(AddToDo)
