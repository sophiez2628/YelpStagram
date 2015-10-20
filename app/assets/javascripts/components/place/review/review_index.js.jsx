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
              this.state.reviews.map(function(review, index) {
                return <li><ReviewIndexItem key={index} review={review} /></li>;
              })
            }
        </ul>
      </div>
    );
  }
});
