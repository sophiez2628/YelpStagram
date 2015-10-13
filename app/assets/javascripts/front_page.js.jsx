var FrontPage = React.createClass({



  render: function() {
    return (
      <div>
        <Filter />
        <Map handleMapClick={this.handleMapClick}/>
        <BenchIndex />
      </div>
    );
  }

});
