import { useEffect } from "react";
import { useState } from "react";

const CategoryListApi = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://grabity-grabity.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [categories]);

    return [categories, setCategories];
}

export default CategoryListApi;