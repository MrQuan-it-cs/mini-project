import { useState } from "react"
import { useItem } from '../hook/useItem'
import { useNavigate, useLocation } from "react-router-dom"

export default function NewStudent() {
    const navigate = useNavigate()
    const {
        handlePostItem,
        handlePutItem,
        list
    } = useItem()
    const id = useLocation().pathname.match(/\/(-?\d+)$/)[1]
    const obj = list.find(obj => obj.id === parseInt(id))

    const [firstName, setFirstName] = useState(() => parseInt(id) === -1 ? '' : obj.firstName)
    const [lastName, setLastName] = useState(() => parseInt(id) === -1 ? '' : obj.lastName)
    const [email, setEmail] = useState(() => parseInt(id) === -1 ? '' : obj.email)

    const cancel = () => {
        navigate('/students')
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3s">
                        <h3 className="text-center">{parseInt(id) === -1 ? 'Add new student' : 'Update student profile'}</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First name: </label>
                                    <input placeholder="first name" name="firstName" className="form-control"
                                        value={firstName} onChange={e => setFirstName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Last name: </label>
                                    <input placeholder="last name" name="firstName" className="form-control"
                                        value={lastName} onChange={e => setLastName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input placeholder="email" name="firstName" className="form-control"
                                        value={email} onChange={e => setEmail(e.target.value)} />
                                </div>

                                <button className="btn btn-success" onClick={e => {
                                    e.preventDefault()
                                    if (parseInt(id) === -1) {
                                        handlePostItem({ firstName, lastName, email })
                                    } else {
                                        handlePutItem({ firstName, lastName, email, id })
                                    }
                                    navigate('/students')

                                }}>{parseInt(id) === -1 ? 'Add' : 'Save'}</button>
                                <button className="btn btn-danger" style={{ marginLeft: 10 }} onClick={cancel}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}