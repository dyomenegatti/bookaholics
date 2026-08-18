import Header from './layout/Header'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'

export default function App() {
  return (
    <>
      <Header />

      <main className='pt-28 flex flex-col gap-6 px-12'>
        <Hero />
        <HowItWorks />
      </main>
    </>
  )
}
