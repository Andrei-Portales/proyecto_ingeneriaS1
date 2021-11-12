import React from "react";
import { Flex } from "@chakra-ui/react";
import "../../Upload/number-of-exercises.scss";

const NumberOfExercises = (props) => {
  const onChangeValue = (event) => {
    if (event.target.value === "2") {
      props.numberOfExercises(2);
    }
    if (event.target.value === "3") {
      props.numberOfExercises(3);
    }
    if (event.target.value === "4") {
      props.numberOfExercises(4);
    }
    if (event.target.value === "5") {
      props.numberOfExercises(5);
    }
    if (event.target.value === "6") {
      props.numberOfExercises(6);
    }
    if (event.target.value === "7") {
      props.numberOfExercises(7);
    }
    if (event.target.value === "8") {
      props.numberOfExercises(8);
    }
  };

  return (
    <Flex flexDirection="column" onChange={onChangeValue}>
      <Flex mb="10px">Número de preguntas</Flex>
      <Flex>
        {Array.from(Array(5)).map((value, index) => (
          <>
            <input
              className="radio_input"
              key={index + 2}
              type="radio"
              value={index + 2}
              name="myRadio"
              id={`myRadio${index + 2}`}
              checked={index + 2 === props.numberOf ? true : false}
            />
            <label className="radio_label" for={`myRadio${index + 2}`}>
              {index + 2}
            </label>
          </>
        ))}
      </Flex>
    </Flex>
  );
};

export default NumberOfExercises;
