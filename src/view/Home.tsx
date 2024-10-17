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
      <footer className="border-t-4 border-cyan-line bg-main-tiles">
        <div className="container md:mx-auto max-w-screen-xl pb-3">
          <ContactForm />
        </div>
      </footer>
    </>
  )
}