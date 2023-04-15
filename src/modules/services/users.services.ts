import axios from 'axios';
const api = 'http://45.178.182.17:3009'

export const getUsers = async () => {
    const response = await axios.get(`${api}/users`)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        });
    return response.data;
}

export const postUsers = async (data: object) => {
    const response = await axios.post(`${api}/users`, data)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        });
    return response.data;
}

export const getLogin = async (data: object) => {
    const response = await axios.get(`${api}/users/login`, { params: data })
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        });
    return response.data;
}

export const deleteUser = async (id: number) => {
    const response = await axios.delete(`${api}/users/delete/${id}`)
        .then(response => {
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        });
    return response.data;
}


module.exports = {
    getUsers,
    postUsers,
    deleteUser,
    getLogin
}