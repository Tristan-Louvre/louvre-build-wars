import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Index() {
  return (
    <div>
      <h2>Home</h2>
      <p>This is where it all begins :D</p>
    </div>
  );
}

const CLASSES = [
  { id: 0, name: 'Mesmer' },
  { id: 1, name: 'Warrior' },
  { id: 2, name: 'Necromancer' },
  { id: 3, name: 'Elementalist' },
  { id: 4, name: 'Guardian' },
  { id: 5, name: 'Revenant' },
  { id: 6, name: 'Thief' },
  { id: 7, name: 'Engineer' },
  { id: 8, name: 'Ranger' },
];

const ATTRIBUTES = [
  { id:  0, attribute_type: 'primary', name: 'Power', base_value: 1000 },
  { id:  1, attribute_type: 'primary', name: 'Precision', base_value: 1000 },
  { id:  2, attribute_type: 'primary', name: 'Toughness', base_value: 1000 },
  { id:  3, attribute_type: 'primary', name: 'Vitality', base_value: 1000 },
  { id:  4, attribute_type: 'secondary', name: 'Healing Power', base_value: 0 },
  { id:  5, attribute_type: 'secondary', name: 'Ferocity', base_value: 0 },
  { id:  6, attribute_type: 'secondary', name: 'Expertise', base_value: 0 },
  { id:  7, attribute_type: 'secondary', name: 'Condition Duration', base_value: 0 },
  { id:  8, attribute_type: 'secondary', name: 'Concentration', base_value: 0 },
  { id:  9, attribute_type: 'derived', name: 'Critical Chance', base_value: 0.05 },
  { id: 10, attribute_type: 'derived', name: 'Critical Damage', base_value: 1.5 },
  { id: 11, attribute_type: 'derived', name: 'Condition Damage', base_value: 0 },
  { id: 12, attribute_type: 'derived', name: 'Health' },
  { id: 13, attribute_type: 'derived', name: 'Armour' },
  { id: 14, attribute_type: 'derived', name: 'Boon Duration', base_value: 0 },
];

function Class() {
  return (
   <div>
     <div>
     {CLASSES.map(i => (
           <button>{i.name}</button>
     ))}
     </div>
     <div>
       <ul>
         {ATTRIBUTES.map(i => (
           <li>{i.name} {i.base_value}</li>
         ))}
       </ul>
     </div>
   </div>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/classes/">Classes</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/classes/" component={Class} />
        </div>
      </Router>
    );
  }
}

export default App;