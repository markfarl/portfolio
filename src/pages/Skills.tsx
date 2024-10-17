import ContactForm from "@/components/ContactForm"
import { skillArray } from "@/constants/skillsArray"
import { useLocation } from 'react-router-dom'
import { Link, Outlet } from "react-router-dom"
import Header from "@/components/Header"
import { useEffect  } from "react"


export default function Skills() {
 
  const scrollCallback = () => {
    const element = document.getElementById('topRef')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(()=>{
    scrollCallback()
  },[])

  const location = useLocation();
  const getImg = skillArray.find(elem => {
    return elem.href == location.pathname
  })

  return (
    <>
      <Header />
      <main className="border-t-4 pb-10 border-cyan-line bg-main-content">

        <div className="container md:mx-auto max-w-screen-xl p-16 xl:p-0">
          <section id="topRef" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-rows-3 lg:grid-rows-2 gap-3 mt-10">
            <Link to={`/`}>
              <div className="transform transition duration-200 hover:scale-105 border-4 sm:w-full h-0 pb-full  border-cyan-line main-tiles bg-main-tiles">
                <div className="p-3 text-center">
                  <img src={getImg?.img} />
                  <p className="mt-5 font-Bowlby uppercase text-3xl">{`<<`} Back</p>
                </div>
              </div>
            </Link>
            <div className="transform transition duration-200 hover:scale-105 border-4 row-span-2 sm:col-span-3 border-cyan-line main-tiles bg-main-tiles">
              <Outlet />
            </div>
          </section>


        </div>

      </main>
    </>
  )
}