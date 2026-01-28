import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = (e) => {
        e.preventDefault()
        navigate("/")
    }

    return (
        <div className="center-box">
            <h1>CREATE NEW ACCOUNT</h1>

            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="FULL NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">SIGNUP</button>
            </form>
        </div>
    )
}

export default Signup
