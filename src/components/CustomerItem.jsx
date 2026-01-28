const CustomerItem = ({ customer, onDelete, onEdit }) => {
    return (
        <div className="customer-item">
            <h3>{customer.name}</h3>
            <p>{customer.email}</p>
            <p>STATUS : {customer.status}</p>

            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                <button onClick={() => onEdit(customer)}>EDIT</button>
                <button onClick={() => onDelete(customer.id)}>DELETE</button>
            </div>
        </div>
    )
}

export default CustomerItem
