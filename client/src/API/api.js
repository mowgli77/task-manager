import axios from "axios";


export const getToDoAPI = (page, count) => {
    return axios.get(`/api/todos?page=${page}&count=${count}`)
}
export const getSortNamesABCAPI = (page, count) => {
    return axios.get(`/api/namesabc?page=${page}&count=${count}`)
}
export const getSortNamesXYZAPI = (page, count) => {
    return axios.get(`/api/nameszyx?page=${page}&count=${count}`)
}
export const getSortEmailABCAPI = (page, count) => {
    return axios.get(`/api/emailabc?page=${page}&count=${count}`)
}
export const getSortEmailXYZAPI = (page, count) => {
    return axios.get(`/api/emailzyx?page=${page}&count=${count}`)
}
export const getSortTodosABCAPI = (page, count) => {
    return axios.get(`/api/todosabc?page=${page}&count=${count}`)
}
export const getSortTodosXYZAPI = (page, count) => {
    return axios.get(`/api/todoszyx?page=${page}&count=${count}`)
}
export const addToDoAPI = (body) => {
    return axios.post('/api/addtodo', body)
}
export const deleteToDoAPI = (id) => {
    return axios.delete(`/api/delete/${id}`)
}
export const getToDosCountAPI = () => {
    return axios.get(`/api/count`)
}
export const loginAPI = (body) => {
    return axios.post(`/api/auth`, body)
}
export const getAuthAPI = (id = 1) => {
    return axios.get(`/api/getauth/${id}`)
}
export const confirmAuthAPI = (authStatus, id) => {
    return axios.post(`/api/authstatus`, {auth: authStatus, id})
}
export const changeStatusAPI = (status, id) => {
    return axios.post(`/api/updatestatus`, {status, id})
}
export const adminChangedAPI = (id, todo, changed) => {
    return axios.post(`/api/changed`, {id, todo, changed})
}
