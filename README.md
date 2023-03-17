# ts-gorand

A Typescript port of Go's math/rand pseudorandom number generator.

## Why would anyone want this?

I found it useful for cases where I need to deterministically generate the same
numbers on the server (in Go) and client. The semi-silly reason I built this was
for a client-side snake game.

The server would send down an RNG seed which would be used to place apples. If/
when the player won, they'd send up their moves and the server would validate
that those moves combined with the RNG seed matched up to a winning game.

## BigInt

JavaScript's `number` type offers ~53 bits of precision, but Go's `math/rand`
library expects to be operating on full 64-bit integers. The solution when I
originally wrote this was to use someone else's JS `Long` implementation, but
it's 2023 and `BigInt` is now available in ES2020, so I swapped that out.

It's definitely way more ergonomic (e.g. standard arithmetic ops instead of
functions), and I imagine, way more performant.
