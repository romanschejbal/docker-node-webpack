# docker-node-webpack

I was trying to create a boilerplate that would use webpack, hot reloading react and docker all together.

## How to run in docker
```
docker build -t webpack-react .
```
```
docker run -d -p 80:8000 -v "$PWD":/var/www --name web webpack-react
```

## How to run locally
```
npm install
npm start
```
then open a new tab and run
```
npm run server
```

Go to `http://localhost:8000`
