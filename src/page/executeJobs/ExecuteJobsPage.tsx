import { Flex, List, Tag, Button, Spin } from 'antd'

import { useExecuteJobsPage } from './useExecuteJobsPage'

export function ExecuteJobsPage() {
  const {
    jobs,
    isFetchingJobs,
    isLoadingJobs,
    isExecutingPrinter,
    isPolling,
    onClickExecute,
  } = useExecuteJobsPage()

  return (
    <Flex vertical style={{ height: '100%' }}>
      <Flex flex='1 1 auto'>
        <List
          dataSource={jobs}
          loading={isLoadingJobs}
          header={(<Spin spinning={!isLoadingJobs && isFetchingJobs} />)}
          renderItem={(job) => (
            <List.Item
              key={job.id}
              actions={[
                <Tag>{job.status}</Tag>
              ]}
            >
              <List.Item.Meta
                title={job.name}
                // description={}
              />
            </List.Item>
          )}
        />
      </Flex>

      <Flex flex='0 0 auto'>
        <Button
          disabled={!jobs}
          loading={isExecutingPrinter || isPolling}
          onClick={onClickExecute}
          type='primary'
          block
          size='large'
          style={{
            margin: '0 8px 16px',
          }}
        >
          🖨️ 프린트 실행
        </Button>
      </Flex>
    </Flex>
  )
}