import FormActionButton from "../Button/FormActionButton";
import "./AssetTransfer.css";
import { useNavigate } from "react-router-dom";
export default function FixeAssetForm() {
    const navigate=useNavigate(
    );

    return (
        <div className="transfer-page">
            <div className="transfer-card">
                <div className="transfer-header">
                    <div>
                        <h2>IT Fixed Asset Transfer & Receive</h2>
                        <p>Fixed Asset Management Form</p>
                    </div>

                    <div className="transfer-number">
                        <label>Transfer No.</label>
                        <input type="text" placeholder="TRF-0001" />
                    </div>
                </div>


                <div className="form-section">

                    <h3>Transfer Information</h3>

                    <div className="form-grid">

                        <div className="form-group">
                            <label>Transfer Date</label>
                            <input type="date" />
                        </div>

                        <div className="form-group">
                            <label>Transfer Type</label>
                            <select>
                                <option value="">Select Type</option>
                                <option>Department Transfer</option>
                                <option>Employee Transfer</option>
                                <option>Office Transfer</option>
                                <option>Temporary Transfer</option>
                            </select>
                        </div>

                        <div className="form-group full">
                            <label>Reason</label>
                            <input
                                type="text"
                                placeholder="Reason for transfer"
                            />
                        </div>

                    </div>

                </div>


                <div className="transfer-columns">

                    <div className="form-section">

                       <h3>Transfer From</h3>
                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                placeholder="Current Department"
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee / User</label>
                            <input
                                type="text"
                                placeholder="Current User"
                            />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                placeholder="Current Location"
                            />
                        </div>

                    </div>


                    <div className="form-section">
                        <h3>Transfer To</h3>
                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                placeholder="New Department"
                            />
                        </div>
                        <div className="form-group">
                            <label>Employee / User</label>
                            <input
                                type="text"
                                placeholder="New User"
                            />
                        </div>

                        <div className="form-group">
                            <label>Location</label>
                            <input
                                type="text"
                                placeholder="New Location"
                            />
                        </div>

                    </div>

                </div>


                <div className="form-section">
                    <div className="section-header">
                        <h3>Fixed Asset Details</h3>
                        <button type="button">
                            + Add Asset
                        </button>
                    </div>


                    <div className="table-wrapper">

                        <table>

                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Asset ID</th>
                                    <th>Asset Name</th>
                                    <th>Serial Number</th>
                                    <th>Qty</th>
                                    <th>Condition</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>1</td>

                                    <td>
                                        <input
                                            type="text"
                                            placeholder="IT-0001"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Computer"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Serial Number"
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="number"
                                            min="1"
                                            defaultValue="1"
                                        />
                                    </td>

                                    <td>
                                        <select>
                                            <option>Good</option>
                                            <option>Damaged</option>
                                            <option>Repair</option>
                                        </select>
                                    </td>

                                    <td>
                                        <button
                                            type="button"
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>


                <div className="form-section">

                    <h3>Remarks</h3>

                    <textarea
                        placeholder="Additional information or remarks..."
                    />

                </div>


                <div className="signature-section">

                    <div className="signature-box">
                        <div className="signature-line"></div>
                        <strong>Transferred By</strong>
                        <span>Name / Signature</span>
                        <span>Date</span>
                    </div>


                    <div className="signature-box">
                        <div className="signature-line"></div>
                        <strong>Received By</strong>
                        <span>Name / Signature</span>
                        <span>Date</span>
                    </div>


                    <div className="signature-box">
                        <div className="signature-line"></div>
                        <strong>Approved By</strong>
                        <span>Name / Signature</span>
                        <span>Date</span>
                    </div>

                </div>

            </div>
            <FormActionButton routePage="assignmenttable"/>

        </div>
    );
}