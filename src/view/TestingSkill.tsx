export default function TestingSkill() {
  return (
    <div className="p-5">
      <h2>Testing & QA Engineering</h2>
      <p className="mb-5">I am proficient in designing and implementing comprehensive test suites across all layers of the application stack to ensure robust, bug-free software.</p>
      <ul className="mb-5 ml-10 list-disc">
        <li><strong>Unit Testing:</strong> Experienced with Jest, Mocha, and Vitest for testing individual functions and components in isolation.</li>
        <li><strong>End-to-End (E2E) & Integration Testing:</strong> Extensive experience using Cypress to create reliable, flakiness-free tests that validate critical user journeys and application integration points. Additional experience with Puppeteer for browser automation and scripting.
        </li>
      </ul>
      <p className="mb-5">I have implemented and configured automated testing pipelines to serve as quality gates for both staging and production environments. This process involves executing a comprehensive suite of unit tests with every commit, followed by a full end-to-end test run using Cypress against the staging environment upon deployment. Only after all tests pass is a production deployment initiated, ensuring that only validated, stable code is released to end-users.</p>
    </div>
  )
}