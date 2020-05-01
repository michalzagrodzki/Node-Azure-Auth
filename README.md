# Server app for authenticating with Azure AD
This project aims for creating solution for server app, that can authenticate users.
Authenticating is done through Azure Active Directory

Authentication of users is done in following patterns:
- Active Directory is setup as B2B - collaboration between organizations. Users which are registered or invited from Active Directory level can login to app.
- Authentication is done on server level
- Client receives access token and refresh token
- Logged in users are stored in local memory session

This project uses [Vue-Azure-Auth-Client](https://github.com/michalzagrodzki/Vue-Azure-Auth-Client) project as client application.

## Project setup
```
npm install
```

### Create key and certificate for https
Key needs to be at least 1024 bits long. Otherwise it will throw error.
```
openssl genrsa -out key.pem 1024
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

### Development server
```
npm run serve
```
