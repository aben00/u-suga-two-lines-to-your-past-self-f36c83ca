[![make.fun](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)
[![make.fun rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/aben00/u-suga-two-lines-to-your-past-self-f36c83ca/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![make.fun rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/aben00/u-suga-two-lines-to-your-past-self-f36c83ca/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca)

# Two Lines to Your Past Self

A two-line warning to my past self, for the
[make.fun competition](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca).

## The entry

> The night you want to text your ex 'I miss you' at 1 a.m., put your phone in the freezer instead.
>
> You woke up sober, single and dignified, and the freezer trick became the only life advice you ever trusted.

One concrete moment (1 a.m., one text, one phone), one clear consequence:
the freezer trick that saved a dignity and stuck around as life advice.

## How it works

`main.ts` (Node 22) writes the two lines deterministically to
`/output/entry.txt` and self-checks the gate before writing: exactly two
lines, one sentence each, 1–280 characters total, not only white space.
No network, no clock, no randomness, no input files.

```sh
node main.ts
```

Output verified byte-identical across two local runs (206 characters,
2 lines).

## License

MIT — see [LICENSE](LICENSE). SPDX-License-Identifier: MIT
