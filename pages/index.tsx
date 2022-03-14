import type { NextPage } from 'next'
import Head from 'next/head'
import { CardWithIcon } from '../components/cards/CardWithIcon'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto h-screen">
      <Head>
        <title>Home</title>
        <meta name="description" content="Koki Sato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='max-w-7xl mx-auto px-4 sm:px-6 h-12'></header>
      <main className='content-center'>
        <h1 className='text-center text-2xl font-medium'>
          Koki Sato
        </h1>

        <h2 className='text-center text-xl'>
          software engineer @ ???
        </h2>

        <div>
          <CardWithIcon url='https://github.com/sato9818' icon='github' name='Github' />
          <CardWithIcon url='https://www.linkedin.com/in/koki-sato-83412b1b1/' icon='linkedin' name='LinkedIn' />
          <CardWithIcon url='https://qiita.com/kotsukotsu' name='Qiita' />
          <CardWithIcon url='https://atcoder.jp/users/sato9818' name='Atcoder' />
        </div>
      </main>
    </div>
  )
}

export default Home
