var ReviewIndex = React.createClass({
  getInitialState: function() {
    return { reviews: [] };
  },

  componentWillReceiveProps: function(prop) {
    this.setState({ reviews: prop.reviews});
  },

  render: function() {
    //this appears to be rendering only once!

    //it is rendering twice, but for the first time, the reviews array is empty
    //so none of the ReviewIndexItem components are loaded
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
