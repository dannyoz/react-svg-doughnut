const React = require('react');
const calculatePathShape = require('./utils/calculate-path-shape');
const configure = require('./utils/configure');
const stepDuration = require('./utils/step-duration');
const calculatePercentage = require('./utils/calculate-percentage');
const format = require('./utils/format');

class SvgDoughnut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            appliedPercentage: 0,
            display: 0
        };
        this.settings = configure(this.props);
        this.percentage = calculatePercentage(this.settings);
    }

    componentDidMount() {
        if (this.settings.animationDuration || this.settings.animationDuration > 0) {
            this.animate();
        } else {
            this.setState({
                appliedPercentage: this.percentage,
                display: format(this.settings, this.percentage)
            });
        }
    }

    animate() {
        const self = this;
        for(let index = 0; index < (this.percentage + 1); index ++){
            setTimeout(() => {
                self.setState({
                    appliedPercentage: index,
                    display: format(this.settings, index)
                });
            }, index * stepDuration(this.percentage, this.settings.animationDuration));
        };
    }

    render() {
        return(
            <div className="react-svg-doughnut" style={Object.assign({}, this.settings.styles.svgStyle, {position: 'relative'})}>
                <svg viewBox={`0 0 ${this.settings.size} ${this.settings.size}`}>
                    <circle
                        cx="50%"
                        cy="50%"
                        r={(this.settings.size / 2) - this.settings.thickness}
                        style={Object.assign({}, this.settings.styles.sharedStyles , this.settings.styles.circleStyle )}>
                    </circle>
                    <path
                        d={calculatePathShape(this.state.appliedPercentage, this.settings.size, this.settings.thickness)}
                        style={Object.assign({}, this.settings.styles.sharedStyles , this.settings.styles.pathStyle )}>
                    </path>
                </svg>
                <div style={Object.assign({}, this.settings.styles.textWrapperStyle )}>
                    {(this.settings.labelText && this.settings.labelPosition === 'top') && <p style={Object.assign({}, this.settings.styles.labelTextStyle)}>{this.settings.labelText}</p>}
                    <p style={Object.assign({}, this.settings.styles.percentageTextStyle)} >{`${this.state.display}`}</p>
                    {(this.settings.labelText && this.settings.labelPosition === 'bottom') && <p style={Object.assign({}, this.settings.styles.labelTextStyle)}>{this.settings.labelText}</p>}
                </div>
            </div>
        );
    }
};

module.exports = SvgDoughnut;
