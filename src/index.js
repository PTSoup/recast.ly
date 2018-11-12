// TODO: Render the `App` component to the DOM
var Homepage = React.createClass({
  render: function() {
    console.log('yo');
    return ( <App />);
  }
});

ReactDOM.render( <Homepage />, document.getElementById('app'));