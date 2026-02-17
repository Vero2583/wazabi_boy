# wazabi_boy
backend frontend 


# Création du dossier:
mkdir nom du dossier
cd backend

# pour installer le package.json
npm install - y

# installer yarn
npm install -g yarn

# installer les dependences
yarn add argon2 cors dotenv express helmet jsonwebtoken mysql2 nodemailer nodemon uuid zod joi multer

# Arborescence du backend:

backend/
 ├─ package.json                                
 ├─ .env
 ├─ server.js
 ├─ app.js
 |─ src/
 | └─config/
 │      └─ db.js
 |      └─ mailer.js
 | └─models/
 │      └─ contact.model.js
 |      └─ professionnel.model.js
 | └─middlewares/
 │      ├─ contact.middleware.js
 |      |─ professionnel.middleware.js
 │      └─ upload.middleware.js
 | └─controllers/
 │      └─ contact.controller.js
 |      └─ professionnel.controler.js
 | └─routes/
 │      └─ contact.routes.js
 |      └─ contact.routes.js
 | └─services/
 |      └─ mailer.service.js
 | └─validations/
        └─ contact.validation.js
        └─ professionnel.validation.js


* **Routes** : définition des endpoints
* **Controllers** : logique métier
* **Models** : accès base de données MySQL
* **Middlewares** : sécurité, authentification, upload