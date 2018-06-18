const React = require('react');
const calculatePathShape = require('./utils/calculate-path-shape');
const generateStyles = require('./utils/generate-styles');
const configure = require('./utils/configure');
const stepDuration = require('./utils/step-duration');

class SvgDoughnut extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appliedPercentage: 0
        };

        this.styles = generateStyles(this.props.settings);
        this.size = this.props.settings.size || 150;
        this.percentage = this.props.percentage || 0;
        this.animationDuration = this.props.settings.animationDuration;
        this.labelText = this.props.settings.labelText;
        this.settings = configure(this.props.settings);
        console.log(this.settings);
    }

    componentDidMount() {
        if (this.animationDuration || this.animationDuration > 0) {
            this.animate();
        } else {
            this.setState({
                appliedPercentage: this.percentage
            });
        }
    }

    animate() {
        const self = this;
        for(let i = 0; i < (this.percentage + 1); i++){
            setTimeout(() => {
                self.setState({
                    appliedPercentage: i
                });
            }, i * stepDuration(this.percentage, this.animationDuration));
        };
    }

    render() {
        return(
            <div className="react-svg-doughnut" style={Object.assign({}, this.styles.svgStyle, {position: 'relative'})}>
                <svg viewBox={`0 0 ${this.size} ${this.size}`}>
                    <circle
                        cx="50%"
                        cy="50%"
                        r={(this.size / 2) - this.props.settings.thickness}
                        style={Object.assign({}, this.styles.sharedStyles , this.styles.circleStyle )}>
                    </circle>
                    <path
                        d={calculatePathShape(this.state.appliedPercentage, this.size, this.props.settings.thickness)}
                        style={Object.assign({}, this.styles.sharedStyles , this.styles.pathStyle )}>
                    </path>
                </svg>
                <div style={Object.assign({}, this.styles.textWrapperStyle )}>
                    <p style={Object.assign({}, this.styles.percentageTextStyle)} >{`${this.state.appliedPercentage}%`}</p>
                    {this.labelText && <p style={Object.assign({}, this.styles.labelTextStyle)}>{this.labelText}</p>}
                </div>
            </div>
        );
    }
};

module.exports = SvgDoughnut;
