# nest_microservice

## Installation

```bash
$ cd api-gateway/
$ npm install
$ Run npm run start:dev
```

```bash
$ cd persons/
$ npm install
$ Run npm run start:dev
```


```bash
$ cd documents/
$ npm install
$ Run npm run start:dev
```
## In each microservice add the .env file.
#example;-

```bash
MONGO_URI=
MONGO_DATABASE=test
MONGO_USER=u1
MONGO_PASSWORD=test
API_GATEWAY_PORT=3000
PERSONS_SERVICE_PORT=3001
DOCUMENTS_SERVICE_PORT=3002
```
