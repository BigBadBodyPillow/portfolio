import React, { useState } from 'react';
//css
import './Folder.css';
import { FolderSection } from './FolderSection';

interface FolderProps {
  children?: React.ReactNode;
}

interface FolderSectionElement extends React.ReactElement {
  props: {
    title: string;
    children: React.ReactNode;
  };
}

export function Folder({ children }: FolderProps) {
  // projects is open by default
  const [activeTab, setActiveTab] = useState<string | null>('Projects');

  // get titles form children
  const sections = React.Children.toArray(children) as FolderSectionElement[];

  const handleTabClick = (title: string) => {
    setActiveTab(activeTab === title ? null : title);
  };

  return (
    <div className="folder-collapsible-container">
      <div className="folder-tabs-container select-none">
        {sections.map((section, index) => {
          const title = section.props.title;
          return (
            <div key={index} className="folder-section">
              <div
                className={`folder-tab ${activeTab === title ? 'active' : ''}`}
                onClick={() => handleTabClick(title)}
              >
                <span className="tab-label">{title}</span>
                <div
                  className={`tab-arrow ${activeTab === title ? 'open' : ''}`}
                >
                  ▼
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="folder-content-area">
        {activeTab && (
          <div className="p-6 folder-content-container">
            {
              sections.find((section) => section.props.title === activeTab)
                ?.props.children
            }
          </div>
        )}
      </section>
    </div>
  );
}

export { FolderSection };
