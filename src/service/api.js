import  Axios  from "axios";
const API_URL ="http://127.0.0.1:3002/users";
export const addUser = async (data) => {
    try {
        return await Axios.post(API_URL, data);
    } catch (error) {
        console.log(error)
    }

}
export const getUsers = async ()=>{
try {
    return Axios.get(API_URL);
} catch (error) {
    console.log(error)
}
}
