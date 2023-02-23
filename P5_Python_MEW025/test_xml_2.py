import csv
import xml.etree.ElementTree as ET

# Ouvrir le fichier CSV en lecture
with open('Donnees_Projet_Python_DataC5.csv', 'r') as csvfile:
    # Créer un objet de lecteur CSV
    csvreader = csv.reader(csvfile)

    # Lire la première ligne pour obtenir les balises
    fields = next(csvreader)

    # Créer un élément racine XML
    root = ET.Element('data')

    # Parcourir les lignes restantes
    for row in csvreader:
        # Créer un élément XML pour chaque ligne
        item = ET.SubElement(root, 'item')

        # Parcourir chaque colonne et ajouter une balise correspondante
        for i in range(len(fields)):
            # Créer un élément avec la balise correspondante
            child = ET.SubElement(item, fields[i])

            # Ajouter le texte de la colonne comme contenu de l'élément
            child.text = row[i]

# Écrire l'arbre XML dans un fichier
tree = ET.ElementTree(root)
tree.write('fichier.xml')
