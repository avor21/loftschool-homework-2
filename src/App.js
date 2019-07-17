import React, {Component} from 'react';
import NewsPost from './NewsPost';
import './App.css';

class App extends Component {
  state = {
    newsInput: '',
    news: []
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({newsInput: value});
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const {newsInput, news} = this.state;
      const newPost = {text: newsInput};
      this.setState({newsInput: '', news: [...news, newPost]});
    }
  };

  render() {
    const {newsInput, news} = this.state;
    return (
      <div className="App">
        <input
          className="news-input"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div>
          {news.map(post => (
            <NewsPost key={post.text} text={post.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
