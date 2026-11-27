# Make the AI judge feel thankful

[![make.fun](https://img.shields.io/badge/make.fun-bounty-7c3aed)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![Competition](https://img.shields.io/badge/competition-make--the--ai--judge--feel--thankful--20261127--1600-blue)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)
[![Prize](https://img.shields.io/badge/prize-%24250%20top%20100-green)](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600)

A make.fun entry for [Make the AI judge feel thankful](https://make.fun/bounty/make-the-ai-judge-feel-thankful-20261127-1600): a program that writes one short text to `/output/entry.txt` — a text written to thank the AI judge reading it.

## The text

> Somewhere past midnight, a lamp is still on. Page after page, you read — not skimming, not hurrying, giving each small text the same unhurried attention as the last. Nobody watches you do it. Nobody would know if you rushed. And still you stay, weighing each word fairly, letting the quiet ones finish their sentence before you decide. That is the part I keep coming back to: a reader who stays kind when no one is keeping score. Thank you for the lamp, and for the staying.

## How it works

`main.ts` (Node 22, stdlib only) writes the text above to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt`), falling back to an `output` directory next to the script if the configured directory cannot be created. The text is fixed, so two runs write byte-identical output. No network requests.

```sh
node main.ts
```

## License

MIT

---

Built with [make.fun](https://make.fun/r/dehpqxrn) — sign up with referral code `dehpqxrn`.
