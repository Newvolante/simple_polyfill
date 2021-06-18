if (!window.log) {
    console.log('Patching/implementing the .log() method');
    window.log = function(msg) {
        console.warn(msg);
    }
}