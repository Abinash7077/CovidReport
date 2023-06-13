import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
  const [statistics, setStatistics] = useState([]);
  const [continent, setContinent] = useState('');

  useEffect(() => {
    fetchCovidStatistics();
  }, [continent]);

  const fetchCovidStatistics = async () => {
    try {
      const response = await axios.get('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
            'X-RapidAPI-Key': 'a2fcb18a97msh6ddf59fcf92a993p13d101jsn2a03d663d5c2',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
          },
        params: {
          continent: continent || 'all',
        },
      });

      setStatistics(response.data.response);
    } catch (error) {
      console.error('Error fetching COVID-19 statistics:', error);
    }
  };

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
  };

  return (
    <div>
      <h2>COVID-19 Statistics by Continent</h2>
      <select value={continent} onChange={handleContinentChange}>
        <option value="">All</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Australia-Oceania">Australia-Oceania</option>
      </select>

      {statistics.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
            {statistics.map((country) => (
              <tr key={country.country}>
                <td>{country.country}</td>
                <td>{country.cases.total}</td>
                <td>{country.deaths.total}</td>
                <td>{country.cases.recovered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
