"use client";

import { useScenario } from "@/context/ScenarioContext";
import FlagDisplay from "./FlagDisplay";

function scaleYardLine(yard: number) {
    return Math.round(yard * 100 / 70); // Scale yard line to percentage (10% to 90%)
}

function LOS({ yardLine = 5 }: { yardLine?: number } = {}) {
    const position = scaleYardLine(10 + yardLine); // Map yardLine to percentage position on the field

    return (
        <div
            className="absolute border-2 border-yellow-500 h-full z-10"
            style={{ left: `${position}%` }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                🏈
            </div>
        </div>
    );
}

export default function FieldDisplay() {
    const { scenario } = useScenario();
    return (
        <>
            <div className="h-12 text-center italic font-semibold text-lg">
            { scenario.yardsToGo <= 5 && scenario.yardLine > 25 && "NO RUN ZONE"}
            </div>

            <div className="w-full h-52 relative border-2 rounded-sm">
                {scenario.isflagOnPlay && <FlagDisplay />}
                <LOS yardLine={scenario.yardLine} />
                <div
                    className="absolute border-2 h-full"
                    style={{ left: `${scaleYardLine(10)}%` }}
                />
                <div
                    className="absolute border h-full"
                    style={{ left: `${scaleYardLine(15)}%` }}
                />
                <div
                    className="absolute border-2 h-full"
                    style={{ left: `${scaleYardLine(25 + 10)}%` }}
                />
                <div
                    className="absolute border h-full"
                    style={{ left: `${scaleYardLine(10 + 25 + 20)}%` }}
                />
                <div
                    className="absolute border-2 h-full"
                    style={{ left: `${scaleYardLine(10 + 25 + 25)}%` }}
                />
            </div>
        </>
    );
}
