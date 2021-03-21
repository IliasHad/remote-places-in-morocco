import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ListItem from "../components/listItem"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

export default injectIntl(({ data, pageContext, intl }) => {
  const [cities, setCities] = useState([])
  const [places, setPlaces] = useState([])
  const [sorting, setSorting] = useState("upload-speed")
  const [selectedCity, setSelectedCity] = useState("All")
  useEffect(() => {
    setCities(data.allAirtable.edges.map(({ node }) => node.data.City))
  }, [])

  useEffect(() => {
    let selectedPlaces =
      selectedCity === "All"
        ? data.allAirtable.edges.map(({ node }) => node.data)
        : data.allAirtable.edges
            .filter(({ node }) => node.data.City === selectedCity)
            .map(({ node }) => node.data)

    if (sorting === "upload-speed") {
      selectedPlaces = selectedPlaces.sort(function (a, b) {
        return b.Upload_Speed - a.Upload_Speed
      })
    } else if (sorting === "download-speed") {
      selectedPlaces = selectedPlaces.sort(function (a, b) {
        return b.Download_Speed - a.Download_Speed
      })
    } else {
      selectedPlaces = selectedPlaces.sort(function (a, b) {
        return b.Rating - a.Rating
      })
    }

    setPlaces(selectedPlaces)
  }, [selectedCity, sorting, data.allAirtable.edges])

  return (
    <>
      <SEO title="Remote Places In Morocco" />
      <Layout heading={intl.formatMessage({ id: "heading" })}>
        <div class="lg:w-1/3 gap-8 py-4 grid grid-cols-1 md:grid-cols-2">
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
            >
              {intl.formatMessage({ id: "city" })}
            </label>
            <select
              onChange={e => setSelectedCity(e.target.value)}
              id="location"
              name="location"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="All" select={selectedCity === "All"}>
                {intl.formatMessage({ id: "allCities" })}
              </option>
              {cities.map(city => (
                <option value={city} select={selectedCity === city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
            >
              {intl.formatMessage({ id: "sorting" })}
            </label>
            <select
              onChange={e => setSorting(e.target.value)}
              id="location"
              name="location"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option
                value="upload-speed"
                selected={sorting === "upload-speed"}
              >
                {intl.formatMessage({ id: "upload" })}
              </option>
              <option
                value="download-speed"
                selected={sorting === "download-speed"}
              >
                {intl.formatMessage({ id: "download" })}
              </option>
              <option value="rating" selected={sorting === "rating"}>
                {intl.formatMessage({ id: "rating" })}
              </option>
            </select>
          </div>
        </div>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {places.length > 0 && places.map(node => <ListItem node={node} />)}
        </ul>
      </Layout>
    </>
  )
})

export const query = graphql`
  query {
    allAirtable(filter: { data: { Approved: { eq: true } } }) {
      edges {
        node {
          data {
            City
            Curated_By
            Download_Speed
            Features
            Name
            Rating
            Upload_Speed
            Ping
            link
            Type
            Your_Name
          }
        }
      }
    }
  }
`
