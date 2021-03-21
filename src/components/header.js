import React from "react"
import { injectIntl, changeLocale } from "gatsby-plugin-intl"

const Header = injectIntl(({ intl }) => {
  return (
    <div>
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div class="flex">
          <div class="max-w-xl ">
            <h2 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {intl.formatMessage({ id: "heading" })}

              <span role="img" aria-label="morocco">
                🇲🇦
              </span>
            </h2>
            <p class="mt-5 text-xl text-gray-800">
              {intl.formatMessage({ id: "description" })}
            </p>
          </div>
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
            >
              Language
            </label>
            <select
              onChange={e => changeLocale(e.target.value)}
              id="location"
              name="location"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="en" selected>
                English
              </option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Header
