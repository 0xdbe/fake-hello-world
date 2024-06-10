import { assertEquals } from "@std/assert";
import { getHelloWorld } from "./mod.ts";

Deno.test(function test_get_hello_world() {
  assertEquals(getHelloWorld(), "\x1b[1mHello World\x1b[22m");
});
