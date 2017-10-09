# alarm_server

# Versions

- Node v8.4.0

# setup
npm install
npm run start:dev

navigate to localhost:8000

# General Dev stuff

This app uses Sequelize and Sequelize-Cli for ORM. Please look at documentation for how objects/models work.

# API

/api/

/api/alarms

POST
-name: string
-user_id: string
-alarm_time: time
-alarm_on: boolean

# Deploying

git add .
git commit -m 'your commit message'
git push heroku master
heroku open
