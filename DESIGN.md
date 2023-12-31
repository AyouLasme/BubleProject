# Fiche technique
>Dans le cadre de notre projet nous avons utilisé la méthodologie UML pour la modélisation des différents diagrammes.

## 1.	Diagramme de cas d’utilisation
Le diagramme de cas d’utilisation ci-dessous illustre les principales fonctionnalités de notre application :
![Diagramme de cas d'utilisaton](images/fiche-technique-images/use-case-diagram.png)


| Fonctionnalités | Description |
| ------ | ------ |
|  Voir l'historique des graphes     |     Doit permettre à l'utilisateur d'avoir accés à tous les graphes qu'il a visualisé et enregistré sur l'application.  |
|  Visualiser un graphe      |    Cette fonctionnalité permet la visualisation des fichiers JSON sous forme de diagramme à bulles intéractifs. Cette visualisation offre également la possibilité de déployer et masquer les bulles enfants et la sélection des sous-ensembles de bulles.  |
|Uploader le fichier JSON |    Permet de charger le fichier json contenant décrivant le graphe.         |
| Exporter le graphe| Cette fonctionalité permet de télécharger le graphe en cours de visualisation. |
| Customiser le graphe| Quant à cette fonctionnalité elle permet de modifier le style d'un graphe (la couleur des noeuds , leurs formes , ...)|
## 2.	Diagramme de classe
Après avoir tracé les grandes lignes de la phase de spécification des besoins,
mettons maintenant l’accent sur la spécification de l’architecture de système.
### 	**Règles de gestion**
- Un graphe a un et seul noeud principal.
- Un graphe peut avoir plusieurs nœuds.
- Un nœud appartient à un et un seul graphe
- Un noeud ne peut pas être en relation avec lui même.
- Un noeud a un et un seul noeud parent.
- Une relation a un et un seul nœud source.
- Une relation a un et un seul nœud destination.
### 	**Schéma du diagramme de classe**
![Diagramme de classe](images/fiche-technique-images/diagram-class.png)

## 3.	Spécifications techniques
###     **Formats de données**
Notre programme prend en entrée un fichier JSON qui contient la description de notre graphe. Le fichier contient un objet JSON qui représente notre graphe. Ci-dessous un exemple du format :
```json
{
   	nodes: [
     		{ id: 1, label: "1", title: "node 1 tootip text" },
    		{ id: 2, label: "2", title: "node 2 tootip text" },
      		{ id: 3, label: "3", title: "node 3 tootip text" },
      		{ id: 4, label: "4", title: "node 4 tootip text" },
      		{ id: 5, label: "5", title: "node 5 tootip text" },
    		],
    	relations: [
      		{ from: 1, to: 2 },
      		{ from: 1, to: 3 },
      		{ from: 2, to: 4 },
      		{ from: 2, to: 5 },
     		{ from: 2, to: 6 },
      		{ from: 6, to: 1 }
    		],
	config : {
		color : "red",
		form : "Rectangle"
	}
 }

```

**Couleur** : Il s'agit des codes couleurs(se reporter au site [https://htmlcolorcodes.com/fr/](https://htmlcolorcodes.com/fr/)) pour avoir la liste.

**Forme** : La forme doit avoir une valeur parmi ceux qui suivent : 

```json
Rectangle, Triangle, Carre, Cercle
```

### Desciption
L’attribut **nodes** représente l’ensemble des nœuds du graphes. Ainsi chaque nœud possède un id pour l’identifier de manière unique, un label et un libelle (le texte qui s’affiche dans le nœud).
Ensuite nous avons l’attribut **relations** qui symbolise les relations entre les nœuds.
Comme décrit dans le diagramme de classe, une relation à une source représenter ici par la clé from et une destination représentée par to.
Enfin l’attribut **config** quant à elle représente l’ensemble des customisations du graphe (pour l’instant la couleur et la forme).

### Règles à respecter pour la mise en place du fichier
Quelques règles à respecter pour la mise en place du fichier : 
- Les ids doivent être unique
- Les attributs from et to doivent faire partie des ids
- La couleur doit faire partie du code couleur
- La forme doit faire partir des valeurs de l’énumération Form dans le diagramme de classe
- Dans le cas où la structure ci-dessus n’est pas respectée, le fichier ne sera pas accepté par le programme et une erreur mauvais format de fichier sera renvoyée.

## 4.	Enregistrement des données
Les graphes affichés par l’utilisateur sont enregistrés sur sa machine. Il peut ainsi les revoir plus tard sans uploader de nouveaux fichiers. 

## 5.	Présentation de l’application

**Lien du figma** : [Cliquez ici](https://www.figma.com/proto/TZm9EWTal69oINSglbMriN/PDL?type=design&node-id=2-3&t=95DVnzwM0K2uZk8l-0&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A3)

###  Interface pour l’upload du fichier
Il s’agit de la première interface que vois l’utilisateur.
Dans un premier temps l’utilisateur upload le fichier JSON contenant les données en cliquant sur le bouton Télechargez un fichier

![Diagramme de cas d'utilisaton](images/fiche-technique-images/upload-card.png)

###  	Interface de visualisation du graphe
Cette interface permet à l’utilisateur de visualiser le graphe correspondant au fichier qu’il a fourni.

![Diagramme de cas d'utilisaton](images/fiche-technique-images/graph.png)

L’utilisateur peut cliquer sur un nœud afin d’afficher ses nœuds enfants.

![Image graph](images/fiche-technique-images/graph-show-nodes.png)

Il peut aussi cliquer sur un nœud afin de cacher ses nœuds enfants

![Image graph](images/fiche-technique-images/graph.png)

###  	Menu à gauche se retrouvant sur chaque interface

Ce menu permet de lister l’historique des graphes affichés. L’utilisateur peut donc revoir un graphe qu’il avait affiché.
L’utilisateur peut aussi uploader un nouveau fichier en cliquant sur le bouton New Visualisation en haut 

