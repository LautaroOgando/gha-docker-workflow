
# Node.js Service Deployment with Docker and GitHub Actions

## Features

1. **Node.js Service**:
   - A simple Node.js service built with environment variables.
   - Includes a critical endpoint (/secret) protected with Basic Authentication, ensuring that only authorized users can access it.

2. **Dockerized for Consistent Deployment**:
   - The application is packaged in a Docker container.

3. **Remote Server Setup**:
   - A remote server is used and accessed securely via SSH key pairs.

4. **CI/CD with GitHub Actions**:
   - Automated deployment workflow:
     - Build and Tag: A Docker image of the application is created..
     - Distribution: The image is automatically pushed to DockerHub.
     - Automated Deployment: Pulls and deploys the image on the remote server.

---

## Prerequisites

1. **Remote Server**:
   - A remote server with your SSH public key added to `~/.ssh/authorized_keys`.

2. **DockerHub Account**:
   - A DockerHub account is required.

3. **GitHub Settings**:
   - Deployment Secrets:
     
       -DOCKER_USERNAME: Your Docker Hub username.

       -DOCKER_TOKEN: A Docker Hub access token with read/write permissions to push and pull images.

       -SSH_PRIVATE_KEY: The SSH private key used to connect to the remote server.
  
       -SERVER_HOST: The IP address or domain of your remote server.

       -SERVER_USER: The user on the remote server that GitHub Actions will connect to.

   - Service Secrets,configure the following three variables as you want:

       -BASIC_AUTH_USERNAME: The username for the /secret endpoint.

       -BASIC_AUTH_PASSWORD: The password for the /secret endpoint.

       -BASIC_SECRET_MESSAGE: The secret message that will be displayed at the endpoint.

---


## Usage

1. Clone or download this repository to your machine.

2. Ensure main branch is up-to-date.

3. Triggers the workflow:
```
git commit --allow-empty -m "Trigger GitHub Actions workflow"
git push
```

This will start the node service on port-3001. Open the browser to validate the application running

```
http:\\<SERVER_IP>:3001
```

