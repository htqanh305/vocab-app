import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' // for redirecting
import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabLearnedBoard from '../components/VocabLearnedBoard'
import Spinner from '../components/Spinner'
import LineChart from '../components/LineChart'
import NewPieChart from '../components/NewPieChart'
import LearnedPieChart from '../components/LearnedPieChart'
import {getVocabs, getLearnedVocabs, reset} from '../features/vocabs/vocabSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth) 
  const {vocabs, isLoading, isError, message} = useSelector((state) => state.vocabs)  
 
  useEffect(() => {
    if(isError) {
      console.log(message)
    }

    return () => {
      dispatch(getVocabs())
      dispatch(getLearnedVocabs())
    }
   
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }


 if(!user) {
    return ('/login')
  } else {
    return (
      <>
        <section className="heading">
          <h2>Dashboard</h2>
        </section> 

        <section className="content dashBody">
          <div className="dashLeft">
            <NewPieChart/>
            <LearnedPieChart/>
          </div>
          <div className="dashRight">
            <LineChart/>
          </div>
        </section>

        <VocabLearnedBoard/>

 

      </>
    )

}
}

export default Dashboard