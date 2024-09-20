import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableTabs from './components/DraggableTabs';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div>
      <h1>Draggable Tabs Example</h1>
      <DraggableTabs />
    </div>
  </DndProvider>
);

export default App;