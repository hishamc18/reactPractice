import React, {useState} from "react";

function ColorChange() {

    const [selectedDiv, setSelectedDiv] = useState(null);

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    return (
        <div className="boxMain">
            <h2>Click any Box</h2>
            <div className="box">
                {Array.from({ length: 3 }, (_, index) => (
                    <div
                        onClick={() => handleDivClick(index)}
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: selectedDiv === null || selectedDiv === index ? "pink" : "green",
                            border: "1px solid black",
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ColorChange;
