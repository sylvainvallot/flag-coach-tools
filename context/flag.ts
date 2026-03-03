export type PenaltySide = "OFFENSE" | "DEFENSE" | "REFEREE";

export type Penalty = {
  key: string;
  label: string;
  description?: string;
  yards?: number;
  side: PenaltySide;
  lossOfDown?: boolean;
  automaticFirstDown?: boolean;
};

export const PENALTIES: Record<string, Penalty> = {
 
  INADVERTENT_WHISTLE : {
    key: "INADVERTENT_WHISTLE",
    label: "Coup de sifflet intempestif",
    description: "Remise en jeu au point de balle morte ou rejouer le down",
    side: "REFEREE",
  },

  PASS_AFTER_7_SECONDS: {
    key: "PASS_AFTER_7_SECONDS",
    label: "Passe après 7 secondes",
    side: "OFFENSE",
    lossOfDown: true,
  },

  JUMP_DIVE: {
    key: "JUMP_DIVE",
    label: "Saut / Plongeon",
    yards: 5,
    side: "OFFENSE",
    lossOfDown: true,
  },

  ILLEGAL_DEFLAG: {
    key: "ILLEGAL_DEFLAG",
    label: "Déflagage illégal",
    yards: 5,
    side: "DEFENSE",
  },

  FALSE_START: {
    key: "FALSE_START",
    label: "Faux départ",
    yards: 5,
    side: "OFFENSE",
  },

  ILLEGAL_DEFENSIVE_SCREEN: {
    key: "ILLEGAL_DEFENSIVE_SCREEN",
    label: "Écran illégal de la défense",
    yards: 5,
    side: "DEFENSE",
  },

  OFF_PASS_INTERFERENCE: {
    key: "OFF_PASS_INTERFERENCE",
    label: "Gêne de passe offensive",
    yards: 10,
    side: "OFFENSE",
    lossOfDown: true,
  },

  DEF_PASS_INTERFERENCE: {
    key: "DEF_PASS_INTERFERENCE",
    label: "Gêne de passe défensive",
    yards: 10,
    side: "DEFENSE",
    automaticFirstDown: true,
  },

  ILLEGAL_OFFENSIVE_CONTACT: {
    key: "ILLEGAL_OFFENSIVE_CONTACT",
    label: "Contact illégal de l'attaque",
    yards: 10,
    side: "OFFENSE",
    lossOfDown: true,
  },
};