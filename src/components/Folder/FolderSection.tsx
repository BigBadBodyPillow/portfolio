import React, { useState } from 'react';
import './FolderSection.css';

interface FolderSectionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

export function FolderSection({
  title,
  children,
  isOpen: controlledIsOpen,
  onToggle,
}: FolderSectionProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    const newState = !isOpen;
    if (onToggle) {
      onToggle(newState);
    } else {
      setInternalIsOpen(newState);
    }
  };

  return (
    <div className="folder-section">
      <div className="folder-tab" onClick={handleToggle}>
        <span className="tab-label">{title}</span>
        <div className={`tab-arrow ${isOpen ? 'open' : ''}`}>▼</div>
      </div>
      <div className={`folder-content ${isOpen ? 'open' : ''}`}>
        <div className="content-inner space-y-4">{children}</div>
      </div>
    </div>
  );
}
