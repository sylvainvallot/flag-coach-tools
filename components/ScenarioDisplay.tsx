"use client";

import { useScenario } from "@/context/ScenarioContext";
import BallPosition from "./BallPosition";
import FieldDisplay from "./FieldDisplay";
import FlagDisplay from "./FlagDisplay";

export default function ScenarioDisplay() {
    const { scenario } = useScenario();
    return (
        <div className="relative bg-zinc-900 border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-2xl">
            {scenario.isflagOnPlay && <FlagDisplay />}
            <BallPosition />
            <FieldDisplay />
        </div>
    );
}
