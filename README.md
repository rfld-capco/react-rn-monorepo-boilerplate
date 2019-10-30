## Installation & Running Services

1. To run the web service:

- cd src/front_end/packages/web
- Run `yarn; yarn web`

2. To run the mobile application:

- cd src/front_end
- Run `yarn; yarn mobile`
- Open your browser at the location that Expo DevTools is running at (e.g. http://localhost:19002)
- From the left tab, select a simulator to install and run the package
- To run an iOS simulator, ensure X-Code is installed via the app store. You may need to run some
- commands to accept the terms and conditions.
- To run an android simulator, either install both VirtualBox & Genymotion, or install Android Studio
- and launch a simulator through AVD.

## Testing
- `yarn test web` - tests the react web app
- `yarn test mobile` - tests the react-native mobile app
- `yarn test shared` - tests the shared lib
- `yarn test` - tests web, shared, mobile all together

## Mock
- To use mock data:
- `yarn start:mock` - runs both react web app and react-native mobile app with mock data
- `yarn mobile:mock` - runs react-native mobile app with mock data
- `yarn web:mock` - runs react web app with mock data

### Commands
- `yarn start` - runs both react web app and react-native mobile app
- `yarn mobile` - runs react-native mobile app
- `yarn web` - runs react web app
- `yarn test web` - tests the react web app
- `yarn test mobile` - tests the react-native mobile app
- `yarn test shared` - tests the shared lib
- `yarn test` - tests web, shared, mobile all together
- `yarn start:mock` - runs both react web app and react-native mobile app with mock data
- `yarn mobile:mock` - runs react-native mobile app with mock data
- `yarn web:mock` - runs react web app with mock data

## ESLint
- airbnb eslint is installed: https://www.npmjs.com/package/eslint-config-airbnb
- To set it up with VSCode: https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6