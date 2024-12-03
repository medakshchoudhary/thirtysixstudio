import { useEffect, useRef } from "react";
import canvasImages from "../canvasImages";

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = canvasImages[0];
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, []);

    return (
        <div>
            <canvas className="w-[18rem] h-[18rem] " ref={canvasRef} id="canvas"></canvas>
        </div>
    );
}

export default Canvas;