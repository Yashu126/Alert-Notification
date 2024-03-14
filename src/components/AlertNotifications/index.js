import './index.css'

import {Component} from 'react'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="alter-notification-con">
        <h1 className="alter-heading">Alert Notifications</h1>
        <Notification>
          <div className="logo-description">
            <AiFillCheckCircle className="success-logo" />
            <div>
              <h1 className="success-heading">Success</h1>
              <p className="description">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="logo-description">
            <RiErrorWarningFill className="error-logo" />
            <div>
              <h1 className="error-heading">Error</h1>
              <p className="description">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="logo-description">
            <MdWarning className="warning-logo" />
            <div>
              <h1 className="warning-heading">Warning</h1>
              <p className="description">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="logo-description">
            <MdInfo className="info-logo" />
            <div>
              <h1 className="info-heading">info</h1>
              <p className="description">
                Anyone on the Internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
