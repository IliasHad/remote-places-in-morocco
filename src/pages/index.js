import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ListItem from "../components/listItem"
import { graphql } from "gatsby"
export default ({ data, pageContext }) => {
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
  }, [selectedCity, sorting])

  return (
    <>
      <SEO title="Remote Places In Morocco" />
      <Layout>
        <div class="w-1/5 gap-8 py-4 flex">
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <select
              onChange={e => setSelectedCity(e.target.value)}
              id="location"
              name="location"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="All" select={selectedCity === "All"}>
                All Cities
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
              Sorting
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
                Upload Speed
              </option>
              <option
                value="download-speed"
                selected={sorting === "download-speed"}
              >
                Download Speed
              </option>
              <option value="rating" selected={sorting === "rating"}>
                Rating
              </option>
            </select>
          </div>
        </div>
        <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.length > 0 && places.map(node => <ListItem node={node} />)}
        </ul>
      </Layout>
    </>
  )
}

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
