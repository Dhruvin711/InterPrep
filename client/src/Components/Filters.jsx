import React, { useEffect, useState } from 'react'
import "../CSS/filters.css"
import Slider from './Slider';

const Checkbox = (props) => {
    const [isCLicked, setIsClicked] = useState(false);

    return (
        <div className={isCLicked ? "box1-clicked box1" : "box1"} >
            <input type="checkbox" id={props.name} />
            <label htmlFor={props.name} className="check-box" onClick={() => setIsClicked(!isCLicked)}/>
            <h4>{props.name}</h4>
        </div>
    )
}


const Filters = () => {

    const depatments = ["Computer Science", "Electronics Eng.", "Electrical Engineering", "Mechanical Eng.", "Chemical Engineering", "Civil Engineering"];
    return (
        <aside id="filters">
            <h1 className="bigHead pt-5">Filters</h1>
            <h2 className="bump"><span className="results">37</span> Results Found</h2>

            <div id="type">
                <h1>Department</h1>
                <div className="bump">
                    {depatments.map((d, index) => (
                        <Checkbox
                            key={index} 
                            name={d} 
                        />
                    ))}
                </div>
            </div>

            <div id="specials" className="clearfix">
                <h1>Role Type</h1>
                <div className="specBump">
                    <div className="box2">
                        <input type="checkbox" id="FTE" />
                        <label htmlFor="FTE" className="check-box" />
                        <h4>FTE</h4>
                    </div>
                    <div className="box2">
                        <input type="checkbox" id="Intern" />
                        <label htmlFor="Intern" className="check-box" />
                        <h4>Intern</h4>
                    </div>
                    <div className="box2">
                        <input type="checkbox" id="Intern+FTE" />
                        <label htmlFor="Intern+FTE" className="check-box" />
                        <h4>Intern+FTE</h4>
                    </div>
                </div>
            </div>

            <div id="priceRange" className="clearfix">
                <h1>YEAR</h1>
                <div className="bump">
                    {/* <div id="slider"></div>

                    <div className="minVal">
                        <h3 className="minPrice">1,300</h3>
                    </div>

                    <div className="maxVal">
                        <h3 className="maxPrice">14,000</h3>
                    </div> */}
                    <Slider 
                        min={2015} 
                        max={2023} 
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />
                </div>
            </div>
        </aside>

    )
}

export default Filters