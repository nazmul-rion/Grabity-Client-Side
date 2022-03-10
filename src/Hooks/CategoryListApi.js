import { useEffect } from "react";
import { useState } from "react";
import CustomSpinner from "../Components/Spinner/CustomSpinner";

const CategoryListApi = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let isMounted = true;
        fetch('https://grabity-grabity.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setCategories(data);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [categories]);


    return [categories, setCategories];
}

export default CategoryListApi;
