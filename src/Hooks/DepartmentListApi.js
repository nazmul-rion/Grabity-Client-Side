import { useEffect } from "react";
import { useState } from "react";

const DepartmentListApi = () => {
    const [departmentList, setDepartment] = useState([]);
    useEffect(() => {
        fetch('https://grabity-grabity.herokuapp.com/departments')
            .then(res => res.json())
            .then(data => setDepartment(data));
    }, [departmentList]);

    return [departmentList, setDepartment];
}

export default DepartmentListApi;