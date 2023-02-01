
import React from 'react'
import ReactDOM from 'react-dom'
import APP_NAME from '../@shared/helpers/appName'
import { Popup } from './components/Popup'

const root = document.createElement('div')
root.id = `${APP_NAME}_popup`
document.body.appendChild(root)

ReactDOM.render(<Popup />, root)
