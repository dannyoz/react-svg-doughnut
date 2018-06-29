React SVG doughnut
=====================

A flexible, lightweight React component for SVG doughnut graphics made easy!

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
                <SvgDoughnut value={100} settings={{
                    labelText: 'Awesome!',
                    size: 200,
                    thickness: 5,
                    primaryColour: '#e7534f',
                    ringColour: '#DDD',
                    labelColour: '#333',
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

#### value (Number)
The value used to calculate the percentage / fraction displayed in the center and generating the completed section of the graphic. **Note:** This prop is optional, value can also be set in the settings object - see below.

#### Settings (Object)
An optional object used to configure the following default settings:

| Setting                 | Type    | Default Value | Description                                                                                                       |
| ----------------------- | ------- | :-----------: | ----------------------------------------------------------------------------------------------------------------- |
| size (px)               | Number  | 150           | Width and height of the graphic in pixels                                                                         |
| thickness (px)          | Number  | 5             | Thickness of the graphic ring in pixels                                                                           |
| animationDuration (ms)  | Number  | -             | Optional duration of the generation animation in milliseconds. No animation is triggered when set to undefined.   |
| primaryColour           | String  | '#e7534f'     | Colour of the percentage and completion path of the graphic (valid css colour string).                            |
| ringColour              | String  | '#DDD'        | Colour of the ring path of the graphic (valid css colour string).                                                 |
| labelText               | String  | -             | Optional label text displayed under the percentage value.                                                         |
| labelColour             | String  | '#333'        | Colour of the optional label text (valid css colour string).                                                      |
| labelFontSize (px)      | Number  | 14            | Label font size in pixels.                                                                                        |
| labelFontWeight         | String  | 'normal'      | Label font weight (valid css fontWeight string).                                                                  |
| percentageFontSize (px) | Number  | 28            | Percentage font size in pixels.                                                                                   |
| percentageFontWeight    | String  | 'bold'        | Percentage font weight (valid css fontWeight string).                                                             |
| value                   | Number  | 0             | You can also define your value here.  **Note:** the value prop takes precendence over this.                       |

License: [MIT](https://opensource.org/licenses/MIT)
