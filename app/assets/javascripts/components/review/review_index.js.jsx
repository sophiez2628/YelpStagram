var ReviewIndex = React.createClass({
  getInitialState: function() {
    return { reviews: ReviewsStore.all() };
  },

  componentDidMount: function() {
    ReviewsStore.addChangeListener(this.onChange);
    ApiUtil.fetchReviews({place_id: this.props.placeId});
  },

  onChange: function() {
    this.setState({ reviews: ReviewsStore.all() });
  },

  render: function() {
    return (
      <div>
        {
          this.state.reviews
        }
      </div>
    );
  }
});
