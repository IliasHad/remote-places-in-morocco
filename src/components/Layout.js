import React from "react"
import SEO from "./SEO"
import Header from "../components/header"
const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div class="px-4 sm:px-6 lg:px-8">{children}</div>
      </div>
    </div>
  )
}

export default Layout
