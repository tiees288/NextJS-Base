import '../styles/globals.css'
// import '../styles/loader.css'
import type { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RecoilRoot } from "recoil";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false)
  const queryClient = new QueryClient()


  useEffect(() => {
    router.events.on('routeChangeStart', (() => setLoading(true)))
    router.events.on('routeChangeComplete', (() => setLoading(false)))
    router.events.on('routeChangeError', (() => setLoading(false)))

    return () => {
      router.events.off('routeChangeStart', (() => setLoading(true)))
      router.events.off('routeChangeComplete', (() => setLoading(false)))
      router.events.off('routeChangeError', (() => setLoading(false)))
    }
  }, [])

  const getLayout = Component.getLayout ?? ((page) => page)
  const client = new QueryClient(
    {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })

  return getLayout(
    <>
      <RecoilRoot>
        <QueryClientProvider client={client}>
          {/* <LoadingScene isLoading={isLoading} /> */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )

}