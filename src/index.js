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
        this.size = this.props.settings.size || 150;
        this.percentage = this.props.percentage || 0;
        this.thickness = this.props.settings.thickness || 5;
        this.circleColor = this.props.settings.circleColor || 'rgb(0, 0, 0, 0.2)';
        this.pathColor = this.props.settings.pathColor || 'rgb(231, 83, 79)';

        this.svgStyle = {
            width: `${this.size}px`,
            height: `${this.size}px`
        };

        this.sharedStyles = {
            fill: 'none',
            strokeWidth: `${this.thickness}px`,
        };

        this.circleStyle = {
            stroke: this.circleColor,
        };

        this.pathStyle = {
            stroke: this.pathColor,
        };

        this.textWrapperStyle = {
            fill: '#000',
            fontFamily: 'sans-serif',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        };

        this.textStyle = {
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: this.pathColor
        };
        
    }

    componentDidMount() {
        const self = this;
        for (let i = 0; i < (this.percentage + 1); i++) {
            setTimeout(() => {
                self.setState({
                    appliedPercentage: i
                });
            }, i * 15);
        };
    }

    render() {
        return(
            <div style={Object.assign({}, this.svgStyle, {position: 'relative'})}>
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
                <div style={Object.assign({}, this.textWrapperStyle )}>
                    <p style={Object.assign({}, this.textStyle , {margin: 0})} >{`${this.state.appliedPercentage}%`}</p>
                    <p style={{margin: 0}}>Awesome!</p>
                </div>
            </div>
        );
    }
};

export default SvgDoughnut;
