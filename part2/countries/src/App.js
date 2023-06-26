import { useState } from 'react'
import axios from 'axios'
import SearchResults from './components/SearchResults'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  const searchCountries = (searchValue) => {
    if (searchValue.length) {
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        const foundCountries = response.data.filter(c => {
          const countryName = c.name.common.toLowerCase()
          return countryName.includes(searchValue.toLowerCase())
        })
        setCountries(foundCountries)
      })
    } else {
      setCountries([])
    }
  }

  const handleSearchChange = (event) => {
    const value = event.target.value
    setSearch(value)
    searchCountries(value)
  }

  const handleShowButton = (countryName) => {
    setSearch(countryName)
    searchCountries(countryName)
  }

  return (
    <div>
      find countries <input onChange={handleSearchChange} value={search} />

      <SearchResults 
        countries={countries}
        showButton={handleShowButton}
      />
    </div>
  );
}

export default App;
