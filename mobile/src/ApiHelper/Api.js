import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios";

export async function get(url, callback) {
    try {
        const response = await Axios.get(url)
        
        return callback(response)
    } catch (error) {
        return callback(error.response);
    }
}

export async function post(url, params, callback) {

    try {
        // const token = await AsyncStorage.getItem('APP_TOKEN');
        const response = await Axios.post(url, params);
        return callback(response);

    } catch (error) {
        // log('Catch Post API call', error);
        return callback(error.response);
    }
}

export async function getWithParams(url, params, callback) {
    try {
        const token = await AsyncStorage.getItem('APP_TOKEN');
        const response = await Axios.get(url, 
            {
                params,
                headers: {
                    Authorization: `${token}`
                }
            },
        )
        console.log('data', response)
        return callback(response)
    } catch (error) {
        return callback(error.response);
    }

}