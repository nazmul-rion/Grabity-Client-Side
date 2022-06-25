import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Context/Authentication/useAuth";

const ReviewListAPI = (ProductID, reviewSearch, reviewSort) => {
    const [reviews, setReviews] = useState([]);
    const { setLoading } = useAuth();

    useEffect(() => {
        let isMounted = true;
        setLoading(true)
        fetch(`${process.env.REACT_APP_HEROKU_URL}/reviews/${ProductID}/${reviewSort}?searchText=${reviewSearch}`)
            .then(res => res.json())
            .then(data => {

                if (isMounted) {
                    setReviews(data.Reviews);
                    setLoading(false);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [ProductID, reviewSort, reviewSearch]);

    return [reviews, setReviews];
}

export default ReviewListAPI;