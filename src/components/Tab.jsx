import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import accounting from "../assets/icons/accounting.svg";
import banking from "../assets/icons/banking.svg";
import dashboard from "../assets/icons/dashboard.svg";
import telefonie from "../assets/icons/telefonie.svg"
import verkakf from "../assets/icons/verkaka.svg"

const ICONS = [
    { icon: accounting, id: "accounting" },
    { icon: banking, id: "banking" },
    { icon: dashboard, id: "dashboard" },
    { icon: telefonie, id: "telefonie" },
    { icon: verkakf, id: "verkakf" }
];

export const Tab = ({ tab, index, moveTab, onDoubleClick, setTabs, tabs }) => {
    const [closeTab, setCloseTab] = useState(false);
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

    const handleCloseTab = () => {
        setCloseTab(true);
        console.log("tabs = ", tabs);
        console.log("closed tabs = ", tabs.filter(item => item.id !== tab.id));
        setTabs(tabs.filter(item => (item.id != tab.id)))
    }

    const currentIcon = ICONS.find(iconObj => iconObj.id === tab.id);
    return (

        <div ref={(node) => ref(drop(node))} className={`tab ${tab.pinned ? 'pinned' : ''}`} onDoubleClick={() => onDoubleClick(index)}>
            {currentIcon && (
                <>
                    {(!closeTab && !tab.pinned) &&
                        <button className="close-btn" onClick={handleCloseTab}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.6 11.3333L8 8.93331L10.4 11.3333L11.3333 10.4L8.93333 7.99998L11.3333 5.59998L10.4 4.66665L8 7.06665L5.6 4.66665L4.66667 5.59998L7.06667 7.99998L4.66667 10.4L5.6 11.3333ZM8 14.6666C7.07778 14.6666 6.21111 14.4916 5.4 14.1416C4.58889 13.7916 3.88333 13.3166 3.28333 12.7166C2.68333 12.1166 2.20833 11.4111 1.85833 10.6C1.50833 9.78887 1.33333 8.9222 1.33333 7.99998C1.33333 7.07776 1.50833 6.21109 1.85833 5.39998C2.20833 4.58887 2.68333 3.88331 3.28333 3.28331C3.88333 2.68331 4.58889 2.20831 5.4 1.85831C6.21111 1.50831 7.07778 1.33331 8 1.33331C8.92222 1.33331 9.78889 1.50831 10.6 1.85831C11.4111 2.20831 12.1167 2.68331 12.7167 3.28331C13.3167 3.88331 13.7917 4.58887 14.1417 5.39998C14.4917 6.21109 14.6667 7.07776 14.6667 7.99998C14.6667 8.9222 14.4917 9.78887 14.1417 10.6C13.7917 11.4111 13.3167 12.1166 12.7167 12.7166C12.1167 13.3166 11.4111 13.7916 10.6 14.1416C9.78889 14.4916 8.92222 14.6666 8 14.6666Z" fill="#EE3F3E" />
                        </svg></button>
                    }
                    <img
                        src={currentIcon.icon}
                        alt="Icon"
                        width="15"
                        height="15"
                    />


                </>

            )}
            <span className="tabTitle">{tab.title}</span>
        </div>


    );

};

export default Tab;
