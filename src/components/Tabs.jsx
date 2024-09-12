import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import accounting from "../assets/icons/accounting.svg";
import banking from "../assets/icons/banking.svg";
import dashboard from "../assets/icons/dashboard.svg";
import telefonie from "../assets/icons/telefonie.svg"

const ICONS = [
    { icon: accounting, id: "accounting" },
    { icon: banking, id: "banking" },
    { icon: dashboard, id: "dashboard" },
    { icon: telefonie, id: "telefonie" }
];

export const Tabs = ({ tab, index, moveTab, onDoubleClick }) => {
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

    const currentIcon = ICONS.find(iconObj => iconObj.id === tab.id);
    return (

        <div ref={(node) => ref(drop(node))} className={`tab ${tab.pinned ? 'pinned' : ''}`} onDoubleClick={() => onDoubleClick(index)}>
            <div>
                {currentIcon && (
                    <img
                        src={currentIcon.icon}
                        alt="Icon"
                        width="15"
                        height="15"
                    />
                )}
                <span>{tab.title}</span>
            </div>
        </div>


    );

};

export default Tabs;
