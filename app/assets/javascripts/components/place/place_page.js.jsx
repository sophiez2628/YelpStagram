var PlacePage = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return window.SearchResultsStore.find(parseInt(this.props.params.placeId));
  },

  handleWriteReview: function(e) {
    e.preventDefault();
    var placeURL = "/writeReview/" + this.props.params.placeId;
    this.history.pushState(null, placeURL);
  },

  render: function() {
    return (
      <div>
        <h1>{this.state.place.name}</h1>
        <button onClick={this.handleWriteReview}>Write a Review</button>
        <ReviewIndex place={this.props.params.placeId}/>
      </div>
    );
  }
});
