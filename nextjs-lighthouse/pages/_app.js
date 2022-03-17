import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

export function reportWebVitals(metric) {
  console.log(metric)
}
