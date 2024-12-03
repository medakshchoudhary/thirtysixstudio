import { useEffect, useRef, useState } from "react";
import canvasImages from "../canvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas() {

    const [index, setIndex] = useState({value : 0})
    const canvasRef = useRef(null);

    useGSAP(()=>{
        gsap.to(index, {
            value: 149,
            duration: 3,
            ease: "linear",
            repeat: -1,
            onUpdate: () => {
                setIndex({value : Math.round(index.value)})
            }
        })
    })

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = canvasImages[index.value];
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [index]);

    return (
        <div>
            <canvas className="w-[18rem] h-[18rem] " ref={canvasRef} id="canvas"></canvas>
        </div>
    );
}

export default Canvas;