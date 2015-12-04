var styles = {
    showIf: function (condition) {
        if (condition) {
            return {
                display: 'inherit'
            }
        } else {
            return {
                display: 'none'
            }
        }

    }
}

module.exports = styles;