import React, { useEffect, useRef } from "react";
import DrawChart from "../../UI/DrawChart";

function PieChart(props) {
    const ref = useRef(null);
    const { data } = props;
    useEffect(() => {
        if (ref.current) {
            DrawChart(ref.current, data);
        }
    }, [ref, data]);
    return (
        <div className="container">
            <div className="graph" ref={ref} />

        </div>
    )
}

export default PieChart