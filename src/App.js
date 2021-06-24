import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/navbar/Navigation';
import About from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (

    <React.Fragment>

      <Navigation />
      <Router>
        <Switch>
        <Route path='/' component={About} exact /> 
         <Route path='/portfolio' component={Portfolio}/>
         <Route path='/resume' component={Resume}/>
         <Route path='/contact' component={Contact}/>
       </Switch> 
       </Router>
       <Footer />
       </React.Fragment>
   );
 }
 

export default App;