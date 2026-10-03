    
    import "./style.css"
    
    import { useState } from "react"
    import Layout from "./Components/Layout/Layout"


    export default function Template() {
    const [count, setCount] = useState("");
  

    return (
        <>               
            <Layout/>

                  <div className="modal-backdrop" id="modal">
                    <div className="modal">
                        <div className="modal-head">
                        <h3 id="modalTitle">Add Item</h3>
                        <button className="icon-btn" id="closeModal">×</button>
                        </div>
                        <form id="itemForm">
                        <div className="form-grid">
                            <label>Item Name<input id="fName" required placeholder="e.g. HP LaserJet Pro"/></label>
                            <label>Serial Number<input id="fSn" required placeholder="e.g. SN-2026-001"/></label>
                            <label>Category<select id="fCategory"><option>Printer</option><option>CCTV</option><option>UPS</option><option>Computer</option><option>Monitor</option><option>Accessories</option></select></label>
                            <label>Quantity<input id="fQty" type="number" min="0" value="1"/></label>
                            <label>Status<select id="fStatus"><option>Available</option><option>Assigned</option><option>Repair</option><option>Retired</option></select></label>
                            <label>Location<input id="fLocation" placeholder="IT Store Room"/></label>
                        </div>
                        <div className="modal-actions">
                            <button type="button" className="btn ghost" id="cancelModal">Cancel</button>
                            <button type="submit" className="btn primary">Save Item</button>
                        </div>
                        </form>
                       

                    
                </div>
            </div>
        </>
    )
    }


