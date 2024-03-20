import { Axios } from "axios";

const addUser = async (data) => {
    try {
        await Axios.post("", data);
    } catch (error) {
        console.log(error)
    }

}
export default addUser;