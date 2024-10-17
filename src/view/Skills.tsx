import ContactForm from "@/components/ContactForm"
import { Link, Outlet } from "react-router-dom"
import Header from "@/components/Header"


export default function Skills() {

  return (
    <>
      <Header />
      <main className="border-t-4 pb-10 border-cyan-line bg-main-content">
 
        <div className="container md:mx-auto max-w-screen-xl p-16 xl:p-0">
          <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-rows-2 gap-3 mt-10">
            <Link to={`/`}>
              <div className="transform transition duration-200 hover:scale-105 border-4 w-full h-0 pb-full  border-cyan-line main-tiles bg-main-tiles">
                <div className="p-3 text-center">
                  <p className="mt-5 reactP">{`<<`} Back</p>
                </div>
              </div>
            </Link>
            <div className="transform transition duration-200 hover:scale-105 border-4 w-full row-span-2 col-span-3 border-cyan-line main-tiles bg-main-tiles">

            <Outlet />
            </div>
          </section>
        </div>
        
      </main>
      <footer className="border-t-4 border-cyan-line bg-main-tiles">
        <div className="container md:mx-auto max-w-screen-xl pb-3">
          <ContactForm />
        </div>
      </footer>
    </>
  )
}