import { useCreateJobPage } from './useCreateJobPage'

export function CreateJobPage() {
  const {
    file,
  } = useCreateJobPage()

  return (
    <div>
      {file ? (
        <div>{file.name}</div>
      ) : null}
    </div>
  )
}