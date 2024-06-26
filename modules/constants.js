export const MODULE_ID = "combat-range-overlay";

export const DEFAULT_DEFAULT_WEAPON_RANGE = 5;
export const DEFAULT_WEAPON_RANGES = "5,10,30,60,120";

export const FLAG_NAMES = {
  WEAPON_RANGE: "weaponRange",
  SPEED_OVERRIDE: "speedOverride",
  IGNORE_DIFFICULT_TERRAIN: "ignoreDifficultTerrain",
  UNMODIFIED_SPEED: "unmodifiedSpeed",
  IGNORE_SET_SPEED: "ignoreSetSpeed"
};

export const MAX_DIST = 999;
export const FUDGE = .1; // floating point fudge

export const PRESSED_KEYS = {
  showOverlay: false,
  quickSettings: false,
  resetMeasureFrom: false
}