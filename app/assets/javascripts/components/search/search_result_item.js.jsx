var SearchResultItem = React.createClass({
  mixins: [ReactRouter.History],


  showPlacePage: function() {
    var placeURL = "/searchResults/" + this.props.searchResult.id;
    this.history.pushState(null, placeURL);
  },
  //
  // componentDidMount: function() {
  //   PhotosStore.addChangeListener(this.onChange);
  //   console.log(this.props.searchResult.id);
  //   ApiUtil.fetchPhoto({place_id: this.props.searchResult.id});
  // },
  //
  // componentWillUnmount: function() {
  //   PhotosStore.removeChangeListener(this.onChange);
  // },
  //
  // onChange: function() {
  //   this.setState({ photo: PhotosStore.one() });
  // },

  render: function() {
    return (
      <div className="one-search-result clearfix">
        <img src={this.props.searchResult.photo} className="index-img"></img>
        <h3 onClick={this.showPlacePage} className="place-name">
          {parseInt(this.props.index) + 1}. {this.props.searchResult.name}
        </h3>
        <p>{this.props.searchResult.address}</p>
      </div>
    );
  }

});
