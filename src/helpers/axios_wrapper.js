import axios from "axios";

export const axiosWrapper = async (method,url,fdata) => {
    return await axios({method: method,url: url, data: fdata});
}