import type { AppProps } from 'next/app'
import 'nextra-theme-blog/style.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
