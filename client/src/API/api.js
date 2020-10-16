import axios from "axios";

// export const instance = axios.create({
//     baseURL: 'https://nj9eq.sse.codesandbox.io/api'
// })
export const getToDoAPI = (page, count) => {
    return axios.get(`/todos?page=${page}&count=${count}`)
}
export const getSortNamesABCAPI = (page, count) => {
    return axios.get(`/namesabc?page=${page}&count=${count}`)
}
export const getSortNamesXYZAPI = (page, count) => {
    return axios.get(`/nameszyx?page=${page}&count=${count}`)
}
export const getSortEmailABCAPI = (page, count) => {
    return axios.get(`/emailabc?page=${page}&count=${count}`)
}
export const getSortEmailXYZAPI = (page, count) => {
    return axios.get(`/emailzyx?page=${page}&count=${count}`)
}
export const getSortTodosABCAPI = (page, count) => {
    return axios.get(`/todosabc?page=${page}&count=${count}`)
}
export const getSortTodosXYZAPI = (page, count) => {
    return axios.get(`/todoszyx?page=${page}&count=${count}`)
}
export const addToDoAPI = (body) => {
    return axios.post('/addtodo', body)
}
export const deleteToDoAPI = (id) => {
    return axios.delete(`/delete/${id}`)
}
export const getToDosCountAPI = () => {
    return axios.get(`/count`)
}
export const loginAPI = (body) => {
    return axios.post(`/auth`, body)
}
export const getAuthAPI = (id = 1) => {
    return axios.get(`/getauth/${id}`)
}
export const confirmAuthAPI = (authStatus, id) => {
    return axios.post(`/authstatus`, {auth: authStatus, id})
}
export const changeStatusAPI = (status, id) => {
    return axios.post(`/updatestatus`, {status, id})
}
export const adminChangedAPI = (id, todo, changed) => {
    return axios.post(`/changed`, {id, todo, changed})
}
