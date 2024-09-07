import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tabs from './Tabs';
import TABS from "../assets/tabs.json";

const DraggableTabs = () => {
    const [tabs, setTabs] = useState(TABS);

    const moveTab = (dragIndex, hoverIndex) => {
        const updatedTabs = [...tabs];
        const [draggedTab] = updatedTabs.splice(dragIndex, 1);
        updatedTabs.splice(hoverIndex, 0, draggedTab);
        setTabs(updatedTabs);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="tabs-container">
                {tabs.map((tab, index) => (
                    <Tabs key={tab.id} tab={tab} index={index} moveTab={moveTab} />
                ))}
            </div>
        </DndProvider>
    );
};

export default DraggableTabs;
