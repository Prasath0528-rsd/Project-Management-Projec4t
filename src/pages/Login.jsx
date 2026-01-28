import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }

    return (
        <div className="center-box">
            <h1>WELCOME TO THE PROJECT MANAGEMENT TOOL</h1>

            <form onSubmit={handleLogin}>
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
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}

export default Login
