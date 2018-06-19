const generateStyles = require('./generate-styles');

test('Styles are generated correctly', () => {

    const test = generateStyles({
        size: 200,
        thickness: 5,
        ringColour: 'red'
    });

    expect(test.circleStyle).toEqual({
        "stroke": "red"
    });

    expect(test.labelTextStyle).toEqual({
        "color": "#333",
        "fontSize": "14px",
        "fontWeight": "normal",
        "margin": 0
    });

    expect(test.pathStyle).toEqual({
        "stroke": "#e7534f"
    });

    expect(test.percentageTextStyle).toEqual({
        "color": "#e7534f",
        "fontSize": "28px",
        "fontWeight": "bold",
        "margin": 0
    });

    expect(test.sharedStyles).toEqual({
        "fill": "none",
        "strokeWidth": "5px"
    });

    expect(test.svgStyle).toEqual({
        "height": "200px",
        "width": "200px"
    });

    expect(test.textWrapperStyle).toEqual({
        "fontFamily": "sans-serif",
        "left": "50%",
        "position": "absolute",
        "textAlign": "center",
        "top": "50%",
        "transform": "translate(-50%, -50%)"
    });
});
