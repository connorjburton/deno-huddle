# [Deno](https://deno.land/) Huddle

This repo is a collection of files and notes associated to a huddle presentation. This won't make much sense without being part of the huddle.

All files are numbered in order of the presentation.

There are extra notes in this README to cover non-code features.

## Notes

These notes are in order

- Deno or destroy node, or `node.split().sort.join();` - you choose
- `deno compile` compiels to an executable
  - Easier to distribute
  - Is not smaller than Node.js!
  - Does not serve the same benefits such as Go or Rust
- `deno repl` Great for prototyping or running code in the terminal
- [Debugging](https://deno.land/manual@v1.30.3/basics/debugging_your_code) is the same as Node.js, add `--inspect` and use a debugger to connect
  - Show example with `01` - `deno run --inspect-wait 01-native-typescript.ts`
- Notice how most of the files require permissions granted, can be done by passing flags
  - You be very granualar, down to the individual files or hosts you allow
- `deno doc` replaces `typedoc`
- `deno lint` replaces `eslint`
- `deno fmt` replaces `prettier`
- `deno bench` allows you to benchmark your code
- `deno test` replaces `mocha`, `chai` or `jest`
- `deno vendor` can be used to download dependencies locally
- `deno task` is for running tasks defined in a Deno configuration file
