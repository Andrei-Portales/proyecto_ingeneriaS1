import { useEffect, useState, useContext } from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { useGetTemas } from "../../../hooks/useGetTemas";
import { useGetPin } from "../../../hooks/useGetPin";
import { useGetEjercicios } from "../../../hooks/useGetEjercicios";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import TeacherNavbar from "../../../components/Navbars/TeacherNavbar";
import { db } from "../../../firebase";
import database from "../../../firebase";
import Context from "../../../store/context";

const Content = () => {
  const { temas } = useGetTemas();
  const { ejercicios } = useGetEjercicios();
  const { pin } = useGetPin();
  const { role } = useContext(Context);
  const [total, setTotal] = useState();
  const [students, setStudents] = useState();
  const [teachers, setTeachers] = useState();
  const [admins, setAdmins] = useState();

  const fetchUserName = async () => {
    try {
      const total = await db.collection("users").get();
      const estudiantes = await db
        .collection("users")
        .where("role", "==", "estudiante")
        .get();
      const profesores = await db
        .collection("users")
        .where("role", "==", "profesor")
        .get();
      const admines = await db
        .collection("users")
        .where("role", "==", "admin")
        .get();

      const dataEstudiantes = await estudiantes.docs.length;
      const dataTotal = await total.docs.length;
      const dataProfesores = await profesores.docs.length;
      const dataAdmines = await admines.docs.length;

      setTotal(dataTotal);
      setStudents(dataEstudiantes);
      setTeachers(dataProfesores);
      setAdmins(dataAdmines);
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
  }, []);

  var randomString = function (len, bits) {
    bits = bits || 36;
    var outStr = "",
      newStr;
    while (outStr.length < len) {
      newStr = Math.random().toString(bits).slice(2);
      outStr += newStr.slice(0, Math.min(newStr.length, len - outStr.length));
    }
    return outStr.toUpperCase();
  };

  const generateNewPin = () => {
    console.log(randomString(8, 16)); // 12 hexadecimal characters
    database
      .ref("pin/-MobOCxerRZq9j79_vS3")
      .update({ pin: randomString(8, 16) });
  };

  return (
    <Flex className="contentWrapper">
      <Flex
        m="auto"
        position="absolute"
        width="90%"
        flexDirection="column"
        h="100%"
      >
        <Flex className="listTitle">
          <TeacherNavbar brandText="Dashboard" />
        </Flex>
        {role.value === "admin" ? (
          <Flex w="80%" mx="auto" h="85%">
            <Flex width="260px" flexDirection="column" h="100%">
              <Flex justifyContent="space-between">
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{temas.length}</Heading>
                    <Text>Temas</Text>
                  </CardBody>
                </Card>
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{ejercicios.length}</Heading>
                    <Text>Ejercicios</Text>
                  </CardBody>
                </Card>
              </Flex>
              <Flex justifyContent="space-between" mt="20px">
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{total}</Heading>
                    <Text>Usuarios</Text>
                  </CardBody>
                </Card>
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{students}</Heading>
                    <Text>Estudiantes</Text>
                  </CardBody>
                </Card>
              </Flex>
              <Flex justifyContent="space-between" mt="20px">
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{teachers}</Heading>
                    <Text>Profesores</Text>
                  </CardBody>
                </Card>
                <Card
                  w="120px"
                  h="150px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardBody
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Heading>{admins}</Heading>
                    <Text>Admins</Text>
                  </CardBody>
                </Card>
              </Flex>
            </Flex>
            <Flex width="70%">
              <Flex
                bg="#1F2733"
                w="80%"
                h="130px"
                mx="auto"
                borderRadius="14px"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Heading size="md">
                  PIN para cambiar cuenta a profesor: {pin}
                </Heading>
                <Button onClick={() => generateNewPin()} mt="16px">
                  Generar PIN
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex
            h="300px"
            mt="100px"
            justifyContent="center"
            alignItems="center"
          >
            <Text>
              Acceso unicamente a usuarios admin. Si esto es un error, presione
              el boton de ayuda.
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Content;
