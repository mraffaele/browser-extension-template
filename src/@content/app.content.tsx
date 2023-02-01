import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import APP_NAME from '../@shared/helpers/appName'
import { App } from './components/App'

const root = document.createElement('div')
root.id = `${APP_NAME}_content`
document.body.appendChild(root)

ReactDOM.render(<App />, root)
