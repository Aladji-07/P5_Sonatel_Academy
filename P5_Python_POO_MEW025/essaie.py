import csv
from datetime import datetime

class Eleve:
    def __init__(self, numero, nom, prenom, classe, date_naissance, note):
        self.numero = numero
        self.nom = nom
        self.prenom = prenom
        self.classe = classe
        self.date_naissance = date_naissance
        self.note = note

    def verifier_date_naissance(self):
        try:
            datetime.strptime(self.date_naissance, '%d/%m/%Y')
            return True
        except ValueError:
            return False

    def calculer_moyenne(self):
        notes = self.note.split('#')
        total_notes = 0
        for note in notes:
            matiere, valeur = note.split('[')
            valeurs = valeur.strip(']').split('|')
            moyenne = sum(float(v) for v in valeurs) / len(valeurs)
            total_notes += moyenne
        moyenne_generale = total_notes / len(notes)
        return moyenne_generale

class GestionEleves:
    def __init__(self, fichier_csv):
        self.fichier_csv = fichier_csv
        self.eleves = []

    def lire_fichier(self):
        with open(self.fichier_csv) as csvfile:
            reader = csv.reader(csvfile, delimiter=';')
            for row in reader:
                numero, nom, prenom, classe, date_naissance, note = row
                eleve = Eleve(numero, nom, prenom, classe, date_naissance, note)
                if eleve.verifier_date_naissance():
                    self.eleves.append(eleve)

    def afficher_eleves(self):
        for eleve in self.eleves:
            print(f"{eleve.nom} {eleve.prenom}, né le {eleve.date_naissance}, a une moyenne de {eleve.calculer_moyenne()}")

gestion = GestionEleves('Projet_Python/Donnees_Projet_Python_DataC5.csv')
gestion.lire_fichier()
gestion.afficher_eleves()
