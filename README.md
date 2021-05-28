Clone the project to local
```
git clone "https://github.com/yt33/e-commerce.git"
```
# in /backend
Install MongoDB (in /backend) if you haven't
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

If you don't have Git already installed in PATH (if you see this error "Error: Git must be installed and in your PATH!"), you can
```
xcode-select --install
```
Then you can install MongoDB.
Start the mongo server
```
brew services start mongodb-community@4.2
```
start strapi
```
yarn develop
```
# in /frontend
Install yarn if you haven't 
```
npm install
```
Install axios, js-cookie, isomorphic-fetch
```
npm install axios --save
npm install isomorphic-fetch --save
npm install js-cookie --save
```
start the local dev server
```
$ yarn dev
```

Now you can go to `localhost:1337` to view the strapi management center, and go to `localhost:3000` to view the page

link to see a demo: https://drive.google.com/file/d/1aTBabIKssucUnUHk8ZhpJgOqKZoHGDjl/view?usp=sharing
