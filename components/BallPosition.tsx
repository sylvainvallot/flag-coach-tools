"use client";
import { useScenario } from "../context/ScenarioContext";
const downDisplay = ["", "st", "nd", "rd", "th"] as const;

export default function BallPosition() {
    const { scenario } = useScenario();

    return (
        <>
            <div className="w-full space-y-2 mx-auto py-8 flex flex-col items-center">
                <p className="text-xl tracking-widest text-zinc-500 uppercase">
                    Scenario
                </p>

                <h1 className="text-6xl font-bold tracking-tight">
                    {scenario.down}<span className="text-2xl align-top">{downDisplay[scenario.down]}</span> & {scenario.yardsToGo}
                </h1>
                <p className="text-2xl text-zinc-200 tabular-nums uppercase tracking-widest">
                    Ball on {scenario.yardLine}
                </p>
            </div>
        </>
    );
}
