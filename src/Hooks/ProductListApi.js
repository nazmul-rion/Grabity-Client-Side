import { useEffect } from "react";
import { useState } from "react";

const ProductListApi = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://192.168.0.100:7000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return [products, setProducts];
}

export default ProductListApi;