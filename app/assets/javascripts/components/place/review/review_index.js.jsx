var ReviewIndex = React.createClass({

  render: function() {
    //this appears to be rendering only once!

    //it is rendering twice, but for the first time, the reviews array is empty
    //so none of the ReviewIndexItem components are loaded
    console.log("review index");
    if (!this.props.reviews) {
      return (<div>Loading</div>);
    } else {
      return (
        <div>
          <ul className="reviews">
              {
                this.props.reviews.map(function(review, index) {
                  return <li><ReviewIndexItem key={index} review={review} /></li>;
                })
              }
          </ul>
        </div>
      );
    }
  }
});
