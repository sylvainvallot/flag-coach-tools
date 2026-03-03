"use client";
import { useScenario } from "../context/ScenarioContext";
export default function Controls() {
    const { nextDown, generateScenario, flagOnPlay } = useScenario();

    return (
        <>
            <button
                className="w-full rounded-full border-2 px-4 py-4 text-foreground"
                onClick={() => nextDown()}
            >
                Next Down
            </button>
            <div className="flex flex-row items-center gap-4 w-full justify-center">
                <button
                    className="w-1/2 rounded-full border-2 px-4 py-2 my-8 text-foreground"
                    onClick={() => generateScenario()}
                >
                    New Scenario
                </button>
                <button
                    className="w-1/2 rounded-full border-2 px-4 py-2 text-foreground"
                    onClick={() => flagOnPlay("Flagged for rule violation")}
                >
                    Flag on the Play
                </button>
            </div>
        </>
    );
}
