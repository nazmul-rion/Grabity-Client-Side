import { useEffect } from "react";
import { useState } from "react";

const ProductListApi = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://grabity-grabity.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    return [products, setProducts];
}

export default ProductListApi;