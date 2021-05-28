1. Clone the project to local
```
git clone "https://github.com/yt33/e-commerce.git"
```
2. Install yarn if you haven't 
```
npm install
```
3. Install MongoDB if you haven't
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
4. go to /backend and start strapi
```
$ yarn develop
```
5. open another window and go to /frontend and start the local dev server
```
$ yarn dev
```

Now you can go to `localhost:3000` to view the page, and go to `localhost:1337` with the following credential to view Strapi management center
Username: yli926@outlook.com
Password: rhubVZW@SApv9r8

link to see a demo: https://drive.google.com/file/d/1aTBabIKssucUnUHk8ZhpJgOqKZoHGDjl/view?usp=sharing
