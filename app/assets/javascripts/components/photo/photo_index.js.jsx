var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotosStore.all() };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onChange);
    // ApiUtil.fetchPhotos({place_id: this.props.placeId});
  },

  componentWillReceiveProps: function(props) {
    window.setTimeout(ApiActions.receivePhotos.bind(this, props.photos), 1000);
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
            return <div key={photo.id}><img src={photo.getUrl({'maxWidth': 200, 'maxHeight': 200})}></img></div>;
          })
        }
      </Slider>
      </div>
    );
  }
});
