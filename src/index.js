// TODO: Render the `App` component to the DOM
var Homepage = React.createClass({
  render: function() {
    return ( <App />);
  }
});

ReactDOM.render( <Homepage />, document.getElementById('app'));