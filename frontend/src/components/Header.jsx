
import {Link, useNavigate} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useState} from 'react'
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

    const [isActive, setActive] = useState(false);

    const ToggleClass = () => {setActive(!isActive);}
    

    if (user) {
        return (
            <>
                <header className='header'>
                    <div>
                        <ul>
                            <li className='logo'>
                                <a href='/'>VocApp</a>
                            </li>
                            <li className='menu'>
                                <a href='/'>Home</a>
                            </li>
                            <li className='menu'>
                                <a href='/dashboard'>Dashboard</a>
                            </li>
                            
                        </ul>
                
                    </div>
                    <ul>                             
                        <li className='menu'>
                            <VocabSearch/>          
                        </li>
                        <li className='menu'><a onClick={onLogout}>Logout</a></li>
                    </ul>   
                    <a className="burger" onClick={ToggleClass}><FaBars /></a>
                
                    
                </header> 
                <nav className={isActive ? "mobile-menu-act" : "mobile-menu-inact"}>                    
                    <a href='/'>Home</a>
                    <a href='/dashboard'>Dashboard</a>            
                    <a href='/collection' >Search Friends' Card</a>          
                    <a onClick={() => { onLogout(); ToggleClass()}}>Logout</a>
	            </nav> 
                
            </>
        )
    } else {
        return( 
            <>
                <header className='header'>
                    <div>
                        <ul>
                            <li className='logo'>
                                <Link to='/'>VocApp</Link>
                            </li>                        
                        </ul>                
                    </div>
                    <ul>                            
                        <li ><a href='/register'>Register</a></li>
                        <li ><a href='/login'>Login</a></li>                           
                    </ul>
                </header>
            </>
        )
    }
}
 

export default Header