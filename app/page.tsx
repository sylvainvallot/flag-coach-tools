import Controls from "@/components/Controls";
import DownCounter from "@/components/DownCounter";
import ScenarioDisplay from "@/components/ScenarioDisplay";
import { ScenarioProvider } from "@/context/ScenarioContext";

export default function Home() {
  return (
    <div className="min-h-screen max-h-screen font-sans p-4 h-screen">
      <main className="max-w-2xl mx-auto w-full h-full flex flex-col justify-around">
        <ScenarioProvider>
          <ScenarioDisplay />
          <DownCounter />
          <Controls />
        </ScenarioProvider>
      </main>
    </div>
  );
}
