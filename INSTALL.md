# Installation

Le projet a été conçu sur la base du langage Javascript et du framework ReactJS,
à cet effet l'installation de `NodeJS` et de son gestionnaire de dépendances par
defaut à savoir `npm` est nécessaire.

La procédure d'installation dépendant du système d'exploitation,
Nous expliquerons celle-ci pour les systèmes d'exploitation les plus utilisés, à savoir:
 > 1. Windows
 > 2. Linux
 > 3. MacOS (muni d'une puce Apple Silicon)


## Sous Windows

### 1. Téléchargez Node.js :

- Rendez-vous sur le site officiel de Node.js : https://nodejs.org/

- Téléchargez la version LTS (Long Term Support) en cliquant sur le bouton "LTS" (actuellement, LTS est recommandée pour la stabilité).

### 2. Exécutez l'installateur Node.js :

- Ouvrez le fichier d'installation que vous avez téléchargé.
- Acceptez les termes du contrat de licence.
- Sélectionnez les composants à installer (Node.js et npm sont inclus par défaut).
d. Choisissez le répertoire d'installation (il est recommandé de laisser la valeur par défaut).
e. Cliquez sur "Next" (Suivant) et suivez les instructions pour terminer l'installation.

### 3. Vérifiez l'installation :

- Ouvrez l'invite de commandes (CMD) en appuyant sur la touche Windows, en tapant "cmd" et en appuyant sur Entrée.
- Tapez les commandes suivantes pour vérifier que Node.js et npm sont correctement installés :

```bash
$ npm -v
$ node -v
```

## Sous Linux

### 1. Mise à jour des paquets : Ouvrez votre terminal et assurez-vous que vos paquets sont à jour en utilisant les commandes suivantes, selon votre gestionnaire de paquets (apt, yum, pacman, etc.) :

- Pour Ubuntu ou Debian (apt) :
```bash
$ sudo apt update
```
- Pour CentOS ou RHEL (yum) :
```bash
$ sudo yum update
```
- Pour Fedora :
```bash
$ sudo dnf update
```
### 2. Installation de Node.js et npm : Vous pouvez installer Node.js et npm en utilisant votre gestionnaire de paquets. Les commandes varieront selon votre distribution Linux.

- Pour Ubuntu ou Debian (apt) :
```bash
$ sudo apt install nodejs npm
 ```

- Pour CentOS ou RHEL (yum) :
```bash
$ sudo yum install nodejs npm
 ```

 - Pour Fedora :
```bash
$ sudo dnf install nodejs npm
 ```

### 3. Vérification de l'installation : Après l'installation, vous pouvez vérifier les versions de Node.js et npm en utilisant les commandes suivantes :

```bash
node -v
npm -v
```



## Sous MacOS(muni d'une puce Apple Silicon)

### 1. Installer Homebrew (si ce n'est pas déjà fait) :

Si vous n'avez pas encore Homebrew installé, vous pouvez l'installer en ouvrant le Terminal et en collant la commande suivante, puis en appuyant sur Entrée :

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Installer Node.js et npm :

Une fois Homebrew installé, vous pouvez facilement installer Node.js et npm avec les commandes suivantes :

```bash
$ brew update  # Met à jour les informations sur les packages disponibles.
$ brew install node  # Installe Node.js et npm.
```

Homebrew téléchargera et installera Node.js et npm sur votre système.

## 3. Vérifier l'installation :

Pour vous assurer que Node.js et npm ont été correctement installés, ouvrez un terminal et exécutez les commandes suivantes :

```bash
node -v
npm -v
```
Vous devriez voir les versions de Node.js et npm s'afficher.