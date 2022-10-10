import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' // for redirecting
import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabNewForm from '../components/VocabNewForm'
import VocabNewBoard from '../components/VocabNewBoard'
import Spinner from '../components/Spinner'
import {getVocabs, getLearnedVocabs, reset} from '../features/vocabs/vocabSlice'


function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth) 
  const {vocabs, isLoading, isError, message} = useSelector((state) => state.vocabs)  
 
  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    if(!user) {
      navigate('/login')
    }

    dispatch(getVocabs())
    dispatch(getLearnedVocabs())

    return () => {
      dispatch(reset())      
    }
   
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }


 if(!user) {
    navigate('/login')
  } else {
    return (
      <>
        <section className="heading">
          <h2>Welcome {user.name} </h2>
        </section> 

        <div className="title"> Start adding vocabulary cards here</div>
        
        <VocabNewForm/>
            

        <section className="content">
          <VocabNewBoard/>
          
        </section>


      </>
    )

}
}

export default Home