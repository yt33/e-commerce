
# in /frontend
1. install next, react, react-dom
```
$ yarn add next@9.4.0 react@16.13.1 react-dom@16.13.1
```

2. install Reactstrap
```
$ yarn add reactstrap
```

3. install MongoDB
```
$ brew tap mongodb/brew
$ brew install mongodb-community@4.2
```
Start the mongo server by running
```
$ brew services start mongodb-community@4.2
```

4. install Apollo
```
$ yarn add next-apollo@3.1.10 graphql@15.0.0 apollo-boost@0.4.7 @apollo/react-hooks@3.1.5 @apollo/react-ssr@3.1.5
```

5. setup an express server coupled with Next to render the route properly
```
$ yarn add express
```

6. install the following packages for authentication
```
$ yarn add axios@0.19.2 js-cookie@2.2.1 isomorphic-fetch@2.2.1
```

7. install stripe UI elements
```
$ yarn add @stripe/react-stripe-js@1.1.2 @stripe/stripe-js@1.5.0
```

# in /backend
1. install Strapi in /backend
```
$ yarn create strapi-app backend
```
Use the following for the setting

<img width="385" alt="Screen Shot 2021-05-26 at 21 16 06" src="https://user-images.githubusercontent.com/26180704/119765345-f1a58e80-be67-11eb-9336-a9ed4c51b829.png">

2. install stripe package
```
$ npm i stripe --save
```

## After you are done installing the required frameworks and packages, to run the program
1. go to /backend and start strapi
```
$ yarn develop
```
2. use another window and go to /frontend and start the local dev server
```
$ yarn dev
```
Now you can go to localhost:3000 to view the page.
