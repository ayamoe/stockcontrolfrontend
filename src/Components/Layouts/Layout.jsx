import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
export default function Layout() {
    
    return (
        <div className="app">

            <Sidebar />

            <main className="main">

                <TopBar />

                <section className="content" style={{marginTop: "70px"}}>
                    <Outlet />
                    
                </section>
                
            </main>

        </div>
    );
}