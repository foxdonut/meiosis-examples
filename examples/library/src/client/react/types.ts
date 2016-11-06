import { Config, View } from "meiosis";
import { ReactElement } from "react";
import { Proposal } from "../root/types";

export type VDom = ReactElement<any>;
export type ComponentConfig<M, A> = Config<M, M, VDom, Proposal, A>;
export type View<M, A> = View<M, VDom, Proposal, A>;
