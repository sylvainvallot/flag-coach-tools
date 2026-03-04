"use client";

import { useScenario } from "@/context/ScenarioContext";

export default function FlagDisplay() {
    const { scenario } = useScenario();
    return (
        <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col justify-center items-center text-black">
            {/* <div className="absolute inset-0 bg-black z-40"/> */}

            <div className="h-full flex flex-col justify-around items-center text-white">
                <div className="py-4 text-xl tracking-widest uppercase">
                    FLAG ON THE PLAY
                </div>

                <div className="flex flex-col items-center gap-4">
                    {/* Side (OFFENSE / DEFENSE) */}
                    <div className="text-4xl font-extrabold uppercase tracking-wider">
                        {scenario.flagReason?.side}
                    </div>

                    {/* Penalty name */}
                    <div className="text-2xl font">
                        {scenario.flagReason?.label}
                    </div>
                </div>
                {/* Consequences */}
                <div className="flex flex-col items-center gap-1 text-lg mt-2">
                    {/* Yardage */}
                    {scenario.flagReason?.yards !== undefined && (
                        <div className="text-xl text-yellow-300 font-bold">
                            {scenario.flagReason.yards} YARDS
                        </div>
                    )}

                    {scenario.flagReason?.description && (
                        <div className="text-lg text-center">
                            {scenario.flagReason.description}
                        </div>
                    )}
                    {scenario.flagReason?.lossOfDown && (
                        <span className="text-red-400 font-semibold">
                            Loss of Down
                        </span>
                    )}

                    {scenario.flagReason?.automaticFirstDown && (
                        <span className="text-green-400 font-semibold">
                            Automatic First Down
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
