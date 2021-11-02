import matematicasIcon from "../assets/matematicas.png";
import cienciasIcon from "../assets/ciencias.jpg";
import idiomaIcon from "../assets/idioma.jpg";

export const materias = {
  cuarto: {
    title: "Materias 4to",
    materias: [
      { id: "matematicas", title: "Matemáticas", image: matematicasIcon },
      { id: "ciencias", title: "Ciencias", image: cienciasIcon },
      { id: "idioma", title: "Idioma", image: idiomaIcon },
    ],
  },
  quinto: {
    title: "Materias 5to",
    materias: [
      { id: "matematicas", title: "Matemáticas", image: matematicasIcon },
      { id: "ciencias", title: "Ciencias", image: cienciasIcon },
      { id: "idioma", title: "Idioma", image: idiomaIcon },
    ],
  },
  sexto: {
    title: "Materias 6to",
    materias: [
      { id: "matematicas", title: "Matemáticas", image: matematicasIcon },
      { id: "ciencias", title: "Ciencias", image: cienciasIcon },
      { id: "idioma", title: "Idioma", image: idiomaIcon },
    ],
  },
};


export const temas = {
  cuarto: {
    matematicas: {
      title: "Matemáticas",
      temas: [
        {
          id: "10001",
          title: "Números hasta millones",
          videoId: "a7aUQQCfuP0",
          isCompleted: true,
        },
        {
          id: "10020",
          title: "Multiplicación",
          videoId: "YFtEaVw5k1A",
          isCompleted: true,
        },
        {
          id: "10030",
          title: "Ángulos",
          videoId: "4pGyx2PrfgM",
          isCompleted: true,
        },
        {
          id: "103",
          title: "División",
          videoId: "mQ4wKV9_pZs",
          isCompleted: false,
        },
        {
          id: "104",
          title: "Números decimales",
          videoId: "bVFExqCCwfE",
          isCompleted: false,
        },
        {
          id: "105",
          title: "Triángulos",
          videoId: "RGeOmrvRmFc",
          isCompleted: false,
        },
      ],
    },
    ciencias: {
      title: "Ciencias Cuarto",
      temas: [
        "Numeracion de 6 cifras",
        "Adicion y sustraccion de numeros",
        "Operaciones combinadas",
        "Conjuntos",
        "Operaciones de conjuntos",
        "Operaciones con conjuntos",
      ],
    },
    idioma: {
      title: "Idioma Cuarto",
      temas: [
        "Numeracion de 6 cifras",
        "Adicion y sustraccion de numeros",
        "Operaciones combinadas",
        "Conjuntos",
        "Operaciones de conjuntos",
        "Operaciones con conjuntos",
      ],
    },
  },
  quinto: {
    matermaticas: {
      title: "Matemáticas",
      temas: [
        {
          id: "51001",
          title: "Números hasta millones",
          videoId: "a7aUQQCfuP0",
          isCompleted: true,
        },
      ],
    },
  },
  sexto: {},
};
