export function insertTappayScript() {
  return new Promise(resolve => {
    const pa = document.createElement('script')
    pa.onload = () => {
      resolve()
    }
    pa.type = 'text/javascript'
    pa.charset = 'utf-8'
    pa.async = true
    pa.src = 'https://js.tappaysdk.com/tpdirect/v3'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(pa, s)
  })
}
