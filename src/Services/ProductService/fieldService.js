
const commonFields = [
    { name: "item.name", label: "Name", type: "text" },
    { name: "item.itemId", label: "Item Code", type: "text" },
    { name: "item.sn", label: "Serial Number", type: "text" },
    { name: "item.quantity", label: "Quantity", type: "number" },
    { name: "item.status", label: "Status", type: "text" }
];

const categoryFields = {
    computer: [
        { name: "cpu", label: "CPU", type: "text" },
        { name: "ram", label: "RAM", type: "number" },
        { name: "ssd", label: "SSD", type: "text" },
        { name: "graphic", label: "Graphic", type: "number" },
        { name: "type", label: "Type", type: "text" },
    ],

    printer: [
        { name: "type", label: "Type", type: "text" }
    ],

    monitor: [
        { name: "resolution", label: "Resolution", type: "text" }
    ],

    ups: [
        { name: "watt", label: "Watt", type: "number" }
    ],

    cctv: [
        { name: "type", label: "Type", type: "text" }
    ]
};
const userFields = {
    user : [
        {name : "name", label : "Name", type : "text"},
        {name : "username", label : "Username" ,type :"text"},
        {name : "role.name" , label : "Role" ,type : "text"}
    ]
}

export const getFields = (pagename) => {
    if (pagename === "items") {
        return commonFields;
    }

    if (pagename === "users") {
        return userFields.user;
    }

    return [
        ...commonFields,
        ...(categoryFields[pagename] || [])
    ];
};