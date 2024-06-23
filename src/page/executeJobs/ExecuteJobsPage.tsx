import { Flex, List, Tag, Button, Spin } from 'antd'
import { formatInTimeZone } from 'date-fns-tz'

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
      <Flex
        flex='1 1 auto'
        vertical
        style={{ padding: '0 8px' }}
      >
        <List
          dataSource={jobs}
          loading={isLoadingJobs}
          header={isPolling ? (
            <Spin
              spinning={!isLoadingJobs && isFetchingJobs}
              size='small'
              tip='최신 상태 조회중'
            >
              <div style={{ padding: '20px' }} />
            </Spin>
          ) : null}
          renderItem={(job) => (
            <List.Item
              key={job.id}
              actions={[
                <Tag>{job.status}</Tag>
              ]}
            >
              <List.Item.Meta
                title={job.name}
                description={(
                  <>
                    <strong>{`${job.pageCount}페이지`} </strong>
                    <span>|</span>
                    <span> {formatInTimeZone(job.createdAt, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss')}</span>
                  </>
                )}
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