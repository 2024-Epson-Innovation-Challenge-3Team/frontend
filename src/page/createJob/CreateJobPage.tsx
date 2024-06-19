import {
  Form,
  InputNumber,
  Radio,
  Select,
  Button,
  Flex,
} from 'antd'
import { FormItem } from 'react-hook-form-antd'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { Document, Page } from 'react-pdf'

import { useCreateJobPage } from './useCreateJobPage'

export function CreateJobPage() {
  const {
    file,
    control,
    onSubmit,
    isCreating,
  } = useCreateJobPage()

  return (
    <Form
      onFinish={onSubmit}
      layout='horizontal'
      style={{ height: '100%' }}
    >
      <Global
        styles={css`
          .ant-form-item-label {
            text-align: start !important;
          }
          .ant-form-item-control-input-content {
            display: flex;
            justify-content: flex-end;
          }
          .ant-form-item {
            margin-bottom: 0;
          }
        `}
      />

      <Flex vertical style={{ height: '100%' }}>
        <Flex flex='1 1 auto' vertical>
          {/* <Document file={file} >
            <Page pageNumber={1} />
          </Document> */}

          <Flex
            vertical
            style={{
              margin: '16px 8px',
              border: '1px solid #ccc',
              padding: '0 8px',
              borderRadius: '8px',
            }}
          >
            <FieldItemWrapper>
              <FormItem
                control={control}
                name='count'
                label='부 수'
                style={{ padding: '0 8px' }}
              >
                <InputNumber style={{ width: '52px' }} />
              </FormItem>
            </FieldItemWrapper>

            <FieldItemWrapper>
              <FormItem
                control={control}
                name='direction'
                label='방향'
                style={{ padding: '0 8px' }}
              >
                <Radio.Group>
                  <Radio value='vertical'>세로</Radio>
                  <Radio value='horizontal'>가로</Radio>
                </Radio.Group>
              </FormItem>
            </FieldItemWrapper>

            <FieldItemWrapper>
              <FormItem
                control={control}
                name='countPerPage'
                label='모아찍기'
                style={{ padding: '0 8px' }}
              >
                <Select
                  style={{ width: '52px' }}
                  options={[
                    { value: 1, label: '1' },
                    { value: 2, label: '2' },
                    { value: 4, label: '4' },
                    { value: 6, label: '6' },
                    { value: 8, label: '8' },
                  ]}
                />
              </FormItem>
            </FieldItemWrapper>

            <FieldItemWrapper>
              <FormItem
                control={control}
                name='side'
                label='단면/양면'
                style={{ padding: '0 8px' }}
              >
                <Radio.Group>
                  <Radio value='single'>단면</Radio>
                  <Radio value='double'>양면</Radio>
                </Radio.Group>
              </FormItem>
            </FieldItemWrapper>
          </Flex>
        </Flex>
        <Flex flex='0 0 auto'>
          <Form.Item
            style={{
              width: '100%',
              margin: '0 8px 16px',
            }}
          >
            <Button
              loading={isCreating}
              type='primary'
              htmlType='submit'
              block
              size='large'
            >
              🖨️ 프린트 업로드
            </Button>
          </Form.Item>
        </Flex>
      </Flex>

    </Form>
  )
}

const FieldItemWrapper = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`