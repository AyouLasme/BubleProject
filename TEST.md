# **CAHIER DE TEST : Scénario de Visualisation de Données JSON**

## Introduction

    * Objectif: S'assurer que l'application peut télécharger un fichier JSON, le traiter correctement et afficher 
                les  données de manière appropriée dans un diagramme de bulle pouvant etre customisé.

    * Prerequis: - L'application est installée et fonctionne correctement.
                 - Un fichier JSON valide est prêt à être téléchargé.
                
    * Portée du Test : L'application sera testée pour s'assurer qu'elle peut importer, visualiser, personnaliser et 
                       interagir avec des données à partir d'un fichier JSON.
    
## Configuration de l'environnement de test

    * Prérequis: - Exigences logicielles
                        + Node.js : pour exécuter des outils tels que Jest, Babel, Webpack, etc
                        + npm : (Node Package Manager), pour installer des dépendances et gérer les packages.
                        + Environnement de Développement React : Cela inclut React, ReactDOM et d'autres
                                                                 dépendances associées.
                        + Outils de Test : Jest, Enzyme 
                        + Éditeur de Code : Visual Studio Code
                
    * Installation : Pour pour configurer l'environnement de test nous aurons quatre étapes:
                    - S'assurer d'avoir satisfait aux prérequis mentionnés précedemment notemment l'installation de
                      Node.Js et npm
                    - Création du projet React
                    - Installation des outils de test
                    - configuration de Jest
                    - Ecriture des tests
                    - Exécution des tests

## Cas de Test

    * Cas de test 1 : Importation de Fichier JSON
                      - Objectif du Test : S'assurer que l'application peut importer un fichier JSON valide
                      - Étapes de Test : + Ouvrir l'application.
                                         + Sélectionner l'option "Uploader un fchier".
                                         + Une boîte de dialogue de téléchargement de fichier apparaît.
                                         + Télécharger le fichier JSON contenant les données
                                         + Vérifier que le fichier est téléchargé avec succès et que l'application
                      - Critères de Réussite : + Le fichier JSON est téléchargé avec succès.

    * Cas de test 2 : Traitement des Données JSON
                      - Objectif du test : traiter les données 
                      - Etapes de test : + Les données du fichier JSON sont traitées.
                                         + Les données sont correctement transformées en données pour 
                                           le diagramme à bulles.
                                         + Vérifier que les données sont cohérentes avec le contenu du fichier JSON.
                      - Critères de Réussite : + Les données du fichier JSON sont correctement transformées 
                                                 pour le diagramme à bulles.
                                               + Les données du diagramme sont cohérentes avec le fichier JSON.

     * Cas de test 2 : Affichage du Diagramme à Bulles
                      - Objectif du test : Affichage des données dans le diagramme à bulle
                      - Etapes de test : + Les données sont affichées sous forme de diagramme à bulles sur l'écran.
                                         + Interagir avec le diagramme en survolant les bulles pour faire apparaitre un 
                                            bouton d'exportation qui permettra d'exporter un fichier contenants les données de la bulle sélectionnée. 
                                         + Interagir avec le diagramme en faisant apparraitre et disparaitre les bulles 
                                            enfants d'une bulle tout en cliquant sur une bulle 
                                         + Vérifier que les informations des bulles s'affichent correctement.
                      - Critères de Réussite : + Les données sont correctement affichées sous forme de diagramme à bulle
                                               + Les informations des bulles s'affichent correctement au clique des     
                                                bulles.
                                            
    * Cas de test 3 : Exportation des données d'une bulle
                      - Objectif du test : Exporter les données d'une bulle
                      - Etapes de test : + Reperer et selectionner le bouton exporter au survol de la bulle à exporter
                                         + verifiez que les données ont bien étés exportées dans un nouveau fichier
                      - Critères de Réussite : + Les données ont bien étés exportées dans un nouveau fichier

                                         
    * Cas de test 4 : Customisation du diagramme à bulle 
                      - Objectif du test : S'assurer que l'application permet aux utilisateurs de personnaliser le 
                                           diagramme à bulles en modifiant la couleur, la forme des bulles et le style du graphe.
                      - Etapes de test : + Sélectionner l'option "Personnaliser le Diagramme" ou un bouton similaire.
                                         + Un menu de personnalisation apparaît.
                                         + Modifier la couleur des bulles en sélectionnant une couleur dans le menu.
                                         + Vérifier que les bulles changent de couleur en temps réel.
                                         + Modifier la forme des bulles en sélectionnant une forme.
                                         + Vérifier que les bulles changent de forme en temps réel.
                                         + Rétablir les paramètres par défaut en sélectionnant une option de 
                                           réinitialisation.
                                         + Vérifier que le diagramme revient à son état initial.
                      - Critères de Réussite : + Le style du graphe est modifié conformément à la sélection de 
                                                 l'utilisateur.
                                               + Le diagramme revient à son état initial après avoir utilisé l'option 
                                                 de réinitialisation.

     * Cas de test 5 : Gestion des Fichiers Incorrects
                      - Objectif du test : Vérifier comment l'application gère l'importation de fichiers JSON 
                                           incorrects ou mal formés.
                      - Etapes de test : + Ouvrir l'application.
                                         + Sélectionner l'option "Uploader un fichier" 
                                         + Une boîte de dialogue de téléchargement de fichier apparaît.
                                         + Télécharger un fichier JSON incorrect ou mal formé.
                                         + Vérifier la réaction de l'application.
                      - Critères de Réussite : + L'application affiche un message d'erreur approprié indiquant que le 
                                                 fichier est incorrect ou mal formé.

    * Cas de Test 6 : Gestion des Données Vides
                      - Objectif du test : Vérifier comment l'application gère l'importation de fichiers JSON vides.
                      - Etapes de test : + Ouvrir l'application.
                                         + Sélectionner l'option "Uploader un fichier" 
                                         + Une boîte de dialogue de téléchargement de fichier apparaît.
                                         + Télécharger un fichier JSON vide.
                                         + Vérifier la réaction de l'application.
                      - Critères de Réussite : + L'application affiche un message d'erreur approprié indiquant que le 
                                                 fichier est vide.

## Conclusion provisoire

À ce stade, l'application de visualisation de données est en cours de développement, et des tests ont été effectués sur les fonctionnalités disponibles. 

En résumé, le cahier de test actuel reflète les tests effectués sur les fonctionnalités disponibles. Cependant, en tant que document vivant, il évoluera en parallèle avec l'application. Il est essentiel de continuer à tester, surveiller et documenter l'avancement du projet pour garantir que l'application atteigne ses objectifs de qualité et de performance.

## Signature
 
   * Noms: - Ayou LASME
           - Alette DIEME
           - Nataniel OWAGOKE
           - Marfourz BOUKARY

   * Date : 12 Octobre 2023
    



    

                                               





