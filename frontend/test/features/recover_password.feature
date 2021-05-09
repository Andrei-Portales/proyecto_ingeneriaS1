Feature: Recuperar contrasena

    El usuario desea poder recuperar su contrasena cuando se le olvida

    Scenario: El usuario quiere ver la informacion del grado
    Given El usuario se le olvido su contrasena y no puede entrar
    When El usuario intenta recuperar contrasena
    Then El usuario recupera su contrasena y recibe "true" como respuesta