import React, { useEffect, useState, useRef } from "react";
import "./App.css";

const WheelComponent = ({
    segments,
    segColors,
    winningSegment,
    onFinished,
    primaryColor,
    primaryColoraround,
    contrastColor,
    buttonText,
    isOnlyOnce = true,
    size = 290,
    fontFamily = "proxima-nova",
}) => {
    let currentSegment = "";
    let isStarted = false;
    const [isFinished, setFinished] = useState(false);
    let timerHandle = 0;
    const timerDelay = 16;
    let angleCurrent = 0;
    let angleDelta = 0;
    let canvasContext = null;
    const centerX = 300;
    const centerY = 300;
    
    const rootNodeRef = useRef(null);

    useEffect(() => {
        const handleRootNodeClick = () => {
            spin();
        };

        if (rootNodeRef.current) {
            rootNodeRef.current.onclick = handleRootNodeClick;
        }

        wheelInit();
        setTimeout(() => {
            window.scrollTo(0, 1);
        }, 0);
    }, []);

    const wheelInit = () => {
        initCanvas();
        wheelDraw();
    };

    const initCanvas = () => {
        let canvas = document.getElementById("canvas");
        if (navigator.appVersion.indexOf("MSIE") !== -1) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("width", 600);
            canvas.setAttribute("height", 600);
            canvas.setAttribute("id", "canvas");
            document.getElementById("wheel").appendChild(canvas);
        }
        canvasContext = canvas.getContext("2d");
    };

    const spin = () => {
        isStarted = true;
        if (timerHandle === 0) {
            const duration = getRandomDuration();
            const accelerationDuration = 500; // Milliseconds
            const decelerationStartTime = duration - 4000; // Milliseconds
            const totalFrames = duration / timerDelay;
            const accelerationFrames = accelerationDuration / timerDelay;
            const decelerationFrames = (duration - decelerationStartTime) / timerDelay;

            let frame = 0;
            let slowDownAngleDelta = null;
            
            timerHandle = setInterval(() => {
                frame++;
                if (frame <= accelerationFrames) {
                    angleDelta = getAngleDelta(accelerationDuration, frame);
                } else if (frame >= decelerationStartTime / timerDelay && frame <= totalFrames) {
                    if (!slowDownAngleDelta) {
                        slowDownAngleDelta = angleDelta;
                    }
                    angleDelta = getSlowDownAngleDelta(decelerationFrames, frame - decelerationStartTime / timerDelay, slowDownAngleDelta);
                }
                onTimerTick();
                if (frame >= totalFrames) {
                    clearInterval(timerHandle);
                    timerHandle = 0;
                    setFinished(true);
                    onFinished(currentSegment);
                }
            }, timerDelay);
        }
    };

    const getAngleDelta = (duration, frame) => {
        const maxSpeed = Math.PI / segments.length;
        const acceleration = maxSpeed / (duration / timerDelay) / 2; // Reduced acceleration
        return acceleration * frame;
    };

    const getSlowDownAngleDelta = (decelerationFrames, currentFrame, slowDownAngleDelta) => {
        const deceleration = slowDownAngleDelta / decelerationFrames;
        return slowDownAngleDelta - deceleration * currentFrame;
    };

    const onTimerTick = () => {
        draw();
        angleCurrent += angleDelta;
        while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2;
    };

    const wheelDraw = () => {
        clear();
        drawWheel();
        drawNeedle();
    };

    const draw = () => {
        clear();
        drawWheel();
        drawNeedle();
    };

    const drawSegment = (key, lastAngle, angle) => {
        const ctx = canvasContext;
        const value = segments[key];
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, size, lastAngle, angle, false);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        ctx.fillStyle = segColors[key];
        ctx.fill();
        ctx.stroke();
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((lastAngle + angle) / 2);
        ctx.fillStyle = segColors[key]; // Use segment color for text color
        ctx.font = "bold 1em " + fontFamily;
        ctx.fillText(value.substr(0, 21), size / 2 + 20, 0);
        ctx.restore();
    };
    

    const drawWheel = () => {
        const ctx = canvasContext;
        let lastAngle = angleCurrent;
        const len = segments.length;
        const PI2 = Math.PI * 2;
        ctx.lineWidth = 1; // Adjust the thickness here
        ctx.strokeStyle = "white" || "#000000"; // Set the color here
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "1em " + fontFamily;
        for (let i = 1; i <= len; i++) {
            const angle = PI2 * (i / len) + angleCurrent;
            drawSegment(i - 1, lastAngle, angle);
            lastAngle = angle;
        }
    
        // Draw a center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 40, 0, PI2, false);
        ctx.closePath();
        ctx.fillStyle = primaryColor || "black";
        ctx.lineWidth = 5;
        ctx.strokeStyle = contrastColor || "white";
        ctx.fill();
        ctx.font = "bold 2em " + fontFamily;
        ctx.fillStyle = contrastColor || "white";
        ctx.textAlign = "center";
        ctx.fillText(buttonText || "Spin", centerX, centerY + 3);
        ctx.stroke();
    
        // Draw outer circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, PI2, false);
        ctx.closePath();
        ctx.lineWidth = 10; // Adjust the thickness here
        ctx.strokeStyle = primaryColoraround || "#000000"; // Set the color here
        ctx.stroke();
    };
    

    const drawNeedle = () => {
        const ctx = canvasContext;
        ctx.lineWidth = 1;
        ctx.strokeStyle = contrastColor || "white";
        ctx.fileStyle = contrastColor || "white";
        ctx.beginPath();
        ctx.moveTo(centerX + 10, centerY - 40);
        ctx.lineTo(centerX - 10, centerY - 40);
        ctx.lineTo(centerX, centerY - 60);
        ctx.closePath();
        ctx.fill();
        const change = angleCurrent + Math.PI / 2;
        let i =
            segments.length -
            Math.floor((change / (Math.PI * 2)) * segments.length) -
            1;
        if (i < 0) i = i + segments.length;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "transparent";
        ctx.font = "bold 1.5em " + fontFamily;
        currentSegment = segments[i];
        isStarted &&
            ctx.fillText(currentSegment, centerX + 10, centerY + size + 50);
    
        // Display color of the segment below the arrow
        ctx.fillText(segColors[i], centerX + 10, centerY + size + 80);
    };
    

    const clear = () => {
        const ctx = canvasContext;
        ctx.clearRect(0, 0, 1000, 800);
    };

    return (
        <div id="wheel">
            <canvas
                id="canvas"
                width="600"
                height="600"
                ref={rootNodeRef}
                style={{
                    pointerEvents: isFinished && isOnlyOnce ? "none" : "auto"
                }}
            />
        </div>
    );
};

export default WheelComponent;

function getRandomDuration() {
    return Math.floor(Math.random() * 2000) + 5000; // Random duration between 5 to 7 seconds
}
