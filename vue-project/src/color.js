export default {
    bind(el, bindings, vnode) {
        // el.style.color = 'blue'
        const fontModifier = bindings.modifiers['font']
        const delayModifier = bindings.modifiers['delay']
        let delay = 0

        if (fontModifier) {
            el.style.fontSize = '60px'
        }

        if (delayModifier) {
            delay = 2000
        }

        setTimeout(() => {
            const arg = bindings.arg
            el.style[arg] = bindings.value
        }, delay)
    }
}