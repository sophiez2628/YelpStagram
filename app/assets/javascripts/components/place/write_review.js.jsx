var WriteReview = React.createClass({
  mixins: [ReactRouter.History],

  getInitialState: function() {
    return { place: this.getStateFromStore() };
  },

  componentDidMount: function(){
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({step:1, showClear: false, showCaption: false});
  },

  getStateFromStore: function() {
    // return window.SearchResultsStore.find(parseInt(this.props.params.placeId));
  },

  handleSubmitReview: function(e) {
    e.preventDefault();
    var rating = parseInt(e.currentTarget.rating.value);
    var body = e.currentTarget.review.value;
    ApiUtil.createReview({rating: rating,
                          body: body,
                          author_id: window.CURRENT_USER_ID,
                          place_id: this.props.params.placeId,
                          google_place_id: this.props.params.placeId});

    var placeURL = "/searchResults/" + this.props.params.placeId;
    this.history.pushState(null, placeURL);
  },

  render: function() {
    return (
      <div>
        <h3>Write a Review</h3>
        <form onSubmit={this.handleSubmitReview}>
          <input ref="ratingBox" name="rating" className="rating"></input>
          <textarea type="text" name="review"></textarea>
          <input type="submit" value="Post Review"></input>
        </form>
      </div>
    );
  }
});
