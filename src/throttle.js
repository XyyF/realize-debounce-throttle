function throttle(fn, waitTime = 0) {
    let timer = null, lastThis = null, lastArguments = null
    return function() {
        if (timer) {
            lastThis = this
            lastArguments = arguments
        }
        if (!timer) {
            fn.apply(this, arguments)
            timer = setTimeout(() => {
                if (lastThis) {
                    fn.apply(lastThis, lastArguments)
                }
                lastThis = null
                lastArguments = null
                clearTimeout(timer)
                timer = null
            }, waitTime)
        }
    }
}