import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import ToDo from './pages/to-do/ToDo';
import Video from './pages/about/About';
import VoiceApp from './pages/voice-app/VoiceApp';
import Navbar from './components/Navbar';
import AlertState from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

const App = () => (
  <FirebaseState>
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div id='container'>
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/to-do'} component={ToDo} />
            <Route path={'/about'} component={Video} />
            <Route path={'/voiceApp'} component={VoiceApp} />
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  </FirebaseState>
);

export default App;