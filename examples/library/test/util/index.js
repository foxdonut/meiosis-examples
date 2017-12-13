import $ from "jquery";
import { setupRender } from "../domvm/setup";

$.fn.triggerEvent = function(eventType) {
  const event = document.createEvent("HTMLEvents");
  event.initEvent(eventType, true, true);
  $(this)[0].dispatchEvent(event);
};

export const prepareDom = function() {
  const id = "app";
  const sel = "#" + id;

  $(sel).remove();
  document.write("<div id='" + id + "'></div>");
  const element = $(sel);
  const render = setupRender(element[0]);

  return { element, render };
};
