import {
  Upload,
  Button,
  Flex,
  Typography,
} from 'antd'
import { FileAddTwoTone } from '@ant-design/icons'

import { useHomePage } from './useHomePage'

const { Title, Text } = Typography

export function HomePage() {
  const {
    loginStatus,
    onClickUpload,
    onUploadFile,
    // onClickPendingJobInfo,
    // onClickWaitingInfo,
    onClickFindPrinter,
  } = useHomePage()

  return (
    <Flex vertical style={{ height: '100%' }}>
      <Flex flex='1 1 auto' vertical justify='center' align='center'>
        <Flex vertical align='center'>
          <Upload
            maxCount={1}
            accept='application/pdf'
            beforeUpload={() => false}
            itemRender={() => null}
            onChange={onUploadFile}
            disabled={loginStatus !== 'login'}
          >
            <Flex onClick={onClickUpload} vertical align='center'>
              <FileAddTwoTone style={{ fontSize: '100px' }} />
              <Title level={2}>
                {loginStatus === 'logout'
                  ? '로그인 후 파일 업로드'
                  : loginStatus === 'login'
                    ? '파일 업로드'
                    : <>&nbsp;</>
                }
              </Title>
            </Flex>
          </Upload>
          <Text type='secondary'>&nbsp;</Text>
        </Flex>
      </Flex>
      <Flex flex='0 0 auto'>
        <Button
          onClick={onClickFindPrinter}
          type='primary'
          block
          size='large'
          style={{
            margin: '0 8px 16px',
          }}
        >
          📍 프린터 위치 찾기
        </Button>
      </Flex>
    </Flex>
  )
}