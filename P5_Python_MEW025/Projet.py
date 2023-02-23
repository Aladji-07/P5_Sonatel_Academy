import csv
from Projet_fonctions import numero_valide
from Projet_fonctions import date_valide
from datetime import datetime
from Projet_fonctions import gestion_note
from Projet_fonctions import afficher
from Projet_fonctions import Nom
from Projet_fonctions import Prenom
from Projet_fonctions import Menu
from Projet_fonctions import recherche
from Projet_fonctions import tri_moyenne

#from test import extraire_notes
file="/home/wade/Téléchargements/Donnees_Projet_Python_DataC5.csv"
with open(file,"r") as file:
    csv_reader= csv.reader(file)
    v=[]
    iv=[]
    for i in csv_reader:
        i[4]=i[4].replace(".","/").replace("-","/").replace("_","/").replace(",","/").replace("|","/").replace(" ","/").replace(":","/").replace("mars","03")
        i[5]=i[5].lstrip()
        d=numero_valide(i[1])
        if ('') not in i:
            if d==True :
                v.append(i)
            else:
                iv.append(i)
                
# #formatage calsse               
    for i in v: 
        i[5]=i[5][0]+"em"+i[5][-1]
    for i in iv: 
        i[5]=i[5][0]+"em"+i[5][-1]
              
    n=[]            
    for i in v:
        if Nom(i[3])==True:
            n.append(i)
        else:
            iv.append(i)
    s=[]
    for i in n:
       if date_valide(i[4])==True:
          s.append(i)
       else:
          iv.append(i)
          
    c=[]
    for i in s:
        if i[5] in ['6emA','6emB','5emA','5emB','4emA','4emB','3emA','3emB']:
            c.append(i)
        else:
            iv.append(i)

#un tableau  qui me recupere les données pour un traitement ulterieur
    for i in c:
        i[6]=gestion_note(i[6])
               
# print(afficher(iv))      
# print(len(iv))
    

choix=Menu()
while choix !='6':
    if choix=='1':
        a=str(input("voulez-vous afficher les etudiants valides(v) ou les etudiants invalides(iv)"))
        if a=='v':
            print(afficher(c))
            print(len(c))

        elif a=='iv':
            print(afficher(iv))

        choix=Menu()
    elif choix=='2':
        recherche(v)
        choix=Menu()
    elif choix=='3':
        j=tri_moyenne(c)
        print(afficher(j))
        choix=Menu()




