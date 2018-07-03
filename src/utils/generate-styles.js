module.exports = (settings) => {
	return {
		svgStyle: {
            width: (settings.size) ? `${settings.size}px` : '150px',
            height: (settings.size) ? `${settings.size}px` : '150px'
        },
        sharedStyles: {
            fill: 'none',
            strokeWidth: (settings.thickness) ? `${settings.thickness}px` : '5px',
        },
        circleStyle: {
            stroke: (settings.ringColour) ? settings.ringColour : '#DDD',
        },
        pathStyle: {
            stroke: (settings.primaryColour) ? settings.primaryColour : '#e7534f',
        },
        textWrapperStyle: {
            fontFamily: (settings.fontFamily) ? settings.fontFamily : 'inherit',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
        },
        percentageTextStyle: {
            fontWeight: (settings.percentageFontWeight) ? settings.percentageFontWeight : 'bold',
            fontSize: (settings.percentageFontSize) ? `${settings.percentageFontSize}px` : '28px',
            color: (settings.primaryColour) ? settings.primaryColour : '#e7534f',
            margin: 0
        },
        labelTextStyle: {
        	fontWeight: (settings.labelFontWeight) ? settings.labelFontWeight : 'normal',
        	fontSize: (settings.labelFontSize) ? `${settings.labelFontSize}px` : '14px',
            color: (settings.labelColour) ? settings.labelColour : '#333',
            margin: 0
        },
	};
}
