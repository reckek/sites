module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: ["kit", "scss", "js"],
                    levels: {
                        "src/bem": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};