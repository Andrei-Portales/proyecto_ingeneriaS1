Feature: Registrarse

    el usuario desea poder registrarse en el programa

    Scenario: Ya esxiste un usuario con ese correo
    Given El usuario se encuentra en la pagina de registro
    When El usuario intenta registrarse en la pagina e ingresa su usuario
    Then El usuario reciben un mensaje que es usuario ya existe con el correo "usuario@gmail.com"