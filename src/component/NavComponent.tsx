import { NavLink } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function NavComponent() {

    const {isAuthenticated} = useAuth()
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    {
                        isAuthenticated ? 
                        <NavLink to='/dashboard'>Dashboard</NavLink>:
                        <NavLink to='/login'></NavLink>
                        
                    }
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavComponent