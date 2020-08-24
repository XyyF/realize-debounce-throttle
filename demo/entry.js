/**
 * Created by rengar on 2020.08.24.
 */

void function () {
    const normalWrapper = document.querySelector('.normal__wrapper')
    const debounceWrapper = document.querySelector('.debounce__wrapper')
    const throttleWrapper = document.querySelector('.throttle__wrapper')

    function demo() {
        const moveArea = document.querySelector('.move-mouse')

        moveArea.addEventListener('mousemove', normalHandler)
        moveArea.addEventListener('mousemove', debounce(debounceHandler, 1000))
        moveArea.addEventListener('mousemove', throttle(throttleHandler, 1000))
    }

    function addRect(el) {
        const div = document.createElement('div')
        div.className = 'item'
        el.insertBefore(div, null)
    }

    function normalHandler() {
        addRect(normalWrapper)
    }

    function debounceHandler() {
        addRect(debounceWrapper)
    }

    function throttleHandler() {
        addRect(throttleWrapper)
    }

    demo()
}()