import SkillTiles from "@/components/SkillTiles"
import Header from "@/components/Header"
import { useColorScheme } from "@/contexts/ColorSchemeContext"
import { useEffect } from "react"

const scrollCallback = () => {
  // Smoothly scroll to the very top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function Home() {
  const { colorSchemeClass } = useColorScheme()

  // Run only when Home mounts (i.e., when route becomes Home)
  useEffect(() => {
    scrollCallback()
  }, [])

  return (
    <>
      <Header />
      <main className={`transform transition duration-200 border-t-2 pb-10 ${colorSchemeClass.borderLine}`}>
        <SkillTiles currentTile={"/"} />
      </main>
    </>
  )
}