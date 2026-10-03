
    import { useState } from "react";
    import "./form.css";

    export default function ProductAddForm({fields,pagename,setProductAdd }) {
        const [rows, setRows] = useState([
            {
                item:{
                    status : "Available",
                    quantity : 1
                }
            }
        ]);

        const handleChange = (rowIndex, fieldName, value) => {
            const newRows = [...rows];
            const keys= fieldName.split(".");
            newRows[rowIndex] = {
                ...newRows[rowIndex]}
            let current = newRows[rowIndex];
            keys.forEach((key,index) => {
                if(index=== keys.length-1){
                    current[key]= value;
                }
                else{
                    current[key]= {
                        ...current[key]
                    };
                    current = current[key];
                }
            });

            setRows(newRows);
            setProductAdd(newRows);
        };
        function getValue(row, fieldName) {
                const keys = fieldName.split(".");

                let current = row;

                keys.forEach((key) => {
                    current = current?.[key];
                });

    return current ?? "";
}

        const addRow = () => {
            setRows([
                ...rows,
                {                    
                    item:{
                        status : "Available",
                        quantity : 1
                    }
                }
            ]);
        };

        const removeRow = (rowIndex) => {
            if (rows.length === 1) {
                alert("you cannot remove this row");
                return;
            }

            const newRows = rows.filter(
                (_, index) => index !== rowIndex
            );

            setRows(newRows);
            setProductAdd(newRows);
        };

        return (
            <div className="item-form">

                <h1>Add Form {pagename}</h1>

                <table>

                    <thead>
                        <tr>
                            {fields.map((field) => (
                                <th key={field.name}>
                                    {field.label}
                                </th>
                            ))}

                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {rows.map((row, rowIndex) => (

                            <tr key={rowIndex}>

                                {fields.map((field) => (

                                    <td key={field.name}>

                                        {field.name === "item.status" ? (

                                            <select
                                                name={field.name}
                                                value={getValue(row,field.name)}
                                                onChange={(e) =>
                                                    handleChange(
                                                        rowIndex,
                                                        field.name,
                                                        e.target.value
                                                    )
                                                }
                                            >
                            
                                                <option value="Available">
                                                    Available
                                                </option>
                                                <option value="Damage">
                                                    Damage
                                                </option>
                                                <option value="Assigned">
                                                    Assigned
                                                </option>
                                            </select>

                                        ) : (

                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={getValue(row,field.name)}
                                                readOnly={
                                                    field.name === "item.quantity" &&
                                                    pagename !== "items"
                                                }
                                                onChange={(e) =>
                                                    handleChange(
                                                        rowIndex,
                                                        field.name,
                                                        e.target.value
                                                    )
                                                }
                                            />

                                        )}

                                    </td>

                                ))}

                                <td className="add-cell">

                                    <button
                                        type="button"
                                        onClick={addRow}
                                        className="add-btn"
                                    >
                                        +
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeRow(rowIndex)
                                        }
                                        className="add-btn"
                                    >
                                        *
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        );
    }
