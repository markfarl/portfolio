import { skillArray } from "@/constants/skillsArray"
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom"
import Header from "@/components/Header"
import { useEffect } from "react"
import { useColorScheme } from "@/contexts/ColorSchemeContext"
import SkillTiles from "@/components/SkillTiles"

export default function Skills() {
  const { colorSchemeClass } = useColorScheme()
  const scrollCallback = () => {
    const element = document.getElementById('topRef')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollCallback()
  }, [])

  const location = useLocation();
  const getImg = skillArray.find(elem => {
    return elem.href == location.pathname
  })

  return (
    <>
      <Header />
      <main className={`transform transition duration-200 border-t-2 pb-10 ${colorSchemeClass.borderLine} ${colorSchemeClass.mainContent}`}>

        <div className="container md:mx-auto max-w-screen-xl p-8 xl:p-0">
          <section id="topRef" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-3 mt-10">
            <Link to={`/`}>
              <div className={`transform transition duration-200 hover:scale-105 border-2 sm:w-full h-0 pb-full ${colorSchemeClass.borderLine} main-tiles ${colorSchemeClass.tilesBk}`}>
                <div className="p-3 text-center">
                  <img src={getImg?.img} />
                  <p className="mt-5 font-Source uppercase text-3xl">{`<<`} Back</p>
                </div>
              </div>
            </Link>
            <div className={`transform transition duration-200 border-2 row-span-3 sm:col-span-3 ${colorSchemeClass.borderLine} main-tiles ${colorSchemeClass.tilesBk}`}>
              <Outlet />
            </div>
          </section>


        </div>
        <SkillTiles />
      </main>
    </>
  )
}