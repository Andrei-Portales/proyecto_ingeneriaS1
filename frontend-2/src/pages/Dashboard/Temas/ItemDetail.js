import React, { useState, useContext } from "react";
import { Flex, Avatar, Text } from "@chakra-ui/react";
import "../Ejercicios/item-detail.scss";
import database from "../../../firebase";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import ProfileImg from "../../../assets/profile.jpg";
import GradeSelection from "../Components/GradeSelection";
import SubjectSelection from "../Components/SubjectSelection";
import Context from "../../../store/context";
import InputTemaId from "../../Upload/InputTemaId";
import EditorModal from "../../Modals/Editor";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import InputVideoId from "../Components/InputVideoId";
import InputTemaTitle from "../Components/InputTemaTitle";
import useGetTemaDetail from "../../../hooks/useGetTemaDetail";
import RenderDate from "../../../components/RenderDate/RenderDate";

const ItemDetail = ({ itemId }) => {
  const [show, setShow] = useState(false);
  const { isItemVisible, activeIndex, showEditor, actions } =
    useContext(Context);

  const tema = useGetTemaDetail(itemId);

  const temaTitleUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ title: answer });
  };

  const gradeSelection = (answer) => {
    database.ref(`temas/${itemId}`).update({ grade: answer });
  };

  const subjectSelection = (answer) => {
    database.ref(`temas/${itemId}`).update({ subject: answer });
  };
  const temaIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ tema_id: answer });
  };

  const videoIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ video_url: answer });
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

  const openEditorModal = () => {
    actions({
      type: "setShowEditor",
      payload: { ...showEditor, value: true },
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
        {tema.map((data) => {
          return (
            <InputTemaTitle
              temaTitleInput={temaTitleUpdate}
              title={data.title}
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
          {tema.map((data) => {
            return <RenderDate key={data.date_added} date={data.date_added} />;
          })}
        </Flex>
      </Flex>
      <hr />
      <Flex mt="30px" justifyContent="space-evenly">
        {tema.map((data) => {
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
        {tema.map((data) => {
          return (
            <>
              <InputTemaId temaIdInput={temaIdUpdate} temaId={data.tema_id} />
              <InputVideoId
                temaIdInput={videoIdUpdate}
                temaId={data.video_url}
              />
            </>
          );
        })}
      </Flex>
      <Flex mt="150px">
        <button onClick={() => openEditorModal()}>
          Visualizar o actualizar contenido
          <ExternalLinkIcon />
          {/* <i className="uil uil-calender openInNewIcon"></i> */}
          {/* <EditorModal show={show} temaId={itemId} /> */}
        </button>
      </Flex>
    </Flex>
  );
};

export default ItemDetail;
