export default function TestingSkill() {
  return (
    <div className="p-5">
      <p className="mb-5">Testing frameworks I have worked on extensively or in some capacity:</p>
      <ul className="ml-10 list-disc">
        <li>Unit Testing
          <ul className="ml-10 list-disc">
            <li>Jest</li>
            <li>Mocha</li>
            <li>Vitest</li>
          </ul>
        </li>
        <li>E2E
          <ul className="ml-10 list-disc">
            <li>Cypress</li>
            <li>Puppeteer</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}