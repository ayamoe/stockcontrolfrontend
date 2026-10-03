import { useEffect, useState } from "react";
import Table from "../../Components/Common/Table/Table";
import { getUsers } from "../../Services/ProductService/getUserService";
import { useAuth } from "../../Hooks/useAuth";
import { getFields } from "../../Services/ProductService/fieldService";

export default function UserList(){
    const {token}=useAuth();
    const [user,setUser]=useState([]);
     const pagename ="users";
    const fields=getFields(pagename);
   
            useEffect(() => {
            const fetchUsers = async () => {
                const response = await getUsers(token, pagename);

                console.log("USER COMPONENT", response);

                setUser(response);
            };

            fetchUsers();
            }, [token, pagename]);
    return (
        <div>
            <Table data={user} fields={fields} pagename={pagename}/>
        </div>
    )
}