pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      agent {
        docker {
          image 'node:8.10-slim'
        }

      }
      steps {
        sh 'npm install'
        sh 'npm run build'
        stash(name: 'stash-frontend-build', includes: 'build/**/*')
      }
    }
    stage('Docker build & push') {
      steps {
        unstash 'stash-frontend-build'
        sh "docker build -t docker-ungp.softplan.com.br/esocial-frontend:${params.DOCKER_IMAGE_VERSION} ."
        sh "docker push docker-ungp.softplan.com.br/esocial-frontend:${params.DOCKER_IMAGE_VERSION}"
      }
    }
    stage('Finish') {
      steps {
        echo "Imagem docker gerada e enviada com a versão ${params.DOCKER_IMAGE_VERSION}"
      }
    }
  }
  post {
    always {
      cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, deleteDirs: true)
      deleteDir()

    }

  }
  parameters {
    string(name: 'DOCKER_IMAGE_VERSION', defaultValue: '', description: 'Qual versão do docker a ser gerada? Ex: 0.1.0-RC1 ou 0.1.0-RC1-SNAPSHOT')
  }
}