import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import jsdom from "jsdom";

Enzyme.configure({
  adapter: new Adapter()
});

// const doc = new jsdom.JSDOM("<!doctype html><html><body></body></html>");
// const win = doc.window;

// global.document = doc;
// global.window = win;
// propagateToGlobal(win);

// function propagateToGlobal(window) {
//   for (let key in window) {
//     if (!window.hasOwnProperty(key)) continue;
//     if (key in global) continue;

//     global[key] = window[key];
//   }
// }