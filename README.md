pre requisite
- install node.js
- install mockoon as mock API

step to run
- clone this repo
- npm install
- npm run test-api

NOTES!!
running on windows 10 pro
for apple users, please using this command on package.json file line 7 before npm install
"test-api": "node ./node_modules/mocha/bin/mocha ./api/test --recursive --reporter mochawesome --reporter-options reportDir=reports/mochawesome/ --timeout 180000"
