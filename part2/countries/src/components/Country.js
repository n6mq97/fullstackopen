import Weather from "./Weather"

function Country({ country }) {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h3>languages:</h3>
        <ul>
          {Object.keys(country.languages).map((code) => 
            <li key={code}>{country.languages[code]}</li>
          )}
        </ul>
        <img src={country.flags.png} alt={country.name.common + 'flag'} />
        <Weather city={country.capital} />
      </div>
    )
}

export default Country