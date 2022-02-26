import { useEffect } from "react";
import { useState } from "react";

const CategoryListApi = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://192.168.0.100:7000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [categories]);

    return [categories, setCategories];
}

export default CategoryListApi;