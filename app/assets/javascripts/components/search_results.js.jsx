var SearchResults = React.createClass({
  getInitialState: function() {
  return { SearchResults: {} };
},

  componentDidMount: function() {
    window.SearchResultsStore.addChangeListener(this.onSearchResultsChange);
  },

  onParamsChange: function() {
  //what should happen when filter params are applied?
  //benches should be re-rendered to reflect the filter
  debugger;
  var params = window.SearchParamsStore.searchParams();
  ApiUtil.fetchSearchResults(params);
  },

  onSearchResultsChange: function() {
    this.setState({ SearchResults: SearchResultsStore.all() });
  },

  render: function() {
    return (
      <div>
        hi
      </div>
    );
  }

});
