import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from "./SearchContainer-css-modules.module.css";
class Search extends Component {
  state = {
    bookList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }

  async componentDidMount() {
    Axios.get("https://raw.githubusercontent.com/spaghetti-n5/food-blog/main/scripts/index.json")
      .then(result => {
        const bookData = result.data
        this.setState({ bookList: bookData.ricette })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log(`Something bad happened while fetching the data\n${err}`)
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
    const { searchResults, searchQuery } = this.state
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.inputWrap}>
              <input
                id="Search"
                className={styles.input}
                value={searchQuery}
                onChange={this.searchData}
                placeholder="Cerca una ricetta"
              />
              <FontAwesomeIcon icon={faSearch} size="1x" className={styles.icon} />
            </div>
          </form>
            <table className={styles.tableResults}>
              <tbody>
                {searchResults.map(item => {
                  return (
                    <tr key={`row_${item.slug}`}>
                      <td className={styles.tableData}>
                        <Link to={`/${item.slug}`} className={styles.tableLink}>
                            {item.title}
                        </Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
        </div>
    )
  }
}
export default Search