  class CommentBox extends React.Component {
    _getComments() {
      const commentList = [{ id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
      { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }]

      return commentList.map((comment) => {
        return (
          <Comment author ={comment.author} body = {comment.body} key ={comment.id} />
        );
      });
    }
    render(){
      const comments = this._getComments();
      return (
        <div className ="commet-box">
          <h3>Comments</h3>
          <h4 className="comment-count">{comments.length} comments</h4>
          <div className="comment-list">
          {comments}
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
