pipeline {
  agent {
    docker {
      image 'docker:20.10.8-alpine3.14'
      args '-u root:root'
    }

  }
  stages {
    stage('Dependencies') {
      steps {
        sh 'apk add --update nodejs npm'
        sh 'npm install'
      }
    }

    stage('Lint') {
      steps {
        sh 'npm run lint:es'
      }
    }

    stage('Build Docker image') {
      steps {
        sh 'docker build . -t nodeploy:latest'
      }
    }

    stage('Store docker image as an artifact') {
      steps {
        sh 'docker save -o nodeploy-latest.tar nodeploy:latest'
        sh 'chmod -R 0666 nodeploy-latest.tar'
        archiveArtifacts(artifacts: 'nodeploy-latest.tar', onlyIfSuccessful: true)
      }
    }

  }
}