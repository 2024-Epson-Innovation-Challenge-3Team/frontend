import { Flex, List } from 'antd'
import { formatInTimeZone } from 'date-fns-tz'

import { useJobsPage } from './useJobsPage'

export function JobsPage() {
  const {
    jobs,
    isFetchingJobs,
  } = useJobsPage()

  return (
    <Flex
      vertical
      style={{ padding: '0 8px' }}
    >
      <List
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