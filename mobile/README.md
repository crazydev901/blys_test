# Getting Started

Demo App

# How To

#### Reinstall app, to test permissions

Hardware > Erase All Content And Settings...
After the phone reboots, restart everything (npm start).

# Install

#### yarn

#### expo

npm install -g expo-cli

# Run

#### Run App in iOS

expo start --ios

#### Run App in Android

expo start --android

### To run detox test cases

#### Working with Detox need to setup Detox to the system

### If you want to install detox manually then go to

https://github.com/wix/Detox

### Otherwise, To install detox run the following command for ios

- brew tap wix/brew
- brew install --HEAD applesimutils
- npm install -g detox-cli

### Set the .app file on which the test will run.

There are two ways you can do that. Follow any one option.

### Option 1) Make a build yourself.

- Open the terminal at the root of your project
- Run the following command => expo build:ios
- If it asks for bundle identifier name , You can give as per you like and press Enter.
- Select the 'simulator' option from choose the build type you would like option.(Build will be start and it will take time.)
- When process is done you will see a link, open that link in browser and download the file.
- Create bin folder in the project's root and drag the Exponent.app file to the bin folder.
  So it will look like bin/Exponent.app

### Option 2) Or download the already created .app file.

- Download the .zip file from the below google drive link, and extract it.
  => https://drive.google.com/file/d/1TasdrBDDRFGKbVv9UAznZlGRFGb_TTD2/view
- Drag the Exponent file into the bin folder in the project root.
- This will load the app file and folder will look like bin/Exponent.app

### To test the test cases for ios device run the following command in the root directory.

- detox test --configuration ios
