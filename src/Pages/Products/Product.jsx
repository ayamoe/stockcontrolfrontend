import { useEffect, useState } from "react";
import ItemModal from "../../Components/Common/Modal/ItemModal";
import { useAuth } from "../../Hooks/useAuth";
import { getProducts } from "../../Services/ProductService/getProductService";
import { useApp } from "../../App";
import Table from "../../Components/Common/Table/Table";
import AddItemButton from "../../Components/Common/Button/AddItemButton";
import { setProducts } from "../../Services/ProductService/setProductService";
import { getFields } from "../../Services/ProductService/fieldService";

export default function Product({ name }) {
    const { token } = useAuth();
    const { pagesize ,mode,setMode} = useApp();
    const [product, setProduct] = useState([]);
    const [open, setOpen] = useState(false);

    const fields = getFields(name);
    const getProduct = async () => {
        const data = await getProducts(token, pagesize, name);

        console.log("GET RESPONSE:", data);

        setProduct(data?.content || []);
    };

    const handleproductdata = async (data) => {
        console.log("SetProductData",data)
        const response = await setProducts(token, data, name);
        setProduct(prev => {

            return [...prev, ...response];
        });
        console.log(data);
        setOpen(false);
        setMode(!mode);
    };

    useEffect(() => {
        if (!token) return;

        getProduct();
        
    }, [token, pagesize, name]);

    return (
        <div>
            <Table
                data={product}
                pagename={name}
                fields={fields}
            />

            <ItemModal
                open={open}
                onClose={() => setOpen(false)}
                fields={fields}
                pagename={name}
                onSave={handleproductdata}
            />

            <AddItemButton
                onClick={() => setOpen(true)}
                BtnName="Add Item"
            />
        </div>
    );
}