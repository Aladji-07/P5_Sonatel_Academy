# d=[['AAD004', 'JD7LO99', 'SOW', 'Mariama', '12/18/2017', '4eme B', 'Math[04|03:05] #Francais[15|16:14] #Anglais[15|16:17] #PC[04|03:07] #SVT[12|09:10] #HG[16|15:17]'],
#          ['AAD004', 'LIHGFR0', 'Diallo', 'Nourou', '02/14/12', '6emA', 'Math[14|15:10] #Francais[12|13:13] #Anglais[15|16:17] #PC[14|13:07] #SVT[15|19:10] #HG[13|12:15]']]





# for i in d:
#     b=i[4].replace("-","/").replace(".","/")
 #   print(b)
    #i[5]=i[5][0]+"em"+i[5][-1]
   # print(i[5])
#print(d)


g='Math[10|14,5:16] #PC[11:9]  #Francais[4|11:13]  #SVT[12|9|16|11:12] #HG[10:13]  #Anglais[13,5:15]'


def gestion_note(note):
    u=note.replace(",",".")
    v=u.split("#")
    #print(v)
    for i in v :
        x=i.replace("|",":").replace("[",":").replace("]","")
        #print(x,end='')
        y=x.split(":")
        #print(y,end='')
        if len(y)==4:
            moy=round((((float(y[2])+float(y[3]))/2 + 2*float(y[-1]))/3),2)
        elif len(y)==3:
            moy=round(((float(y[2])+ 2*float(y[-1]))/3),2)
        elif len(y)==5:
            moy=round((((float(y[2])+float(y[3])+float(y[4]))/3 + 2*float(y[-1]))/3),2)
        elif len(y)==6:
            moy=round((((float(y[2])+float(y[3])+float(y[4])+float(y[5]))/4+ 2*float(y[-1]))/3),2)
        else:
           moy=10
        y.append(moy)
    #print(y,end='')
        
    return (y)
        
#         print(y,end='')
      
a=(gestion_note(g))  
print(a)

    #ya=print(y[0]+":  note devoir_1 :"+y[1]+" note devoir_2 :"+y[1]+"  note devoir_3 :"+y[2]+"note examen :"+y[-1],end='')
    #z.append(ya)
#print(z)

# v=u[0].split("[")
# print(v)
# w=v[1].split("|")
# print(w)

f='Math[09|17:10] #Francais[13|8:18] #Anglais[05|10:15] #PC[17:19]  #SVT[12|19|16|13:12]  #HG[14:18]'
g='Math[04|03:05] #Francais[15|16:14] #Anglais[15|16:17] #PC[04|03:07] #SVT[12|09:10] #HG[16|15:17]'

# from datetime import datetime

# def date_valide(date_str):
   
#     day, month, year = map(int, date_str.split("/"))

#     try:
#         date_obj = datetime(year=year, month=month, day=day)
#         #print("La date est valide : ", date_str)
#         return True
#     except ValueError:
#         #print("La date est invalide : ", date_str)
#         return False
        
# #print(date_valide("32/1/12"))


import re

def extraire_notes(chaine):
    regex = r'(?P<matiere>\w+)\[(?P<moyenne>\d{2})\|(?P<notes>[\d:]+)\]'
    notes = re.findall(regex, chaine)
    return notes

print(extraire_notes(g))
