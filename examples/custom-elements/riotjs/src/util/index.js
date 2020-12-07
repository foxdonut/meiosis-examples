const compose = (f, g) => x => f(g(x))

const createNestPatch = prop => patch => ({ [prop]: patch })

export const nest = (update, prop) => compose(update, createNestPatch(prop))
