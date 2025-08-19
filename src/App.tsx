import Router from "@/components/Router"
import ContactForm from "./components/ContactForm"
import { useColorScheme } from "./contexts/ColorSchemeContext"


function App() {
  const { colorSchemeClass } = useColorScheme()
  return (
    <>
      <div className={`bg ${colorSchemeClass.bgBack}`}></div>
      <div className={`bg bg2 ${colorSchemeClass.bgBack}`}></div>
      <div className={`bg bg3 ${colorSchemeClass.bgBack}`}></div>
      <div className={`${colorSchemeClass.textColor}`}>
        <Router />
        <footer className={`border-t-2 ${colorSchemeClass.borderLine} ${colorSchemeClass.tilesBk} bg-opacity-50`}>
          <div className="container md:mx-auto max-w-screen-xl pb-3">
            <ContactForm />
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
