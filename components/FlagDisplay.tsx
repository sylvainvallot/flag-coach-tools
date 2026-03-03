"use client";

import { useScenario } from "@/context/ScenarioContext";

export default function FlagDisplay() {
    const { scenario } = useScenario();
    console.log("Flag reason:", scenario.flagReason);
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs rounded-sm" />

            <div className="relative text-center text-white px-6 py-4">
                <div className="">
                    FLAG ON THE PLAY
                </div>

                {scenario.flagReason && (
                    <>
                        {/* Side (OFFENSE / DEFENSE) */}
                        <div className="text-4xl font-extrabold uppercase">
                            {scenario.flagReason.side}
                        </div>

                        {/* Penalty name */}
                        <div className="text-2xl font">
                            {scenario.flagReason.label}
                        </div>

                        {/* Yardage */}
                        {scenario.flagReason.yards !== undefined && (
                            <div className="text-xl text-yellow-300 font-bold">
                                {scenario.flagReason.yards} YARDS
                            </div>
                        )}

                        {scenario.flagReason.description && (
                            <div className="text-lg">
                                {scenario.flagReason.description}
                            </div>
                        )}

                        {/* Consequences */}
                        <div className="flex flex-col items-center gap-1 text-lg mt-2">
                            {scenario.flagReason.lossOfDown && (
                                <span className="text-red-400 font-semibold">
                                    Loss of Down
                                </span>
                            )}

                            {scenario.flagReason.automaticFirstDown && (
                                <span className="text-green-400 font-semibold">
                                    Automatic First Down
                                </span>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
