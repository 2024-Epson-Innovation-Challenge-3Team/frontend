import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export type LoggedInUser = {
  id: number,
  name: string,
  email: string,
  profile: string | null,
}

export async function login(): Promise<LoggedInUser> {
  await delay(200)

  return {
    id: 1,
    name: '마장홍선',
    email: 'ghdtjs@gmail.com',
    profile: null,
  }
}

export type AssignPrinterResult = {
  type: 'assignPrinter',
  printerId: string,
  printerName: string,
}

export type WaitResult = {
  type: 'wait',
  waitNumber: number,
}

export type NoFileResult = {
  type: 'noFile',
}

export type LocationVerificationResult = AssignPrinterResult | WaitResult | NoFileResult

// ✅
export async function verifyPrinter(printerId: string): Promise<LocationVerificationResult> {
  const { data: result } = await client.post('/print/QR', {
    printerId,
    printZoneId: 1,
  })

  return result.status === 'QUEUE'
    ? {
      type: 'wait',
      waitNumber: result.waitingNum,
    } : {
      type: 'assignPrinter',
      printerId,
      printerName: result.printName,
    }
}

export async function verifyZone(zoneId: number): Promise<LocationVerificationResult> {
  console.log(zoneId)

  await delay(3000)

  return {
    type: 'wait',
    waitNumber: 3,
  }
}

export type JobCreation = {
  file: File,
  name: string,
  copyCount: number, // 부 수
  direction: string, // ?
  perPageCount: number, // 모아찍기 ?
  side: string,
  originPageCount: number,
  pageCount: number,
  colorMode: string,
}

// ✅
export async function createJob(print: JobCreation) {
  const formData = new FormData()

  formData.append('files', print.file)
  formData.append('color_mode', print.colorMode)
  formData.append('2_sided', print.side === 'double' ? '' : 'none')
  formData.append('copies', print.copyCount.toString())
  formData.append('page_cnt', print.pageCount.toString())

  await client.post('/uploads', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
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
  createdAt: Date,
}

// ✅
export async function getJobs(): Promise<Job[]> {
  const { data: uploadedFiles } = await client.get('/users/uploads')

  return uploadedFiles.map((file) => ({
    id: file.uploadId,
    name: file.fileName,
    printCount: 1, // TODO
    direction: 'vertical', // TODO
    perPageCount: 1, // TODO
    side: 'single', // TODO
    originPageCount: 10, // TODO
    pageCount: file.pageCnt ?? 1,
    status: 'pending',
    createdAt: new Date(file.createDate),
  }))
}

export type WaitingStatus = {
  no: number,
}

// ✅
export async function getWaitingStatus(): Promise<WaitingStatus> {
  const { data: no } = await client.get('/queue/seq?printZoneId=1')

  await delay(2000)

  return {
    no,
  }
}

// ✅
export async function executePrinter(printerId: string) {
  await client.post('/print/execute', {
    printerId,
    printZoneId: 1,
  })
}

export type Printer = {
  id: number,
  name: string,
  address: string,
  busyLevel: string,
  lat: number,
  lng: number,
}

// ✅
export async function getPrinters(): Promise<Printer[]> {
  const { data: zones } = await client.get('/zone')

  return zones.map((zone) => ({
    id: 0, // TODO
    name: zone.zone_name,
    address: zone.address,
    busyLevel: zone.congestion >= 5
      ? 'full'
      : zone.congestion >= 1
        ? 'busy'
        : 'free',
    lat: zone.la,
    lng: zone.lo,
  }))
}