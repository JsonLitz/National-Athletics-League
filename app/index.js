var React = require('react');
var ReactDOM = require('react-dom');

var REDDIT_DATA = {
  name: 'reddit',
  subreddit: 'aww',
  image: 'https://i.imgur.com/VaeBUuj.gifv'
}


var awwImage: React.createClass({
  render: function() {
    return <img src= {this.props.imageUrl} style = {{heigh: 100, width: 100}}/>
  }
});

var redditLink: React.createClass({
  render: function(){
    return (
      <div>
        <a href={https:'//www.reddit.com/r/' + this.props.subreddit}>
          { }
        </a>
      </div>
    )
  }
});

var reddit: React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var r_aww: React.createClass({
  render: function() {
    return (
      <div>
        <awwImage imageUrl= {this.props.reddit.image}
      </div>
    )
  }
})


var HelloWorld = React.createClass({
  render: function(){
    return (
      <div> Welcome to the {this.props.pageName} ! </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld pageName = "The National Athletics League" />,
  document.getElementById('app')
)
