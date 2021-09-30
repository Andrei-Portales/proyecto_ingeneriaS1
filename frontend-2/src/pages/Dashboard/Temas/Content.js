import React, { useState } from "react";
import "../content.scss";
import TemaItem from "./Item";
import ItemDetail from "./ItemDetail";
import Dropdown from "react-bootstrap/Dropdown";
import { useGetTemas } from "../../../hooks/useGetTemas";

const Content = () => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [itemId, setItemId] = useState("");

  const { temas } = useGetTemas();

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
            <p>Temas</p>
          </div>
        </div>
        <div className="listContainer">
          <ul className="tree-list">
            {temas.map((data, index) => {
              return (
                <TemaItem
                  key={data.id}
                  index={index + 1}
                  id={data.id}
                  title={data.title}
                  grade={data.grade}
                  subject={data.subject}
                  temaId={data.tema_id}
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
