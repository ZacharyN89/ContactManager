import axios from "axios";

/* 
    A little side note for registerUser:
    Not sure if this was because I changed syntax or something, but it actually kept
    giving me errors when trying to add a new user. The error was preventing the user
    from being added despite not being in the database. The fix to this was to delete the
    cluster (which we shouldn't do for the actual project just in case). But this then caused
    another problem where the unique tag of the model wasn't working. So I had to logout and log
    back into my own MongoDB to fix.
    (As another side note, maybe we shouldn't make the names unique, who knows how many
    Bobby Tables are out there)
*/
export const registerUser = async(user) => {
    let status = null;

    axios.post("https://api.codegojolt.xyz/user/add", JSON.stringify(user),
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        if(res.data) {
            status = res.status;
        } else {
            console.log("error");
        }
    })
    try{
        return status;
    } catch {
        return null;
    }
};

   await  axios.get("https://api.codegojolt.xyz/user/")
        .then(res=>{
        if (res.data) {
            data = res.data;
        }else{
            console.log("error");
        }
    })
    // Job for future Marc, check when nothing is is inserted for users
    return;
}

export const logoutUser =()=> {
    localStorage.removeItem("user");
    if(!localStorage.getItem("user"))
        return "User logged out";
}