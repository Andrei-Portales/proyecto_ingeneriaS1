import React, { useState } from "react";
import "./content.scss";
import QuizItem from "./Item";
import ItemDetail from "./ItemDetail";
import Dropdown from "react-bootstrap/Dropdown";
import { useGetQuiz } from "../../hooks/useGetQuiz";

const Content = () => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [itemId, setItemId] = useState("");

  const { quizList } = useGetQuiz();

  const isItemSelectFunction = (value) => {
    setIsItemSelected(value);
  };
  const itemIdFunction = (value) => {
    setItemId(value);
  };

  const widthOne = `${isItemSelected ? "70%" : "90%"}`;
  const display = `${isItemSelected ? "flex" : "none"}`;

  return (
    <div className="contentWrapper">
      <div className="listViewContainer" style={{ width: widthOne }}>
        <div className="listTitle">
          <div className="filterContainer">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <i className="uil uil-filter"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="titleContainer">
            <p>Quiz</p>
          </div>
        </div>
        <div className="listContainer">
          <ul className="tree-list">
            {quizList.map((data) => {
              return (
                <QuizItem
                  key={data.id}
                  quizId={data.id}
                  grade={data.grade}
                  subject={data.subject}
                  temaId={data.tema_id}
                  numberOfExercises={data.number_of_exercises}
                  dateAdded={data.date_added}
                  isItemSelected={isItemSelectFunction}
                  itemId={itemIdFunction}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <div className="listViewDetail" style={{ display: display }}>
        <ItemDetail itemId={itemId} />
      </div>
    </div>
  );
};

export default Content;
