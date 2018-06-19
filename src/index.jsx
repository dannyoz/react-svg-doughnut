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
                    <p style={Object.assign({}, this.settings.styles.percentageTextStyle)} >{`${this.state.appliedPercentage}%`}</p>
                    {this.settings.labelText && <p style={Object.assign({}, this.settings.styles.labelTextStyle)}>{this.settings.labelText}</p>}
                </div>
            </div>
        );
    }
};

module.exports = SvgDoughnut;
