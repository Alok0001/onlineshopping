import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResult: null,
    };
    this.apiUrl = 'http://127.0.0.1:5000/products/search'; // Full URL for searching products
  }

  fetchData = async () => {
    try {
      const response = await fetch(`${this.apiUrl}/${this.state.searchQuery}`);
      if (response.ok) {
        const data = await response.json();
        this.setState({ searchResult: data });
      } else {
        console.error('Error fetching data from the API');
        this.setState({ searchResult: null });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ searchResult: null });
    }
  };

  handleSearchInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchData();
  };

  render() {
    return (
      <div className="search-container">
        <h2>Search Page</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for a product by ID..."
            value={this.state.searchQuery}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>

        <div className="search-results">
          {this.state.searchResult && (
            <div className="product-card">
              <img src={this.state.searchResult.image} alt={this.state.searchResult.title} />
              <h3>{this.state.searchResult.title}</h3>
              <p>${this.state.searchResult.price}</p>
            </div>
          )}
          {!this.state.searchResult && <p>No results found.</p>}
        </div>
      </div>
    );
  }
}

export default Search;
