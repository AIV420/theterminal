log("Welcome to The Terminal. Type 'help' for help.");

register_cmd("calc", function(cmd) {
    openWin("Calculator","calc","250px","400px");
    log("Opened the calculator.");
});