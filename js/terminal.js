document.getElementById('input_source').focus();

function smart_split(input, del, empty_space) {
    if (input.length === 0) return input;
    var outputs = [""];

    var compare = function(base, insert, position) {
        if ((position + insert.length) > base.length) return false;
        for (var i = 0; i < insert.length; i++) {
            if (!(base.charAt(position + i) === insert.charAt(i))) return false;
        }
        return true;
    };

    var quotes = false;
    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);
        if (char === '"') {
            quotes = !quotes;
            continue;
        }

        if (!quotes && compare(input, del, i)) {
            outputs.push("");
            i += del.length - 1;
            continue;
        }

        outputs[outputs.length - 1] += char;
    }

    if (!empty_space) {
        for (var i = 0; i < outputs.length; i++) {
            if (outputs[i] === "") {
                outputs.splice(i, 1);
            }
        }
    }

    return outputs;
}

var terminal_user_title = "C:/usr/guest ";

function update_user_title(title) {
    terminal_user_title = title;
    document.getElementById("input_title").innerHTML = terminal_user_title + "<span style='color: #6272a4;'>> </span>";
}

update_user_title(terminal_user_title);

var current_block;

function new_block() {
    var wrapper = document.getElementById('wrapper');
    current_block = document.createElement("div");
    current_block.classList.add("log");
    wrapper.appendChild(current_block);
}

function block_log(message) {
    current_block.innerHTML += "<p>" + message + "</p>";
}

function log(message) {
    var wrapper = document.getElementById('wrapper');
    wrapper.innerHTML += "<div class='log'><p>" + message + "</p></div>";
}

document.getElementById('input_source').addEventListener('keyup', submit_command);

var registry = new Map();

function register_cmd(cmd_name, func) {
    registry.set(cmd_name.toString().toUpperCase(), func);
}

function submit_command() {
    event.preventDefault();
    if (!(event.keyCode === 13)) return;
    var command = document.getElementById("input_source").value;
    document.getElementById("input_source").value = "";
    if (command !== "") {
        new_block();
        block_log(terminal_user_title + "<span style='color: #6272a4;'>> </span>" + command);

        if (registry.has(command.split(" ")[0].toUpperCase())) {
            registry.get(command.split(" ")[0].toUpperCase())(command);
        } else {
            block_log("<span style='color: #ff5555;'>'" + command.split(" ")[0].toUpperCase() + "' is not a valid command, please provide an existing command.</span>");
        }
    }
}

register_cmd("help", function(cmd) {
    var parameters = smart_split(cmd, " ", false).slice(1);
    if (parameters.length === 0) {
        block_log("┌─ Help ─────────────┐");
        block_log("│- help&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│- calc&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│- cpright&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│- about&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│- games&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│- editor&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
        block_log("│ There are secrets! │");
        block_log("└────────────────────┘");
        return;
    }

    if (parameters[0].toString().toUpperCase() === "HELP") {
        if (parameters.length === 1) {
            block_log("┌─ help ─────────────────┐");
            block_log("│ Usage: help &lt;command&gt; &nbsp│");
            block_log("│ Gets information about │");
            block_log("│ the specified command. │");
            block_log("└────────────────────────┘");
            return;
        }
    } else if (parameters[0].toString().toUpperCase() === "CALC") {
        if (parameters.length === 1) {
            block_log("┌─ calc ───────────────┐");
            block_log("│ Usage: calc &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("│ Opens the calculator │");
            block_log("│ window. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("└──────────────────────┘");
            return;
        }
    } else if (parameters[0].toString().toUpperCase() === "CPRIGHT") {
        if (parameters.length === 1) {
            block_log("┌─ cpright ─────────────┐");
            block_log("│ Usage: cpright (more) │");
            block_log("│ Outputs the copyright │");
            block_log("│ notice. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("└───────────────────────┘");
            return;
        }
    } else if (parameters[0].toString().toUpperCase() === "ABOUT") {
        if (parameters.length === 1) {
            block_log("┌─ about ────────────────┐");
            block_log("│ Usage: about &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("│ Gets information about │");
            block_log("│ this project. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp │");
            block_log("└────────────────────────┘");
            return;
        }
    } else if (parameters[0].toString().toUpperCase() === "GAMES") {
        if (parameters.length === 1) {
            block_log("┌─ games ─────────────────┐");
            block_log("│ Usage: games &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("│ Gets the top five games │");
            block_log("│ on this site. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp │");
            block_log("└─────────────────────────┘");
            return;
        } 
    } else if (parameters[0].toString().toUpperCase() === "EDITOR") {
        if (parameters.length === 1) {
            block_log("┌─ editor ──────────────────┐");
            block_log("│ Usage: editor &lt;lang&gt; &nbsp&nbsp&nbsp&nbsp&nbsp│");
            block_log("│ Opens the terminal editor │");
            block_log("│ window with a language!&nbsp&nbsp │");
            block_log("└───────────────────────────┘");
            return;
        } 
    } else if (parameters[0].toString().toUpperCase() === "LOGIN") {
        if (parameters.length === 1) {
            block_log("┌─ login ─────────────────────────────┐");
            block_log("│ Usage: login &lt;email&gt; &lt;password&gt;&nbsp&nbsp&nbsp&nbsp │");
            block_log("│ Logs in with the provided email and │");
            block_log("│ password or opens the login window. │");
            block_log("└─────────────────────────────────────┘");
            return;
        } 
    } else if (parameters[0].toString().toUpperCase() === "SIGNUP") {
        if (parameters.length === 1) {
            block_log("┌─ signup ─────────────────────────────┐");
            block_log("│ Usage: signup &lt;email&gt; &lt;password&gt;&nbsp&nbsp&nbsp&nbsp │");
            block_log("│ Signs up with the provided email and │");
            block_log("│ password or opens the signup window. │");
            block_log("└──────────────────────────────────────┘");
            return;
        } 
    } else {
        block_log("<span style='color: #ff5555;'>'"+parameters[0].toString()+"' is not a valid command, please provide an existing command.</span>");
    }
});

function cmdclick(cmdtorun) {
    document.getElementById("input_source").value = cmdtorun;
    submit_command(event.keyCode=13);
    document.getElementById('input_source').focus();
}