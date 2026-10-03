
export default function TopBar(){
    
   return(
               <>
                    <header className="topbar">
                        <button id="menuBtn" className="icon-btn">☰</button>
                        <div className="breadcrumb"><span>StockControl</span><b>/</b><strong id="pageTitle">{}</strong></div>
                        <div className="top-actions">
                        <button className="icon-btn notification" title="Notifications">🔔<i></i></button>
                        <div className="top-avatar">AD</div>
                        </div>
                    </header>
                </>
   )
}