#Exercício Python 23: Faça um programa que leia um número de 0 a 9999 e mostre na tela cada um dos dígitos separados.
num = int(input('Digite um numero: '))
u = num // 1 %10
d = num // 10 %10
c = num // 100 %10
m = num // 1000 %10
print('Analisando {}\nAs unidades são {}\nAs Dezenas são {}\nAs centenas são {}\nos milhares são {}'.format(num,u,d,c,m))