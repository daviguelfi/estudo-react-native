import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import principal from './components/principal';
import aboutGame from './components/aboutGame';
import otherGame from './components/otherGame';
import result from './components/result';

const routes = () => (
  <Router sceneStyle={{ paddingTop: 20 }}>
    <Scene key='principal' component={principal} initil title='Cara ou Coroa' />
    <Scene key='aboutgame' component={aboutGame} title="Sobre o Jogo" />
    <Scene key='othergame' component={otherGame} title="Outros Jogos" />
    <Scene key='result' component={result} title='Resultado' />
  </Router>
);

export default routes;
