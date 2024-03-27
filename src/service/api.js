import Axios from "axios";
const API_URL = "http://127.0.0.1:3002/users";
export const addUser = async (data) => {
    try {
        return await Axios.post(API_URL, data);
    } catch (error) {
        console.log(error)
    }

}
export const getUsers = async () => {
    try {
        return Axios.get(API_URL);
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async (id) => {
    try {
        return Axios.get(`${API_URL}/${id}`);
    } catch (error) {
        console.log(error)
    }
}
export const editUser = async (id,data) => {
    try {
        return Axios.put(`${API_URL}/${id}`,data);
    } catch (error) {
        console.log(error)
    }
}
export const deleteUser = async (id) => {
    try {
        return Axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log(error)
    }
}
