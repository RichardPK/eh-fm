import { TOGGLE_PLAYING } from "./action-types";

export function switchPlayings(payload) {
    return { type: TOGGLE_PLAYING, payload }
  };