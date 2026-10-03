import { useEffect, useState } from "react";
import { useAuth } from "../../../Hooks/useAuth";
import "./Pagehead.css"
import { itemStatus } from "../../../Services/ItemStatusService/itemStatusService";
import { useApp } from "../../../App";

export default function Pagehead({pagename}){
    const {token}= useAuth();
    const {mode}=useApp()
    const [pageHeadData,setPageHeadData]=useState([]);

    useEffect(()=>{
       const getItemStatus=async()=>{
          const response = await itemStatus(token);
          setPageHeadData(response.filter(item=> item[0]===pagename));
       }
       getItemStatus();
    },[pagename,mode])
    
    const available= pageHeadData.find(item=> item[1]=== "Available")?.[2] ?? 0;

    const assigned = pageHeadData.find(item=>item[1] ==="Assigned")?.[2] ?? 0;
    const damaged = pageHeadData.find(item=>item[1] === "Damage")?.[2] ?? 0;

    const total = available + damaged + assigned;
   
    return(
         <div className="pageboder">
                <div className="pagehead">
                    <h1>{pageHeadData[0]?.[0] ?? pagename}</h1>
                </div>

                <div className="stats">
                    <div className="stat">
                        <div>
                            <small>Total Items</small>
                            <strong>{total}</strong>
                        </div>
                        <div className="icon">📦</div>
                    </div>

                    <div className="stat">
                        <div>
                            <small>Available</small>
                            <strong>{available}</strong>
                        </div>
                        <div className="icon">✓</div>
                    </div>

                    <div className="stat">
                        <div>
                            <small>Assigned</small>
                            <strong>{assigned}</strong>
                        </div>
                        <div className="icon">↗</div>
                    </div>

                    <div className="stat">
                        <div>
                            <small>Damage</small>
                            <strong>{damaged}</strong>
                        </div>
                        <div className="icon">!</div>
                    </div>
                </div>
            </div>

    )
}