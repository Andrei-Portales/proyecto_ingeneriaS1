import React, { useState, useEffect, useMemo } from "react";
import database from "../../../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

import { storage } from "../../../../firebase";
import EmptyComponent from "../Components/Empty";
import UploadedComponent from "../Components/Uploaded";
import SelectAnswersComponent from "../Components/SelectAnswers";
import SelectVersionComponent from "../Components/SelectVersion";
import { UilCloudUpload } from "@iconscout/react-unicons";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  padding: "20px",
  margin: 0,
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "##33374A",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const container = {
  paddingLeft: "0px",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const button = {
  width: 120,
  backgroundColor: "#2e3247",
  outline: "none",
  border: "none",
  color: "#bdbdbd",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 120,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const TabOne = (props) => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionSubtitle, setQuestionSubtitle] = useState("");
  const [exerciseVersion, setExerciseVersion] = useState(1);
  const [numberOfAnswers, setNumberOfAnswers] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [isExerciseUploaded, setIsExerciseUploaded] = useState(false);

  const currentDate = new Date();
  const timestamp = currentDate.getTime(); // Milliseconds

  const titleInputHandler = (e) => {
    setQuestionTitle(e.target.value);
  };

  const subtitleInputHandler = (e) => {
    setQuestionSubtitle(e.target.value);
  };

  const answerOneInputHandler = (e) => {
    setAnswerOne(e.target.value);
  };
  const answerTwoInputHandler = (e) => {
    setAnswerTwo(e.target.value);
  };
  const answerThreeInputHandler = (e) => {
    setAnswerThree(e.target.value);
  };
  const answerFourInputHandler = (e) => {
    setAnswerFour(e.target.value);
  };
  const correctAnswerInputHandler = (e) => {
    setCorrectAnswer(e.target.value);
  };
  const selectionNumberOfAnswers = (answer) => {
    setNumberOfAnswers(answer);
  };
  const exerciseVersionFunction = (value) => {
    setExerciseVersion(parseInt(value));
  };

  const [progress, setProgress] = useState(0);
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const handleExerciseSubmit = () => {
    var exerciseRef = database.ref("exercises");
    var newExerciseRef = exerciseRef.push();
    newExerciseRef.set(
      {
        version: exerciseVersion,
        question_title: questionTitle,
        question_subtitle: questionSubtitle,
        number_of_answers: numberOfAnswers,
        answer_one: answerOne,
        answer_two: answerTwo,
        answer_three: answerThree,
        answer_four: answerFour,
        correct_answer: correctAnswer,
        audio_url: "",
        date_added: timestamp.toString(),
        id: newExerciseRef.key,
        order: props.order,
        quiz_id: props.quizId,
        user_id: "2ZX9urSBNmY5BWAtyrBVK1q92iz1",
      },
      (error) => {
        if (error) {
          toast.error(error);
        } else {
          setIsExerciseUploaded(true);
        }
      }
    );
    const uploadTask = storage
      .ref(`images/${newExerciseRef.key}`)
      .put(files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(newExerciseRef.key)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  const heightOne = `${exerciseVersion === 3 ? "100px" : "190px"}`;
  const display = `${exerciseVersion === 3 ? "flex" : "none"}`;
  const displayTwo = `${exerciseVersion === 3 ? "none" : "flex"}`;

  return (
    <>
      {props.isEmpty ? (
        <EmptyComponent />
      ) : (
        [
          isExerciseUploaded ? (
            <UploadedComponent />
          ) : (
            <div className="tabContentWrapper">
              <div className="tabContentHeader">
                {/* <progress value={progress} max="100" /> */}
                <SelectVersionComponent
                  exerciseVersion={exerciseVersionFunction}
                />
              </div>
              <div className="tabContentBody" style={{ height: heightOne }}>
                {exerciseVersion === 1 ? (
                  <div className="exerciseBody">
                    <div className="exerciseBodyInput">
                      <>
                        <label>Título</label>
                        <br />
                        <input
                          type="text"
                          value={questionTitle}
                          onChange={titleInputHandler}
                          className="inputTitle"
                        ></input>
                        <br />
                        <br />
                        <label>Subtítulo</label>
                        <br />
                        <input
                          type="text"
                          value={questionSubtitle}
                          onChange={subtitleInputHandler}
                          className="inputSubtitle"
                        ></input>
                      </>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {exerciseVersion === 2 ? (
                  <div className="exerciseBody">
                    <div className="exerciseBodyInput">
                      <label>Título</label>
                      <br />
                      <input
                        type="text"
                        value={questionTitle}
                        onChange={titleInputHandler}
                        className="inputTitle"
                      />
                      <br />
                      <br />
                      <div className={container}>
                        <div {...getRootProps({ style })}>
                          <input {...getInputProps()} />
                          <UilCloudUpload />
                          <button type="button" style={button} onClick={open}>
                            Subir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="exerciseBodyUpload">
                      <aside style={thumbsContainer}>{thumbs}</aside>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {exerciseVersion === 3 ? (
                  <div className="exerciseBody">
                    <div className="exerciseBodyInput">
                      <>
                        <label>Título</label>
                        <br />
                        <input
                          type="text"
                          value={questionTitle}
                          onChange={titleInputHandler}
                          className="inputTitle"
                        ></input>
                        <br />
                        <br />
                      </>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="tabContentAnswers">
                <br />
                <SelectAnswersComponent
                  selectionNumberOfAnswers={selectionNumberOfAnswers}
                />
              </div>
              <div className="tabContentInputAnswers">
                <br />
                {(numberOfAnswers === 2) & (exerciseVersion !== 3) ? (
                  <>
                    <input
                      type="text"
                      value={answerOne}
                      onChange={answerOneInputHandler}
                      placeholder="Respuesta 1"
                      id="1"
                    />
                    <input
                      type="text"
                      value={answerTwo}
                      onChange={answerTwoInputHandler}
                      placeholder="Respuesta 2"
                      id="2"
                    />
                    <input
                      type="text"
                      value={correctAnswer}
                      onChange={correctAnswerInputHandler}
                      placeholder="Respuesta correcta"
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="inputAnswersUpload"
                      style={{ display: display }}
                    >
                      <div className={container}>
                        <div {...getRootProps({ style })}>
                          <input {...getInputProps()} />
                          <UilCloudUpload />
                          <button type="button" style={button} onClick={open}>
                            Subir
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="inputAnswersPreview"
                      style={{ display: display }}
                    >
                      <aside style={thumbsContainer}>{thumbs}</aside>
                    </div>
                  </>
                )}
                {(numberOfAnswers === 3) & (exerciseVersion !== 3) ? (
                  <>
                    <input
                      type="text"
                      value={answerOne}
                      onChange={answerOneInputHandler}
                      placeholder="Respuesta 1"
                      id="1"
                    />
                    <input
                      type="text"
                      value={answerTwo}
                      onChange={answerTwoInputHandler}
                      placeholder="Respuesta 2"
                      id="2"
                    />
                    <input
                      type="text"
                      value={answerThree}
                      onChange={answerThreeInputHandler}
                      placeholder="Respuesta 3"
                      id="3"
                    />
                    <input
                      type="text"
                      value={correctAnswer}
                      onChange={correctAnswerInputHandler}
                      placeholder="Respuesta correcta"
                    />
                  </>
                ) : (
                  ""
                )}
                {(numberOfAnswers === 4) & (exerciseVersion !== 3) ? (
                  <>
                    <input
                      type="text"
                      value={answerOne}
                      onChange={answerOneInputHandler}
                      placeholder="Respuesta 1"
                      id="1"
                    />
                    <input
                      type="text"
                      value={answerTwo}
                      onChange={answerTwoInputHandler}
                      placeholder="Respuesta 2"
                      id="2"
                    />
                    <input
                      type="text"
                      value={answerThree}
                      onChange={answerThreeInputHandler}
                      placeholder="Respuesta 3"
                      id="3"
                    />
                    <input
                      type="text"
                      value={answerFour}
                      onChange={answerFourInputHandler}
                      placeholder="Respuesta 4"
                      id="4"
                    />
                    <input
                      type="text"
                      value={correctAnswer}
                      onChange={correctAnswerInputHandler}
                      placeholder="Respuesta correcta"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <br />
              <div className="tabContentGenerate">
                <button
                  className="generateExerciseButton"
                  onClick={() => handleExerciseSubmit()}
                >
                  Generar
                </button>
                <ToastContainer />
              </div>
            </div>
          ),
        ]
      )}
    </>
  );
};

export default TabOne;
