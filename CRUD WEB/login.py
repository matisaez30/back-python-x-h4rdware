import sys
usuario="admin"
clave="admin"

for i in range(3):
    user = input("Ingrese su Usuario...")
    if user == usuario:
        for i in range(3):
            pass = input("Ingrese la contraseña...")
            if pass == clave:
                print("Ingreso exitoso")
                sys.exit()
            else:
                print("Clave Incorrecta")
    else:
        print("El usuario no existe...")