import "./App.css";
import Navbar from "./components/Navbar";
// import React from 'react'
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React , { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import NEWS_API_KEY from "./config";

const App = () => {
  const [progress, setProgress] = useState(0);

  setProgress(0)
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="general"
                pageSize={6}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="business"
                pageSize={6}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="entertainment"
                pageSize={6}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="health"
                pageSize={6}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="science"
                pageSize={6}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="sports"
                pageSize={6}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={progress}
                apiKey={NEWS_API_KEY}
                key="technology"
                pageSize={6}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );

}

export default App;

// export default function App() {

//   return (
//     <div>
//       <Router>
//         <Navbar/>
//         <LoadingBar
//         color='#f11946'
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//         <Routes>
//           <Route exact path="/" element={<News setProgress={progress} key="general" pageSize ={6} country="in" category='general'/>} />
//           <Route exact path="/general" element={<News setProgress={progress} key="general" pageSize ={6} country="in" category='general'/>} />
//           <Route exact path="/business" element={<News setProgress={progress} key="business" pageSize ={6} country="in" category='business'/>} />
//           <Route exact path="/entertainment" element={<News setProgress={progress} key="entertainment" pageSize ={6} country="in" category='entertainment'/>} />
//           <Route exact path="/health" element={<News setProgress={progress} key="health" pageSize ={6} country="in" category='health'/>} />
//           <Route exact path="/science" element={<News setProgress={progress} key="science" pageSize ={6} country="in" category='science'/>} />
//           <Route exact path="/sports" element={<News setProgress={progress} key="sports" pageSize ={6} country="in" category='sports'/>} />
//           <Route exact path="/technology" element={<News setProgress={progress} key="technology" pageSize ={6} country="in" category='technology'/>} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }
