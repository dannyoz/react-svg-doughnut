const generateStyles = require('./generate-styles');

test('Styles are generated correctly', () => {

    const test = generateStyles({
        size: 200,
        thickness: 5,
        pathColor: 'red'
    });

    expect(test.circleStyle).toEqual({
        "stroke": "rgba(0, 0, 0, 0.15)"
    });

    expect(test.labelTextStyle).toEqual({
        "color": "rgb(0, 0, 0)",
        "fontSize": "14px",
        "fontWeight": "normal",
        "margin": 0
    });

    expect(test.pathStyle).toEqual({
        "stroke": "red"
    });

    expect(test.percentageTextStyle).toEqual({
        "color": "red",
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
