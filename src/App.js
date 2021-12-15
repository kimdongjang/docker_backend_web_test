import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Top from './program/Top';
import Forum from './program/forum/Forum';
import Awesome from './program/awesome/Awesome';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:null
    }
  }

  componentDidMount() {
    fetch('/api/top')
    .then(res=>res.json())
    .then(data=>this.setState({data:data.data}))
  }
  
  render() {
    const {data} = this.state;
    return (
          <div className="App">    
          <title>{data}</title>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Top />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/awesome" element={<Awesome />} />
              </Routes>
            </BrowserRouter>
          </div>
    )
  }
}



// function App(props) {
//   useEffect(() => {
//     fetch('http://localhost:3001/api')
//     .then(res=>res.json())
//     .then(data=>this.setState({username:data.username}))
    
//     return () => {
      
//     }
//   })

//   return (
//     <div className="App">    
//     <title>{props.username}</title>
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<Top />} />
//           <Route path="/forum" element={<Forum />} />
//           <Route path="/awesome" element={<Awesome />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
