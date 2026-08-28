import { Footer } from './layout/Footer'
import Header from './layout/Header'
import Books from './sections/Books'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import JoinSection from './sections/JoinSection'

export default function App() {
  return (
    <>
      <Header />

      <main id='topo' className='pt-28 flex flex-col gap-24 bg-background/30'>
        <Hero />
        <HowItWorks />
        <Books />
        <JoinSection />
      </main>

      <Footer />
    </>
  )
}
