import { useEffect } from "react";
import { useState } from "react";

const ProductListApi = () => {
    const [products, setProducts] = useState([]);
    const [totalProductCount, setTotalProductCount] = useState(0);
    const [pageNumber, setpageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(15);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://grabity-grabity.herokuapp.com/products?pageNumber=${pageNumber}&&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setProducts(data.Product);
                    setTotalProductCount(data.totalProductCount)
                }

            });
        return () => {
            isMounted = false;
        };

    }, [products, pageNumber]);

    return [products, setProducts, pageNumber, setpageNumber, pageSize, setPageSize, totalProductCount, setTotalProductCount];
}

export default ProductListApi;