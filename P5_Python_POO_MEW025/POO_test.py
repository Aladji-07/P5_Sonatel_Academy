import csv
from datetime import datetime 
from Projet_fonctions import*


#class Formatage_Données:
    

class Eleves:
    def __init__(self,Numero,Nom,Prenom,Date_Naiss,classe,note):
        self.Numero=Numero
        self.Nom=Nom
        self.Prenom=Prenom
        self.Date_Naiss=Date_Naiss
        self.classe=classe
        self.notee=note
        
    def Formatage_classe(self):
        self.classe=self.classe[0]+"em"+self.classe[-1]
        return self.classe
    
    def classe_valide(self):
        if self.classe in ['6emA','6emB','5emA','5emB','4emA','4emB','3emA','3emB']:
            return True
        
            
    def numero_valide(self):
        x=is_uppercase(self.Numero)
        y=is_alphanumeric(self.Numero)
        z=has_numbers(self.Numero)
        if len (self.Numero)==7:
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
    
    def date_valide(self):
        ma_liste=["0","9","8","7","6","5","4","3","2","1","/"]
        if all(char in ma_liste for char in self.Date_Naiss):
            day, month, year = map(int, self.Date_Naiss.split("/"))

            try:
                date_obj = datetime(year=year, month=month, day=day)
                #print("La date est valide : ", date_str)
                return True
            except ValueError:
                #print("La date est invalide : ", date_str)
                return False
           
        else:
            return False
    def Nom_valide(self):       
        x=is_alphanumeric(self.Nom[0])
        z=has_numbers(self.Nom[0])
        a=0
        for i in range(len(self.Nom)):
            if (self.Nom[i]>='A' and self.Nom[i]<='Z') or (self.Nom[i]>='a' and self.Nom[i]<='z'):
                a+=1
        if a>=2:
                
            if is_alphanumeric(self.Nom[0]) and not(has_numbers(self.Nom[0])):
                return True     
            else:
                return False  
        else:
            return False     
    def Prenom_valide(self):       
        x=is_alphanumeric(self.Prenom[0])
        z=has_numbers(self.Prenom[0])
        a=0
        for i in range(len(self.Prenom)):
            if (self.Prenom[i]>='A' and self.Prenom[i]<='Z') or (self.Prenom[i]>='a' and self.Prenom[i]<='z'):
                a+=1
        if a>=3:
                
            if is_alphanumeric(self.Prenom[0]) and not(has_numbers(self.Prenom[0])):
                return True     
            else:
                return False
        else:
            return False    
    

    def gestion_note(self):
        z=[]
        mg=[]
        u=self.notee.replace(",",".")
        v=u.split("#")
        #print(v)
        for i in v :
            if '' not in i:
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
            # if z[0]=="":
            #     del(z[0])
            # if z[-1]=="":
            #     del(z[-1])
            s=0
            moy_gen=0
            for i in range(0,len(mg),1):
                s=s+mg[i]
                moy_gen=round(s/len(mg),2)
            z.append(moy_gen)
                
        return (z)
    def afficher_Eleves(self):
        print(f"Numero :{self.Numero} Nom: {self.Nom}  ,Prenom :{self.Prenom} Date : {self.Date_Naiss}Classe: {self.Formatage_classe()} Note:{self.gestion_note()}")
        #return self.Numero,self.Nom,self.Prenom,self.Date_Naiss,self.Formatage_classe(),self.gestion_note()
            
                    
    
# eleve_1=Eleves("AZERTY1","Rawane","wade","07/10/1999","4emB")
# print(eleve_1.Date_Naiss)
file="/home/wade/Téléchargements/Donnees_Projet_Python_DataC5.csv"
with open(file,"r") as file:
    csv_reader= csv.reader(file)
    v=[]
    iv=[]
    for i in csv_reader:
        eleve=Eleves(i[1],i[2],i[3],i[4],i[5],i[6])
        #print(eleve.classe)
        if '' not in i:
            if eleve.date_valide() and eleve.numero_valide()and eleve.Nom_valide() and eleve.Prenom_valide() :
                eleve.afficher_Eleves()               
    
         
            # else:


            
        
        #print(eleve.numero_valide(i[1]))
        
        