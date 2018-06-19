React SVG doughnut
=====================

A flexible, lightweight React component for SVG doughnut charts made easy!

---

## Installation

React SVG doughnut can be downloaded with yarn:

```
yarn add react-svg-doughnut
```

Or via NPM:

```
npm install react-svg-doughnut --save
```

Example of basic Usage:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import SvgDoughnut from 'react-svg-doughnut';

class Example extends React.Component {
    render() {
        return(
            <div>
                <SvgDoughnut percentage={100} settings={{
                    percentage: 100,
                    labelText: 'Awesome!',
                    size: 200,
                    thickness: 5,
                    primaryColour: '#e7534f',
                    ringColour: '#DDD',
                    labelColur: '#333',
                    animationDuration: 1000
                }}/>
            </div>
        );
    }
};

ReactDOM.render(
    <Example />,
    document.getElementById('app')
);
```
## Configuration

React SVG doughnut uses two props to build the graphic.

#### Percentage (Number)
The percentage displayed in the center and generating the completed section of the graphic. *Note:* This prop is optional, percentage can also be set in the settings object - see below.

#### Settings (Object)
An optional object used to configure the following default settings:

| Setting                | Type    | Default Value | Description                                                                                                    |
| ---------------------- | ------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| size (px)              | Number  | 150           | Width and height of the graphic in pixels                                                                      |
| thickness (px)         | Number  | 5             | Thickness of the graphic ring in pixels                                                                        |
| animationDuration (ms) | Number  | -             | Optional duration of the generation animation in milliseconds. No animation is triggered when set to undefined |
| primaryColour          | String  | '#e7534f'     | Colour of the percentage and completion path of the graphic (valid css colour string).                         |
| ringColour             | String  | '#DDD'        | Colour of the ring path of the graphic (valid css colour string).                                              |
| labelText              | String  | -             | Optional label text displayed under the percentage value.                                                      |
| labelColour            | String  | '#333'        | Colour of the optional label text (valid css colour string).                                                   |
| labelFontSize          | Number  | 14            | Label font size in pixels.                                                                                     |
| labelFontWeight        | String  | 'normal'      | Label font weight (valid css fontWeight string).                                                               |

