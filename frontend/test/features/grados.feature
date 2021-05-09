Feature: Obtener informacion de un grado

    El usuario desea poder acceder a la informacion de un grado

    Scenario: El usuario quiere ver la informacion del grado
    Given El usuario se encuentra en la pagina principal
    When El usuario intenta acceder a un grado
    Then El usuario recibe la informacion del grado "quinto"