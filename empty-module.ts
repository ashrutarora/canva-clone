// An intentionally empty module.
//
// fabric.js contains a Node-only code branch that references packages
// like `jsdom` and `canvas`. That branch never runs in the browser, but
// the bundler still tries to resolve those imports at build time and
// fails ("Module not found: Can't resolve 'jsdom'").
//
// By aliasing those packages to this empty module in next.config.ts,
// the bundler resolves them to "nothing" — removing the error without
// pulling those heavy Node-only dependencies into the client bundle.
export default {};
