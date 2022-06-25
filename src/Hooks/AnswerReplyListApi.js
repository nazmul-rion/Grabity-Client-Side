
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Context/Authentication/useAuth";

const AnswerReplyListApi = (AnswerID) => {
    const [answerReplies, setAnswerReplaies] = useState([]);
    const [AnsReplyLoading, setAnsReplyLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        setAnsReplyLoading(true)
        fetch(`${process.env.REACT_APP_HEROKU_URL}/answer-replaies/${AnswerID}`)
            .then(res => res.json())
            .then(data => {

                if (isMounted) {
                    setAnswerReplaies(data.AnswerReplies);
                    setAnsReplyLoading(false);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [answerReplies, AnswerID]);

    return [answerReplies, setAnswerReplaies, AnsReplyLoading];
}

export default AnswerReplyListApi;