log(`© <span style="color: #8be9fd;">2022</span> by Nexis Inc. Type '<b class="logcmd" onclick="cmdclick('cpright');">cpright</b>' for more information.`);
log(`Welcome to The Terminal. Type '<b class="logcmd" onclick="cmdclick('help');">help</b>' for help.`);

register_cmd("cpright",function(cmd) {
    var parameters = smart_split(cmd, " ", false).slice(1);
    if (parameters.length === 0) {
        block_log("© Copyright information:");
        block_log(" - Most of this webpage was made by Nexis.");
        block_log(" - There were some dependencies used, like:");
        block_log(" &nbsp&nbsp· Winbox.js by Nextapps");
        block_log(" &nbsp&nbsp· UiTerminal by omerimzali");
        block_log(" Thank you for your cooperation.");
        block_log(` Type '<b class="logcmd" onclick="cmdclick('cpright more');">cpright more</b>' for the copyright notice.`);
        return;
    }
    if (parameters[0].toString().toUpperCase() === "MORE") {
        if (parameters.length === 1) {
            log("Yo! You found the secret. This thing isn't copyrighted yet!!!");
            return;
        }
    } else {
        block_log("'"+parameters[0].toString()+"' is not a part of this command. Please provide a valid parameter.");
    }
});

register_cmd("calc", function(cmd) {
    openWin("Calculator","calc.html","300px","450px");
    log("Opened the calculator.");
});

register_cmd("about", function(cmd) {
    log("About us");
});

register_cmd("games", function(cmd) {
    var parameters = smart_split(cmd, " ", false).slice(1);
    if (parameters.length === 0) {
        block_log("--==+ 5 Games of the month +==--");
        block_log(` &nbsp&nbsp&nbsp 1. <b class="logcmd" onclick="gameclick('zelda_minish', 'The Minish Cap');">The Minish Cap</b>`);
        block_log(` &nbsp&nbsp&nbsp 2. <b class="logcmd" onclick="gameclick('zelda_past', 'A Link to the Past');">A Link to the Past</b>`);
        block_log(` &nbsp&nbsp&nbsp 3. <b class="logcmd" onclick="gameclick('advancewars', 'Advance Wars');">Advance Wars</b>`);
        block_log(` &nbsp&nbsp&nbsp 4. <b class="logcmd" onclick="gameclick('advancewars2', 'Advance Wars 2');">Advance Wars 2</b>`);
        block_log(` &nbsp&nbsp&nbsp 5. <b class="logcmd" onclick="gameclick('superstar', 'Mario & Luigi: Superstar Saga');">Mario &amp; Luigi: Superstar Saga</b>`);
    }
    if (parameters[0].toString().toUpperCase() === "MORE") {
        if (parameters.length === 1) {
            log("Opened the more games window.");
            return;
        }
    } else {
        block_log("'"+parameters[0].toString()+"' is not a part of this command. Please provide a valid parameter.");
    }
});

function gameclick(gameid,gamename) {
    openWin("Games - "+gamename,"games.html#"+gameid,"750px","550px");
}

register_cmd("editor", function(cmd) {
    var parameters = smart_split(cmd, " ", false).slice(1);
    if (parameters.length === 0) {
        log("You did not provide a language, opened the text editor.")
        openWin("TEXT Editor","editor.html#text","700px","450px");
    }
    if (parameters.length === 1) {
        log("Opened the editor.");
        openWin(parameters[0].toUpperCase()+" Editor","editor.html#"+parameters[0],"700px","450px");
        return;
    }
});