import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import "./List.scss";
import LtItem from "./ListIem/listItem";
import { useRef, useState } from "react";

function List({type}) {
  const listRef = useRef();
  const [slidenumber,setslidenumber] = useState(0);
  const [isMoved,setisMoved] = useState(0);
  function handleClick(direction){
    setisMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if(direction === "left" && slidenumber > 0){
      setslidenumber(slidenumber-1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === "right" && slidenumber < 6 ){
      setslidenumber(slidenumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
      <div className="listtitle">
        <span>{type}</span>
      </div>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderarrow left" onClick={() => handleClick("left")} style={{display: !isMoved && 'none'}}/>
        <div className="container" ref={listRef}>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
          <LtItem/>
        </div>
        <ArrowForwardIosOutlined className="sliderarrow right" onClick={() => handleClick("right")}/>
      </div>
    </div>
  );
}

export default List;
