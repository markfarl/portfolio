import Router from "@/components/Router"
import ContactForm from "./components/ContactForm"

function App() {
  return (
    <>
      <Router />
      <footer className="border-t-4 border-cyan-line bg-main-tiles">
        <div className="container md:mx-auto max-w-screen-xl pb-3">
          <ContactForm />
        </div>
      </footer>
    </>
  )
}

export default App
