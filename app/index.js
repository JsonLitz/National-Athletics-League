
var USER_DATA = {
  name: 'Json Litz',
  username: 'jsonlitz',
  image: 'http://voiceoftheraiders.com/wp-content/uploads/2012/07/trackfield.jpg'
}

var React = require('react');
var ReactDOM = require('react-dom');

// var MainPageBanner = React.createClass({
//   render:function(){
//     return (
//
//     )
//   }
// })

var ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' +  this.props.username}>
          {this.props.username}
        </a>
      </div>
    );
  }
});

var ProfileName = React.createClass({
  render: function (){
    return <div>{this.props.name}</div>
  }
});

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});


ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));




// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var REDDIT_DATA = {
//   name: 'reddit',
//   subreddit: 'aww',
//   image: 'https://i.imgur.com/VaeBUuj.gifv'
// };
//
// var title = React.createClass({
//   render: function (){
//     return <h1>{this.props.subreddit}</h1>
//   }
//
// });
//
// var awwImage= React.createClass({
//   render: function() {
//     return <img src= {this.props.imageUrl} style = {{heigh: 100, width: 100}}/>
//   }
// });
//
// var redditLink= React.createClass({
//   render: function(){
//     return (
//       <div>
//         <a href={'https://www.reddit.com/r/' + this.props.subreddit}>
//           { }
//         </a>
//       </div>
//     )
//   }
// });
//
// var reddit= React.createClass({
//   render: function() {
//     return (
//       <div>
//         {this.props.name}
//       </div>
//     )
//   }
// });
//
// var r_aww= React.createClass({
//   render: function() {
//     return (
//       <div>
//         <awwImage imageUrl= {this.props.reddit.image} />
//         <reddit name= {this.props.reddit.name} />
//         <redditLink subreddit= {this.props.reddit.subreddit} />
//       </div>
//     )
//   }
// });
//
//
// // var HelloWorld = React.createClass({
// //   render: function(){
// //     return (
// //       <div> Welcome to the {this.props.pageName} ! </div>
// //     )
// //   }
// // });
//
// ReactDOM.render(
//   <r_aww reddit = {REDDIT_DATA} />,
//   document.getElementById('app')
// )
//
