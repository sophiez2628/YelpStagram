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

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div id="place-photos">
        <Slider {...settings}>
        {
          this.state.photos.map(function(photo) {
            return <div key={photo.id}><img src={photo.url}></img></div>;
          })
        }
      </Slider>
      </div>
    );
  }
});
