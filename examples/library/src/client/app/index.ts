import { applyModelChange, Mapper, Scanner, Stream, trace } from "meiosis";

import { circulation } from "../circulation";
import { createRouter } from "../router";
import { createServer } from "../sinonServer";
import { initialModel } from "./model";
import { mergeIntoOne, scan, streamLibrary } from "../util";
import { Model } from "./types";
import { rootReceive } from "./receive";
import { createUrlHandler } from "../util";

export * from "./types";

export function startApp(view: Function, render: Function): void {
  createServer().then(() => {
    const router = createRouter();

    const modelChanges: Stream<Mapper<Model, Model>> = mergeIntoOne([
      circulation.modelChanges,
      router.modelChanges
    ]);
    const model: Stream<Model> = scan(applyModelChange, initialModel, modelChanges);

    trace({ streamLibrary, modelChanges, streams: [ model ] });

    const element: Element = document.getElementById("app");
    model.map(model => render(element, view(model)));

    circulation.intents.loadBookList();
  }
  );
}
