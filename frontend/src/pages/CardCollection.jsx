import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom' // for redirecting
import {useSelector, useDispatch} from 'react-redux' // grab user to check state
import VocabSearch from '../components/VocabSearch'
import Spinner from '../components/Spinner'

import VocabSearchResult from '../components/VocabSearchResult'


function CardCollection() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth) 
 
 if(!user) {
    navigate('/login')
  } else {
    return (
      <>
        <section className="heading">
          <h3>Friends' Cards</h3>
        </section> 
        <section className='content'>
          <div >            
                <VocabSearch/>
          </div>
          <VocabSearchResult/>
        </section>
        
      </>
    )
    }
}

export default CardCollection