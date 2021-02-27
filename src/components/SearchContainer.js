import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import { Link } from "gatsby"
class Search extends Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("https://raw.githubusercontent.com/spaghetti-n5/food-blog/main/scripts/index.json")
      .then(result => {
        const bookData = result.data
        this.setState({ bookList: bookData.ricette })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { bookList } = this.state
    const dataToSearch = new JsSearch.Search("slug")
    /**
     *  defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("slug")

    dataToSearch.addIndex("title") // sets the index attribute for the data

    dataToSearch.addDocuments(bookList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { bookList, searchResults, searchQuery } = this.state
    // const queryResults = searchQuery === "" ? bookList : searchResults
    // const queryResults = searchQuery === "" ? [] : searchResults
    return (
      <div>
        <div style={{ margin: "0 auto" }}>
          <form onSubmit={this.handleSubmit}>
            <div style={{ margin: "0 auto", textAlign: "center"}}>
              <input
                id="Search"
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Cerca una ricetta"
                style={{ margin: "0 auto", width: "400px", border: "none", borderBottom: "1px solid black" }}
              />
            </div>
          </form>
          <div>
            {/* Number of items:
            {searchResults.length} */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "4px",
                border: "1px solid #d3d3d3",
              }}
            >
              <tbody>
                {searchResults.map(item => {
                    console.log(item)
                  return (
                    <tr key={`row_${item.slug}`}>
                      <td
                        style={{
                          fontSize: "14px",
                          border: "1px solid #d3d3d3",
                        }}
                      >
                        <Link to={`/${item.slug}`}>
                            {item.title}
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
export default Search