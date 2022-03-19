export const getArrayOfIndices = (
    length,
    indexBase = 0,
    mapFunction = (nothing, i) => i + indexBase,
) => (
    Array.from(
        { length },
        mapFunction,
    )
)
