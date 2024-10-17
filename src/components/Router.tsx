import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '@/view/Home'
import Skills from '@/view/Skills'
import ReactSkill from "@/components/ReactSkill";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        >
          <Route
            path="react"
            element={<ReactSkill />}
          />
        </Route>
      </Routes>
    </HashRouter>
  )
}