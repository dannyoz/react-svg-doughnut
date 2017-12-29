import React from 'react';
import calculatePathShape from './calculate-path-shape';
import generateStyles from './generate-styles';

class SvgDoughnut extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            appliedPercentage: 0
        };

        this.styles = generateStyles(this.props.settings);
        this.size = this.props.size || 150;
        this.percentage = this.props.percentage || 0;
    }

    componentDidMount() {
        const self = this;

        for(let i = 0; i < (this.percentage + 1); i++){
            setTimeout(() => {
                self.setState({
                    appliedPercentage: i
                });
            }, i * 25);
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
                    <p style={Object.assign({}, this.styles.textStyle , {margin: 0})} >{`${this.state.appliedPercentage}%`}</p>
                    <p style={{margin: 0}}>Awesome!</p>
                </div>
            </div>
        );
    }
};

export default SvgDoughnut;
