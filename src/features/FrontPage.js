import axios from "axios"

export const addUser = async(user) => {
let status = null;

axios.post("http://localhost:5000/user/add", JSON.stringify(user),
{
    headers:{
        'Content-Type':'application/json'
    }
}).then(res=>{
    if (res.data){
        status = res.status;
    }
    else
    {
        console.log("error in User Creation");
    }
})
    try{
        return (status);
    }
    catch{
        return null;
    }
}

export const findAllUsers = async() =>{
    let data = null;
    await axios.post("http://localhost:5000/user/findAllUsers",
    {
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error in findAllUsers");
        }
    })
    try{
        return data;
    }
    catch{
        return null;
    }
}

export const findSpecUsers = async(user) =>{
    let data = null;
    await axios.post("http://localhost:5000/user/findSpecUsers", JSON.stringify(user),
    {
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error in findAllUsers");
        }
    })
    try{
        return data;
    }
    catch{
        return null;
    }
}