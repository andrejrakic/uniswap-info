import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { RowFixed } from '../Row'
import Logo from '../../assets/celswap_logo.svg'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <img width={'120px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Logo} alt="logo" />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
