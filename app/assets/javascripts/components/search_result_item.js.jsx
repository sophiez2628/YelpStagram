var SearchResultItem = React.createClass({

  render: function() {
    return (
      <div>
        <h6>{parseInt(this.props.index) + 1}. {this.props.searchResult.name}</h6>
        <p>{this.props.searchResult.address}</p>
      </div>
    );
  }

});
