const API_URL=import.meta.env.VITE_API_URL;
export const getUsers=async(token , user)=>{
    const response = await fetch(`${API_URL}/auth/${user}`,{
        method : "GET",
        headers: {
            "Authorization" : `Bearer ${token}`

        }
    })
    const data= await response.json();
    if(!response.ok){
        throw new Error(data.message || "Failed to get products");
    }
    return data;
}