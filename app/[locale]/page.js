import Hero, { ServicesIndex } from "@/components/Hero"

export default function Home() {
  return (
    <main className=" min-h-screen w-full">
      <Hero></Hero>
      <ServicesIndex />
    </main>
  )
}
