import { Flex, Statistic, List } from 'antd'
import { formatInTimeZone } from 'date-fns-tz'

import { useWaitingStatusPage } from './useWaitingStatusPage'

export function WaitingStatusPage() {
  const {
    waitingStatus,
    isFetchingWaitingStatus,
    jobs,
    isFetchingJobs,
  } = useWaitingStatusPage()

  return (
    <Flex
      vertical
      style={{ padding: '0 8px' }}
    >
      <Statistic
        style={{
          marginTop: '16px',
          padding: '0 64px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        title='대기 순번'
        value={waitingStatus?.no ?? ''}
        loading={isFetchingWaitingStatus}
      />
      <List
        style={{ marginTop: '16px' }}
        dataSource={jobs}
        loading={isFetchingJobs}
        renderItem={(job) => (
          <List.Item key={job.id}>
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
  )
}