"use client"
import classNames from "classnames";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function HeroImage() {
    const randomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
    const [lines, setLines] = useState([
        { direction: "to bottom", duration: 4000, size: 20 },
        { direction: "to right", duration: 8000, size: 15 },
    ]);
    const removeLine = (id) => {
        setLines((prev) => prev.filter((line) => line.id !== id));
    };
    // console.log(inView);
    return (
        <div ref={ref} className="[perspective:1500px] mt-[12.8rem]">
            <div className={classNames("relative bg-hero-gradient border border-white-a08 bg-white bg-opacity-[0.01] rounded-lg",
                inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
                "before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0",
                inView && "before:animate-image-glow"
            )}>
                <div className="absolute w-full h-full top-0 left-0 z-20">
                    {lines.map((line) => (
                        <span
                            // key={line.id}
                            // onAnimationEnd={() => removeLine(line.id)}
                            style={
                                {
                                    "--direction": line.direction,
                                    "--size": line.size,
                                    "--animation-duration": `${line.duration}ms`,
                                }
                            }
                            className={classNames(
                                "absolute top-0 block h-[1px] w-[10rem] bg-glow-lines",
                                line.direction === "to right" &&
                                `left-0 h-[1px] w-[calc(var(--size)*0.5rem)] animate-glow-line-horizontal md:w-[calc(var(--size)*1rem)]`,
                                line.direction === "to bottom" &&
                                `right-0 h-[calc(var(--size)*0.5rem)] w-[1px] animate-glow-line-vertical md:h-[calc(var(--size)*1rem)]`
                            )}
                        />
                    ))}
                </div>
                <svg
                    className={classNames(
                        "absolute left-0 top-0 h-full w-full",
                        "[&_path]:stroke-white [&_path]:[strokeOpacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
                        inView && "[&_path]:animate-sketch-lines"
                    )}
                    width="100%"
                    viewBox="0 0 1499 778"
                    fill="none"
                >
                    <path pathLength="1" d="M1500 72L220 72"></path>
                    <path pathLength="1" d="M1500 128L220 128"></path>
                    <path pathLength="1" d="M1500 189L220 189"></path>
                    <path pathLength="1" d="M220 777L220 1"></path>
                    <path pathLength="1" d="M538 777L538 128"></path>
                </svg>
                <img className={classNames("relative z-10 transition-opacity delay-[680ms]",
                    inView ? "opacity-100" : "opacity-0",
                )} src="/images/hero.webp" alt="Hero image" />
            </div>
        </div>
    );
}