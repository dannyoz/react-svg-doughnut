const React = require('react');
const calculatePathShape = require('./utils/calculate-path-shape');
const configure = require('./utils/configure');
const stepDuration = require('./utils/step-duration');
const calculatePercentage = require('./utils/calculate-percentage');
const format = require('./utils/format');

class SvgDoughnut extends React.Component {

    constructor(props) {
        super(props);
        this.settings = configure(this.props);
        this.percentage = calculatePercentage(this.settings);
        this.state = {
            appliedPercentage: 0,
            display: 0,
            settings: this.settings,
            percentage: this.percentage
        };
    }

    componentDidMount() {
        if (this.state.settings.animationDuration || this.state.settings.animationDuration > 0) {
            this.animate();
        } else {
            this.setState({
                appliedPercentage: this.state.percentage,
                display: format(this.state.settings, this.state.percentage)
            });
        }
    }

    componentWillReceiveProps(props) {
        const settings = configure(props);
        const percentage = calculatePercentage(settings);
        this.setState({
            appliedPercentage: percentage,
            display: format(settings, percentage),
            settings,
            percentage
        });
    }

    animate() {
        const self = this;
        for(let index = 0; index < (this.state.percentage + 1); index ++){
            setTimeout(() => {
                self.setState({
                    appliedPercentage: index,
                    display: format(this.state.settings, index)
                });
            }, index * stepDuration(this.state.percentage, this.state.settings.animationDuration));
        };
    }

    render() {
        const settings = this.state.settings;
        return(
            React.createElement("div", {className: "react-svg-doughnut", style: Object.assign({}, settings.styles.svgStyle, {position: 'relative'})}, 
                React.createElement("svg", {viewBox: `0 0 ${settings.size} ${settings.size}`}, 
                    React.createElement("circle", {
                        cx: "50%", 
                        cy: "50%", 
                        r: (settings.size / 2) - settings.thickness, 
                        style: Object.assign({}, settings.styles.sharedStyles , settings.styles.circleStyle)}
                    ), 
                    React.createElement("path", {
                        d: calculatePathShape(this.state.appliedPercentage, settings.size, settings.thickness), 
                        style: Object.assign({}, settings.styles.sharedStyles , settings.styles.pathStyle)}
                    )
                ), 
                React.createElement("div", {style: Object.assign({}, settings.styles.textWrapperStyle)}, 
                    (settings.labelText && settings.labelPosition === 'top') && React.createElement("p", {style: Object.assign({}, settings.styles.labelTextStyle)}, settings.labelText), 
                    React.createElement("p", {style: Object.assign({}, settings.styles.percentageTextStyle)}, `${this.state.display}`), 
                    (settings.labelText && settings.labelPosition === 'bottom') && React.createElement("p", {style: Object.assign({}, settings.styles.labelTextStyle)}, settings.labelText)
                )
            )
        );
    }
};

module.exports = SvgDoughnut;
