export const menuslide = {
    initial: {
        x: '100%'
    },
    enter: {
        x: '0%',
        transition: {duration: 0.8, ease: [0.65, 0, 0.35, 1]}
    },
    exit: {
        x: '100%',
        transition: {duration: 0.8, ease: [0.65, 0, 0.35, 1]}
    }
}

export const slide = {
    initial: {
        x: '80px'
    },
    enter: (i)=> ({
        x: '0px',
        transition: {duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.06 * i}
    }),
    exit: (i)=> ({
        x: '80px',
        transition: {duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.06 * i}
    })
}