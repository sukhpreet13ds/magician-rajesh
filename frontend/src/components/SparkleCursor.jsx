import React, { useEffect, useRef } from 'react';

const SparkleCursor = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Disable on touch screens / mobile devices
        const isTouchDevice = 
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            window.matchMedia('(pointer: coarse)').matches ||
            window.innerWidth <= 768;

        if (isTouchDevice) {
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const colors = ["#E5BA5A", "#FFD700", "#C77DFF", "#4ECCA3", "#FF6B6B", "#FFFFFF", "yellow", "purple", "green", "red"];
        const intensity = 28;
        const sparkles = [];
        let animationFrameId;

        const onResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        onResize();
        window.addEventListener('resize', onResize);

        const addSparkle = (xPos, yPos) => {
            const radius = Math.random() * 2 + 1;
            const opacity = 1;
            const dispersingSpeed = Math.random() * 0.025 + 0.015;
            const dispersingDirection = (Math.random() - 0.5) * 2;
            const color = colors[Math.floor(Math.random() * colors.length)];
            sparkles.push({ xPos, yPos, radius, opacity, dispersingSpeed, dispersingDirection, color });
        };

        const onMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            for (let i = 0; i <= 8; i++) {
                addSparkle(
                    mouseX + ((Math.random() * intensity) - (intensity * 0.5)),
                    mouseY + ((Math.random() * intensity) - (intensity * 0.5))
                );
            }
        };

        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let sparkleAmount = sparkles.length;
            while (sparkleAmount--) {
                const sparkle = sparkles[sparkleAmount];
                if (sparkle.opacity <= 0) {
                    sparkles.splice(sparkleAmount, 1);
                } else {
                    sparkle.yPos += 1;
                    sparkle.xPos += sparkle.dispersingDirection;
                    sparkle.opacity -= sparkle.dispersingSpeed;

                    ctx.globalAlpha = Math.max(0, sparkle.opacity);
                    ctx.beginPath();
                    ctx.arc(sparkle.xPos, sparkle.yPos, sparkle.radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fill();
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = sparkle.color;
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }

            animationFrameId = window.requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 999999
            }}
        />
    );
};

export default SparkleCursor;
