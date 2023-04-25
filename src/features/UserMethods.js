import axios from "axios";

export const addUser = async(user) => {
    let status = null;

    axios.post("https://api.codegojolt.xyz/user/add", JSON.stringify(user),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>{
        if (res.data) {
            status = res.status;
        }else{
            console.log("error");
        }
    })
    try{
        return(status);
    }
    catch{
        return null;
    }
}

export const findUser = async() => {
    let data = null;

   await  axios.get("https://api.codegojolt.xyz/user/")
        .then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error");
        }
    })
    try{
        return(data);
    }
    catch{
        return null;
    }
}