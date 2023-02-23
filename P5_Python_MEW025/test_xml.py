import csv
import xml.etree.ElementTree as ET

# Ouvrir le fichier CSV
with open('Donnees_Projet_Python_DataC5.csv', newline='') as csvfile:

    # Créer un lecteur CSV
    csvreader = csv.reader(csvfile, delimiter=',')

    # Créer l'élément racine pour le fichier XML
    root = ET.Element('donnees')

    # Boucler sur chaque ligne du fichier CSV et ajouter les données à l'arbre XML
    for row in csvreader:

        # Créer un élément pour chaque ligne du CSV
        row_element = ET.Element('ligne')

        # Boucler sur chaque colonne de la ligne et ajouter les données à l'élément
        for i in range(len(row)):
            column_element = ET.Element('colonne')
            column_element.text = row[i]
            row_element.append(column_element)

        # Ajouter l'élément de ligne à l'élément racine
        root.append(row_element)

# Créer l'arbre XML et enregistrer le fichier
tree = ET.ElementTree(root)
tree.write('donnees.xml')
