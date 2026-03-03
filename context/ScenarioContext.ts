"use client";

import React, { createContext, useContext, useState } from "react";
import { PENALTIES, Penalty } from "./flag";


type Scenario = {
  down: number;
  yardLine: number;
  yardsToGo: number;
  objective: string;
  isflagOnPlay?: boolean;
  flagReason?: Penalty;
};

type ScenarioContextType = {
  scenario: Scenario;
  nextDown: () => void;
  generateScenario: () => void;
  flagOnPlay: () => void;
};

const ScenarioContext = createContext<ScenarioContextType | undefined>(
  undefined
);

export function ScenarioProvider({ children }: { children: React.ReactNode }) {
  const [scenario, setScenario] = useState<Scenario>({
    down: 1,
    yardLine: 5,
    yardsToGo: 20,
    objective: "First Down",
    isflagOnPlay: false,
  });

  function generateScenario() {
    const randomYard = Math.floor(Math.random() * 50);
    const randomDown = Math.floor(Math.random() * 4) + 1;
    const randomToGo = randomYard > 25 ? 50 - randomYard : 25 - randomYard;

    setScenario({
      down: randomDown,
      yardLine: randomYard,
      yardsToGo: randomToGo,
      objective: randomYard < 25 ? "First Down" : "Touchdown",
    });
  }

  function getRandomPenalty(): Penalty {
    const values = Object.values(PENALTIES);
    return values[Math.floor(Math.random() * values.length)];
  }

  function nextDown() {
    const randomPenalty = getRandomPenalty();
    setScenario((prev) => {
      const nextDown = prev.down === 4 ? 1 : prev.down + 1;
      return { ...prev, down: nextDown, isflagOnPlay: Math.random() > 0.8 ? true : false, flagReason: randomPenalty };
    });
  }

  function flagOnPlay() {
    const randomPenalty = getRandomPenalty();
    setScenario((prev) => ({ ...prev, isflagOnPlay: true, flagReason: randomPenalty }));
  }

  return React.createElement(
    ScenarioContext.Provider,
    { value: { scenario, generateScenario, nextDown, flagOnPlay } },
    children
  );
}

export function useScenario() {
  const context = useContext(ScenarioContext);
  if (!context) {
    throw new Error("useScenario must be used inside ScenarioProvider");
  }
  return context;
}