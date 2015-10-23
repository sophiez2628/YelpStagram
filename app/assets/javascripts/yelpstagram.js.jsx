var startApp = function() {
  $(document).ready(function() {
     var root = document.getElementById('content');
     var Route = ReactRouter.Route;
     var Router = ReactRouter.Router;
     var IndexRoute = ReactRouter.IndexRoute;

     var App = React.createClass({
       render: function(){
         return (
             <div id="second-container">
               {this.props.children}
             </div>
         );
       }
     });
     var routes = (
         <Route path="/" component={App}>
           <IndexRoute components={{nav: Navbar, search: SearchResults, map: Map}} />
           <Route path="/searchResults/:placeId" components={{nav: Navbar, place: PlacePage}} />
           <Route path="/writeReview/:placeId" components={{nav: Navbar, review: WriteReview}} />
         </Route>
     );

     React.render(<Router>{routes}</Router>, root);

  });
};
