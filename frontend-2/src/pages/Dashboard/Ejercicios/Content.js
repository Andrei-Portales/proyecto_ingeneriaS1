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
import "./content.scss";
import Context from "../../../store/context";
import ItemDetail from "./ItemDetail";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody.js";
import TablesTableRow from "../../../components/Tables/EjerciciosRow";
import AdminNavbar from "../../../components/Navbars/AdminNavbar";
import { useGetEjercicios } from "../../../hooks/useGetEjercicios";

const Content = (props) => {
  const { ...rest } = props;
  const [itemId, setItemId] = useState("");
  const { isItemVisible, id } = useContext(Context);
  const { onOpen } = useDisclosure();
  const [fixed, setFixed] = useState(false);

  const { ejercicios } = useGetEjercicios();

  const itemIdFunction = (value) => {
    setItemId(value);
  };

  const widthOne = `${isItemVisible.value && itemId !== "" ? "62%" : "90%"}`;
  const widthTreeList = `${
    isItemVisible.value && itemId !== "" ? "100%" : "94%"
  }`;
  const display = `${isItemVisible.value && itemId !== "" ? "flex" : "none"}`;

  const textColor = useColorModeValue("gray.700", "white");

  console.log("IsItemVisisble: " + isItemVisible.value);
  console.log("Tema Id: " + itemId);

  return (
    <div className="contentWrapper">
      <div className="listViewContainer" style={{ width: widthOne }}>
        <div className="listTitle">
          <AdminNavbar brandText="Ejercicios" />
        </div>
        <div className="listContainer">
          <div className="cardContainer" style={{ width: widthTreeList }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
              <CardBody>
                <Table variant="simple" color={textColor}>
                  <Thead>
                    <Tr my=".8rem" color="gray.400">
                      <Th mx="0rem"></Th>
                      <Th color="gray.400">Ejercicio</Th>
                      <Th color="gray.400">Grado</Th>
                      <Th color="gray.400">Asignatura</Th>
                      <Th color="gray.400">Tema Id</Th>
                      <Th color="gray.400">#Preguntas</Th>
                      {/* <Th color="gray.400">Fecha</Th> */}
                      {/* <Th></Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {ejercicios.map((data, index) => {
                      return (
                        <TablesTableRow
                          key={data.id}
                          index={index + 1}
                          ejercicioId={data.id}
                          grade={data.grade}
                          subject={data.subject}
                          temaId={data.tema_id}
                          tema={data.tema}
                          numberOfExercises={data.number_of_exercises}
                          dateAdded={data.date_added}
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
