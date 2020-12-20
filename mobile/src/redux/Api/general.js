import Axios from "axios";

export const login = (otp) => {
    const respones = Axios.get(`http://192.168.1.72:8081/verificationCode/${otp}`)
    console.log("URL :-->",respones)
	return respones
}