import React from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const ListItem = injectIntl(({ node, intl }) => {
  console.log(node)
  return (
    <>
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex flex-col md:flex-row items-center justify-between p-6 space-x-6">
          <div
            style={{ borderRadius: "50%" }}
            class="h-24 w-24 flex flex-col gap-2 justify-center content-center
              items-center border-2 border-purple-600"
          >
            <svg
              class="w-5 h-5  text-purple-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span class="text-gray-800 text-center px-4 text-sm">
              {node.Download_Speed} Mbps
            </span>
          </div>
          <div class="flex-1 truncate">
            <div class="flex flex-col md:flex-row gap-3 m-3 items-center space-x-3">
              <h3 class="text-gray-900 text-md font-medium truncate">
                {node.Name}
              </h3>
              <span class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-sm font-medium bg-green-100 rounded-full">
                {node.Type}
              </span>
            </div>

            <div class="my-4 flex-col flex md:block md:flex-row  items-center gap-3 m-3  ">
              {node.Features.map(feature => (
                <span class="flex-shrink-0 inline-block px-4 py-1 text-sm font-medium bg-gray-100 rounded-full">
                  {feature}
                </span>
              ))}
            </div>

            <div class="mt-4 flex-col md:flex-row flex gap-8  text-sm truncate">
              <div class="flex justify-center flex-col align-middle items-center">
                <svg
                  class="w-5 h-5 my-2 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span class="text-gray-800">
                  {node.Rating} {intl.formatMessage({ id: "rating" })}
                </span>
              </div>

              <div class="flex justify-center flex-col align-middle items-center">
                <svg
                  class="w-5 h-5 my-2 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span class="text-gray-800">{node.Upload_Speed} Mbps</span>
              </div>
              <div class="flex justify-center flex-col align-middle items-center">
                <svg
                  class="w-5 h-5 my-2 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span class="text-gray-800">{node.Ping} ms</span>
              </div>

              <div class="flex justify-center flex-col align-middle items-center">
                <svg
                  class="w-5 h-5 my-2 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="text-gray-800">{node.City}</span>
              </div>
              <a
                target="__blank"
                href={node.Curated_By}
                class="flex justify-center flex-col align-middle items-center"
              >
                <svg
                  class="w-5 h-5 my-2 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-gray-800">{node.Your_Name}</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px md:w-0 sm:w-full sm:flex-col sm:items-center flex-1 flex">
              <a
                target="__blank"
                href={node.link}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <svg
                  class="w-5 h-5 text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span class="ml-3">
                  {intl.formatMessage({ id: "visitLink" })}
                </span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </>
  )
})

export default ListItem
