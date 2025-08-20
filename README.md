# Mark Farrell’s Portfolio

This repository powers the **Mark Farrell Portfolio**, a modern and responsive personal site built with React, TypeScript, Tailwind CSS, and Vite, complete with Vitest-powered unit testing.
This deploys to github pages at the URL https://markfarl.github.io/portfolio/#/

---

##  Tech Stack

| Technology | Description |
|------------|-------------|
| **React** | UI library for building dynamic user interfaces |
| **TypeScript** | Strong typing for safer, scalable code |
| **Tailwind CSS** | Utility-first styling for rapid and consistent design |
| **Vite** | Lightning-fast build tool and development server |
| **Vitest** | Fast and native unit testing framework |

---

##  Features

-  Elegant portfolio layout to showcase projects and skills  
-  Fully responsive—looks sharp on any device  
-  Type-safe architecture for reliability and maintainability  
-  Built with performance in mind: minimal bundle and fast loads  
-  Unit tests ensure components and utility logic are robust

---

##  Getting Started

These steps will get the project running on your local machine for development and testing:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/markfarl/portfolio.git
   cd portfolio
2. **Install dependencies via your preferred package manager:**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Navigate to `http://localhost:5173` to see your portfolio live.

4. **Run unit tests:**
   ```bash
   npm test
   # or
   yarn test
   ```
   This fires up Vitest to check your components and utils.

5. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```
##  Why This Works

- **TypeScript everywhere**: Enhances developer confidence and catches mistakes before runtime.  
- **Utility-first Tailwind**: Makes design iteration faster and more maintainable.  
- **Vite as the backbone**: Provides instant feedback during dev and optimized production builds.  
- **Vitest for testing**: Integrates seamlessly with your setup for quick and reliable testing results.

---

##  Deployment

This repository is setup to deploy to githib pages using github actions. steps in .github/workflows/build.yml

- Tests
- deploy

You can see build here https://markfarl.github.io/portfolio/#/
---

##  License

This project is open-source and available under the [MIT License](LICENSE).

---