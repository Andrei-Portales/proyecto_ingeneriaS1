Feature: Obtener la informacion de un tema en especifico

    El usuario desea poder acceder a la informacion de un tema

    Scenario: El usuario quiere ver la informacion de un tema de una materia
    Given El usuario se encuentra en la lista de temas de una materia
    When El usuario abre la informacion de una materia
    Then El usuario recibe la informacion del tema "Sumas"