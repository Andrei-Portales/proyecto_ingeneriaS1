import React, { useContext } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import "./item-detail.scss";
import database from "../../../firebase";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Context from "../../../store/context";
import ProfileImg from "../../../assets/profile.jpg";
import GradeSelection from "../../Upload/GradeSelection";
import SubjectSelection from "../../Upload/SubjectSelection";
import NumberOfExercises from "../Components/NumberOfExercises";
import InputTemaId from "../../Upload/InputTemaId";
import InputTemaTitle from "../Components/InputTemaTitle";
import useGetEjercicioDetalle from "../../../hooks/useGetEjercicioDetalle";
import RenderDate from "../../../components/RenderDate/RenderDate";

const ItemDetail = (props) => {
  const { isItemVisible, activeIndex, actions } = useContext(Context);

  const ejercicio = useGetEjercicioDetalle(props.itemId);

  const temaTitleUpdate = (answer) => {
    database.ref(`quiz/${props.itemId}`).update({ tema: answer });
  };

  const gradeSelection = (answer) => {
    database.ref(`quiz/${props.itemId}`).update({ grade: answer });
  };

  const subjectSelection = (answer) => {
    database.ref(`quiz/${props.itemId}`).update({ subject: answer });
  };
  const answersSelection = (answer) => {
    database
      .ref(`quiz/${props.itemId}`)
      .update({ number_of_exercises: answer });
  };
  const temaIdUpdate = (answer) => {
    database.ref(`quiz/${props.itemId}`).update({ tema_id: answer });
  };

  const onClose = () => {
    actions({
      type: "setActiveIndex",
      payload: { ...activeIndex, value: -1 },
    });
    actions({
      type: "setIsItemVisible",
      payload: { ...isItemVisible, value: false },
    });
  };

  return (
    <Flex className="shadow" direction="column" w="100%" py="10px" px="24px">
      <Flex h="70px" justifyContent="end">
        <span onClick={() => onClose()} className="expandArrow">
          <ArrowForwardIcon />
        </span>
      </Flex>
      <Flex h="60px">
        {ejercicio.map((data) => {
          return (
            <InputTemaTitle
              temaTitleInput={temaTitleUpdate}
              title={data.tema}
            />
          );
        })}
      </Flex>
      <Flex h="60px" mb="6px">
        <Flex w="50%">
          <Avatar src={ProfileImg} w="27px" h="27px" />
          <Text pl="10px">Usuario Admin</Text>
        </Flex>
        <Flex w="50%">
          {ejercicio.map((data) => {
            return <RenderDate key={data.date_added} date={data.date_added} />;
          })}
        </Flex>
      </Flex>
      <hr />
      <Flex mt="30px" justifyContent="space-evenly">
        {ejercicio.map((data) => {
          return (
            <>
              <GradeSelection
                gradeSelection={gradeSelection}
                grade={data.grade}
              />
              <SubjectSelection
                subjectSelection={subjectSelection}
                subject={data.subject}
              />
            </>
          );
        })}
      </Flex>
      <Flex mt="40px">
        {ejercicio.map((data) => {
          return (
            <InputTemaId temaIdInput={temaIdUpdate} temaId={data.tema_id} />
          );
        })}
      </Flex>
      <br />
      <br />
      <Flex mt="20px">
        {ejercicio.map((data) => {
          return (
            <NumberOfExercises
              numberOf={data.number_of_exercises}
              numberOfExercises={answersSelection}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
