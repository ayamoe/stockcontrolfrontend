const API_URL = import.meta.env.VITE_API_URL;

const productConfig = {
    items: {
        endpoint : "/products/items",
        fields: (row)=>({
            type: ""
        })
    },
    computer: {
        endpoint: "/products/computer",

        fields: (row) => ({
            cpu: row.cpu,
            ram: Number(row.ram),
            ssd: row.ssd,
            graphic: Number(row.graphic),
            type: row.type
        })
    },

    printer: {
        endpoint: "/products/printer",

        fields: (row) => ({
            type: row.type
        })
    },

    monitor: {
        endpoint: "/products/monitor",

        fields: (row) => ({
            resolution: row.resolution
        })
    },

    ups: {
        endpoint: "/products/ups",

        fields: (row) => ({
            watt: Number(row.watt)
        })
    },

    cctv: {
        endpoint: "/products/cctv",

        fields: (row) => ({
            name  : row.type
        })
    }
};

export const setProducts = async (token, data, pagename) => {

    const config = productConfig[pagename];

    if (!config) {
        throw new Error(`Unknown product type: ${pagename}`);
    }
    
    const payload = data.map(row => ({
        item: {
            itemId: row.item.itemId,
            name: row.item.name,
            sn: row.item.sn,
            quantity: Number(row.item.quantity),
            status: row.item.status
        },

        ...config.fields(row)
    }));

    console.log("PAYLOAD:", payload);

    const response = await fetch(
        `${API_URL}${config.endpoint}`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || "Failed to add products");
    }

    return result;
};