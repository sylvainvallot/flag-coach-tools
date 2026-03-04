"use client";

import { useScenario } from "@/context/ScenarioContext";

function scaleYardLine(yard: number) {
    return Math.round(yard * 100 / 70); // Scale yard line to percentage (10% to 90%)
}

function LOS({ yardLine = 5 }: { yardLine?: number } = {}) {
    const position = scaleYardLine(10 + yardLine); // Map yardLine to percentage position on the field

    return (
        <div
            className="absolute border-2 border-[#FBBF24] h-full z-40 bg-[#F97316] shadow-[0_0_6px_rgba(249,115,22,0.8)]"
            style={{ left: `${position}%` }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-lg text-2xl">
                🏈
            </div>
        </div>
    );
}

function NRZ() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-1 rounded-xl text-lg font-bold text-yellow-300 border-2 border-yellow-300 bg-zinc-900 z-20 ">
            NO RUN ZONE
        </div>
    );
}

export default function FieldDisplay() {
    const { scenario } = useScenario();
    return (
        <div className="relative w-full p-8 mx-auto">
            <div className="w-full aspect-70/25 relative mx-auto rounded-xl bg-white p-1">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-zinc-900">
                    {scenario.yardsToGo <= 5 && scenario.yardLine > 25 &&
                        <NRZ />}
                    <LOS yardLine={scenario.yardLine} />
                    <div
                        className="absolute border-2 h-full border-white"
                        style={{ left: `${scaleYardLine(10)}%` }}
                    />
                    <div
                        className="absolute border h-full border-white"
                        style={{ left: `${scaleYardLine(15)}%` }}
                    />
                    <div
                        className="absolute border-2 h-full border-white"
                        style={{ left: `${scaleYardLine(25 + 10)}%` }}
                    />
                    <div
                        className="absolute border h-full border-white"
                        style={{ left: `${scaleYardLine(10 + 25 + 20)}%` }}
                    />
                    <div
                        className="absolute border-2 h-full z-10 border-white"
                        style={{ left: `${scaleYardLine(10 + 25 + 25)}%` }}
                    />
                    <div
                        className="absolute bg-[#F97316]/60 w-50 h-full"
                        style={{
                            width: `${scaleYardLine(10)}%`,
                            left: `${scaleYardLine(60)}%`,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
