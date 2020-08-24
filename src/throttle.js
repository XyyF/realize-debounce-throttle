function throttle(fn, waitTime = 0) {
    let timer = null, lastThis = null, lastArguments = null
    return function() {
        if (!timer) {
            fn.apply(this, arguments)
            timer = setTimeout(() => {
                if (lastThis) {
                    fn.apply(lastThis, lastArguments)
                }
                lastThis = null
                lastArguments = null
                timer = null
            }, waitTime)
        } else {
            lastThis = this
            lastArguments = arguments
        }
    }
}