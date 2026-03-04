"use client";
import { useScenario } from "../context/ScenarioContext";
export default function Controls() {
    const { nextDown, generateScenario, flagOnPlay } = useScenario();

    return (
        <div className="mx-auto w-full">
            <button
                className="mt-10 w-full h-14 rounded-full bg-[#F97316] text-white font-semibold text-lg shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-[0.98] transition-all duration-200"
                onClick={() => nextDown()}
            >
                Next Down
            </button>
            <div className="flex flex-row items-center gap-4 w-full justify-center">
                <button
                    className="w-1/2 rounded-full border-2  bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border-white/10 text-zinc-300 hover:bg-white/5 transition px-4 py-2 my-8 font-semibold"
                    onClick={() => generateScenario()}
                >
                    New Scenario
                </button>
                <button
                    className="w-1/2 rounded-full border-2 border-white/10 text-zinc-300 hover:bg-white/5 transition px-4 py-2 my-8 "
                    onClick={() => flagOnPlay()}
                >
                    Flag on the Play
                </button>
            </div>
        </div>
    );
}