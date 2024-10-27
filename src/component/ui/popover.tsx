"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";
import "@/styles/component/ui/ui.css";

interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerButton = useRef<HTMLButtonElement>(null);

  const togglePopover = () => setIsOpen(!isOpen);
  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerButton.current?.contains(event.target as Node)
      ) {
        closePopover();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popover-container">
      <button ref={triggerButton} onClick={togglePopover}>
        {trigger}
      </button>
      {isOpen && (
        <div ref={popoverRef} className="popover">
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
