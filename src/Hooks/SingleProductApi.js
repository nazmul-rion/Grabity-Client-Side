import { useEffect } from "react";
import { useState } from "react";

const SingleProductApi = (id) => {
    const [singleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch(`https://grabity-grabity.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setSingleProduct(data.SingleProduct);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [singleProduct, id]);


    return [singleProduct, setSingleProduct];
}

export default SingleProductApi;
