import Hero, { ServicesIndex, ShowCaseIndex } from "@/components/Hero"

export default function Home() {
  return (
    <main className=" min-h-screen w-full">
      <Hero></Hero>
      <ServicesIndex />
      <ShowCaseIndex />
    </main>
  )
}
