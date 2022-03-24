import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import LeftSection from '../components/LeftSection'
import RightSection from '../components/RightSection'

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex w-2/4 flex-col border bg-gray-800 pt-5 pl-5">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex gap-5 bg-transparent">
        <LeftSection />
        <RightSection />
      </main>
    </div>
  )
}

export default Home
