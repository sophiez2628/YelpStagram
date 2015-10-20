var SearchResults = React.createClass({
  getInitialState: function() {
    return { searchResults: SearchResultsStore.all() };
  },

  componentDidMount: function() {
    ApiUtil.fetchSearchResults({find: this.props.location.query.find,
                                near: this.props.location.query.near});
    window.SearchResultsStore.addChangeListener(this.onSearchResultsChange);
  },

  onSearchResultsChange: function() {
    this.setState({ searchResults: SearchResultsStore.all() });
  },

  render: function() {
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
  }

});
