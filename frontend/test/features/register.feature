Feature: Registrarse

    el usuario desea poder registrarse en el programa

    Scenario: Ya esxiste un usuario con ese correo
    Given El usuario se encuentra en la pagina de registro
    When El usuario intenta registrarse en la pagina e ingresa su usuario
    Then El usuario reciben un mensaje que es usuario ya existe con el correo "usuario@gmail.com"

    Scenario: No existe un usuario con el correo dado
    Given El usuario se encuentra en la pagina de registro
    When El usuario intenta registrarse en la pagina e ingresa su usuario
    Then El usuario se logra registrar con el correo "usuario2@mail.com"