# react-native-storybook-boilerplate

Building a UI library for React Native together with storybook is a good experience, but it's hard to display the components on the web, therefore
I want to transpile the react-native component through the react-native-web project so I can display them easily on the web. 

It's the ultimate library development setup meant for kickstarting ui library development for react-native. 

In a nutshell there's two different setups of Storybook running in parallel:
1. **React Native + Storybook/React-Native**

It was installed following the normal steps of
- doing a fresh `npx react-native init`
- running `npx -p @storybook/cli sb init` and choosing yes when asked if install @storybook/react-native-server
- installing & configuring `react-native-storybook-loader` the project can be found here: [react-native-storybook-loader](https://github.com/elderfo/react-native-storybook-loader)

2. **React + Storybook/React**

This installation is less obvious because we have to setup react from scratch, configure babel & webpack, whereas in the `webpack.config.js` we need to resolve and apply aliases for our imports, so `react-native` becomes `react-native-web`. This needs to be done with other packages as well, in this boilerplate I have installed `styled-components`, i.e. `styled-components/native` imports needs to be switched out to `styled-components` when we bundle for the web.

It was roughtly done like this:

- Installing `react`, `react-dom`, `babel` & `webpack` dependencies
- Configuring `webpack` to alias `react-native` with `react-native-web`, and `styled-components/native` should resolve to `styled-components`. See the full webpack config here: [webpack.config.js](https://github.com/ugglr/react-native-storybook-boilerplate/blob/master/webpack.config.js) also: babel config here: [babel.config.js](https://github.com/ugglr/react-native-storybook-boilerplate/blob/master/babel.config.js)
- Installing Storybook according to the manual guide in the docs [React Storybook Manual Installation Steps](https://storybook.js.org/docs/guides/guide-react/)
- Inside of `./.storybook/main.js` configure custom webpack for Storybook, see docs here: [Storybook custom webpack docs](https://storybook.js.org/docs/configurations/custom-webpack-config/), from my `webpack.config.js` I grab the alias configuration and plug it into Storybook.
- Since Storybook does not support the new syntax of writing stories for React Native I needed to add one more alias where `@storybook/react-native` resolves to `@storybook/react`

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

