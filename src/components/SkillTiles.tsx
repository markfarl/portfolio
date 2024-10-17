import { skillArray } from "@/constants/skillsArray"
import { Link } from "react-router-dom"

export default function SkillTiles() {
  return (
    <div className="container md:mx-auto max-w-screen-xl p-9 sm:p-5 xl:p-0">
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-10">

        {skillArray.map((element, idx) => {
          return (<Link key={`id_${idx}`} to={element.href}>
            <div className="transform transition duration-200 hover:scale-105 hover:animate-pulse border-4 w-full h-0 pb-full  border-cyan-line main-tiles bg-main-tiles">
              <div className="p-3 text-center">
                <img src={element.img} />
                <p className="mt-5 font-Bowlby uppercase text-2xl xl:text-3xl">{element.name}</p>
              </div>
            </div>
          </Link>)
        })}

      </section>
    </div>
  )
}