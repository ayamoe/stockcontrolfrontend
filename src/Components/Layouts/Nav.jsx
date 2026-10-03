import { useNavigate } from "react-router-dom";
import { useApp } from "../../App";

export default function Nav() {
    const navigate = useNavigate(); 

    return (
        <nav className="nav">

            <button
                className="nav-item active"
                data-page="dashboard" onClick={()=>{navigate("/dashboard"); setPageheader("dashboa");}}
            >
                <span>▦</span> Dashboard
            </button>

            <div className="nav-label">INVENTORY</div>

            <button
                className="nav-item"
                data-page="printer"
                onClick={() => navigate("/printer")}
            >
                <span>▣</span> Printer
            </button>

            <button className="nav-item" data-page="cctv" onClick={()=>navigate("/cctv")}>
                <span>◉</span> CCTV
            </button>

            <button className="nav-item" data-page="ups" onClick={()=>navigate("/ups")}>
                <span>▰</span> UPS
            </button>

            <button className="nav-item" data-page="computer" onClick={()=> navigate('/computer')}>
                <span>▤</span> Computer
            </button>

            <button className="nav-item" data-page="monitor" onClick={()=>navigate('/monitor')}>
                <span>▥</span> Monitor
            </button>

            <button className="nav-item" data-page="accessories" onClick={()=>navigate('/accessories')}>
                <span>◆</span> Accessories
            </button>

            <div className="nav-label">STOCK</div>

            <button className="nav-item" data-page="activity">
                <span>↕</span> Stock Activity
            </button>

            <button className="nav-item" data-page="assignment" onClick={()=>navigate('/assignmenttable')}>
                <span>↗</span> Stock Assignment
            </button>

            <div className="nav-label">SYSTEM</div>

            <button className="nav-item" data-page="users" onClick={()=>navigate('/users')}>
                <span>♙</span> Users
            </button>

            <button className="nav-item" data-page="useractivity">
                <span>◷</span> User Activity
            </button>

            <button className="nav-item" data-page="reports">
                <span>▥</span> Reports
            </button>

            <button className="nav-item" data-page="settings">
                <span>⚙</span> Settings
            </button>

        </nav>
    );
}