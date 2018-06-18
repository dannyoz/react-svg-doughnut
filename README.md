React SVG doughnut
=====================

A flexible, lightweight React component for SVG doughnut charts made easy!

### Installation

React SVG doughnut can be downloaded via NPM:

`npm install react-svg-doughnut --save`

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
                    labelText: 'Awesome!',
                    size: 200,
                    thickness: 5,
                    pathColor: 'rgb(231, 83, 79)',
                    circleColor: 'rgba(0, 0, 0, 0.15)',
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
