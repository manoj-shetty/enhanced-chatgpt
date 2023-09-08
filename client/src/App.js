import logo from './logo.svg';
import './normal.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span> New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-input-holder">
          <textarea className="chat-input-textarea"  rows="1" ></textarea>
        </div>
      </section>
      
    </div>
  );
}

export default App;
