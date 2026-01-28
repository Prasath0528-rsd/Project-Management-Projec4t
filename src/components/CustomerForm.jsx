import { useState, useEffect } from "react"

const CustomerForm = ({ onAdd, onUpdate, editingCustomer }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("ACTIVE")

    useEffect(() => {
        if (editingCustomer) {
            setName(editingCustomer.name)
            setEmail(editingCustomer.email)
            setStatus(editingCustomer.status)
        }
    }, [editingCustomer])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (editingCustomer) {
            onUpdate({
                ...editingCustomer,
                name,
                email,
                status,
            });
        } else {
            onAdd({
                id: Date.now(),
                name,
                email,
                status,
            })
        }

        setName("")
        setEmail("")
        setStatus("ACTIVE")
    };

    return (
        <form className="customer-form" onSubmit={handleSubmit}>
            <h2>{editingCustomer ? "UPDATE CUSTOMER" : "ADD CUSTOMER"}</h2>

            <input
                type="text"
                placeholder="CUSTOMER NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="CUSTOMER EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option>ACTIVE</option>
                <option>PENDING</option>
                <option>COMPLETED</option>
            </select>

            <button type="submit">
                {editingCustomer ? "UPDATE CUSTOMER" : "ADD CUSTOMER"}
            </button>
        </form>
    )
}

export default CustomerForm
