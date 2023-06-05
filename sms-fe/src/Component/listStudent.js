import { useEffect } from "react"
import { useItem } from "../hook/useItem"
import { useNavigate} from 'react-router-dom';


export default function ListStudent() {
    const navigate = useNavigate()
    const {
        list,
        handleGetItem,
        handleDeleteItem
    } = useItem()
    const addStudent = () => {
        navigate('/new_student/-1')
    }
    const editStudent = (id) =>{
        navigate(`/new_student/${id}`)
    }

    useEffect(()=>{handleGetItem()},[])
    return (
        <div>
            <h2 className="text-center">Student List</h2>
            <div>
                <button className="btn btn-primary" onClick={addStudent}> Add Student</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Student first name</th>
                            <th>Student last name</th>
                            <th>Student email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(student => (
                            <tr key={student.id}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button className="btn btn-info" onClick={()=>{
                                        editStudent(student.id)
                                    }}>Edit</button>
                                    <button className="btn btn-danger" style={{marginLeft:10}}
                                    onClick={()=>handleDeleteItem({id: student.id})}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}