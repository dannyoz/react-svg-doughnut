import React from 'react';
import calculatePathShape from './calculate-path-shape';

class SvgDoughnut extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			appliedPercentage: 0,
		};

		this.size = this.props.size || 150;
		this.percentage = this.props.percentage || 0;
		this.width = this.props.styles.width || 5;
		this.circleColor = this.props.styles.circleColor || 'rgb(0, 0, 0, 0.2)';
		this.pathColor = this.props.styles.pathColor || 'rgb(231, 83, 79)';

		this.svgStyle = {
			width: `${this.size}px`,
			height: `${this.size}px`
		};

		this.sharedStyles = {
			fill: 'none',
			strokeWidth: `${this.width}px`,
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
			color: this.pathColor,
			borderBottom: `2px solid ${this.pathColor}`,
			paddingBottom: '5px'
		};
		
	}

	componentDidMount() {
		const self = this;
		// this.setState({
		// 	appliedPercentage: this.percentage
		// });

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
			<div style={Object.assign({}, this.svgStyle, {position: 'relative'})}>
				<svg className="primary" style={Object.assign({}, this.svgStyle )}>
					<circle
						cx="50%"
						cy="50%"
						r={(this.size / 2) - this.width}
						style={Object.assign({}, this.sharedStyles , this.circleStyle )}>
					</circle>
					<path
						d={calculatePathShape(this.state.appliedPercentage, this.size, this.width)}
						style={Object.assign({}, this.sharedStyles , this.pathStyle )}>
					</path>
				</svg>
				<div style={Object.assign({}, this.textWrapperStyle )}>
					<p style={Object.assign({}, this.textStyle , {marginBottom: 0})} >{`${this.state.appliedPercentage}%`}</p>
					<p style={{marginBottom: 0}}>Awesome!</p>
				</div>
			</div>
		);
	}
};

export default SvgDoughnut;
