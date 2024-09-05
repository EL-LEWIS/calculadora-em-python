n1= float(input("\n Informe um valor: "))
n2= float(input("\n Informe outro valor: "))

resposta=(input("\n Escolha uma opçao: \n1-soma \n2-subtraçao \n3-multiplicaçao \n4-divisao \n5-soma dos numeros mais raiz quadrada \nEscolha:") )

r1=n1+n2
r2=n1-n2
r3=n1*n2
r4=n1/n2
r5=(n1+n2)**(1/2)

if(resposta == "1" or (resposta == "soma")):
    print("A soma é {}".format(r1))
elif(resposta == "2" or (resposta == "subtraçao")):
    print("A subtraçao é {}".format(r2))
elif(resposta == "3" or (resposta == "multiplicaçao")):
    print("A multiplicaçao é {}".format(r3))
elif(resposta == "4" or (resposta == "divisao")):
    print("A divisao é {}".format(r4))
elif(resposta == "5" or (resposta == "raiz quadrada") or (resposta == "raiz")):
    print("A raiz quadrada é {}".format(r5))

else:
    print("ERRO")