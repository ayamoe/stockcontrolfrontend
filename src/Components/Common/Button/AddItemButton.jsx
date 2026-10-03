import "./button.css"
export default function addItemButton({onClick,BtnName}){
   
    return(
        <button className="add-item-btn" onClick={onClick}>
        + {BtnName}
        </button>
    )
}