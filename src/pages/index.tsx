import React from "react"
import Head from "next/head"
import HomeMain from "../styles/pages/home"

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Next-Setup</title>
      </Head>
      <HomeMain>
        <h1>Hello World! 🧑‍🚀🚀🚀</h1>
        <h2>Next Default Setup</h2>
        <nav>
          <ul>
            <li>Next</li>
            <li>TypeScript</li>
            <li>Styled-Components</li>
            <li>ESLint</li>
            <li>Babel</li>
          </ul>
        </nav>
      </HomeMain>
    </div>
  )
}

export default Home
