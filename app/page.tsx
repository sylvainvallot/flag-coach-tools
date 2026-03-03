import BallPosition from "@/components/BallPosition";
import Controls from "@/components/Controls";
import DownCounter from "@/components/DownCounter";
import FieldDisplay from "@/components/FieldDisplay";
import { ScenarioProvider } from "@/context/ScenarioContext";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl min-h-screen font-sans p-2 h-screen flex flex-col justify-center">
      <main className="w-full h-full">
          <ScenarioProvider>
            <BallPosition />
            <FieldDisplay />
            <DownCounter/>
            <Controls />
          </ScenarioProvider>
      </main>
    </div>
  );
}
