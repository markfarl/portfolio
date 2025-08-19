import { colorClasses } from "@/constants/colorSchemeClasss"
import { ColorSchemeProviderType, ColorSchemeType } from "@/types/ColorSchemeTypes"
import { createContext, useContext, useEffect, useState } from "react"

const colorSchemeDefault: ColorSchemeType = "dark"

const ColorSchemeContext = createContext<ColorSchemeProviderType>({
  colorSchemeData: colorSchemeDefault,
  setColorSchemeData: function (): void {
    throw new Error("Function not implemented.")
  },
  colorSchemeClass: colorClasses[colorSchemeDefault]
})

const useColorScheme = () => useContext(ColorSchemeContext)

function ColorSchemeProvider({ children }: { children: JSX.Element }) {
  const [colorSchemeClass, setColorSchemeClass] = useState(colorClasses[colorSchemeDefault])
  const [colorSchemeData, setColorSchemeData] = useState(colorSchemeDefault)

  useEffect(() => {
    setColorSchemeClass(colorClasses[colorSchemeData])
  }, [colorSchemeData])

  return (
    <ColorSchemeContext.Provider value={{ colorSchemeData, setColorSchemeData, colorSchemeClass }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export { ColorSchemeProvider, useColorScheme, colorClasses }