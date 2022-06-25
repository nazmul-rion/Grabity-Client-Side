import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Context/Authentication/useAuth";

const QuestionListAPI = (ProductID, questionSearch, questionSort) => {
    const [questions, setQuestions] = useState([]);
    const { setLoading } = useAuth();

    useEffect(() => {
        let isMounted = true;
        setLoading(true)
        fetch(`${process.env.REACT_APP_HEROKU_URL}/questions/${ProductID}/${questionSort}?searchText=${questionSearch}`)
            .then(res => res.json())
            .then(data => {

                if (isMounted) {
                    setQuestions(data.Questions);
                    setLoading(false);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [ProductID, questionSort, questionSearch]);

    return [questions, setQuestions];
}

export default QuestionListAPI;