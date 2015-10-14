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
    return (
      <ul>
        {
          this.state.searchResults.map(function(searchResult, index) {
            return (<SearchResultItem key={searchResult.id} index={index} searchResult={searchResult} />);
          })
        }
        </ul>
    );
  }

});
