import {
    ADMIN_CHANGED,
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

const Initialstate = {
    todos: [],
    toDosCount: null,
    pageSize: 3,
    currentPage: 1,
    alert: null,
    auth: null,
    isAuth: 0,
    isNamesSorted: null,
    isEmailSorted: null,
    isToDoSorted: null,
}

export const toDosReducer = (state = Initialstate, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case TODOS_COUNT:
            return {
                ...state,
                toDosCount: action.payload.q
            }
        case GET_AUTH:
            return {
                ...state,
                auth: action.payload
            }
        case IS_AUTH:
            return {
                ...state,
                isAuth: action.payload
            }
        case CHANGE_STATUS:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id) {
                        return { ...t, status: action.status}
                    }
                    return t
                })
            }
        case ADMIN_CHANGED:
            return {
                ...state,
                todos: state.todos.map(t => {
                    if (t.id === action.id) {
                        return { ...t, changed: action.changed}
                    }
                    return t
                })
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        case SORT_NAMES_BY_ABC:
            return {
                ...state,
                isNamesSorted: 1,
                isEmailSorted: null,
                isToDoSorted: null
            }
        case SORT_NAMES_BY_ZYX:
            return {
                ...state,
                isNamesSorted: 0,
            }
        case SORT_EMAILS_BY_ABC:
            return {
                ...state,
                isNamesSorted: null,
                isEmailSorted: 1,
                isToDoSorted: null
            }
        case SORT_EMAILS_BY_ZYX:
            return {
                ...state,
                isEmailSorted: 0,
            }
        case SORT_TODOS_BY_ABC:
            return {
                ...state,
                isNamesSorted: null,
                isEmailSorted: null,
                isToDoSorted: 1
            }
        case SORT_TODOS_BY_ZYX:
            return {
                ...state,
                isToDoSorted: 0,
            }

        default:
            return state
    }
}
