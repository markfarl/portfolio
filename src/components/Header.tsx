import { Link } from "react-router-dom";
import { socialIconStyle, linkEffect } from "@/constants/styleClasses"
import { colorClasses, useColorScheme } from "@/contexts/ColorSchemeContext"
import { ColorSchemeType } from "@/types/ColorSchemeTypes"

export default function Header() {


  const { colorSchemeData, setColorSchemeData, colorSchemeClass } = useColorScheme()

  return (
    <div className={`${colorSchemeClass.gradientBK}`}>
      <header className={`container md:mx-auto max-w-screen-xl bg-left`}>
        <div className={`${colorSchemeClass.headerBk} grid md:grid-cols-3 items-start`}>
          <div className="md:col-span-3 h-20px md:h-80px">

          </div>
          <div className="grid md:col-span-2 pl-5 xl:pl-0">
            <div className={`border-b-2 ${colorSchemeClass.borderLine}`}>
              <h1 className="font-bold font-Source text-3xl sm:text-5xl">
                MARK FARRELL.
              </h1>
            </div>
            <div className="h-80px">
              <h2 className={`font-Source mt-3 ${colorSchemeClass.textColorLine} text-2xl sm:text-4xl`}>
                SOFTWARE ENGINEER
              </h2>
            </div>
            <div className="md:w-10/12">
              <p className="mt-3">Hi! I’m a Software Engineer with over 10 years of industry experience, specialising in building responsive, dynamic, and user-friendly web applications. My current toolkit includes React, TypeScript, Tailwind CSS, and Vite/Vitest, but I’ve also worked extensively with a wide range of frontend frameworks and libraries over the years. I embrace AI in my development process, utilising Windsurf for my IDE configured with MCP servers.</p> 
              <p className="mt-3"> Beyond the frontend, I’ve developed Node.js backend services and APIs, integrating with cloud platforms to deliver scalable and performant solutions. My experience spans the full stack, allowing me to bridge the gap between user experience and robust infrastructure.</p>
              <p className="mt-3">In addition to software engineering, I’m proficient in multimedia and have a strong understanding of modern design systems. This allows me to collaborate effectively with designers, translate creative concepts into functional interfaces, and ensure consistency across applications. My ability to bridge the gap between design and development helps deliver polished, user-focused experiences.</p>
              <p className="mt-3">Take a look at some of my previous projects below</p>
            </div>
          </div>
          <div className="be-contain relative mt-10 md:mt-0">
            <div className={`border-empty ${colorSchemeClass.borderLine}`}></div>
            <img className={`head ${colorSchemeClass.borderLine}`} src={colorSchemeClass.img} />
          </div>
          <div className="md:col-span-2 pt-5 pb-5 pl-5 xl:pl-0">
            <Link to="https://github.com/markfarl/portfolio" target="_blank">
              <span className="[&>svg]:h-10 [&>svg]:w-10 mr-10 inline">

                <svg
                  className={socialIconStyle}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512">
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>

              </span>
            </Link>
            <Link to="https://www.linkedin.com/in/markfarl/" target="_blank">
              <span className="[&>svg]:h-10 [&>svg]:w-10 inline">
                <svg
                  className={socialIconStyle}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </Link>
            {Object.entries(colorClasses).map(([key, value]) => {
              return (
                <div
                  key={key}
                  className={`${linkEffect} colorSchemeSquare ${value.selectColor} ${colorSchemeData == key ? "border-2" : ""} `}
                  onClick={() => setColorSchemeData(key as ColorSchemeType)}
                >
                </div>
              )
            })
            }
          </div>
        </div>




      </header >
    </div>
  )
}