"use client";
import { useScenario } from "@/context/ScenarioContext";

const downDisplay = ["", "st", "nd", "rd", "th"] as const;


export default function DownCounter() {
    const { scenario } = useScenario();
    const count = scenario.down;

    return (
        <div className="flex flex-col items-center gap-4 my-8">
            <div className="text-8xl font-bold text-center">
                {count}
                <span className="text-2xl align-top">{downDisplay[count]}</span>
            </div>
            <div className="text-2xl font-bold">DOWN</div>
        </div>
    );
}
