import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

config.autoAddCss = false
library.add(fab)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
