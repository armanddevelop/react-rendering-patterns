import React, { ReactElement, ReactNode, useState } from "react";
import classes from "./CompoundComponents.module.css";

interface ITabsProps {
  children: ReactNode;
}

const Tabs: React.FC<ITabsProps> = ({ children }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const handleTabClick = (idx: number) => setActiveIdx(idx);
  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => React.isValidElement(child)
  );
  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, idx) => (
          <li
            onClick={() => handleTabClick(idx)}
            key={idx}
            className={`${activeIdx}=== idx ? ${classes.TabActive}: ""`}
          >
            {child.props.label}
          </li>
        ))}
      </ul>
      <p className={classes.TabContent}>{tabElements[activeIdx]}</p>
    </div>
  );
};

export default Tabs;
