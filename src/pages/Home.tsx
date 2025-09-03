import SkillTiles from "@/components/SkillTiles"
import Header from "@/components/Header"
import { useColorScheme } from "@/contexts/ColorSchemeContext"


export default function Home() {
  const { colorSchemeClass } = useColorScheme()

  return (
    <>
      <Header />
      <main className={`transform transition duration-200 border-t-2 pb-10 ${colorSchemeClass.borderLine}`}>
        <SkillTiles currentTile={"/"} />
      </main>
    </>
  )
}