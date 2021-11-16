import React, { useState, useContext } from "react";
import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import "./upload.scss";
import "./quiz-section.scss";
import TeacherNavbar from "../../components/Navbars/TeacherNavbar";
import QuizSectionComponent from "./QuizSection";
import SuccessQuizComponent from "./SuccessQuiz";
import SidebarComponent from "../../components/Sidebar/Sidebars";
import TabOne from "./Tabs/Tab/TabOne";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import theme from "../../theme/theme";
import Context from "../../store/context";

// Decompose UI Components
const UploadExercise = () => {
  const [numberOfExercises, setNumberOfExercises] = useState(0);
  const [isQuizCreated, setIsQuizCreated] = useState(false);
  const [quizIdCreated, setQuizIdCreated] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const { role } = useContext(Context);

  const numberOfExercisesFunction = (answer) => {
    setNumberOfExercises(answer);
  };

  const quizCreation = (value) => {
    setIsQuizCreated(value);
  };
  const quizIdCreation = (value) => {
    setQuizIdCreated(value);
  };
  const isEmptyFunction = (value) => {
    setIsEmpty(value);
  };

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <div className="uploadWrapper">
        <SidebarComponent isActive={2} />
        <div className="uploadContentWrapper">
          <Flex>
            <TeacherNavbar brandText="Subir rjercicios" />
          </Flex>
          {role.value === "admin" ? (
            <>
              <div className="contentPanel">
                {isQuizCreated ? (
                  <SuccessQuizComponent quizId={quizIdCreated} />
                ) : (
                  <QuizSectionComponent
                    isQuizCreated={quizCreation}
                    quizId={quizIdCreation}
                    isEmpty={isEmptyFunction}
                    numberOfExercises={numberOfExercisesFunction}
                  />
                )}

                <div className="contentBodyWrapper">
                  <Tabs
                    defaultActiveKey="1"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    {Array.from(Array(numberOfExercises)).map(
                      (value, index) => (
                        <Tab
                          key={index + 1}
                          eventKey={index + 1}
                          title={index + 1}
                        >
                          <TabOne
                            quizId={quizIdCreated}
                            isEmpty={isEmpty}
                            order={index + 1}
                          />
                        </Tab>
                      )
                    )}
                  </Tabs>
                </div>
              </div>
            </>
          ) : (
            <Flex
              h="300px"
              mt="100px"
              justifyContent="center"
              alignItems="center"
            >
              <Text>
                Acceso unicamente a usuarios admin. Si esto es un error,
                presione el boton de ayuda.
              </Text>
            </Flex>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
};

export default UploadExercise;
