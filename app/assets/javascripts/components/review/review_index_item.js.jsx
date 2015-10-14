var ReviewIndexItem = React.createClass({
  render: function() {
    return (
        <div>
          {
            this.props.review.body
          }
        </div>
    );
  }
});
