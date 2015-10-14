var ReviewIndex = React.createClass({
  componentDidMount: function() {
    this.reviews = ApiUtil.fetchReviews()
  },

  render: function() {
    return (
      <div>

      </div>
    );
  }
});
