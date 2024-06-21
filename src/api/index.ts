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

// deprecated
export async function createJob(job: JobReq): Promise<void> {
  console.log('job', job)

  await delay(1000)
}

export type AssignPrinterResult = {
  type: 'assignPrinter',
  printerId: number,
  printerName: string,
}

export type QueuedResult = {
  type: 'queued',
  queueNumber: number,
}

export type NoFileResult = {
  type: 'noFile',
}

export type LocationVerificationResult = AssignPrinterResult | QueuedResult | NoFileResult

// deprecated
export async function verifyZone(zoneId: number): Promise<LocationVerificationResult> {
  console.log(zoneId)

  await delay(3000)

  return {
    type: 'queued',
    queueNumber: 3,
  }
}







export async function verifyPrinter(printerId: number): Promise<LocationVerificationResult> {
  console.log(printerId)

  await delay(3000)

  return {
    type: 'assignPrinter',
    printerId: 1,
    printerName: '3',
  }
}

export type JobCreation = {
  file: File,
  name: string,
  printCount: number, // 부 수
  direction: string,
  perPageCount: number, // 모아찍기
  side: string,
  originPageCount: number,
  pageCount: number,
}

export async function createJob2(print: JobCreation) {
  await delay(2000)
}

export type Job = {
  id: number,
  name: string,
  printCount: number, // 부 수
  direction: string,
  perPageCount: number, // 모아찍기
  side: string,
  originPageCount: number,
  pageCount: number,
  status: string,
}

export async function getJobs(): Promise<Job[]> {
  await delay(1000)

  return [
    {
      id: 1,
      name: 'abc.pdf',
      printCount: 1,
      direction: 'vertical',
      perPageCount: 1,
      side: 'single',
      originPageCount: 10,
      pageCount: 10,
      status: 'pending',
    },
    {
      id: 2,
      name: 'motimoti.pdf',
      printCount: 2,
      direction: 'vertical',
      perPageCount: 2,
      side: 'single',
      originPageCount: 12,
      pageCount: 12,
      status: 'pending',
    },
    {
      id: 3,
      name: 'epson.pdf',
      printCount: 1,
      direction: 'vertical',
      perPageCount: 1,
      side: 'double',
      originPageCount: 5,
      pageCount: 3,
      status: 'pending',
    },
  ]
}

export type WaitingStatus = {

}

export async function getWaitingStatus(): Promise<WaitingStatus> {
  await delay(2000)

  return {}
}

export async function executePrinter() {

}

export type Printer = {
  id: number,
  name: string,
  busyLevel: string,
}

export async function getPrinters(): Promise<Printer[]> {
  await delay(2000)

  return [
    {
      id: 1,
      name: '1',
      busyLevel: 'free',
    },
    {
      id: 2,
      name: '2',
      busyLevel: 'busy',
    },
    {
      id: 3,
      name: '3',
      busyLevel: 'full',
    },
  ]
}