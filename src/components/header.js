import React from "react"

const Header = () => {
  return (
    <div>
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="max-w-xl">
          <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Remote Places In Morocco{" "}
            <span role="img" aria-label="morocco">
              🇲🇦
            </span>
          </h2>
          <p class="mt-5 text-xl text-gray-800">
            A list of remote places in Morocco curated by the remote workers
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
