import React, {useState} from 'react';


const ToDo = ({todoItem, deleteToDoThunk, changeStatusThunk, adminChangedThunk, isAuth, showAlert}) => {

    const [reductMode, setReductMode] = useState(false)
    const [inputValue, setInputValue] = useState(todoItem.todo)

    const changeStatus = () => {
        const s = todoItem.status === 1 ? 0 : 1
        changeStatusThunk(s, todoItem.id)
    }
    const changeInputValue = (e) => {
        setInputValue(e.currentTarget.value)
    }
    const saveAdminChanges = () => {
        if (todoItem.todo !== inputValue) {
            adminChangedThunk(todoItem.id, inputValue, 1)
            setReductMode(false)
        } else {
            showAlert('There are no any changes')
        }
    }
    const deleteTodo = () => {
        deleteToDoThunk(todoItem.id)
    }


    return (
        <tr>
            <td>{todoItem.name}</td>
            <td>{todoItem.email}</td>
            {!isAuth ? <td>{todoItem.todo}</td>
                :
            <td> {reductMode ? <div><input autoFocus={true} value={inputValue} onChange={changeInputValue}/>
                    <button type={"button"} onClick={saveAdminChanges} className={"btn btn-dark btn-sm mt-n1 ml-2"}>Save</button>
                    <button type={"button"} onClick={() => setReductMode(false)} className={"btn btn-dark btn-sm mt-n1 ml-2"}>Exit</button>
                </div>
                : <span onClick={() => setReductMode(true)} role={"button"}>{todoItem.todo}</span>} </td>}
            {isAuth ? <td className={"text-center"}><input type={'checkbox'} onClick={changeStatus} checked={todoItem.status}/></td>
            : <td className={"text-center"}><input type={'checkbox'} checked={todoItem.status}/></td>}

            <td className={"text-center"}><input type={'checkbox'} checked={todoItem.changed}/>
            </td>
            {isAuth == true && <td>
                <button className={"btn btn-dark"} onClick={deleteTodo}>Delete Todo</button>
            </td>}
        </tr>
    );
}

export default ToDo
