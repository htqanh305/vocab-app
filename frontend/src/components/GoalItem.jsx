import {useDispatch} from 'react-redux'
import { deleteGoal, getGoals } from '../features/goals/goalSlice'


function GoalItem({goal}) {
    const dispatch = useDispatch()

    return (
    <div className="goal">
        <div>
            {new Date(goal.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{goal.text}</h2>

        <button onClick={async () => {
            await dispatch(deleteGoal(goal._id))
            dispatch(getGoals()) }} className="close">X</button>
    </div>
  )
}

export default GoalItem