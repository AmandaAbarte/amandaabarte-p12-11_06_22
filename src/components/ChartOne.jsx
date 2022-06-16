import React, {useRef, useEffect} from "react";
import { select } from "d3";

export default function ChartOne() {

    const svgRef = useRef();
    useEffect(()=> {
        const svg = select(svgRef.current);
    },[])
    return (
        <svg ref={svgRef}></svg>
    )
}