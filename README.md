# AStA Guide

Der Guide des AStA Lüneburg ist die interne HowTo-Seite mit Anleitungen für die Webseite (https://asta-lueneburg.de) und mehr.
Sie ist mit [Docusaurus 2](https://docusaurus.io/) gebaut, einem modernen Static-Site-Generator.

## Lokale Entwicklung

Die Seite kann lokal gestartet werden, um Änderungen vor der Veröffentlichung anzusehen. Dafür müssen Node.js und NPM auf deinem PC installiert sein.

Dann kannst du folgende Befehle ausführen:
```sh
# Die Repository auf deinen PC klonen
$ git clone git@github.com:AStA-Lueneburg/asta-guide

# In den neuen Ordner wechseln
$ cd asta-guide/

# Docusaurus etc. installieren
$ npm install
```

Jetzt ist die Umgebung vorbereitet und der Entwicklungs-Server kann gestartet werden.

```sh
$ npm start
```

Nun kannst du Änderungen vornehmen, die automatisch in der Vorschau aktualisiert werden.

## Änderungen veröffentlichen

Um deine Änderungen zu veröffentlichen, musst du sie nur per Git in diese Repository pushen.
[Eine GitHub Action](.github/workflows/deploy.yml), die auf Pushes hört, **generiert die Seite dann automatisch und lädt sie per FTP auf den AStA-Server.**
Auf der [Übersicht](https://github.com/AStA-Luneburg/asta-guide/actions) kannst du nachsehen, ob die Veröffentlichung erfolgreich war.

```sh
# Änderungen hinzufügen
$ git add .

# Änderungen committen
$ git commit -m "Meine Änderungen"

# Änderungen pushen
$ git push

# ... die Seite wird nun automatisch deployed.
```

Falls du die Seite manuell hochladen möchtest, kannst du sie folgendermaßen lokal generieren:

```sh
$ npm run build
```

Der Inhalt wird in den `build`-Ordner generiert. Dieser enthält statisches HTML/CSS/JS und kann fast überall hochgeladen werden.