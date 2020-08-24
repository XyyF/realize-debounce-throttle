function debounce(fn, waitTime = 0) {
    let timer = null
    return function() {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
        }, waitTime)
    }
}