import { useState } from "react"
import CustomerForm from "./CustomerForm"
import CustomerItem from "./CustomerItem"

const generateCustomers = () => {
    const statuses = ["ACTIVE", "PENDING", "COMPLETED"]
    const list = []
    for (let i = 1; i <= 150; i++) {
        list.push({
            id: i,
            name: `CUSTOMER ${i}`,
            email: `CUSTOMER${i}@MAIL.COM`,
            status: statuses[i % 3],
        });
    }
    return list
}

const CustomerList = () => {
    const [customers, setCustomers] = useState(generateCustomers())
    const [editingCustomer, setEditingCustomer] = useState(null)

    const addCustomer = (customer) => {
        setCustomers([...customers, customer])
    }

    const updateCustomer = (updatedCustomer) => {
        setCustomers(
            customers.map((c) => (c.id === updatedCustomer.id ? updatedCustomer : c))
        )
        setEditingCustomer(null)
    }

    const deleteCustomer = (id) => {
        setCustomers(customers.filter((c) => c.id !== id))
    }

    const editCustomer = (customer) => {
        setEditingCustomer(customer)
    }
    return (
        <div className="center-box">
            <h1>CUSTOMER MANAGEMENT DASHBOARD</h1>

            <CustomerForm
                onAdd={addCustomer}
                onUpdate={updateCustomer}
                editingCustomer={editingCustomer}
            />

            <div className="customer-list">
                {customers.map((customer) => (
                    <CustomerItem
                        key={customer.id}
                        customer={customer}
                        onDelete={deleteCustomer}
                        onEdit={editCustomer}
                    />
                ))}
            </div>
        </div>
    )
}

export default CustomerList
