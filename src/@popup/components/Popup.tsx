import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import APP_NAME from '../../@shared/helpers/appName'
import { Logo } from '../../@shared/helpers/Logo'

const Wrapper = styled.div`
  padding: 15px;
  text-align: center;
`

export const Popup: FunctionComponent = () => {
  return <Wrapper>
    <Logo />
    {APP_NAME} Popup
  </Wrapper>
}
