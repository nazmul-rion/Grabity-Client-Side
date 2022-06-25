import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Context/Authentication/useAuth";

const AnswerListApi = (QuestionID) => {
    const [answers, setAnswers] = useState([]);
    const [AnsLoading, setAnsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setAnsLoading(true)
        fetch(`${process.env.REACT_APP_HEROKU_URL}/answers/${QuestionID}`)
            .then(res => res.json())
            .then(data => {

                if (isMounted) {
                    setAnswers(data.Answers);
                    setAnsLoading(false);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [answers, QuestionID]);

    return [answers, setAnswers, AnsLoading];
}

export default AnswerListApi;