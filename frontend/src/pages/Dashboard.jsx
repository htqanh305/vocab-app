import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' // for redirecting
import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabForm from '../components/VocabForm'
import VocabItem from '../components/VocabItem'
import Spinner from '../components/Spinner'
import {getVocabs, reset} from '../features/vocabs/vocabSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth) 
  const {vocabs, isLoading, isError, message} = useSelector((state) => state.vocabs)



  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    /*if(!user) {
      navigate('/login')
    }*/

    dispatch(reset()) // so that can delete multiple goals at once

    return () => {
      dispatch(getVocabs())
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
          <h1>Welcome {user.name} </h1>
          <p>Vocabulary Dashboard</p>
        </section>

        <VocabForm/>

        <section className="content">
          {vocabs.length > 0 ? (
            <div className="vocabs">
              {vocabs.map((vocab) => (
                <VocabItem key={vocab._id} vocab={vocab} />
              ))}

            </div>
          ) : 
          (<h3> You have not created any vocabulary cards </h3>)} 

        </section>
      </>
    )

}
}

export default Dashboard