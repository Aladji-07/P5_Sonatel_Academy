from datetime import datetime
#je cree une fonction qui verifie la validité d'un numero

def is_alphanumeric(string):#fontion qui permet de verifier si un chaine est alpha numerique
    return string.isalnum()

def has_numbers(string):#fontion qui permet de verifier si une chaine contient des numéros
    return any(char.isdigit() for char in string)

def is_uppercase(string):
    return string.isupper()

def numero_valide(numero):
    x=is_uppercase(numero)
    y=is_alphanumeric(numero)
    z=has_numbers(numero)
    if len (numero)==7:
        if x==True:
            if y==True:
                if z==True:
                    return True
                else:
                    return False
            else:
                return False    
        else:
            return False
    else:
        return False     
                 
def Prenom(sting):       
    x=is_alphanumeric(sting[0])
    z=has_numbers(sting[0])
    a=0
    for i in range(len(sting)):
        if (sting[i]>='A' and sting[i]<='Z') or (sting[i]>='a' and sting[i]<='z'):
            a+=1
    if a>=3:
              
        if x==True:
            if z==False:
                return True     
            else:
                return False
        else:
            return False   
           
def Nom(sting):       
    x=is_alphanumeric(sting[0])
    z=has_numbers(sting[0])
    a=0
    for i in range(len(sting)):
        if (sting[i]>='A' and sting[i]<='Z') or (sting[i]>='a' and sting[i]<='z'):
            a+=1
    if a>=2:
              
        if x==True:
            if z==False:
                return True     
            else:
                return False
        else:
            return False   
    else:
        return False      
    
def date_valide(date_str):
        ma_liste=["0","9","8","7","6","5","4","3","2","1","/"]
        if all(char in ma_liste for char in date_str):
            day, month, year = map(int, date_str.split("/"))

            try:
                date_obj = datetime(year=year, month=month, day=day)
                #print("La date est valide : ", date_str)
                return True
            except ValueError:
                #print("La date est invalide : ", date_str)
                return False
           
        else:
            return False

def gestion_note(note):
    z=[]
    mg=[]
    u=note.replace(",",".")
    v=u.split("#")
    #print(v)
    for i in v :
        x=i.replace("|",":").replace("[",":").replace("]","")
        #print(x)
        y=x.split(":")
        #print(y)
        
        if len(y)==4:
            #if 0<y[1]<=20 and 0<y[2]<=20 and 0<y[3]<=20 :
                moy=round((((float(y[1])+float(y[2]))/2 + 2*float(y[-1]))/3),2)
                y.append(moy) 
                mg.append(y[-1])
                ya=str(y[0])+"="+str(y[1])+";"+str(y[2])+";"+str(y[3])+"||"+str(y[4])
                z.append(ya)
        elif len(y)==3:
            #if 0<y[1]<=20 and 0<y[2]<=20 :
                moy=round(((float(y[1])+ 2*float(y[-1]))/3),2)
                y.append(moy) 
                mg.append(y[-1])
                ya=str(y[0])+"="+str(y[1])+";"+str(y[2])+"||"+str(y[3])
                z.append(ya)    
        elif len(y)==5:
            #if 0<y[1]<=20 and 0<y[2]<=20 and 0<y[3]<=20 and 0<y[4]<=20 :
                moy=round((((float(y[1])+float(y[2])+float(y[3]))/3 + 2*float(y[-1]))/3),2)
                y.append(moy) 
                mg.append(y[-1])
                ya=str(y[0])+"="+str(y[1])+";"+str(y[2])+";"+str(y[3])+";"+str(y[4])+"||"+str(y[5])  
                z.append(ya)    
        elif len(y)==6:
            # if 0<y[1]<=20 and 0<y[2]<=20 and 0<y[3]<=20 and 0<y[4]<=20 and 0<y[4]<=20 :
                moy=round((((float(y[1])+float(y[2])+float(y[3])+float(y[4]))/4+ 2*float(y[-1]))/3),2)
                y.append(moy) 
                mg.append(y[-1])
                ya=str(y[0])+"="+str(y[1])+";"+str(y[2])+";"+str(y[3])+";"+str(y[4])+";"+str(y[5])+"||"+str(y[5]) 
                z.append(ya) 
        else:
            moy=10
            y.append(moy)    
            z.append("")
    if z[0]=="":
        del(z[0])
    # if z[-1]=="":
    #     del(z[-1])
    s=0
    for i in range(0,len(mg),1):
        s=s+mg[i]
        moy_gen=round(s/len(mg),2)
    z.append(moy_gen)
        
        
    return (z)

def afficher(eleve):
    espace=10
    print("_"*132)
    print("| "+"Numero"+" "*(espace-len("Numero"))+"| "+"NOM"+" "*(espace-len("NOM"))+"|"+"Prenom"+" "*(espace-len("Prenom"))+"|"+"Date_Naiss"+" "*(espace-len("Date_Naiss"))+"|"+"Classe"+" "*(espace-len("Classe"))+"|"+"Note"+" "*(espace-len("Note"))+"|")
    print("_"*132)
    for i in eleve :
        print("| "+str(i[1])+" "*(espace-len(str(i[1])))+"| "+str(i[2])+" "*(espace-len(str(i[2])))+"|"+str(i[3])+" "*(espace-len(str(i[3])))+"|"+str(i[4])+" "*(espace-len(str(i[4])))+"|"+str(i[5])+" "*(espace-len(str(i[5])))+"|"+str(i[6])+" "*(espace-len(str(i[6])))+"|")
        print("_"*132)
         
def tri_moyenne(eleve):
    eleve.sort(key=lambda s:s[6][-1] ,reverse= True)
    return (eleve)
                
def Menu():
    print('''      
                    |--------------------------------
                    |   1-Afficher Les Etudiants    |
                    |   2-Afficher une information  |
  -------           |   3-Afficher les 5 premiers   |
  |MENU |           |   4-Ajouter une information   |
  -------           |   5-Modifier des notes        |
                    |   6-Sortir                    |
                    --------------------------------|
                   
                       
            ''')
    choix=str(input("saisissez votre choix"))
    return choix

def recherche(tab):
    ch=str(input("donner le numero"))
    if numero_valide(ch)==True:
        
        espace=12
        for i in tab :
            if ch == i[1]:
                print("_"*132)
                print("| "+"Numero"+" "*(espace-len("Numero"))+"| "+"NOM"+" "*(espace-len("NOM"))+"|"+"Prenom"+" "*(espace-len("Prenom"))+"|"+"Date_Naiss"+" "*(espace-len("Date_Naiss"))+"|"+"Classe"+" "*(espace-len("Classe"))+"|"+"Note"+" "*(espace-len("Note"))+"|")
                print("_"*132)
                print("| "+str(i[1])+" "*(espace-len(str(i[1])))+"| "+str(i[2])+" "*(espace-len(str(i[2])))+"|"+str(i[3])+" "*(espace-len(str(i[3])))+"|"+str(i[4])+" "*(espace-len(str(i[4])))+"|"+str(i[5])+" "*(espace-len(str(i[5])))+"|"+str(i[6])+" "*(espace-len(str(i[6])))+"|")
                print("_"*132)
            else:
                pass
        print("eleve introuvable!! verifier le numero")
    else:
        print ("le numero entré est invalide")
        
def Ajouter_Etudiant():
    nv_Etudiant=[]
    numero=str(input("Donner le numero de l'etudiant") )
    while numero_valide(numero)==False:
        numero=str(input("Donner le numero de l'etudiant"))
    nv_Etudiant.append(numero)
    nom=str(input("Donner le nom de l'etudiant") )
    while Nom(nom)==False:
        nom=str(input("Donner le nom de l'etudiant"))
    nv_Etudiant.append(nom)
    prenom=str(input("Donner le Prenom de l'etudiant") )
    while Prenom(prenom)==False:
        prenom=str(input("Donner le Prenom de l'etudiant"))
    nv_Etudiant.append(prenom)
    date=str(input("Donner la date de naissance de l'etudiant") )
    while date_valide(date)==False:
        date=str(input("Donner le date de l'etudiant"))
    nv_Etudiant.append(date)
    classe=str(input("Donner la classe de l'etudiant"))
    classe=classe.lstrip()
    classe=classe[0]+"em"+classe[-1]
    while classe not in ['6emA','6emB','5emA','5emB','4emA','4emB','3emA','3emB']:
        classe=str(input("Donner le classe de l'etudiant"))
    nv_Etudiant.append(classe)
    print("dans cette partie, vous allez entrez vos notes par matiere")
    c=["francais","Anglais","math","HG","PC"]
    for i in c :
        a=str(input("note dev-1"+i))
        # while a<0 or a>20:
        #     a=int(input("note dev-1"+i))
        b=str(input("voulez vous entrer d'autres notes de devoir"))
        if b=='o':
            #d=str(input("note dev-2"+i))
        #while d<0 or a>20:
            d=str(input("note dev-2"+i))
        else:
            d==0
        b=input("voulez vous entrer d'autres notes de devoir")
        if b=='o':
            e=str(input("note dev-3"+i))
        #while e<0 or e>20:
            #e=str(input("note dev-2"+i))
        else:
            e==0
        b=input("voulez entrer notes de d'examen")
        f=str(input("note dev-3"+i))
        #while f<0 or f>20:
            #f=str(input("note examen"+i))
            
        note=i+"["+a+"|"+b+"|"+c+":"+f+"#"
        nv_Etudiant.append(note)

            
            
    return(nv_Etudiant)

# s=Ajouter_Etudiant()
# print(s)
    
        
    