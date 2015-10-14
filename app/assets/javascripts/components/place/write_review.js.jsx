var WriteReview = React.createClass({
  getInitialState: function() {
    return { place: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    return window.SearchResultsStore.find(parseInt(this.props.params.placeId));
  },

  render: function() {
    return (
      <div>
        <h3>Write a Review</h3>
        {this.state.place.name}
        <form>
          <textarea type="text"></textarea>
        </form>
      </div>
    );
  }
});
