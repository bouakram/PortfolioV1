export const opacity = {
    initial: {
        opacity: 0,
    },
    open: {
        opacity: 1,
        transition: {duration: .5}
    },
    closed: {
        opacity: 0
    }
}

export const slidUpName = {
    initial: {
        opacity: 0,
        y: '50%'
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, delay: 0.5}
    },
    close: {
        opacity: 0,
        y: '50%'
    }
}

export const slidUpNickName = {
    initial: {
        opacity: 0,
        y: '50%'
    },
    open: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.5, delay: 1}
    },
    close: {
        opacity: 0,
        y: '50%'
    }
}