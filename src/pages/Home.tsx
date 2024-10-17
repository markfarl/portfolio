import ContactForm from "@/components/ContactForm"
import SkillTiles from "@/components/SkillTiles"
import { Link } from "react-router-dom"
import Header from "@/components/Header"


export default function Home() {

  return (
    <>
      <Header />
      <main className="border-t-4 pb-10 border-cyan-line bg-main-content">


        <SkillTiles />
      </main>
    </>
  )
}