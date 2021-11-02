import React, { useContext } from "react";
import "../../pages/Dashboard/item.scss";
import { Avatar, Flex, Td, Text, Tr } from "@chakra-ui/react";
import Context from "../../store/context";
import ProfileImg from "../../assets/profile.jpg";
import RenderDate from "../RenderDate/RenderDate";
import RenderIndex from "../RenderIndex/RenderIndex";

function EjerciciosRow(props) {
  const {
    index,
    ejercicioId,
    grade,
    subject,
    temaId,
    tema,
    numberOfExercises,
    dateAdded,
  } = props;

  const { isItemVisible, activeIndex, actions } = useContext(Context);

  const onItemSelect = (id, index) => {
    actions({
      type: "setActiveIndex",
      payload: { ...activeIndex, value: index },
    });
    actions({
      type: "setIsItemVisible",
      payload: { ...isItemVisible, value: true },
    });
    props.itemId(id);
  };

  return (
    <Tr
      className={`tree-item${index === activeIndex.value ? " selected" : ""}`}
      onClick={() => onItemSelect(ejercicioId, index)}
    >
      <Td py=".8rem">
        <Flex>
          <RenderIndex index={index} />
        </Flex>
      </Td>
      <Td py=".8rem">
        <Flex>
          <Text>{tema}</Text>
        </Flex>
      </Td>
      <Td py=".8rem">
        <Flex>
          <Text>{grade}</Text>
        </Flex>
      </Td>
      <Td py=".8rem">
        <Flex>
          <Text>{subject}</Text>
        </Flex>
      </Td>
      <Td py=".8rem">
        <Flex>
          <Text>{temaId}</Text>
        </Flex>
      </Td>
      <Td py=".8rem">
        <Flex>
          <Text>{numberOfExercises}</Text>
        </Flex>
      </Td>
      {!isItemVisible.value ? (
        <>
          <Td py=".8rem">
            <Flex>
              <RenderDate date={dateAdded} />
            </Flex>
          </Td>
          <Td py=".8rem">
            <Flex>
              <Avatar src={ProfileImg} w="30px" h="30px"></Avatar>
            </Flex>
          </Td>
        </>
      ) : null}
    </Tr>
  );
}

export default EjerciciosRow;
