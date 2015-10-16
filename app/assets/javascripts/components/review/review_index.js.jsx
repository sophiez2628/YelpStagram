var ReviewIndex = React.createClass({
  getInitialState: function() {
    return { reviews: [] };
  },

  componentWillReceiveProps: function(prop) {
    this.setState({ reviews: prop.reviews});
  },

  render: function() {
    return (
      <div>
        <ul className="reviews">
            {
              this.state.reviews.map(function(review) {
                return <li><ReviewIndexItem key={review.id} review={review} /></li>;
              })
            }
        </ul>
      </div>
    );
  }
});
