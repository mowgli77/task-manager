import {
    CHANGE_STATUS,
    GET_AUTH,
    GET_TODOS,
    HIDE_ALERT,
    IS_AUTH,
    SHOW_ALERT,
    SORT_EMAILS_BY_ABC,
    SORT_EMAILS_BY_ZYX,
    SORT_NAMES_BY_ABC,
    SORT_NAMES_BY_ZYX,
    SORT_TODOS_BY_ABC,
    SORT_TODOS_BY_ZYX,
    TODOS_COUNT,
    SET_CURRENT_PAGE
} from "./types";
import {
    addToDoAPI,
    adminChangedAPI,
    changeStatusAPI,
    confirmAuthAPI,
    deleteToDoAPI,
    getAuthAPI,
    getSortEmailABCAPI,
    getSortEmailXYZAPI,
    getSortNamesABCAPI,
    getSortNamesXYZAPI,
    getSortTodosABCAPI,
    getSortTodosXYZAPI,
    getToDoAPI,
    getToDosCountAPI,
    loginAPI
} from "../API/api";

const getToDos = (payload) => ({type: GET_TODOS, payload})
const getAuth = (payload) => ({type: GET_AUTH, payload})
const getToDosCount = (payload) => ({type: TODOS_COUNT, payload})
const changeStatus = (status, id) => ({type: CHANGE_STATUS, status, id})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const isAuthAction = (payload) => ({type: IS_AUTH, payload})
export const sortNamesByABC = () => ({type: SORT_NAMES_BY_ABC})
export const sortEmailsByABC = () => ({type: SORT_EMAILS_BY_ABC})
export const sortToDosByABC = () => ({type: SORT_TODOS_BY_ABC})
export const sortNamesByZYX = () => ({type: SORT_NAMES_BY_ZYX})
export const sortEmailsByZYX = () => ({type: SORT_EMAILS_BY_ZYX})
export const sortToDosByZYX = () => ({type: SORT_TODOS_BY_ZYX})

export const showAlert = (text) => dispatch => {
    dispatch({
        type: SHOW_ALERT,
        payload: text
    })
    setTimeout(() => dispatch({
        type: HIDE_ALERT
    }), 1500)
}

export const getSortNamesABCThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortNamesABCAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortNamesByABC())
}
export const getSortNamesXYZThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortNamesXYZAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortNamesByZYX())
}
export const getSortEmailABCThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortEmailABCAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortEmailsByABC())
}
export const getSortEmailXYZThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortEmailXYZAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortEmailsByZYX())
}
export const getSortTodosABCThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortTodosABCAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortToDosByABC())
}
export const getSortTodosXYZThunk = (page = 0, count = 3) => async (dispatch) => {
    const response = await getSortTodosXYZAPI(page, count)
    dispatch(getToDos(response.data))
    dispatch(sortToDosByZYX())
}
export const getToDosThunk = (page = 0, count = 3) => async (dispatch, getState) => {
    const isNamesSorted = getState().toDoDatas.isNamesSorted
    const isEmailSorted = getState().toDoDatas.isEmailSorted
    const isToDoSorted = getState().toDoDatas.isToDoSorted
    const response = await getToDoAPI(page, count)
    isNamesSorted === 0 ? dispatch(getSortNamesXYZThunk(page)) : isNamesSorted === 1 ? dispatch(getSortNamesABCThunk(page))
        : isEmailSorted === 0 ? dispatch(getSortEmailXYZThunk(page)) : isEmailSorted === 1 ? dispatch(getSortEmailABCThunk(page))
            : isToDoSorted === 0 ? dispatch(getSortTodosXYZThunk(page)) : isToDoSorted === 1 ? dispatch(getSortTodosABCThunk(page))
                : dispatch(getToDos(response.data))
}

export const getToDosCountThunk = () => async (dispatch) => {
    const response = await getToDosCountAPI()
    dispatch(getToDosCount(response.data))
}

export const addNewToDoThunk = (body) => async (dispatch) => {
        const response = await addToDoAPI(body)
        dispatch(showAlert(response.data))
}

export const deleteToDoThunk = (id) => async (dispatch, getState) => {
    const page = getState().toDoDatas.currentPage - 1
    const res = await getAuthAPI()
    if (res.data.auth === 1) {
        const response = await deleteToDoAPI(id)
        dispatch(getToDosThunk(page))
        dispatch(getToDosCountThunk())
        dispatch(showAlert(response.data))
    } else {
        dispatch(showAlert('You are not autorized'))
        dispatch(isAuthAction(0))
    }
}
export const getAuthThunk = (id) => async (dispatch) => {
    const response = await getAuthAPI(id)
    dispatch(isAuthAction(response.data.auth))
}
export const confirmAuthThunk = (authStatus, id = 1) => async (dispatch) => {
    const response = await confirmAuthAPI(authStatus, id)
}

export const loginThunk = (body) => async (dispatch) => {
    const response = await loginAPI(body)
    if (response.data) {
        dispatch(getAuth(response.data))
        dispatch(isAuthAction(1))
        dispatch(confirmAuthThunk(1, response.data.id))
    } else {
        dispatch(showAlert('Invalid login or password!'))
    }
}
export const changeStatusThunk = (status, id) => async (dispatch) => {
    const res = await getAuthAPI()
    if (res.data.auth === 1) {
        const response = await changeStatusAPI(status, id)
        dispatch(changeStatus(status, id))
    } else {
        dispatch(showAlert('You are not autorized'))
        dispatch(isAuthAction(0))
    }
}
export const adminChangedThunk = (id, todo, changed) => async (dispatch, getState) => {
    const page = getState().toDoDatas.currentPage - 1
    const res = await getAuthAPI()
    if (res.data.auth === 1) {
        const response = await adminChangedAPI(id, todo, changed)
        dispatch(getToDosThunk(page))
    } else {
        dispatch(showAlert('You are not autorized'))
        dispatch(isAuthAction(0))
    }
}