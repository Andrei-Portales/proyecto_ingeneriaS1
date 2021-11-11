import { Input } from "@chakra-ui/react";

const InputTemaTitle = (props) => {
  const temaIdInputHandler = (e) => {
    props.temaTitleInput(e.target.value);
  };

  return (
    <Input
      _hover={{ background: "#1f2733" }}
      _focus={{
        color: "rgba(66, 165, 245, 1)",
        background: "#1f2733",
      }}
      borderColor="transparent"
      type="text"
      value={props.title}
      onChange={temaIdInputHandler}
    />
  );
};

export default InputTemaTitle;
