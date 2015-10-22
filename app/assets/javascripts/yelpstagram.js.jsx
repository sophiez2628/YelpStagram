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
         <IndexRoute path="/searchResults" component={{nav: Navbar, search: SearchResults, map: Map}} />
         <Route path="/searchResults/:placeId" component={PlacePage} />
         <Route path="/writeReview/:placeId" component={WriteReview} />
       </Route>
   );

   React.render(<Router>{routes}</Router>, root);

});
