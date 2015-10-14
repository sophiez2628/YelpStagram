var WriteReview = React.createClass({
  getInitialState: function() {
    return { place: this.getStateFromStore() };
  },

  componentDidMount: function(){
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({step:1});
  },

  getStateFromStore: function() {
    return window.SearchResultsStore.find(parseInt(this.props.params.placeId));
  },

  handleSubmitReview: function(e) {

  },

  render: function() {
    return (
      <div>
        <h3>Write a Review</h3>
        {
          this.state.place.name
        }
        <form onSubmit={this.handleSubmitReview}>
          <input ref="ratingBox" className="rating"></input>
          <textarea type="text"></textarea>
          <input type="submit" value="Post Review"></input>
        </form>
      </div>
    );
  }
});
