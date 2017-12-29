export default (settings) => {
	return {
		svgStyle: {
            width: `${settings.size}px`,
            height: `${settings.size}px`
        },
        sharedStyles: {
            fill: 'none',
            strokeWidth: `${settings.thickness}px`,
        },
        circleStyle: {
            stroke: settings.circleColor,
        },
        pathStyle: {
            stroke: settings.pathColor,
        },
        textWrapperStyle: {
            fill: '#000',
            fontFamily: 'sans-serif',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        },
        textStyle: {
            fontWeight: 'bold',
            fontSize: '1.8rem',
            color: settings.pathColor
        },
	};
}
