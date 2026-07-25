import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ValueProp } from "@/components/value-prop"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ValueProp />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
