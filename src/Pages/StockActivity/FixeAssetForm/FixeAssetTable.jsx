import "./AssetTable.css"
import AddItemButton from "../../../Components/Common/Button/AddItemButton";
import { useNavigate } from "react-router-dom";
export default function FixeAssetTable(){
  const navigate = useNavigate();
  const fixedAssets=[];
    return (
         <div className="fixed-asset-table-wrapper">
              <table className="fixed-asset-table">
                <thead>
                  <tr>
                    <th>AssignID</th>
                    <th>ItemName</th>
                    <th>Quanity</th>
                    <th>Location</th>
                    <th>TransferDept</th>
                    <th>ReceiveDept</th>
                    <th>AssignDate</th>
                    <th>Remarks</th>
                    
                  </tr>
                </thead>

                <tbody>
                  {fixedAssets.map((asset) => {
                    const netValue = asset.cost - asset.depreciation;

                    return (
                      <tr key={asset.id}>
                        <td>{asset.assetCode}</td>

                        <td className="asset-name">
                          {asset.assetName}
                        </td>

                        <td>{asset.category}</td>

                        <td>{asset.location}</td>

                        <td>{asset.purchaseDate}</td>

                        <td>{formatCurrency(asset.cost)}</td>

                        <td>{formatCurrency(asset.depreciation)}</td>

                        <td>{formatCurrency(netValue)}</td>

                        <td>
                          <span
                            className={`status ${asset.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {asset.status}
                          </span>
                        </td>

                        <td>
                          <div className="table-actions">
                            <button className="view-btn">View</button>
                            <button className="edit-btn">Edit</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            <AddItemButton onClick={()=>navigate('/assignmentform')} BtnName="AssignForm"/>
         </div>
    )
}