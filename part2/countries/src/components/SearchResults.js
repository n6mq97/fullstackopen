import Country from "./Country"

function SearchResults({ countries, showButton }) {
    if (countries.length === 0) {
      return null
    }
  
    if (countries.length === 1) {
      return (
        <div>
          <Country country={countries[0]} />
        </div>
      )
    } else if (countries.length < 10) {
      return (
        <div>
        {countries.map(country => 
          <div key={country.cca2}>
            {country.name.common}
            <button onClick={() => {showButton(country.name.common)}}>show</button>
          </div>
        )}
        </div>
      )
    } else {
      return (
        <div>
          Too many matches, specify another filter
        </div>
      )
    }
}

export default SearchResults