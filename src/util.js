
export const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

export const waitCondition = async (conditionFunc, timeout) => {
    while (conditionFunc()) {
        await wait(timeout)
    }
}
