import axios from "axios"


export const addExercise = async(exercise) => {
    let status = null;
    
    axios.post("https://api.codegojolt.xyz/exercise/add", JSON.stringify(exercise),
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
            console.log("error in Exercise Creation");
        }
    })
        try{
            return (status);
        }
        catch{
            return null;
        }
    }

export const findExerciseDay = async(exercise) =>{
    let data = null;
    await axios.post("https://api.codegojolt.xyz/exercise/findDay", JSON.stringify(exercise),
    {
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error in findDay");
        }
    })
    try{
        return data;
    }
    catch{
        return null;
    }
}

export const editExercise = async(exercise) =>{
    let data = null;
    let id = exercise.id;
    await axios.post("https://api.codegojolt.xyz/exercise/update/"+id, JSON.stringify(exercise),
    {
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error in updateExercise");
        }
    })
    try{
        return data;
    }
    catch{
        return null;
    }
}

export const deleteExercise = async(exercise) =>{
    let data = null;
    let id = exercise.id;
    await axios.delete("https://api.codegojolt.xyz/exercise/delete/"+id, 
    {
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error in deleteExercise");
        }
    })
    try{
        return data;
    }
    catch{
        return null;
    }
}