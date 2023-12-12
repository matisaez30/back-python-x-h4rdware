class user:
    def __init__(self,nom,pwd):
        self.nom=nom
        self.pwd=pwd

u1 = user("matias", "123")
u2 = user("nahuel", "123")

usuarios = [u1,u2]

n = input("Ingrese su usuario:")
p = input("Ingrese su clave:")

k=0
for i in range(len(usuarios)):
    if usuarios[i].nom == n and usuarios[i].pwd == p:
        print(usuarios[i].nom, "¡Bienvedido! Ingreso Exitoso")
        k=1
        break

if k == 0:
    print("Intente de nuevo...")
