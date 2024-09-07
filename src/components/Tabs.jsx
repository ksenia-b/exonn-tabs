import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

export const Tabs = ({ tab, index, moveTab }) => {
    const [, ref] = useDrag({
        type: 'TAB',
        item: { index },
    });

    const [, drop] = useDrop({
        accept: 'TAB',
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveTab(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="tab">
            {tab.id}
        </div>
    );
};

export default Tabs;
