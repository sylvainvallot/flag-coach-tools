"use client";
import { useScenario } from "@/context/ScenarioContext";

const downDisplay = ["", "st", "nd", "rd", "th"] as const;


export default function DownCounter() {
    const { scenario } = useScenario();
    const count = scenario.down;

    return (
        <div className="flex flex-col items-center gap-4 my-8">
            <div className="text-9xl font-extrabold text-center tracking-tight transition-all duration-300 ease-in-ou active:scale-95">
                {count}
                <span className="text-3xl align-top font-semibold tracking-normal">{downDisplay[count]}</span>
            </div>
            <div className="text-xl font-semibold tracking-widest text-zinc-400">
                DOWN
            </div>
        </div>
    );
}
