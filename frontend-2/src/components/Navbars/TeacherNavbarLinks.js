import { Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { ProfileIcon, SettingsIcon } from "../Icons/Icons";

import PropTypes from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";
import { NavLink } from "react-router-dom";
import Context from "../../store/context";

export default function HeaderLinks(props) {
  const { variant, children, secondary, ...rest } = props;
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  const history = useHistory();
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const { role, actions } = useContext(Context);

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();

      const data = await query.docs[0].data();
      setName(data.name);
      actions({
        type: "setRole",
        payload: { ...role, value: data.role },
      });
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    fetchUserName();
    if (loading) return;
    if (!user || role === "estudiante") return history.replace("/login");
  }, [user, loading, role]);

  if (secondary) {
    navbarIcon = "white";
  }

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <NavLink to="/login">
        <Button
          ms="0px"
          px="0px"
          border="none"
          me={{ sm: "2px", md: "40px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          leftIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="6px" />
            )
          }
        >
          <Text display={{ sm: "none", md: "flex" }}>{name}</Text>
        </Button>
      </NavLink>

      <Button onClick={logout}>
        <i class="uil uil-signout" size="30px"></i>
      </Button>

      {/* <SettingsIcon
        cursor="pointer"
        ms={{ base: "16px", xl: "0px" }}
        me="26px"
        color={navbarIcon}
        w="18px"
        h="18px"
      /> */}
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
