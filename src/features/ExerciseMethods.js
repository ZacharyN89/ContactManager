import axios from "axios";

export const getExercises = async(user) => {
    let data = null;
    await axios.post("http://localhost:5000/exercise/findDay", JSON.stringify(user), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.data) {
            data = res.data;
        } else {
            console.log("error");
        }
    })
    try{
        return data;
    } catch {
        return null;
    }
};