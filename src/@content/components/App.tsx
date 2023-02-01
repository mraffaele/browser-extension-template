import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import APP_NAME from '../../@shared/helpers/appName'

const Wrapper = styled.div`
  padding:15px;
`

export const App: FunctionComponent = () => {
  return <Wrapper>{APP_NAME} Content Script</Wrapper>
}
