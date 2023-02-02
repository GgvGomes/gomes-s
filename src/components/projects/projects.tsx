import "../../styles/projects.scss";
import { useEffect, useState } from "react";
import { Card_in_Progess, Card_with_Item } from "./cards";

const items = [
  {
    img: "src/assets/projects/link_tree.png",
    title: "My Link Tree",
    to: "https://tree-link.vercel.app",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const [indexEnd, setIndexEnd] = useState(3);
  const [group, setGroup] = useState('1');

  const [className, setClassName] = useState("");

  useEffect(() => {
    // index == 0 ? setIndexEnd(index + 3) : setIndexEnd(index + 4);
    index == 0 ? setIndexEnd(index + 4) : setIndexEnd(index + 4);
  }, [index]);

  const handlePrev = () => {
    setClassName("");
    setClassName("prev_slider");
    setIndex(index == 0 ? items.length - 4 : index - 4);
    setGroup(group != '1' ? (Number(group) - 1).toString() : '3')
  };

  const handleNext = () => {
    setClassName("");
    setClassName("next_slider");
    setIndex(
      index >= items.length - 1 || index + 4 > items.length - 1 ? 0 : index + 4
    );
    setGroup(group != '4' ? (Number(group) + 1).toString(): '1')
  };

  const handleChosen = (e: any) => {
    setGroup(e);

    if(index > Number(e)){
      setClassName("")
      setClassName("prev_slider")
    }else if(index < Number(e)){
      setClassName("")
      setClassName("next_slider")
    }

    setIndex(Number(e) * 4 - 4)
    setIndexEnd(Number(e) * 4)
  };

  return (
    <div className={`grid-content grid-home projects`} id="projects">
      <div className="grid-cards">
        <button className="prev" onClick={handlePrev}>
          {"<"}
        </button>

        <div className="row">
          {items.slice(index, indexEnd - 2).map((card, index) => {
            if (card.img == undefined && card.title == undefined) {
              return (
                <Card_in_Progess
                  className={className}
                  key={`top-card-${index}`}
                />
              );
            } else {
              return (
                <Card_with_Item
                  to={card.to}
                  title={card.title}
                  img={card.img}
                  className={className}
                  key={`top-card-${index}`}
                />
              );
            }
          })}
        </div>

        <div className="row">
          {items.slice(index + 2, indexEnd).map((card, index) => {
            if (card.img == undefined && card.title == undefined) {
              return (
                <Card_in_Progess
                  className={className}
                  key={`top-card-${index}`}
                />
              );
            } else {
              return (
                <Card_with_Item
                  to={card.to}
                  title={card.title}
                  img={card.img}
                  className={className}
                  key={`top-card-${index}`}
                />
              );
            }
          })}
        </div>

        <button className="next" onClick={handleNext}>
          {">"}
        </button>

        <div className="grid-choices">
          <span
            className={`option ${group == '1' && 'group-selected'}`}
            key={"1"}
            id={"1"}
            onClick={(e : any) => handleChosen(e.target.id)}
            // onClick={(e) => console.log(e)}
          >1</span>
          <span
             className={`option ${group == '2' && 'group-selected'}`}
            key={"2"}
            id={"2"}
            onClick={(e : any) => handleChosen(e.target.id)}
            // onClick={(e) => console.log(e)}
          >2</span>
          <span
             className={`option ${group == '3' && 'group-selected'}`}
            key={"3"}
            id={"3"}
            onClick={(e : any) => handleChosen(e.target.id)}
            // onClick={(e) => console.log(e)}
          >3</span>
          <span
             className={`option ${group == '4' && 'group-selected'}`}
            key={"4"}
            id={"4"}
            onClick={(e : any) => handleChosen(e.target.id)}
            // onClick={(e) => console.log(e)}
          >3</span>
        </div>
      </div>
    </div>
  );
}
