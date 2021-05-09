Feature: Iniciar sesion

    El usuario desea poder iniciar sesion en la aplicacion

    Scenario: El usuario no ha iniciado sesion
    Given El usuario no ha iniciado sesion
    When El usuario intenta iniciar sesion
    Then Debe iniciar sesion "sesion iniciada"