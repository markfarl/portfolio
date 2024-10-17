import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '@/pages/Home'
import Skills from '@/pages/Skills'
import ReactSkill from "@/view/ReactSkill";
import TypescriptSkill from "@/view/TypescriptSkill";
import NodejsSkill from "@/view/NodejsSkill";

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
          <Route
            path="typescript"
            element={<TypescriptSkill />}
          />
          <Route
            path="nodejs"
            element={<NodejsSkill />}
          />
        </Route>
      </Routes>
    </HashRouter>
  )
}