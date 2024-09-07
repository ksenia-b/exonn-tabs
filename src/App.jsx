import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Tabs } from './components/Tabs';
import DraggableTabs from './components/DraggableTabs';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div>
      <h1>Draggable Tabs Example</h1>
      {/* <Tabs /> */}
      <DraggableTabs />
    </div>
  </DndProvider>
);

export default App;