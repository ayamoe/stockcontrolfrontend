import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

import "./Layout.css"
import { useAuth } from "../../Hooks/useAuth";
export default function Sidebar(){
    const {logout}=useAuth();
    const navigate=useNavigate();
    const handleLogout = () => {
    logout();
    navigate("/");
};
    return (
                 <aside className="sidebar">
                    <div className="brand">
                       <div className="brand-mark">SC</div>
                            <div>
                                <h2>StockControl</h2>
                                <span>IT Inventory System</span>
                            </div>
                      </div>
                    
                     <Nav/>

                    <div className="sidebar-user">
                        <div className="avatar">AD</div>
                    <div>
                        <strong>Admin User</strong>
                        <small>Administrator</small>
                    </div>
                        <button id="logoutBtn" title="Logout" onClick={handleLogout}>↪</button>
                    </div>
                </aside>
    )
}