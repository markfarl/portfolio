import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '@/pages/Home'
import Skills from '@/pages/Skills'
import ReactSkill from "@/view/ReactSkill";
import TypescriptSkill from "@/view/TypescriptSkill";
import NodejsSkill from "@/view/NodejsSkill";
import TestingSkill from "@/view/TestingSkill";
import HtmlcssSkill from "@/view/HtmlcssSkill";
import WebapiSkill from "@/view/WebapiSkill";
import AISkill from "@/view/AISkill";

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
          <Route
            path="unittest"
            element={<TestingSkill />}
          />
          <Route
            path="htmlcss"
            element={<HtmlcssSkill />}
          />
          <Route
            path="webapi"
            element={<WebapiSkill />}
          />
          <Route
            path="ai"
            element={<AISkill />}
          />
        </Route>
      </Routes>
    </HashRouter>
  )
}