import * as C from './constants'

export const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout))
}

export const waitCondition = async (conditionFunc, timeout = C.timeout) => {
    while (conditionFunc()) {
        await wait(timeout)
    }
}

export const objectKeyCount = obj => {
    return Object.keys(obj).length
}
