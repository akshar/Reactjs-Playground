class StoryBox extends React.Component {

  render() {
    const storylist = ['js','ruby','clojure']
    return (<div>Story Box compoenent
      <ul>
      {storylist.map((item)=><li>{item}</li>)}
      </ul>
      </div>);
    }
  }
  ReactDOM.render(
    <StoryBox />, document.getElementById('story-app')
  );
