a=[1,2,3,4,5]
s=0
for i in range(0,len(a),1):
    s=s+a[i]
    m=s/len(a)
    import xml.etree.ElementTree as ET

# Créer une liste de données
ma_liste = ['élément 1', 'élément 2', 'élément 3']

# Créer l'élément racine
root = ET.Element('ma_liste')

# Ajouter chaque élément de la liste comme un sous-élément de l'élément racine
for element in ma_liste:
    ET.SubElement(root, 'item').text = element

# Créer l'arbre XML et enregistrer dans un fichier
tree = ET.ElementTree(root)
tree.write('ma_liste.xml')
