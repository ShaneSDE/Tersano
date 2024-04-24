## Walkthrough on Youtube
https://youtu.be/GNnGQPRSkRU
## Visit online
https://tersano.onrender.com

## Run Locally
### 0. Install node.js
https://nodejs.org/en/download/current

### 1. Clone repo

```
$ cd Tersano
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run 

```
$ cd Tersano
$ npm install
$ npm run build
$ npm start
```


### 5. Seed Users and Products

- Run this on browser: http://localhost:4000/api/seed
- Initiate products in the database



### 6. Functions
- Homepage: http://localhost:5173
- Sign up and sign in, you will find the initial products. Users can add and delete products.

