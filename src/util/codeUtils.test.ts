import { indentText } from "./codeUtil";

describe("indentText", () => {
  describe("positive indentation", () => {
    const code = "foobar123";
    const multiLineCode = "go\ntypescript\nc++\njava";
    it("indents when indentation is 2", () => {
      expect(indentText(code, 6, 2)).toEqual(["foobar  123", 2]);
      expect(indentText(code, 9, 2)).toEqual(["foobar123 ", 1]);
      expect(indentText(code, 0, 2)).toEqual(["  foobar123", 2]);

      expect(indentText(multiLineCode, 0, 2)).toEqual([
        "  go\ntypescript\nc++\njava",
        2
      ]);
      expect(indentText(multiLineCode, 8, 2)).toEqual([
        "go\ntypes cript\nc++\njava",
        1
      ]);
      expect(indentText(multiLineCode, multiLineCode.length, 2)).toEqual([
        "go\ntypescript\nc++\njava  ",
        2
      ]);
    });
  });
  describe("negative indentation", () => {
    const code = "foobar  123";
    const multiLineCode = "foo\n";
    it("deindents when indentation is 2", () => {
      expect(indentText(code, 8, -2)).toEqual(["foobar123", -2]);
    });
    it("does nothing when there are no spaces", () => {
      expect(indentText(code, code.length, -2)).toEqual(["foobar  123", 0]);
      expect(indentText(multiLineCode, 4, -2)).toEqual(["foo\n", 0]);
    });
    it("does not remove newline", () => {
      expect(indentText("foo\n ", 5, -2)).toEqual(["foo\n", -1]);
    });
  });
});
