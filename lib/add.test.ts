import { add } from "./add.ts";
import { it } from "https://deno.land/std@0.146.0/testing/bdd.ts";
import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

it("should add two numbers", () => {
  assertEquals(add(1, 2), 3);
});
it("should add three numbers", () => {
  assertEquals(add(1, 2, 3), 6);
});
it("should add four numbers", () => {
  assertEquals(add(1, 2, 3, 4), 10);
});
