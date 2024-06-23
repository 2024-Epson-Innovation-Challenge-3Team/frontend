import axios from 'axios'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export type AssignPrinterResult = {
  type: 'assignPrinter',
  printerId: number,
  printerName: string,
}

export type WaitResult = {
  type: 'wait',
  queueNumber: number,
}

export type NoFileResult = {
  type: 'noFile',
}

export type LocationVerificationResult = AssignPrinterResult | WaitResult | NoFileResult

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

// TODO: printerId 인자로 받기
export async function executePrinter() {

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