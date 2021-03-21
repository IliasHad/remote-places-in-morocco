import React from "react"
import SEO from "./SEO"
import Header from "../components/header"
import { Footer } from "../components/footer"

const Layout = ({ children, heading }) => {
  return (
    <div className="bg-gray-100 h-full pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header heading={heading} />
        <div class="px-4 sm:px-6 lg:px-8">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
