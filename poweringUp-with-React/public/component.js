  class CommentBox extends React.Component {
    constructor(){
      super();
      this.state ={
        showComments:false,
        comments :[{ id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }]
      };
    }

    _getComments() {
      return this.state.comments.map((comment) => {
        return (
          <Comment author ={comment.author} body = {comment.body} key ={comment.id} />
        );
      });
    }

    _getCommentsCount(commentCount){
      if(commentCount==0){
        return "No Comments yet"
      }else if(commentCount==1){
        return "1 comment"
      }else{
        return `${commentCount} comments`
      }
    }

    _handleclick(){
      this.setState({
        showComments:!this.state.showComments
      });
    }

    _addComment(author,body){
      const comment = {
        id: this.state.comments.length+1,
        author,
        body
      };
      this.setState({comments : this.state.comments.concat([comment])});
    }

    render(){
      const comments = this._getComments();
      let commentNodes;
      if(this.state.showComments){
      commentNodes =   <div className="comment-list">
        {comments}
        </div>
      }
      let buttonText = 'show comments'
      if(this.state.showComments){
        buttonText ='Hide Comments'
      }



      return (
        <div className ="commet-box">
        <CommentForm addComment = {this._addComment.bind(this)} />
        <button onClick = {this._handleclick.bind(this)}>{buttonText}</button>
          <h3>Comments</h3>
          <h4 className="comment-count">{this._getCommentsCount(comments.length)}</h4>
          {commentNodes}
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

  class CommentForm extends React.Component {
    render(){
      return (
        <form className ="comment-form" onSubmit ={this._handleSubmit.bind(this)}>
          <label>Join the Discussion:</label>
          <div className ="comment-form-fields">
            <input placeholder="name:" ref={(input) => this._author = input} />
            <textarea placeholder="comment:" ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-from-action">
            <button type="submit">POST Comment</button>
          </div>
        </form>
      );
    }
    _handleSubmit(event){
      event.preventDefault();
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value,body.value); // passing function as props
    }
  }





  ReactDOM.render(
    <CommentBox />, document.getElementById('story-app')
  );
