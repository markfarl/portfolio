import { skillArray } from "@/constants/skillsArray"
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom"
import Header from "@/components/Header"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { useColorScheme } from "@/contexts/ColorSchemeContext"
import SkillTiles from "@/components/SkillTiles"

export default function Skills() {
  const { colorSchemeClass } = useColorScheme()
  const scrollCallback = () => {
    const element = document.getElementById('topRef')
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const location = useLocation();

  useEffect(() => {
    scrollCallback()
  }, [location.pathname])

  // Resolve the current tile entry to show its image in the content area
  const getImg = skillArray.find(elem => elem.href === location.pathname)

  // One-time animate-in for the large content area when page first opens
  const [isAnimatingIn, setIsAnimatingIn] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setIsAnimatingIn(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Header />
      <main className={`transform transition duration-200 border-t-2 pb-10 ${colorSchemeClass.borderLine}`}>

        <div className="container md:mx-auto max-w-screen-xl p-8 xl:p-0">
          <section id="topRef" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 gap-3 mt-10">
            <div className={`${isAnimatingIn ? "animate-in fade-in slide-in-from-top duration-500" : "transform transition duration-200"} border-2 row-span-3 sm:col-span-3 ${colorSchemeClass.borderLine} main-tiles ${colorSchemeClass.tilesBk}`}>
              {getImg?.img && (
                <div className="p-3 text-center">
                  <img src={getImg.img} alt="Selected tile" className="mx-auto max-h-24 object-contain" />
                </div>
              )}
              <Outlet />
            </div>

            <Link to={`/`}>
              <div className={`transform transition duration-200 hover:scale-105 border-2 w-[40px] h-[40px] flex items-center justify-center ${colorSchemeClass.borderLine} main-tiles ${colorSchemeClass.tilesBk}`}>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </div>
            </Link>

          </section>


        </div>
        <SkillTiles currentTile={location.pathname} />
      </main>
    </>
  )
}