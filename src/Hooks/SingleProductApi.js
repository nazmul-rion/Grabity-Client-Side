import { useEffect } from "react";
import { useState } from "react";

const SingleProductApi = (id) => {
    const [singleProduct, setSingleProduct] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch(`${process.env.REACT_APP_HEROKU_URL}/products/${id}`)
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
