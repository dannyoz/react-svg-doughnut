const React = require('react');
const calculatePathShape = require('./utils/calculate-path-shape');
const configure = require('./utils/configure');
const stepDuration = require('./utils/step-duration');

class SvgDoughnut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appliedPercentage: 0
        };
        this.settings = configure(this.props.settings);
    }

    componentDidMount() {
        if (this.settings.animationDuration || this.settings.animationDuration > 0) {
            this.animate();
        } else {
            this.setState({
                appliedPercentage: this.settings.percentage
            });
        }
    }

    animate() {
        const self = this;
        for(let i = 0; i < (this.settings.percentage + 1); i++){
            setTimeout(() => {
                self.setState({
                    appliedPercentage: i
                });
            }, i * stepDuration(this.settings.percentage, this.settings.animationDuration));
        };
    }

    render() {
        return(
            React.createElement("div", {className: "react-svg-doughnut", style: Object.assign({}, this.settings.styles.svgStyle, {position: 'relative'})}, 
                React.createElement("svg", {viewBox: `0 0 ${this.settings.size} ${this.settings.size}`}, 
                    React.createElement("circle", {
                        cx: "50%", 
                        cy: "50%", 
                        r: (this.settings.size / 2) - this.settings.thickness, 
                        style: Object.assign({}, this.settings.styles.sharedStyles , this.settings.styles.circleStyle)}
                    ), 
                    React.createElement("path", {
                        d: calculatePathShape(this.state.appliedPercentage, this.settings.size, this.settings.thickness), 
                        style: Object.assign({}, this.settings.styles.sharedStyles , this.settings.styles.pathStyle)}
                    )
                ), 
                React.createElement("div", {style: Object.assign({}, this.settings.styles.textWrapperStyle)}, 
                    React.createElement("p", {style: Object.assign({}, this.settings.styles.percentageTextStyle)}, `${this.state.appliedPercentage}%`), 
                    this.settings.labelText && React.createElement("p", {style: Object.assign({}, this.settings.styles.labelTextStyle)}, this.settings.labelText)
                )
            )
        );
    }
};

module.exports = SvgDoughnut;
