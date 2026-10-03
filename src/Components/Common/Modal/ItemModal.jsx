import "./modal.css";

import FormActionButton from "../Button/FormActionButton";
import ProductAddForm from "../Forms/ProductAddForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemModal({ open, onClose, fields = [], pagename = "",onSave}) {
    const [productData,setProductData]=useState([]);

    const saveProductData=()=>{
        onSave(productData);
        onClose();
    }
    if (!open) {
        return null;
    }

    return (
        <div className="item-modal-overlay">

            <div className="item-modal">

                <button
                    type="button"
                    className="item-modal-close"
                    onClick={onClose}
                >
                    ×
                </button>

                <ProductAddForm fields={fields} pagename={pagename} setProductAdd={setProductData}/>
               
                  <FormActionButton onClick={saveProductData} onClose={onClose}/>
                 
            </div>

        </div>
    );
}   