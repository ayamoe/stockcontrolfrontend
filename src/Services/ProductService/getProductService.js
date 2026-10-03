const API_URL=import.meta.env.VITE_API_URL;

export const getProducts = async (token, pagedata, endpoint) => {
    const response = await fetch(
        `${API_URL}/products/${endpoint}?page=${pagedata.page}&size=${pagedata.size}`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Failed to get products");
    }

    return data;
};