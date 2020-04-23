# Server app for authenticating with Azure AD
This project aims for creating solution for server app, that can authenticate users.
Authenticating is done through Azure Active Directory

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
