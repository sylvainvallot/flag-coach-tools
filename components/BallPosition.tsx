"use client";
import { useScenario } from "../context/ScenarioContext";

export default function BallPosition() {
    const { scenario } = useScenario();

    return (
        <div className="space-y-8 p-8 w-full">
            <div className="text-2xl text-center py-2">
                GO FOR <b>{scenario.objective.toUpperCase()}</b>
            </div>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl font-bold text-center ">
                        {scenario.yardLine}
                    </div>
                    <div className="text-2xl font-bold">BALL ON</div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="text-6xl font-bold text-center">
                        {scenario.yardsToGo}
                    </div>
                    <div className="text-2xl font-bold">TO GO</div>
                </div>
            </div>
        </div>
    );
}
