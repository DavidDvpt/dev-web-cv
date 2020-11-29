import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CurriculumContent from "./CurriculumContent";

function DownloadPdf() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <CurriculumContent ref={componentRef} />
            <button onClick={handlePrint}>Print this out!</button>
        </>
    );
}

export default DownloadPdf;
