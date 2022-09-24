// note this is from video 161 and is not part of this sample project!
// but Max didn't provide an attachment for this project

import React, { useMemo } from "react";

import classes from "./DemoList.module.css";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    return items.sort((a, b) => b - a);
  }, [items]);

  return (
    <div className={classes.starting}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;