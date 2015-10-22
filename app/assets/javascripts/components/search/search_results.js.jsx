var SearchResults = React.createClass({
  getInitialState: function() {
    return { searchResults: SearchResultsStore.all() };
  },

  componentDidMount: function() {
    window.SearchResultsStore.addChangeListener(this.onSearchResultsChange);
  },

  onSearchResultsChange: function() {
    this.setState({ searchResults: SearchResultsStore.all() });
  },

  render: function() {
    console.log("search results render!")
    if (this.state.searchResults.length !== 0) {
      return (
        <div className="search-page">
          <ul className="search-results">
            {
              this.state.searchResults.map(function(searchResult, index) {
                return (<SearchResultItem key={searchResult.id} index={index} searchResult={searchResult} />);
              })
            }
            </ul>
        </div>
      );
    } else {
      return (
        <p>No Results Found</p>
      );
    }
  }

});
