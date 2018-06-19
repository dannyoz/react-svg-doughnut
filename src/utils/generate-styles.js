module.exports = (settings) => {
	return {
		svgStyle: {
            width: `${settings.size}px` || '150px',
            height: `${settings.size}px` || '150px'
        },
        sharedStyles: {
            fill: 'none',
            strokeWidth: `${settings.thickness}px` || '5px',
        },
        circleStyle: {
            stroke: settings.ringColour || '#DDD',
        },
        pathStyle: {
            stroke: settings.primaryColour || '#e7534f',
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
            color: settings.primaryColour || '#e7534f',
            margin: 0
        },
        labelTextStyle: {
        	fontWeight: settings.labelFontWeight || 'normal',
        	fontSize: `${settings.labelFontSize}px` || '14px',
            color: settings.labelColour || '#333',
            margin: 0
        },
	};
}
