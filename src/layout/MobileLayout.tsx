import { Outlet } from 'react-router-dom'
import { Flex } from 'antd'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

export function MobileLayout() {
  return (
    <Flex justify='center' style={{ height: '100vh', overflow: 'hidden', background: '#eee' }}>
      <Container>
        <Global styles={{ body: { margin: 0 } }} />
        <Outlet />
      </Container>
    </Flex>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 430px;
  overflow: hidden;
  box-shadow: 0 0 22px -2px #000000bf;
  background: white;
`