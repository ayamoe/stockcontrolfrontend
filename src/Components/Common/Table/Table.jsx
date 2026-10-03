
import "./Table.css";

const getValue = (object, path) => {
    return path.split(".").reduce(
        (value, key) => value?.[key],
        object
    );
};

export default function Table({ data = [], pagename ,fields }) {
    
    return (
        <div className="page-card table-card">

            <div className="card-head">

                <h3>{pagename} Inventory</h3>

                <div className="toolbar">

                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                    />

                    <select className="filter">
                        <option>All Status</option>
                        <option>Available</option>
                        <option>Assigned</option>
                        <option>Repair</option>
                        <option>Retired</option>
                    </select>

                </div>

            </div>

            <table>

                <thead>
                    <tr>

                        <th>ID</th>

                        {fields.map((field) => (
                            <th key={field.name}>
                                {field.label}
                            </th>
                        ))}

                        <th>Details</th>

                    </tr>
                </thead>

                <tbody>

                    {data.map((item) => (

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            {fields.map((field) => (

                                <td key={field.name}>
                                    {getValue(item, field.name) ?? ""}
                                </td>

                            ))}

                            <td>

                                <button
                                    className="icon-btn"
                                    onClick={() =>
                                        console.log("Edit", item.id)
                                    }
                                >
                                    ✎
                                </button>

                                <button
                                    className="icon-btn"
                                    onClick={() =>
                                        console.log("Details", item.id)
                                    }
                                >
                                    Details
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}
