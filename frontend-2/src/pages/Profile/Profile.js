import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./profile.scss";
import theme from "../../theme/theme";
import CloseExercise from "../../components/Ejercicios/TopNavigation/CloseExercise";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import PersonImg from "../../assets/person.svg";
import ProfileImg from "../../assets/profile.jpg";

import {
  Flex,
  Text,
  Heading,
  Input,
  Modal,
  ColorModeScript,
  Avatar,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Button,
  ChakraProvider,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { CheckCircleIcon, ExternalLinkIcon, LockIcon } from "@chakra-ui/icons";

function Profile() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [showSave, setShowSave] = useState(false);
  const [userGrade, setUserGrade] = useState(localStorage.getItem("userGrade"));
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [pin, setPin] = useState("");

  // let mainText = useColorModeValue("gray.700", "gray.200");
  let mainText = useColorModeValue("gray.200", "gray.200");
  const { colorMode, toggleColorMode } = useColorMode();

  const saveChangesWrapper = `${
    showSave ? "saveChangesWrapper" : "saveChangesWrapperHidden"
  }`;

  function handleEditPicture() {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  }

  const fetchUserName = async () => {
    console.log("feching");
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
      setRole(data.role);
      setId(query.docs[0].id);
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/login");
    fetchUserName();
  }, [user, loading, role]);

  const handleSelection = (e) => {
    setUserGrade(e.target.value);
    localStorage.setItem("userGrade", e.target.value);
  };

  const userNameChangeHandler = (event) => {
    if (userName !== event.target.value) {
      setUserName(event.target.value);
      setShowSave(true);
      return;
    }
    setShowSave(false);
    return;
  };

  const handleUpdateRole = () => {
    if (pin === "12345678") {
      db.collection("users")
        .doc(id)
        .update({ role: "teacher" })
        .then(() => {
          window.location.reload();
        });
    } else {
      return;
    }
  };

  const updateUserInfo = () => {
    setShowSave(false);
  };

  const pinChangeHandler = (event) => setPin(event.target.value);

  return (
    <>
      <ChakraProvider theme={theme} resetCss={false}>
        <div className="profileWrapper">
          <div className="userProfileWrapper">
            <br />
            <br />
            <CloseExercise />
            <div className="userAvatarWrapper">
              <div className="userAvatar">
                <div className="avatar">
                  <Avatar src={ProfileImg} alt="Avatar" w="150px" h="150px" />
                  <input type="file" id="imageInput" hidden="hidden" />
                </div>

                <FontAwesomeIcon
                  icon={faPenAlt}
                  onClick={handleEditPicture}
                  className="button"
                />
              </div>
              <div className="userBasicInfo">
                <div className="userInfo">
                  <label>Nombre</label>
                  <br />
                  <input
                    type="name"
                    value={name}
                    onChange={userNameChangeHandler}
                  />
                  <br />
                  <br />
                  <label>Correo electrónico</label>
                  <b />
                  <input type="email" value={user?.email} />
                  <br />
                  <br />
                  <label>Grado</label>
                  <br />
                  <select onChange={handleSelection} value={userGrade}>
                    <option>6to Grado</option>
                    <option>5to Grado</option>
                    <option>4to Grado</option>
                  </select>
                  <div>
                    <p>{localStorage.getItem("message")}</p>
                  </div>
                  <ChakraProvider theme={theme} resetCss={false}>
                    <div>
                      <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        size="xl"
                        isCentered
                      >
                        <ModalOverlay />
                        <ModalContent maxW="1000px">
                          <Flex width="100%" h="550px">
                            <Flex
                              w="700px"
                              flexDirection="column"
                              px="50px"
                              py="30px"
                            >
                              <Heading color={mainText} size="lg">
                                Cambia tu cuenta a profesor para acceder a más
                                opciones.
                              </Heading>
                              <Flex
                                border="1px"
                                borderColor="gray"
                                width="600px"
                                margin="auto"
                                h="250px"
                                borderRadius="14px"
                                flexDirection="column"
                              >
                                <Flex flexDirection="column" p="40px">
                                  <Flex alignItems="center">
                                    <CheckCircleIcon color="green" />
                                    <Text color={mainText} px="20px">
                                      Estudiante
                                    </Text>
                                  </Flex>
                                  <Flex>
                                    <Text px="40px" py="10px" color="#939BB4">
                                      Acceso a ejercicios, videos y PDF
                                    </Text>
                                  </Flex>
                                </Flex>
                                <Flex flexDirection="column" px="40px">
                                  <Flex>
                                    <LockIcon color="yellow" />
                                    <Text color={mainText} px="20px">
                                      Profesor
                                    </Text>
                                  </Flex>
                                  <Flex>
                                    <Text px="40px" py="10px" color="#939BB4">
                                      + Acceso a dashboard y modificar
                                      ejercicios y temas.
                                    </Text>
                                  </Flex>
                                </Flex>
                              </Flex>
                              <Flex justifyContent="space-between">
                                <Flex>
                                  <Button variant="ghost" onClick={onClose}>
                                    Continuar como estudiante
                                  </Button>
                                </Flex>
                                <Flex>
                                  <Input
                                    placeholder="PIN de 8 dígitos"
                                    value={pin}
                                    onChange={pinChangeHandler}
                                  />
                                  <Button
                                    colorScheme="blue"
                                    mr={3}
                                    onClick={() => handleUpdateRole()}
                                  >
                                    Actualizar
                                  </Button>
                                </Flex>
                              </Flex>
                            </Flex>
                            <Flex w="300px" bg="#282E3E">
                              <img src={PersonImg} alt="Reference" />
                            </Flex>
                          </Flex>
                        </ModalContent>
                      </Modal>
                    </div>
                  </ChakraProvider>
                </div>
              </div>
            </div>
            <div className={saveChangesWrapper}>
              <button onClick={() => updateUserInfo()}>Guardar</button>
            </div>
          </div>
          <div className="userProfileRight">
            <Flex mt="30px" justifyContent="space-evenly" alignItems="center">
              <Text className="role-title">
                {"   "}
                <CheckCircleIcon color="blue.600" mr="5px" /> {role}
              </Text>
              <Text>{name}</Text>
              <Avatar src={ProfileImg} w="35px" h="35px" />
            </Flex>
            <Flex>
              {role !== "estudiante" ? (
                <Flex
                  bg="#282E3E"
                  height="200px"
                  w="80%"
                  m="auto"
                  mt="200px"
                  borderRadius="13px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <NavLink to="dashboard/ejercicios">
                    Ir al dashboard <ExternalLinkIcon />
                  </NavLink>
                </Flex>
              ) : (
                <Flex
                  bg="orange.300"
                  height="200px"
                  w="80%"
                  m="auto"
                  mt="200px"
                  borderRadius="13px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button colorScheme="blue" onClick={onOpen} border="none">
                    Soy profesor
                  </Button>
                </Flex>
              )}
            </Flex>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default Profile;
