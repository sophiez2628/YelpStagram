var SearchResultItem = React.createClass({
  mixins: [ReactRouter.History],

  showPlacePlage: function() {
    var placeURL = "/searchResults/" + this.props.searchResult.id;
    this.history.pushState(null, placeURL);
  },

  render: function() {
    return (
      <div>
        <h6 onClick={this.showPlacePlage}>
          {parseInt(this.props.index) + 1}. {this.props.searchResult.name}
        </h6>
        <p>{this.props.searchResult.address}</p>
      </div>
    );
  }

});
