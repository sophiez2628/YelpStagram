var PhotoIndex = React.createClass({
  getInitialState: function() {
    return { photos: PhotosStore.all(), photo: {} };
  },

  componentDidMount: function() {
    PhotosStore.addChangeListener(this.onChange);
  },

  // componentWillReceiveProps: function(props) {
  //   if (!props.place.place_id) {
  //     ApiUtil.fetchPhotos({place_id: props.place.id});
  //   }
  //
  //   if (props.photos) {
  //     window.setTimeout(ApiActions.receivePhotos.bind(this, props.photos), 1000);
  //   } else if (!props.photos && props.place.place_id) {
  //     this.setState({photo: props.profilePic});
  //   }
  // },

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

    console.log(this.state.photos)

    return (
      <div id="place-photos">
        <Slider {...settings}>
        {
          this.props.photos.map(function(photo) {
            var key_id;
            if (photo && photo.getUrl) {
              src = photo.getUrl({'maxWidth': 200, 'maxHeight': 200});
              key_id = photo.id;
            } else if (photo) {
              src = photo.url;
              key_id = photo.id;
            } else {
              src = "http://www.arinow.org/wp-content/uploads/2015/03/placeholder.jpg";
              key_id = 0;
            }
            return <div id="place-photo" key={key_id}><img src={src}></img></div>;
          })
        }
      </Slider>
      </div>
    );
  }
});
