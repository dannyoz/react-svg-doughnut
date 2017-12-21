import React from 'react';

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

	calculatePathShape(percentage) {
		const PI = Math.PI;
		const cos = Math.cos;
		const sin = Math.sin;
		const centerY = this.size / 2;
		const centerX = this.size / 2;
		const radius = (this.size / 2) - this.width;
		const startAngle = - 90;
		const startRadians = startAngle * PI / 180;
		const endAngle = percentage * 3.6 - 90;
		const endRadians = (endAngle - 0.0001) * PI / 180;
		const largeArc = ((endRadians - startRadians) % (PI * 2)) > PI ? 1 : 0;
		const startX = centerX + cos(startRadians) * radius;
		const startY = centerY + sin(startRadians) * radius;
		const endX = centerX + cos(endRadians) * radius;
		const endY = centerY + sin(endRadians) * radius;

		const attrString = [
			'M', startX, startY,
			'A', radius, radius, 0,
			largeArc, 1, endX, endY
		].join(' ');
		
		return String(attrString);
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
						d={this.calculatePathShape(this.state.appliedPercentage)}
						style={Object.assign({}, this.sharedStyles , this.pathStyle )}>
					</path>
				</svg>
				<div style={Object.assign({}, this.textWrapperStyle )}>
					<p style={Object.assign({}, this.textStyle , {marginBottom: 0})} >{`${this.state.appliedPercentage}%`}</p>
					<p style={{marginBottom: 0}}>Awesome</p>
				</div>
			</div>
		);
	}
};

export default SvgDoughnut;
