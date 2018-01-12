import React from 'react';
import calculatePathShape from './calculate-path-shape';
import generateStyles from './generate-styles';
import stepDuration from './step-duration';

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
            <div style={Object.assign({}, this.styles.svgStyle, {position: 'relative'})}>
                <svg className="primary" style={Object.assign({}, this.styles.svgStyle )}>
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
                    {this.props.label && <p style={Object.assign({}, this.styles.labelTextStyle)}>{this.props.label}</p>}
                </div>
            </div>
        );
    }
};

export default SvgDoughnut;
