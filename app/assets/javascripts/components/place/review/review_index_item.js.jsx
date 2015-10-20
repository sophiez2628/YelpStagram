var ReviewIndexItem = React.createClass({
  componentDidMount: function() {
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    $rate.rating('update', this.props.review.rating);
  },

  render: function() {
    //only rendering once?
    if (this.props.review.text) {
      return (
          <div>
            <span>{this.props.review.author_name}</span>
              <div className="rating-info">
                <input ref="ratingBox" name="rating" className="rating"></input>
              </div>
            <p>{this.props.review.text}</p>
          </div>
      );
    } else {
      return (
          <div>
            <span>{this.props.review.user.first_name} {this.props.review.user.last_name}</span>
              <div className="rating-info">
                <input ref="ratingBox" name="rating" className="rating"></input>
              </div>
            <p>{this.props.review.body}</p>
          </div>
      );
    }
  }
});
