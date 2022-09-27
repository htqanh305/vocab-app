
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import VocabSearch from './VocabSearch'

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
            
            
                {user ? (
                    <>
                        <div>
                            <ul>
                                <li className='logo'>
                                    <Link to='/'>Voc-App</Link>
                                </li>
                                <li>
                                    <a href='/'>Home</a>
                                </li>
                                <li>
                                    <a href='/dashboard'>Dashboard</a>
                                </li>
                                
                            </ul>
                    
                        </div>
                        <ul>                             
                            <li>
                                <VocabSearch/>          
                            </li>
                            <li><a href='' onClick={onLogout}>Logout</a></li>
                        </ul>      
                    </>
                ) : (<>
                        <div>
                            <ul>
                                <li className='logo'>
                                    <Link to='/'>Voc-App</Link>
                                </li>                        
                            </ul>                
                        </div>
                        <ul>
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/register'>Register</a></li>
                        </ul>
                </>)}
            
        </header>
    )
}

export default Header