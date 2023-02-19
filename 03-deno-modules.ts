// https://deno.land/x - package "registry"
// does not really have a concept of a central registry like NPM
// any URL can be used
import { increment } from "https://deno.land/std@0.177.0/semver/mod.ts"; // click me!
import { parse } from "https://deno.land/x/path_to_regexp@v6.2.1/index.ts";

const version = increment("1.2.3", "prerelease", "beta");

console.log(version);
console.log(parse(`/${version}/:name`));
