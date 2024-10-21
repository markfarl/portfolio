import Router from "@/components/Router"
import ContactForm from "./components/ContactForm"
import { useColorScheme } from "./contexts/ColorSchemeContext"


function App() {
  const { colorSchemeClass } = useColorScheme()
  return (
    <div className={`${colorSchemeClass.textColor} ${colorSchemeClass.gradientBK}`}>
      <Router />
      <footer className={`border-t-4 ${colorSchemeClass.borderLine} ${colorSchemeClass.tilesBk}`}>
        <div className="container md:mx-auto max-w-screen-xl pb-3">
          <ContactForm />
        </div>
      </footer>
    </div>
  )
}

export default App
