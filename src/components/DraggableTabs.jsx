import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tabs from './Tabs';
import TABS_DATA from "../assets/tabs.json";

const DraggableTabs = () => {
    const [tabs, setTabs] = useState(() => {
        const savedTabs = localStorage.getItem('updatedTabs');
        return savedTabs ? JSON.parse(savedTabs) : TABS_DATA;
    });
    const [pinnedTabs, setPinnedTabs] = useState([])

    const moveTab = (dragIndex, hoverIndex) => {
        const updatedTabs = [...tabs];
        console.log("dragIndex = ", dragIndex);
        const [draggedTab] = updatedTabs.splice(dragIndex, 1);
        updatedTabs.splice(hoverIndex, 0, draggedTab);
        setTabs(updatedTabs);
        const pinnedTabsIds = updatedTabs
            .filter((tab) => tab.pinned === true)
            .map((tab) => tab.id);
        setPinnedTabs(pinnedTabsIds);
        console.log("pinnedTabs = ", pinnedTabs, tabs.find(item => item.id === 'telefonie'));

    };

    useEffect(() => {
        localStorage.setItem('updatedTabs', JSON.stringify(tabs));
    }, [tabs]);

    const handleDoubleClick = (index) => {
        const updatedTabs = tabs.map((tab, i) =>
            i === index ? { ...tab, pinned: !tab.pinned } : tab
        );

        const pinnedTabs = updatedTabs.filter(tab => tab.pinned);
        const unpinnedTabs = updatedTabs.filter(tab => !tab.pinned);

        const sortedTabs = [...pinnedTabs, ...unpinnedTabs]
        console.log('SORTED: ', sortedTabs)
        setTabs(sortedTabs);
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="tabs-container">
                {tabs.map((tab, index) => (
                    <Tabs key={tab.id} tab={tab} index={index} moveTab={moveTab}
                        onDoubleClick={handleDoubleClick} />

                ))}
            </div>
        </DndProvider>
    );
};

export default DraggableTabs;
