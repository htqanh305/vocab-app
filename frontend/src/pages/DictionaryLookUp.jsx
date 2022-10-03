import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' // for redirecting
import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import Spinner from '../components/Spinner'
import WordLookUp from '../components/WordLookUp'


function DictLookUp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, message} = useSelector((state) => state.auth) 
   

 
  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }
  }, [user, navigate, isError, message])

  if(isLoading) {
    return <Spinner />
  }

 if(!user) {
    navigate ('/login')
  } else {
    return (
      <>
        <section className="heading">
          <h3>Look Up Definition</h3>
        </section> 
        <section className='content'>
          <div >            
          <WordLookUp/>
          </div>
          
        </section>
        
      </>
    )
    }
}

export default DictLookUp