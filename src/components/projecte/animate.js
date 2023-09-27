export const scaleinview = {
    initial: {
        opacity: 0.7,
        scale: 0.7,
    },
    open: (i)=>({
        opacity: 1,
        scale: 1,
        transition: {duration: .7, delay: 0.01 * i}
    }),
    exit: (i)=>({
        opacity: 0.7,
        scale: 0.7,
        transition: {duration: .7, delay: 0.01 * i}
    }),
}