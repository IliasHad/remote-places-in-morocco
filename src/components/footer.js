import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

export const Footer = injectIntl(({ pageContext, intl }) => {
  return (
    <footer>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
        <div class="mt-8 md:mt-0 md:order-1">
          <a
            target="__blank"
            href="https://airtable.com/shrHWXsH5LkjaqNWw"
            class="text-center text-base text-gray-900"
          >
            {intl.formatMessage({ id: "footer" })}
          </a>
        </div>
      </div>
    </footer>
  )
})
