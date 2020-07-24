# react-native-storybook-boilerplate

Building a UI library for React Native together with storybook is a good experience, but it's hard to display the components on the web, therefore
I want to transpile the react-native component through the react-native-web project so I can display them easily on the web. 

It's the ultimate library development setup meant for kickstarting ui library development for react-native. 

Goals of this repo:

| ToDo| Status |
| --- | ----- |
| setup react native | ✅ |
| setup @storybook/react-native-server for react native UI development | ✅ |
| setup react from scratch | ✅ |
| setup @storybook/react to run as a seperate storybook | ✅ |
| Build serveable storybook site with react-native-web display of the react-native components. | ✅ |

## Clone Command
```
git clone git@github.com:ugglr/react-native-storybook-boilerplate.git
```

## Scripts

In root folder the following scripts are available

- Run React Native Storybook Developer Server
```
yarn run storybook
```
- Run Storybook on iOS simulator
```
yarn run ios
```
- Run Storybook on Android emulator
```
yarn run android
```
- Run Storybook Web Developer server (powered with React Native Web)
```
yarn run storybook-web
```
- Build serveable Storybook static site (To-Do)
```
yarn run build:storybook-web

--> ./storybook-static
```

