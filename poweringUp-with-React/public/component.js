// class StoryBox extends React.Component {
//
//   render() {
//     const storylist = ['js','ruby','clojure']
//     return (<div>Story Box compoenent
//       <ul>
//       {storylist.map((item)=><li>{item}</li>)}
//       </ul>
//       </div>);
//     }
//  }

  class CommentBox extends React.Component {
    render(){
      return (
        <div className ="commet-box">
          <h3>Comments</h3>
          <h4 className="comment-count">2 Comments</h4>
          <div className="comment-list">
          <Comment author="phoenix" body="lorem ipsum a qu"/>
          <Comment author="oculus" body="Lorem ipsum dolor sit amet, "/>
          </div>
        </div>



      );
    }
  }

  class Comment extends React.Component {
    render() {
      return (
      <div className="comment">
        <p className="comment-header">{this.props.author}</p>
        <p className="comment-body">{this.props.body}</p>
        <div className = "comment-footer">
          <a href="#" className="comment-footer-delete">Delete Comment</a>
        </div>
      </div>
      );
    }

  }
  ReactDOM.render(
    <CommentBox />, document.getElementById('story-app')
  );
