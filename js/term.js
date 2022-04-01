log("© 2022 by Nexis Inc. Type '<b style='color: #f1fa8c;'>cpright</b>' for more information.");
log("Welcome to The Terminal. Type '<b style='color: #f1fa8c;'>help</b>' for help.");

register_cmd("calc", function(cmd) {
    openWin("Calculator","calc","300px","450px");
    log("Opened the calculator.");
});