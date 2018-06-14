module.exports = (settings) => {
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
            stroke: settings.circleColor || 'rgba(0, 0, 0, 0.15)',
        },
        pathStyle: {
            stroke: settings.pathColor || 'rgb(231, 83, 79)',
        },
        textWrapperStyle: {
            fontFamily: settings.fontFamily || 'sans-serif',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        },
        percentageTextStyle: {
            fontWeight: settings.percentageFontWeight || 'bold',
            fontSize: settings.percentageFontSize || '28px',
            color: settings.pathColor || 'rgb(231, 83, 79)',
            margin: 0
        },
        labelTextStyle: {
        	fontWeight: settings.labelFontWeight || 'normal',
        	fontSize: settings.labelFontSize || '14px',
            color: settings.labelColor || 'rgb(0, 0, 0)',
            margin: 0
        },
	};
}
