import React, { useState, useContext } from "react";
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import "../Ejercicios/content.scss";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import TablesTableRow from "../../../components/Tables/TemasRow";
import ItemDetail from "./ItemDetail";
import Context from "../../../store/context";
import { useGetTemas } from "../../../hooks/useGetTemas";
import AdminNavbar from "../../../components/Navbars/AdminNavbar";

const Content = () => {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [itemId, setItemId] = useState("");
  const { isItemVisible } = useContext(Context);

  const { temas } = useGetTemas();

  const isItemSelectFunction = (value) => {
    setIsItemSelected(value);
  };
  const itemIdFunction = (value) => {
    setItemId(value);
  };

  const textColor = useColorModeValue("gray.700", "white");

  const widthOne = `${isItemVisible.value ? "62%" : "90%"}`;
  const widthTreeList = `${isItemVisible.value ? "100%" : "94%"}`;
  const display = `${isItemVisible.value ? "flex" : "none"}`;

  return (
    <div className="contentWrapper">
      <div className="listViewContainer" style={{ width: widthOne }}>
        <div className="listTitle">
          <AdminNavbar brandText="Temas" />
        </div>
        <div className="listContainer">
          <div className="cardContainer" style={{ width: widthTreeList }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
              <CardBody>
                <Table variant="simple" color={textColor}>
                  <Thead>
                    <Tr my=".8rem" color="gray.400">
                      <Th mx="0rem"></Th>
                      <Th color="gray.400">Tema</Th>
                      <Th color="gray.400">Grado</Th>
                      <Th color="gray.400">Asignatura</Th>
                      <Th color="gray.400">Tema id</Th>
                      <Th color="gray.400">Video id</Th>
                      {/* <Th color="gray.400">Fecha</Th> */}
                      {/* <Th></Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {temas.map((data, index) => {
                      return (
                        <TablesTableRow
                          key={data.id}
                          id={data.id}
                          index={index + 1}
                          title={data.title}
                          grade={data.grade}
                          subject={data.subject}
                          temaId={data.tema_id}
                          videoId={data.video_url}
                          dateAdded={data.date_added}
                          isItemSelected={isItemSelectFunction}
                          itemId={itemIdFunction}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="listViewDetail" style={{ display: display }}>
        <ItemDetail itemId={itemId} />
      </div>
    </div>
  );
};

export default Content;
