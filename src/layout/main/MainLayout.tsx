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
import { Global, css } from '@emotion/react'

import { useMainLayout } from './useMainLayout'

const { Header, Content } = Layout
const { Text } = Typography

export function MainLayout() {
  const {
    my,
    isLoggedOut,
    isHome,
  } = useMainLayout()

  return (
    <Layout style={{ height: '100%' }}>
      <Header
        style={{
          background: '#fff',
          borderBottom: '1px solid #efefef',
          padding: '0 8px',
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
          {my ? (
            <Popover
              content={(
                <Flex vertical>
                  <Space direction='horizontal'>
                    <Avatar
                      size={52}
                      icon={<UserOutlined />}
                    />
                    <Flex vertical>
                      <Text strong>{my.name}</Text>
                      <Text type='secondary'>{my.email}</Text>
                    </Flex>
                  </Space>

                  {isHome ? (
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
              )}
              trigger='click'
              arrow={false}
            >
              <Avatar size='small' icon={<UserOutlined />} />
            </Popover>
          ) : isLoggedOut ? (
            <Button size='small'>로그인</Button>
          ) : null}
        </Right>
        <Global
          styles={css`
            .ant-popover {
              width: 100%;
              padding: 0 8px;
            }

            @media (min-width: 430px) {
              .ant-popover {
                padding: 0 calc(calc(calc(100% - 430px) / 2) + 8px);
              }
            }
          `}
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