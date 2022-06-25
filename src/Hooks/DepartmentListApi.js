import { useEffect } from "react";
import { useState } from "react";

const DepartmentListApi = () => {
    const [departmentList, setDepartment] = useState([]);
    useEffect(() => {
        let isMounted = true;
        fetch(`${process.env.REACT_APP_HEROKU_URL}/departments`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setDepartment(data);
                }

            });
        return () => {
            isMounted = false;
        };

    }, [departmentList]);

    return [departmentList, setDepartment];
}

export default DepartmentListApi;