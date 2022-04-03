log("© <span style='color: #8be9fd;'>2022</span> by Nexis Inc. Type '<b class='logcmd'>cpright</b>' for more information.");
log("Welcome to The Terminal. Type '<b class='logcmd'>help</b>' for help.");

register_cmd("calc", function(cmd) {
    openWin("Calculator","calc","300px","450px");
    log("Opened the calculator.");
});