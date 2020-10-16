import React, {useEffect} from 'react';
import {connect} from "react-redux";
import ToDo from "./ToDo";
import {
    adminChangedThunk,
    changeStatusThunk,
    confirmAuthThunk,
    deleteToDoThunk,
    getSortEmailABCThunk,
    getSortEmailXYZThunk,
    getSortNamesABCThunk,
    getSortNamesXYZThunk,
    getSortTodosABCThunk,
    getSortTodosXYZThunk,
    getToDosCountThunk,
    getToDosThunk,
    setCurrentPage,
    showAlert
} from "../redux/actions";
import ToDoTitle from "./ToDoTitle";
import Pagination from "./Pagination";


const ToDoList = ({todos, getToDosThunk, deleteToDoThunk, getToDosCountThunk, pageSize, toDosCount, isAuth, showAlert, currentPage, setCurrentPage, alert, changeStatusThunk, adminChangedThunk,
                      isNamesSorted, isEmailSorted, isToDoSorted, getSortNamesABCThunk, getSortNamesXYZThunk, getSortEmailABCThunk, getSortEmailXYZThunk,
                      getSortTodosABCThunk, getSortTodosXYZThunk
                  }) => {

    useEffect(() => {
        getToDosThunk(currentPage - 1)
        getToDosCountThunk()
    }, [currentPage])

    const onChangedPage = (page) => {
        getToDosThunk(page)
    }

    return (
        <div>
            {alert && <div className="alert alert-danger mt-5 mb-n4" role="alert">
                {alert}
            </div>}
            <table className="table table-striped align-middle table-hover mt-5 mb-5 ">
                <thead className={"thead-dark"}>
                <ToDoTitle isAuth={isAuth}
                           isNamesSorted={isNamesSorted}
                           isEmailSorted={isEmailSorted}
                           isToDoSorted={isToDoSorted}
                           getSortNamesABCThunk={getSortNamesABCThunk}
                           currentPage={currentPage}
                           getSortNamesXYZThunk={getSortNamesXYZThunk}
                           getSortEmailABCThunk={getSortEmailABCThunk}
                           getSortEmailXYZThunk={getSortEmailXYZThunk}
                           getSortTodosABCThunk={getSortTodosABCThunk}
                           getSortTodosXYZThunk={getSortTodosXYZThunk}
                />
                </thead>
                <tbody>
                {todos.map(t => <ToDo todoItem={t}
                                          key={t.id}
                                          deleteToDoThunk={deleteToDoThunk}
                                          changeStatusThunk={changeStatusThunk}
                                          adminChangedThunk={adminChangedThunk}
                                          isAuth={isAuth}
                                          showAlert={showAlert}
                />)}
                </tbody>
            </table>
            {todos.length == 0 && <h1 style={{textAlign: 'center'}}>You don`t have tasks</h1>}
            <Pagination toDosCount={toDosCount}
                        pageSize={pageSize}
                        onChangedPage={onChangedPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    todos: state.toDoDatas.todos,
    toDosCount: state.toDoDatas.toDosCount,
    pageSize: state.toDoDatas.pageSize,
    alert: state.toDoDatas.alert,
    auth: state.toDoDatas.auth,
    isAuth: state.toDoDatas.isAuth,
    currentPage: state.toDoDatas.currentPage,
    isNamesSorted: state.toDoDatas.isNamesSorted,
    isEmailSorted: state.toDoDatas.isEmailSorted,
    isToDoSorted: state.toDoDatas.isToDoSorted
})
export default connect(mapStateToProps, {getToDosThunk,
    deleteToDoThunk,
    getToDosCountThunk,
    confirmAuthThunk,
    changeStatusThunk,
    adminChangedThunk,
    showAlert,
    setCurrentPage,
    getSortNamesABCThunk,
    getSortNamesXYZThunk,
    getSortEmailABCThunk,
    getSortEmailXYZThunk,
    getSortTodosABCThunk,
    getSortTodosXYZThunk
})(ToDoList)
