import { Config, View } from "meiosis";
import * as m from "mithril";
import { Proposal } from "../root/types";

export type VDom = Mithril.VirtualElement;
export type ComponentConfig<M, A> = Config<M, VDom, Proposal, A>;
export type View<M, A> = View<M, VDom, Proposal, A>;
