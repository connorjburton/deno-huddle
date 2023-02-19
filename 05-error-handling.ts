import { zipDir } from "https://deno.land/x/jszip@0.11.0/mod.ts";

// click link in error stack
function iWillThrow() {
  zipDir("./hello");
}

iWillThrow();
