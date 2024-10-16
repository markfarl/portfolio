import { HashRouter, Routes, Route } from "react-router-dom";
import Home from '@/view/Home'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:skill"
          element={<Home />}
        />
      </Routes>
    </HashRouter>
  )
}