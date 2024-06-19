// import { getDefaultStore } from 'jotai'

// import { ClientAtom } from '@/atom'

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export type LoggedInUser = {
  id: number,
  name: string,
  email: string,
  profile: string | null,
}

export async function login(): Promise<LoggedInUser> {
  // const client = getDefaultStore().get(ClientAtom)
  await delay(200)

  return {
    id: 1,
    name: '마장홍선',
    email: 'ghdtjs@gmail.com',
    profile: null,
  }
}

export type JobReq = {
  file: File,
  count: number,
  direction: string,
  countPerPage: number,
  side: string,
}

export async function createJob(job: JobReq): Promise<void> {
  console.log('job', job)

  await delay(1000)
}
