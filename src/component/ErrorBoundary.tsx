import { useRouteError, useNavigate } from 'react-router-dom'
import { Result, Button, Flex } from 'antd'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

export function ErrorBoundary() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError()

  console.log(error)

  const navigate = useNavigate()

  return (
    <Flex justify='center' style={{ height: '100vh', overflow: 'hidden', background: '#eee' }}>
      <Container>
        <Global styles={{ body: { margin: 0 } }} />
        <Result
          status={error?.status || 'error'}
          title={error?.status || 'Error'}
          subTitle={error?.status === '404' || error?.status === 404 ? '존재하지 않는 페이지입니다' : '알 수 없는 문제 발생'}
          extra={<Button type='primary' onClick={() => navigate('/', { replace: true })}>홈으로 돌아가기</Button>}
        />
      </Container>
    </Flex>
  )
}


const Container = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 22px -2px #000000bf;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`