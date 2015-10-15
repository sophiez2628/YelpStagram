var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotosStore.all() };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onChange);
    ApiUtil.fetchPhotos({place_id: this.props.placeId});
  },

  onChange: function() {
    this.setState({photos: PhotosStore.all()});
  },

  render: function() {
    return (
      <div>
        {
          this.state.photos.map(function(photo) {
            return <img src={photo.url}></img>;
          })
        }
      </div>
    );
  }
});
