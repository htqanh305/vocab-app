
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }
    return(
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Voc-App</Link>
            </div>
            <ul>
                {user ? (
                    <>
                        <li><a href='/dashboard'>Dashboard</a></li>
                        <li><a href='' onClick={onLogout}>Logout</a></li>                           

                    </>
                ) : (<>
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/register'>Register</a></li>
                </>)}
            
            </ul>
        </header>
    )
}

export default Header