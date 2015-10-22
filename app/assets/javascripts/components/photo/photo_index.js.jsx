var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotosStore.all(), photo: {} };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onChange);
  },

  componentWillReceiveProps: function(props) {
    if (!props.place.place_id) {
      ApiUtil.fetchPhotos({place_id: props.place.id});
    }

    if (props.photos) {
      window.setTimeout(ApiActions.receivePhotos.bind(this, props.photos), 1000);
    } else if (!props.photos && props.place.place_id) {
      console.log("huh");
      this.setState({photo: props.profilePic});
    }
  },

  onChange: function() {
    this.setState({photos: PhotosStore.all()});
  },

  render: function() {
    var src;
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
            if (photo.getUrl) {
              src = photo.getUrl({'maxWidth': 200, 'maxHeight': 200});
            } else {
              src = photo.url;
            }
            return <div key={photo.id}><img src={src}></img></div>;
          })
        }
      </Slider>
      </div>
    );
  }
});
