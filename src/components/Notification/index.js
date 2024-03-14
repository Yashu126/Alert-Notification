import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="box">
      {children}
      <GrFormClose className="cross" />
    </div>
  )
}

export default Notification
