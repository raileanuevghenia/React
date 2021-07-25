import Tabs from './components/Tabs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs
      const tabItems={[
        {label: "Tabs1", 
        content: "Tabs1 content is showing here",
        callback(){
          console.log(this.label, "was clicked");
        }},
        {label: "Tabs2", 
        content: "Tabs2 content is showing here",
        callback(){
          console.log(this.label, "was clicked");
        }},
        {label: "Tabs3", 
        content: "Tabs3 content is showing here",
        callback(){
          console.log(this.label, "was clicked");
        }}
 
      ]}/>
    </div>
  );
}

export default App;
