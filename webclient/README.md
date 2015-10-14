# Initialize project
In order to prepare the webclient, you must install the following dependencies
### Node Package Manager (npm)
Run the following within the webclient directory to install node dependencies

`npm install`

### Bower Components
Install bower

`npm install -g bower`
Download bower components

`bower install`

### Download TypeScript Definition files
Install TypeScript Definition manager

`npm install -g tsd`

Download all TypeScript definition files

`tsd install`

# Starting server
Start with auto-reload

`gulp`

Start without auto-reload

`gulp serve`

Go to `localhost:8080/`

#Run Tests
Install Karma:

`npm install -g karma-cli`

Option 1 - Start Karma:

`karma start`

Option 2 - Use Gulp:

`gulp test`
