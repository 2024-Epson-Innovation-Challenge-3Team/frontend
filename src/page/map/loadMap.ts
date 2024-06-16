export function loadMap() {
  if (window.naver?.maps) {
    return
  }

  return new Promise<void>((resolve, reject) => {
    const head = document.head || document.getElementsByTagName('head')[0]
    const naverMapsScript = document.createElement('script')

    naverMapsScript.type = 'text/javascript'
    naverMapsScript.async = true
    naverMapsScript.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=mqx1mstodo`

    naverMapsScript.onload = () => {
      naverMapsScript.onload = null
      naverMapsScript.onerror = null

      resolve()
    }

    naverMapsScript.onerror = () => {
      naverMapsScript.onload = null
      naverMapsScript.onerror = null

      reject(new Error(`Fail to load ${naverMapsScript.src}`))
    }

    head.appendChild(naverMapsScript)
  })
}