import './button.css'
import { useNavigate } from 'react-router-dom'
export default function FormActionButton({onClick,onClose}){
    const navigate =useNavigate();
    return(
        <div className="form-actions">

                    <button
                        type="button"
                        className="cancel-btn" onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="save-btn"
                        onClick={onClick}
                    >
                        Save
                    </button>

                </div>
    )
}