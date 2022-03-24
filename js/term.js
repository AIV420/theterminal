log("Welcome to The Terminal. Type 'help' for help.");

register_cmd("calc", function(cmd) {
    openWin("Calculator","calc");
    log("Opened the calculator.");
});