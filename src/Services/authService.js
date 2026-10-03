
const API_URL=import.meta.env.VITE_API_URL;

export const authLogin= async(username,password)=>{
    const response= await fetch(`${API_URL}/login/login`,{
        method :"POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify({
            username,password,
        }),

    });
    const data = await response.json();
     console.log(data);
    if(!response.ok){
        throw new Error(data.message || "login Failed");
    }
     return data;
}   