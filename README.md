# Thomas Pearson CV

![alt text](./website.png "Thomas pearson CV")

Simple [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) CV, including use of firebase database. Obviously this wouldn't be needed for an application like this in real-life but it was fun to put together.

Skills and experiences shown [here](./db_schema.json) are simply imported into the firebase and the app fetches the values from the database and renders the data.

In an actual application the importing / adding of data could be done via migration scripts or could be added via authenticated CRUD requests.

## ⌛ Install

```bash
git clone https://github.com/xsv24/react-cv.git && cd react-cv
```

```bash
yarn install
```

## 🏃 Run 
```bash
yarn start
```

## 🧑‍🚀 Deployment
```bash
export REACT_APP_FIREBASE_PROJECT=FIREBASE_PROJECT_ID
```

### 🛂 Dry run
```bash
yarn deploy:dry
```

### 🚀 Launch
```bash
yarn deploy:prod
```