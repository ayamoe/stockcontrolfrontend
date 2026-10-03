const API_URL=import.meta.env.VITE_API_URL;
export const itemStatus=async(token)=>{
    const response=await fetch(`${API_URL}/products/items/status`,{
        method : "GET",
        headers : {
            "Authorization" : `Bearer ${token}`
        },
        
    });
    const data=response.json();
    return data;
    
}