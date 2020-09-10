import React from 'react';

class HowToUse extends React.Component{
    render(){
        return(
            <>
                <div className="form-group responsive-container mx-auto d-flex flex-column mt-5">
                    <h1>How to Use Me</h1>
                    <p>
                        <ul>
                            <li>Select "Add a Round" to input the Course and Round Date.</li>
                            <li>Select the Lie Which you hit your shot from.</li>
                            <li>Enter the distance of the shot (how far to go to the hole).</li>
                            <li>Click "Add Shot" (or hit enter) to add your shot to the round</li>
                        </ul>
                    </p>
                    <h2>Information about Strokes Gained</h2>
                    <p>
                        Strokes gained mesaures your shot against the average shot of a PGA Tour Professional. You can view
                        your strokes gained (or lost) for every individual shot you make.
                        If your strokes gained is a positive number you gained strokes against an average PGA Tour field for 
                        that particular shot. If your strokes gained is negative, you lost shots against the 'average' PGA
                        tour field.
                    </p>
                    <h2>How accurate do my entries need to be?</h2>
                    <p>
                        The more accurate the data you enter is, the more accurate your results are. Good estimates
                        will still produce good results with minor variations in Strokes Gained(or lost) for that
                        shot. For example being 20m out on a shot from 150m only skews the result by less than 0.1 of a shot. 
                    </p>
                    <h2>Why I am seeing a lot of negative strokes gained results?</h2>
                    <p>
                        The benchmark is the PGA tour! You are comparing your performance to that of an average PGA Tour Pro.
                    </p>
                </div>
            </>
        )
    }
}

export default HowToUse