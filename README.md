<img alt="React Native Gradient Card View" src="https://github.com/WrathChaos/react-native-gradient-card-view/blob/master/assets/logo.png" width="1050"/>

Fully customizable Gradient Card View for React Native.
Simplified fork.

[![npm version](https://img.shields.io/npm/v/react-native-gradient-card-view.svg)](https://www.npmjs.com/package/react-native-gradient-card-view)
[![npm](https://img.shields.io/npm/dt/react-native-gradient-card-view.svg)](https://www.npmjs.com/package/react-native-gradient-card-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)



## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i react-native-gradient-card-view
```


### Expo Version:

```ruby
"react-native-gradient-card-view": "WrathChaos/react-native-gradient-card-view#expo"
```


## Peer Dependencies

##### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-svg": ">= 9.x.x",
"react-native-fast-image": ">= 5.x.x",
"react-native-linear-gradient": ">= 2.x.x"
```

#Expo Version Peer Dependencies: 

```
"expo": ">= 32.x.x",
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-expo-image-cache": ">= 3.x.x"
```



### Configuration - Props


| Property            |    Type    |           Default            | Description                                                |
| ------------------- | :--------: | :--------------------------: | ---------------------------------------------------------- |
| start               |   {x,y}    |        { x: 0, y: 0 }        | change the direction of the gradient                       |
| end                 |   {x,y}    |        { x: 1, y: 0 }        | change the direction of the gradient                       |
| gradientColors      |  [color]   |      check the example       | change the gradient's color array                          |
| style               |   style    |             null             | add any style to the whole container                       |
| shadowStyle         |   style    |      check the example       | set your own shadow style                                  |
| shadowColor         |   color    |           #595959            | change the shadow color                                    |
| outerContainer      |   style    |            style             | set your own outer container style (NOT recommended!)      |
| height              |   number   |              70              | change the card's height                                   |
| width               |   number   |     device width * 0.95      | change the card's width                                    |
| borderRadius        |   number   |              20              | change the card's border radius                            |
| innerContainer      |   style    |            style             | set your own inner container style (NOT recommended!)      |
| leftComponent       | component  |     text based component     | set your component for the left part                       |
| centerTitleStyle    |   style    |            style             | set your own style for center title component              |
| centerSubtitleStyle |   style    |            style             | set your own style for center subtitle component           |
| centerComponent     | component  |     text based component     | set your component for the center part                     |
| rightComponent      | component  |             null             | set your own component for the right component             |

## Original Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Gradient Card View Library is available under the MIT license. See the LICENSE file for more info.
