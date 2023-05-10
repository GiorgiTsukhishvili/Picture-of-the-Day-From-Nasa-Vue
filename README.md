<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Picture Of The Day Nasa</h1>
</div>

---

Picture Of The Day Nasa is app where users can see daily pictures from the Nasa and add them to favorite pictures to favorites section in order to save them.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

#

### Prerequisites

- <img src="readme/assets/node.png" width="25" style="position: relative; top: 8px" /> _Node JS @14.X and up_
- <img src="readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> _npm @6 and up_
- <img src="readme/assets/typescript.png" width="20" style="position: relative; top: 6px" /> *TypeScript@4.9.3.X and up*

#

### Tech Stack

- <img src="readme/assets/vue.png" height="18" style="position: relative; top: 4px" /> [Vue @3.2.47](https://vuejs.org/) - front-end framework.
- <img src="readme/assets/axios.svg" height="18" style="position: relative; top: 4px; width: 18px" /> [axios @1.2.2](https://axios-http.com/) - Promise based HTTP client for the browser and node.js.
- <img src="readme/assets/tailwind.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Tailwind @3.2.4](https://tailwindcss.com/) - Tailwind CSS is an open source CSS framework.

#

### Getting Started

1\. First of all you need to clone Movie Epic Quotes repository from github:

```sh
git clone https://github.com/GiorgiTsukhishvili/Picture-of-the-Day-From-Nasa-Vue.git
```

2\. Next step requires install all the dependencies.

```sh
npm ci
```

or

```sh
yarn
```

#

### Project Structure

```bash
├─── readme   # readme assets
├─── public      # public folder
├─── src    # src folder
│   ├─── assets
│   ├─── components
│   ├─── router
│   ├─── store
│   ├─── types
│   ├─── 404.tsx
│   ├─── main.ts
│   ├─── App.vue
- .eslintrc.cjs
- .prettierrc.js
- package.json
- tsconfig.json
- tailwind.config.cjs
- vite.config.ts
- .gitignore
- README.md
- postcss.config.cjs

```

#

### Deployment

In order to deploy project on the server you must build existing Movie Epic Quotes from terminal:

```sh
npm run build
```
