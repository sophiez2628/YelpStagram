var SearchResults = React.createClass({
  mixins: [ReactRouter.History],
  getInitialState: function() {
    return { searchResults: SearchResultsStore.all(), searchResultItems: [] };
  },

  componentDidMount: function() {
    window.SearchResultsStore.addChangeListener(this.onSearchResultsChange);
  },

  onSearchResultsChange: function() {
    this.setState({ searchResults: SearchResultsStore.all() }, function () {
      var i = 5;
      var j = this.state.searchResults.length;
      var searchResultItems = this.state.searchResults.slice(0, 5).map(function(item, k) {
        return <SearchResultItem key={item.place_id} index={k} searchResult={item} history={this.history}/>;
      }, this);
      var searchResultAdder = window.setInterval(
        function() {
          if (j < i || i === j) {
            window.clearInterval(searchResultAdder);
          } else {
            var searchResult = this.state.searchResults[i];
            searchResultItems.push(<SearchResultItem
                                     key={searchResult.place_id}
                                     index={i}
                                     searchResult={searchResult}
                                     history={this.history}
                                   />
                               );
            i++;
          }
            this.setState({ searchResultItems: searchResultItems });
        }.bind(this), 400
      );
    }.bind(this));
  },

  render: function() {
    //include a sorry, no results found page
    if (this.state.searchResults.length !== 0) {
      return (
        <div className="search-page">
          <ul className="search-results">
            {
              this.state.searchResultItems
            }
            </ul>
        </div>
      );
    } else {
      return (
        <div className="loader">Loading...</div>
      );
    }
  }

});
