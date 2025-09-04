import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"

import { MemoryRouter, Route, Routes } from "react-router-dom"
import { ColorSchemeProvider } from "@/contexts/ColorSchemeContext"

// Mock lightweight versions of child components to keep tests focused on Skills.tsx
vi.mock("@/components/Header", () => ({
  default: () => <div data-testid="header">Header</div>,
}))

vi.mock("@/components/SkillTiles", () => ({
  default: ({ currentTile }: { currentTile: string }) => (
    <div data-testid="skill-tiles">{currentTile}</div>
  ),
}))

// Important: import after mocks so the component uses the mocks
import Skills from "./Skills"

function renderWithProviders(initialPath = "/skills/react") {
  return render(
    <ColorSchemeProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Routes>
          <Route path="/" element={<div data-testid="home">Home</div>} />
          <Route path="/skills/*" element={<Skills />}>
            {/* Provide a child route to populate the <Outlet /> */}
            <Route path=":name" element={<div data-testid="outlet">Outlet</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    </ColorSchemeProvider>
  )
}

describe("Skills page", () => {
  const originalScrollTo = window.scrollTo

  beforeEach(() => {
    // Stub scrollTo
    window.scrollTo = vi.fn()

    // Ensure a known scrollY
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 50,
      writable: true,
    })
  })

  afterEach(() => {
    window.scrollTo = originalScrollTo
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it("renders Header and SkillTiles with the current route", () => {
    renderWithProviders("/skills/react")

    expect(screen.getByTestId("header")).toBeInTheDocument()
    expect(screen.getByTestId("skill-tiles")).toHaveTextContent("/skills/react")
    // Outlet content is present (from our test route)
    expect(screen.getByTestId("outlet")).toBeInTheDocument()
  })

  it("scrolls to the #topRef element on mount (with smooth behavior)", async () => {
    const getBcrSpy = vi
      .spyOn(HTMLElement.prototype, "getBoundingClientRect")
      .mockReturnValue({
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as unknown as DOMRect)

    renderWithProviders("/skills/react")

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 100 + 50 - 20, // top + scrollY - 20
        behavior: "smooth",
      })
    })

    getBcrSpy.mockRestore()
  })

  it("shows the selected skill image when the route matches a skill", () => {
    renderWithProviders("/skills/react")
    // Component uses alt="Selected tile"
    expect(screen.getByAltText("Selected tile")).toBeInTheDocument()
  })

  it("does not show an image if the route does not match a skill", () => {
    renderWithProviders("/skills/unknown")
    expect(screen.queryByAltText("Selected tile")).toBeNull()
  })

})