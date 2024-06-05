/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import "../css/terminal.css";
import HackerSimulator from "./HackSimulator";
import Resume from "./Resume";
import { useNavigate } from "react-router-dom";
import { Howl } from "howler";
import keyPressSound from "../assets/keyPress.mp3";
import textPrintSound from "../assets/textPrint.mp3";
import errorSound from "../assets/error.mp3";
import clearSound from "../assets/clear.mp3";

// Initialize sound instances
const keyPressAudio = new Howl({ src: [keyPressSound] });
const textPrintAudio = new Howl({ src: [textPrintSound] });
const errorAudio = new Howl({ src: [errorSound] });
const clearAudio = new Howl({ src: [clearSound] });

// Function to play sound based on type
const playSound = (type) => {
  switch (type) {
    case "keyPress":
      keyPressAudio.play();
      break;
    case "textPrint":
      textPrintAudio.play();
      break;
    case "errorA":
      console.log("Attempting to play error sound");
      errorAudio.play();
      break;
    case "clearSound":
      clearAudio.play();
      break;
    default:
      break;
  }
};

const Typewriter = (text, delay, func, Spinner, spinTime) => {
  const startTime = new Date();
  let Output = "";
  let index = 0;
  text = Spinner ? "⠋⠙⠹⠸⠼⠴⠦⠧⠇" : text;

  const intervalId = setInterval(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        return clearInterval(intervalId);
      }
    });

    const endTime = new Date();
    if (index < text.length) {
      Output += text[index];
      index += 1;

      if (Spinner) {
        func(text[index]);
        setTimeout(function () {
          func(text[index + 1]);
        }, 700);
        if (index === 8) {
          if (endTime.getTime() - startTime.getTime() < spinTime) {
            index = 0;
          } else {
            clearInterval(intervalId);
          }
        }
      } else {
        func(Output);
      }
    } else {
      return clearInterval(intervalId);
    }
  }, delay);
};

function Terminal() {
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");
  const [prevusedCommand, setprevusedCommand] = useState([]);
  const cursor = "▮";
  let previousCommand = "";
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    // Play sound only if a character key is pressed
    if (
      event.key.length === 1 ||
      event.key === "Backspace" ||
      event.key === "Tab"
    ) {
      playSound("keyPress");
    }
  };

  function SkipIntro() {
    let id = setTimeout(() => {}, 0);
    while (id--) {
      clearTimeout(id);
    }

    id = setInterval(() => {}, 0);
    while (id--) {
      clearInterval(id);
    }
    setText1("ssh guest@karthik.r");
    setText3("Access Granted!");
  }

  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (!Text3.includes("Access")) {
          let id = setTimeout(() => {}, 0);
          while (id--) {
            clearTimeout(id);
          }

          id = setInterval(() => {}, 0);
          while (id--) {
            clearInterval(id);
          }
          setText1("ssh guest@karthik.r");
          setText2("guest@karthik.r's password:");
          setText3("Access Granted!");
        }
        const CommandArea = document.getElementById("command");
        if (CommandArea) {
          previousCommand = CommandArea.value;
          setprevusedCommand((prevArray) => [
            ...prevArray,
            "guest@karthik.r:~$ " + previousCommand,
          ]);
          if (previousCommand === "github") {
            window.open("https://github.com/Kenni001", "_blank");
          } else if (previousCommand === "source code") {
            window.open(
              "https://github.com/Kenni001/Terminal_Portfolio",
              "_blank"
            );
          } else if (previousCommand === "GUI") {
            window.open(
              "https://kenni001.github.io/Personal_Portfolio/",
              "_blank"
            );
          } else if (previousCommand === "sudo rm -rf") {
            navigate("/error", { replace: true });
          }
          CommandArea.value = "";
        }
      } else if (event.key === "Tab") {
        // Trigger completion action
        event.preventDefault(); // Prevent default tab behavior
        const CommandArea = document.getElementById("command");
        const availableCommands = [
          "whoami",
          "banner",
          "clear",
          "date",
          "GUI",
          "help",
          "history",
          "project",
          "social",
          "theme",
          "pwd",
          "hacksim",
          "aborthack",
          "resume",
          "source code",
          "github",
          "sudo rm -rf",
        ];
        let currentCommand = CommandArea.value.trim();
        let matches = availableCommands.filter((command) =>
          command.startsWith(currentCommand)
        );

        if (matches.length === 1) {
          CommandArea.value = matches[0];
        } else if (matches.length > 1) {
          let commonPrefix = matches.reduce((acc, val, index) => {
            if (index === 0) return val;
            let i = 0;
            while (i < acc.length && acc[i] === val[i]) i++;
            return acc.slice(0, i);
          }, "");
          CommandArea.value = commonPrefix;
        }

        // Set cursor position to the end of the input
        CommandArea.selectionStart = CommandArea.selectionEnd =
          CommandArea.value.length;
      } else if (event.key === "l" && event.ctrlKey) {
        playSound("clearSound");
        // Clear terminal action
        setprevusedCommand([]);
      }
    });

    Typewriter("ssh guest@karthik.r", 100, setText1);

    setTimeout(() => {
      setText2("guest@karthik.r's password:▮");
    }, 3000);

    setTimeout(() => {
      Typewriter("", 100, setText4, true, 2500);
    }, 4300);

    setTimeout(() => {
      setText3("Connecting to guest@karthik.r...");
    }, 4300);

    setTimeout(() => {
      setText2("guest@karthik.r's password:");
      setText3("> Access granted.");
    }, 7300);

    document.addEventListener("keydown", handleKeyPress);
    document.body.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    // Set focus to the command input field
    const commandInput = document.getElementById("command");
    if (commandInput) {
      commandInput.focus();
    }
  };

  const commandActions = {
    whoami: () => {
      playSound("textPrint");
      return (
        <div style={{ textAlign: "justify" }}>
          <p>
            My name is <b>Karthik Rudrappa</b> a Cyber Security graduate student
            specializing in network security and penetration testing, I have a
            keen interest in securing and testing the vulnerabilities of
            computer networks. I am passionate about understanding how networks
            work and how they can be manipulated, which has led me to specialize
            in network security and ethical hacking.
          </p>
          <p>
            I am a natural problem solver who thrives in challenging
            environments. I am also a team player who enjoys working
            collaboratively with cross-functional teams to achieve project
            goals. I am committed to staying up-to-date with the latest security
            trends and industry best practices, and I am constantly seeking new
            challenges to expand my knowledge and skills.
          </p>
          <p>
            If you're interested in discussing network security or ethical
            hacking trends, or collaborating on projects, please feel free to
            connect with me on LinkedIn. I look forward to connecting with
            like-minded professionals in the industry.
          </p>
        </div>
      );
    },
    banner: () => {
      playSound("textPrint");
      return (
        <pre>
          {`
        , ; ,   .-'"""'-.   , ; ,
         \\|/  .'         '.  \\|/
         |-;-/   ()   ()   \\-;-|
         || ;               ; ||
         ||_; :.         .; ;_||
         '---\\'.'-.....-'.'/---'
              '.'.-.-,_.'.'
                '(  (..-'
                  '-'
`}
        </pre>
      );
    },
    clear: () => {
      playSound("clearSound");
      setprevusedCommand([]);
      return null;
    },
    date: () => {
      playSound("textPrint");
      return new Date().toString();
    },
    GUI: () => {
      playSound("textPrint");
      return (
        <div>
          To view the Graphical portfolio website
          <a
            href="https://kenni001.github.io/Personal_Portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    help: () => {
      playSound("textPrint");
      return (
        <div>
          <span style={{ color: "skyblue" }}>Available Commands:</span>
          <br />
          <span style={{ color: "#c9c9c9" }}>General: </span>
          {[
            '<span class="command">ls &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">Display all the commands available</span>',
            '<span class="command">whoami &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        - </span>     <span class="helpdes">Display information about me</span>',
            '<span class="command">banner &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display the header</span>',
            '<span class="command">clear &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">Clear the terminal screen</span>',
            '<span class="command">date  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span> <span class="helpdes">Display the current date</span>',
            '<span class="command">GUI  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Open the Portfolio Website</span>',
            '<span class="command">resume &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span> <span class="helpdes">Display my resume</span>',
            '<span class="command">help  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         - </span>     <span class="helpdes">Show available commands</span>',
            '<span class="command">history &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span> <span class="helpdes">View command history</span>',
            '<span class="command">project &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">View coding projects</span>',
            '<span class="command">social &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - </span>  <span class="helpdes">Display social network links</span>',
            '<span class="command">pwd  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">Print present working directory</span>',
            '<span class="command">github  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          - </span>    <span class="helpdes">My Github profile</span>',
            '<span class="command">hacksim    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">Enter the hacking simulator</span>',
            '<span class="command">aborthack    &nbsp;&nbsp;&nbsp;&nbsp;      - </span>    <span class="helpdes">Abort ongoing hack in the simulator</span>',
            '<span class="command">source code    &nbsp;&nbsp;      - </span>    <span class="helpdes">Link to the source code of this project</span>',
            "<br />",
            "[TAB]              Trigger completion",
            "[Ctrl+l]           Clear terminal",
            "<br/><br/>",
            "Never do a 'sudo rm -rf' ,because it will mess our entire internal system!",
          ].map((command, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: command }} />
          ))}
        </div>
      );
    },
    history: () => {
      playSound("textPrint");
      return prevusedCommand.map((cmd, index) => (
        <li key={index}>{cmd.replace("guest@karthik.r:~$ ", "")}</li>
      ));
    },
    project: () => {
      playSound("textPrint");
      return (
        <div>
          <label htmlFor="mcq">Select another project to view:</label>
          <div className="mcq-wrapper">
            <ul id="mcq" className="mcq">
              <li className="mcq-option" tabIndex="0" data-value="regex">
                <a
                  href="https://github.com/Kenni001/IOT-Security-Management-using-Blockchain"
                  target="_blank"
                  rel="noreferrer"
                >
                  IOT Security Management using Blockchain ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="1" data-value="luap">
                <a
                  href="https://github.com/Kenni001/Cryptocurrencies-Price-Prediction"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cryptocurrencies Price Prediction ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="2" data-value="apple">
                <a
                  href="https://github.com/Kenni001/Voice-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voice Assistant ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="3" data-value="crypto">
                <a
                  href="https://github.com/Kenni001/Advanced-Encryption-Standard--AES-"
                  target="_blank"
                  rel="noreferrer"
                >
                  Advanced Encryption Standard ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="4" data-value="sampserver">
                <a
                  href="https://github.com/Kenni001/Data-Encryption-Standard-DES"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Encryption Standard ↗
                </a>
              </li>
              <li className="mcq-option" tabIndex="5" data-value="passgen">
                <a
                  href="https://github.com/Kenni001/Image_stenography"
                  target="_blank"
                  rel="noreferrer"
                >
                  Image Stenography ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      );
    },
    social: () => {
      playSound("textPrint");
      return "My discord: @_cartik";
    },
    theme: () => {
      playSound("textPrint");
      return "Theme configurations are not implemented yet.";
    },
    pwd: () => {
      playSound("textPrint");
      return "/home/karthik";
    },
    hacksim: () => {
      playSound("textPrint");
      return (
        <div>
          <HackerSimulator />
          <br />
          To abort, use aborthack
        </div>
      );
    },
    aborthack: () => {
      playSound("textPrint");
      return (
        <div>
          <li key="aborthack">
            guest@karthik.r:~$ ERROR - Script terminated by the user
          </li>
        </div>
      );
    },
    resume: () => {
      playSound("textPrint");
      return <Resume />;
    },
    ls: () => {
      playSound("textPrint");
      return commandActions.help();
    },
    "sudo rm -rf": () => {
      playSound("textPrint");
      navigate("/error", { replace: true });
      return "Simulating sudo rm -rf command...";
    },
    "source code": () => {
      playSound("textPrint");
      return (
        <div>
          To view the source code of this project on GitHub
          <a
            href="https://github.com/Kenni001/terminal-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
    github: () => {
      playSound("textPrint");
      return (
        <div>
          To view the my Github Profile
          <a
            href="https://github.com/Kenni001"
            target="_blank"
            rel="noreferrer"
          >
            click here!
          </a>
        </div>
      );
    },
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleCommand = (command) => {
    if (commandActions[command]) {
      const result = commandActions[command]();
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return result;
    } else {
      const error = errorFunctions(command);
      setTimeout(scrollToBottom, 0); // Defer execution of scrollToBottom
      return error;
    }
  };

  const errorFunctions = (val) => {
    playSound("errorA");
    return `bash: ${val}: command not found`;
  };

  return (
    <div className="terminal">
      <div className="console">
        <span className="userPrefix">
          user@localhost:~$
          <span style={{ color: "white", marginLeft: "8px" }}>
            {Text1}
            {Text1.length === 20 ? "" : cursor}
          </span>
        </span>

        {Text3.includes("Access") ? (
          ""
        ) : (
          <span id="skipButton" onClick={SkipIntro}>
            Press Enter or Click Here to Skip
          </span>
        )}
        {Text2}
        <span>
          {" "}
          {Text4}{" "}
          <span style={{ color: Text3.includes("Access") ? "yellow" : "" }}>
            {Text3}
          </span>
        </span>
        {Text3.includes("Access") ? (
          <pre className="precss">
            {`

                     _nnnn_                      
                    dGGGGMMb     ,"""""""""""""".
                   @p~qp~~qMb    | Linux Rules! |
                   M|@||@) M|   _;..............'
                   @,----.JM| -'
                  JS^\\__/  qKL
                 dZP        qKRb
                dZP          qKKb
               fZP            SMMb
               HZM            MMMM
               FqM            MMMM
             __|\\          |\\dS"qML
            \\    \\         | \\/ \\Zq
            _)    \\.______.|     .'
            \\___   )MMMMMMM|   .'
                \`-'        \`--'

`}
          </pre>
        ) : null}

        {Text3.includes("Access") ? (
          <span>
            Step into the world of endless possibilities!
            <br />
            You've stumbled upon a virtual terminal simulation, crafted with
            love and ambition.
            <br />
            Originally conceived as a portfolio showcase, this project is still
            in its developmental phase, eagerly awaiting your exploration.
          </span>
        ) : (
          ""
        )}
        <br />
        {Text3.includes("Access") ? (
          <span>
            <span style={{ color: "skyblue" }}>
              Curious about what you can do? Just type 'help' to unlock a
              treasure trove of available commands.
            </span>
          </span>
        ) : (
          ""
        )}
        <br></br>
        {Text3.includes("Access") ? (
          <span>Thank you for dropping by, adventurer! ◝(ᵔᵕᵔ)◜</span>
        ) : (
          ""
        )}
        <br></br>
        <ul className="previousCommands" id="console23">
          {prevusedCommand.map((item, index) => {
            const command = item.replace("guest@karthik.r:~$ ", "");
            if (commandActions[command]) {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  {handleCommand(command)}
                  <br />
                  <br />
                </li>
              );
            } else if (command.match(new RegExp(`\\b${"clear"}\\b`, "g"))) {
              setprevusedCommand([]);
              return null;
            } else {
              return (
                <li key={index}>
                  {item}
                  <br />
                  <br />
                  bash: {command}: command not found
                  <br />
                  <br />
                </li>
              );
            }
          })}
        </ul>
        {Text3.includes("Access") ? (
          <span className="commands">
            <span className="userPrefix">guest@karthik.r:~$</span>{" "}
            <input type="text" id="command" name="command" autoFocus></input>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Terminal;
