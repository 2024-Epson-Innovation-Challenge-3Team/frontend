import { Outlet } from 'react-router-dom'
import {
  Layout,
  Avatar,
  Popover,
  Button,
  Flex,
  Space,
  Typography,
  Divider,
} from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'

// import { useMainLayout } from './useMainLayout'

const { Header, Content } = Layout
const { Text } = Typography

export function MainLayout() {
  // const {} = useMainLayout()

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 1fr',
          gridTemplateRows: '1fr',
        }}
      >
        <Left />
        <LogoWrapper>
          <Logo src='/logo.png' />
        </LogoWrapper>
        <Right>
          {/* {false ? ( */}
          {true ? (
            <Popover
              content={(
                <Flex vertical>
                  <Space direction='horizontal'>
                    <Avatar
                      size={52}
                      icon={<UserOutlined />}
                    />
                    <Flex vertical>
                      <Text strong>마장홍선</Text>
                      <Text type='secondary'>ghdtjs0417@gmail.com</Text>
                    </Flex>
                  </Space>

                  {/* {false ? ( */}
                  {true ? (
                    <>
                      <Divider style={{ margin: '12px 0' }} />

                      <Flex vertical>
                        <Button
                          type='text'
                          icon={<LogoutOutlined />}
                          style={{
                            paddingLeft: '4px',
                            justifyContent: 'flex-start',
                          }}
                        >
                            로그아웃
                        </Button>
                      </Flex>
                    </>
                  ) : null}
                </Flex>
                // <div style={{ width: '100%' }}>aaa</div>
              )}
              trigger='click'
            >
              <Avatar size='small' icon={<UserOutlined />} />
            </Popover>
          ) : (
            <Button size='small'>로그인</Button>
          )}
        </Right>
        <Global
          styles={{
            '.ant-popover': {
              width: '100%',
              padding: '0 8px',
            }
          }}
        />
      </Header>
      <Content style={{ overflow: 'auto' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

const Left = styled.div``

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  height: 24px;
`

const Right = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`