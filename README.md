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
        const settings = {
            value: 100,
            labelText: 'Awesome!',
            size: 180,
            thickness: 5,
            animationDuration: 1000
        };

        return(
            <div>
                <SvgDoughnut {...settings}/>
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

React SVG doughnut uses the following props to build the graphic.

| Prop                    | Type    | Default Value | Description                                                                                                       |
| ----------------------- | ------- | :-----------: | ----------------------------------------------------------------------------------------------------------------- |
| value                   | Number  | 0             | Value to be displayed in the centre of a graphic                                                                  |
| size (px)               | Number  | 150           | Width and height of the graphic in pixels                                                                         |
| thickness (px)          | Number  | 5             | Thickness of the graphic ring in pixels                                                                           |
| animationDuration (ms)  | Number  | -             | Optional duration of the generation animation in milliseconds. No animation is triggered when set to undefined.   |
| primaryColour           | String  | '#e7534f'     | Colour of the percentage and completion path of the graphic (valid css colour string).                            |
| ringColour              | String  | '#DDD'        | Colour of the ring path of the graphic (valid css colour string).                                                 |
| labelText               | String  | -             | Optional label text displayed under the percentage value.                                                         |
| labelColour             | String  | '#333'        | Colour of the optional label text (valid css colour string).                                                      |
| labelPosition           | String  | 'bottom'      | Position of the optional label. 'top' or 'bottom'                                                                 |
| labelFontSize (px)      | Number  | 14            | Label font size in pixels.                                                                                        |
| labelFontWeight         | String  | 'normal'      | Label font weight (valid css fontWeight string).                                                                  |
| percentageFontSize (px) | Number  | 28            | Percentage font size in pixels.                                                                                   |
| percentageFontWeight    | String  | 'bold'        | Percentage font weight (valid css fontWeight string).                                                             |
| ceiling                 | Number  | 100           | The ceiling used to calculate the percentage / fraction                                                           |
| format                  | String  | 'percentage'  | The format displayed. 'percentage' or 'fraction'                                                                  |

License: [MIT](https://opensource.org/licenses/MIT)
