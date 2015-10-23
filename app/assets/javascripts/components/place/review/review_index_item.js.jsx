var ReviewIndexItem = React.createClass({
  componentDidMount: function() {
    var $rate = $(React.findDOMNode(this.refs.ratingBox));
    $rate.rating({showClear: false, showCaption: false, readonly: true, size: 'xs'});
    $rate.rating('update', this.props.review.rating);
  },

  render: function() {
    //only rendering once
    var timestamp = (new Date(this.props.review.time * 1000)).toString();
    if (this.props.review.author_name) {
      return (
          <div>
            <span>{this.props.review.author_name}</span>
              <div>{timestamp}</div>
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
              <div>{this.props.review.created_at}</div>
              <div className="rating-info">
                <input ref="ratingBox" name="rating" className="rating"></input>
              </div>
            <p>{this.props.review.body}</p>
          </div>
      );
    }
  }
});
