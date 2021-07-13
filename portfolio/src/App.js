
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Project title = {"Window Wizard"} likesCount = { 3 } desc = { "College student window washing"}/>
      <Project title = {"Puppy Rescue"} likesCount = { 5 } desc = {"Find a faster family for puppies"}/>
      <Project title = {"Restroom Rater"} likesCount = { 2 } desc = {"Rating for public restrooms"}/>
    </div>
  );
}

export default App;
