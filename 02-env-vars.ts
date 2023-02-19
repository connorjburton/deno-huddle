// https://deno.land/api@v1.30.3?s=Deno.Env

// Has Dotenv support natively
import "https://deno.land/std@0.177.0/dotenv/load.ts";

Deno.env.set("HELLO", "huddle");
console.log(Deno.env.get("HELLO"));
console.log(Deno.env.get("BYE"));
console.log(Deno.env.toObject()); // this is dissapointing! github.com/connorjburton/senvf
