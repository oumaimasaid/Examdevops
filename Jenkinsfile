pipeline {
agent any
triggers {
pollSCM('*/5 * * * *') // Vérifier toutes les 5 minutes
}
stages {
stage('Checkout') {
    steps {
        echo "Récupération du code source"
        git branch: 'main', credentialsId: 'admin', url: 'https://github.com/oumaimasaid/Examdevops.git'
    }
}
stage('Build') {
steps {
echo "Build du projet"

// Ajoutez les commandes de build ici

}
}
stage('Deploy') {
steps {
echo "Déploiement du projet"
// Ajoutez les commandes de déploiement ici
}
}
}
}
