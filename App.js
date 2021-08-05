import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

/**não mostra a messagem de erro amarelo na textAlignLast
 * Desabilita os alertas.
 */
console.disableYellowBox = true;

import Home from './src/views/Home'
import Task from './src/views/Task'

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Task
  })
);

export default function App() {
  return <Routes/>
}
