import { Link } from "react-router-dom"
import reactLogo from "@/assets/react.png"
import tsLogo from "@/assets/typescript.png"
import nodeLogo from "@/assets/nodejs.png"
import unitLogo from "@/assets/unittest.png"
import htmlLogo from "@/assets/htmlcss.png"
import apiLogo from "@/assets/webapi.png"


type SkillArrayType = {
  name: string,
  href: string,
  img: string
}[]

const skillArray: SkillArrayType = [
  {
    name: "React",
    href: "/react",
    img: reactLogo,
  },
  {
    name: "Typescript",
    href: "/typescript",
    img: tsLogo,
  },
  {
    name: "Nodejs",
    href: "/nodejs",
    img: nodeLogo,
  },
  {
    name: "Unit Testing",
    href: "/unittest",
    img: unitLogo,
  },
  {
    name: "HTML/CSS",
    href: "/htmlcss",
    img: htmlLogo,
  },
  {
    name: "Web services/API",
    href: "/webapi",
    img: apiLogo,
  },
]


export default function SkillTiles() {
  return (
    <div className="container md:mx-auto max-w-screen-xl p-16 sm:p-5 xl:p-0">
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-10">

        {skillArray.map((element) => {
          return (<Link to={element.href}>
            <div className="transform transition duration-200 hover:scale-105 hover:animate-pulse border-4 w-full h-0 pb-full  border-cyan-line main-tiles bg-main-tiles">
              <div className="p-3 text-center">
                <img src={element.img} />
                <p className="mt-5 reactP sm:">{element.name}</p>
              </div>
            </div>
          </Link>)
        })}

      </section>
    </div>
  )
}