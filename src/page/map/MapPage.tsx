import { Suspense, memo } from 'react'
import styled from '@emotion/styled'

import { LaziedPrinterMap } from './component'

export const MapPage = memo(function () {
  return (
    <>
      <div id='_map' style={{ display: 'none' }} />
      <Container id='map'>
        <Suspense fallback={<div>{/* TODO */}</div>}>
          <LaziedPrinterMap />
        </Suspense>
      </Container>
    </>
  )
})

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`