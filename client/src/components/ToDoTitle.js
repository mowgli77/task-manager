import React from 'react';

const ToDoTitle = ({isAuth, isNamesSorted, isEmailSorted, isToDoSorted, getSortNamesABCThunk, currentPage, getSortNamesXYZThunk, getSortEmailABCThunk,
                       getSortEmailXYZThunk, getSortTodosABCThunk, getSortTodosXYZThunk}) => {

    const sortNames = () => {
        if (!isNamesSorted) {
            getSortNamesABCThunk(currentPage-1)
        } else if (isNamesSorted === 1) {
            getSortNamesXYZThunk(currentPage-1)
        }
    }
    const sortEmails = () => {
        if (!isEmailSorted) {
            getSortEmailABCThunk(currentPage-1)
        } else if (isEmailSorted === 1) {
            getSortEmailXYZThunk(currentPage-1)
        }
    }
    const sortToDos = () => {
        if (!isToDoSorted) {
            getSortTodosABCThunk(currentPage-1)
        } else if (isToDoSorted === 1) {
            getSortTodosXYZThunk(currentPage-1)
        }
    }

    return (
        <tr>
            <th scope="col" className={"align-middle "}><button onClick={sortNames} type={"button"} className={"btn btn-dark"}>Name
                {isNamesSorted === 0 ? <i className="large material-icons">expand_more</i> : isNamesSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" className={"align-middle "}><button onClick={sortEmails} type={"button"} className={"btn btn-dark"}>Email
                {isEmailSorted === 0 ? <i className="large material-icons">expand_more</i> : isEmailSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" width={400} className={"align-middle "}><button onClick={sortToDos} type={"button"} className={"btn btn-dark"}>ToDo Description
                {isToDoSorted === 0 ? <i className="large material-icons">expand_more</i> : isToDoSorted === 1 ? <i className="large material-icons">expand_less</i> : null }
            </button></th>
            <th scope="col" width={100} className={"align-middle text-center"}>Status</th>
            <th scope="col" width={100} className={"align-middle text-center"}>Changed by Administrator</th>
            {isAuth == true && <th scope="col" width={150} className={"align-middle "}>Delete Todo</th>}
        </tr>
    );
}

export default ToDoTitle