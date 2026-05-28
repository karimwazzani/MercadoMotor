"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.css";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: string[] | Option[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Seleccionar...",
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options to Option[] format
  const normalizedOptions = React.useMemo(() => {
    return options.map(opt => {
      if (typeof opt === "string") {
        return { value: opt, label: opt };
      }
      return opt;
    });
  }, [options]);

  // Find the active option's label
  const activeLabel = React.useMemo(() => {
    const activeOpt = normalizedOptions.find(opt => opt.value === value);
    return activeOpt ? activeOpt.label : placeholder;
  }, [normalizedOptions, value, placeholder]);

  // Click outside detector to close the dropdown overlay
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(prev => !prev);
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div 
      className={`${styles.selectContainer} ${disabled ? styles.disabled : ""}`} 
      ref={containerRef}
    >
      {/* TRIGGER BUTTON */}
      <div 
        className={`${styles.selectTrigger} ${isOpen ? styles.triggerOpen : ""}`}
        onClick={handleToggle}
        role="button"
        tabIndex={disabled ? -1 : 0}
      >
        <span className={styles.triggerText}>{activeLabel}</span>
        <svg 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} 
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="none"
        >
          <path 
            d="M1 1.5L6 6.5L11 1.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* FLOATING OVERLAY LIST */}
      {isOpen && (
        <div className={styles.optionsOverlay}>
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <div 
                key={opt.value}
                className={`${styles.optionItem} ${isSelected ? styles.itemSelected : ""}`}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
