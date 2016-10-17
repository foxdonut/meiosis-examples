import { ActionCreator } from "meiosis";
import { Proposal, Propose } from "../root/types";

export interface CirculationActions {

};

export const createActions: () => ActionCreator<Proposal, CirculationActions> = () =>
  (propose: Propose): CirculationActions => {
    return null;
  };
