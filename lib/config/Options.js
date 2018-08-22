class Options {
    constructor(url, id) {
        this.url = url;
        this.id= id
    }
    init () {
        // CONFIG.url = this.url
        // CONFIG.id = this.id
        console.log('CONFIG');
    }
}

export {Options  as default}
