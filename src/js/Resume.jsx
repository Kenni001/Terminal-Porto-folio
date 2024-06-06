import React from "react";
import "../css/terminal.css";

const Resume = () => {
  const getHeader = () => {
    return (
      <div className="header">
        <h1>Karthik Ruddrappa</h1>
        <hr style={{ borderTop: "1px solid white" }} />
        <p>
          <span>
            <a href="tel:+13158384940">(+1)3158384940</a> |{" "}
          </span>
          <span>
            <a href="mailto:kennikarthik@gmail.com">kennikarthik@gmail.com</a> |{" "}
          </span>
          <span>
            <a
              href="https://kenni001.github.io/Personal_Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://github.com/Kenni001"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/karthik-rudrappa/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
          </span>
        </p>
        <hr style={{ borderTop: "1px solid white" }} />
      </div>
    );
  };

  const getEducation = () => {
    return (
      <div className="education">
        <div>
          <h2>EDUCATION</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="education-item">
          <strong>
            Syracuse University - College of Engineering & Computer Science,
            Syracuse, NY
          </strong>{" "}
          <strong>August 2022 – May 2024</strong>
          <p style={{ textAlign: "justify" }}>
            <i>Master of Science in Cybersecurity</i>
            <br />
            <b>Relevant Coursework:</b> Computer Security, Information security,
            Security Tools for Information Security, Cryptography, Biometrics,
            Cyber Law and Policy, Cloud management, Testing and Building of
            Secure Software, IOT Application and Security, Blockchain.
          </p>
        </div>
        <div className="education-item">
          <strong>
            New Horizon – College of Information Science and Engineering,
            Bangalore, IN
          </strong>
          <strong>July 2018 – July 2022</strong>
          <p>
            <i>Bachelor of Engineering in Information Science & Engineering</i>
            <br />
            <b>Relevant Coursework:</b> Python, Cryptography, Computer Networks
            and Security, Data Structures and Algorithms, Object Oriented
            Design, Cloud Computing and security.
          </p>
        </div>
      </div>
    );
  };

  const getProfessionalExperience = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>EXPERIENCE</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>
            Graduate Teaching Assistant, Syracuse University – Syracuse, NY
          </strong>
          <strong>June 2023 – August 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Led interactive cybersecurity workshops, enhancing student
              comprehension and skill development by 20% through hands-on
              sessions for 50+ participants.
            </li>
            <li>
              Managed a Capture the Flag (CTF) competition, galvanizing over 100
              students to collaborate and apply cybersecurity principles in
              real-time challenges, fostering teamwork and practical expertise.
            </li>
            <li>
              Directed a team of 10 students to fortify network defenses in the
              Cyber Collegiate Defense Competition (CCDC), securing the top
              position among 20 participating groups through strategic planning
              and execution.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Graduate Research Assistant, Syracuse University – Syracuse, NY
          </strong>
          <strong>January 2023 – May 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Coordinated the rapid development of the SEED Lab internet
              emulator, showcasing proficiency in Python, Flask, and Docker,
              resulting in a 30+ Ethereum node network with real-world
              functionalities such as Ether transactions and wallet creation.
            </li>
            <li>
              Architected an interactive user interface leveraging HTML, CSS,
              and JavaScript, integrated with MetaMask for seamless Ethereum
              account management, enhancing user experience and facilitating
              real-time data streaming using Web Sockets and multi-threading
              techniques.
            </li>
            <li>
              Implemented RESTful API endpoints with Flask and optimized data
              storage with SQL Alchemy, achieving efficient application
              performance and ensuring seamless scalability while saving
              application data in a SQLite3 database.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Software Developer, The Sparks Foundation – Bangalore, IN{" "}
          </strong>
          <strong>June 2021 – September 2021</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Pioneered the integration of cutting-edge front-end frameworks,
              driving a 20% boost in website responsiveness and slashing load
              times by 15% for enhanced user experience.
            </li>
            <li>
              Revolutionized project workflows by implementing Agile
              methodologies,catalyzing a 30% reduction in project delivery
              time,and fostering greater efficiency in software development
              processes.
            </li>
            <li>
              Conducted meticulous code reviews, detecting and rectifying 95% of
              bugs pre-deployment, guaranteeing a flawless user experience and
              elevating product quality standards.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getProjects = () => {
    return (
      <div className="professional-experience">
        <div>
          <h2>PROJECTS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="professional-experience-item">
          <strong>Vulnerability Management of Lab with Nessus </strong>
          <strong>February 2023 – April 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Deployed and configured Nessus Essentials to execute credentialed
              vulnerability scans, enhancing security for Windows 10 hosts.
            </li>
            <li>
              Streamlined Vulnerability Management Function, optimizing
              discovery, prioritization, assessment, reporting, remediation, and
              verification process.
            </li>
            <li>
              Created an automated remediation of vulnerabilities from Windows
              updates and third-party software, significantly enhancing system
              resilience.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Blockchain-based IoT Device Security </strong>
          <strong>January 2022 – June 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Enhanced user efficiency by 30% through the development of a
              user-friendly graphical interface for IoT device control.
            </li>
            <li>
              Optimized development and deployment workflows using Python 2.7,
              Truffle, Flask, web3.py, and Ganache-cli, accelerating project
              timelines.
            </li>
            <li>
              Ensured data integrity and prevented unauthorized access by
              implementing a decentralized ledger for IoT transactions.
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const getSkills = () => {
    return (
      <div className="skills">
        <div>
          <h2>TECHNICAL SKILLS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul>
          <li>
            <strong>Programming Languages :</strong> Python | C / C++ | Java |
            Bash / SHELL.
          </li>
          <li>
            <strong>Skills :</strong> Incident Response | Network Pen-testing |
            Threat Modeling | STRIDE | OWASP Top 10.
          </li>
          <li>
            <strong>Operating Systems :</strong> Linux Distribution (Ubuntu,
            Kali, Parrot OS) | Windows 10 | Windows Server Edition | Mac OS.
          </li>
          <li>
            <strong>Developer Tools :</strong> Git | GitHub | VS Code
          </li>
          <li>
            <strong>Security Tools</strong> Burpsuite | NMAP | Metasploit |
            Wireshark | QRadar | Nessus | Autopsy | Splunk | Volatility | Docker
            | AWS | SIFT | GDB Debugger.
          </li>
        </ul>
      </div>
    );
  };

  const getCertifications = () => {
    return (
      <div className="achievements-and-certifications">
        <div>
          <h2>CERTIFICATIONS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul className="certi">
          <li>CompTIASecurity+</li>
          <li>AZ900-CloudFundamentals</li>
          <li>RedHatLinux</li>
          <li>AWSCloudPractitioner</li>
          <li>eJPT</li>
          <li>AWSSolutionArchitect(Ongoing)</li>
        </ul>
      </div>
    );
  };

  const getPublication = () => {
    return (
      <div className="skills">
        <div>
          <h2>PUBLICATIONS</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <ul>
          <li>
            Published a paper titled{" "}
            <strong>"Blockchain-based IoT Device Security"</strong> in IEEE
            April 2022,
            <a
              href="https://ieeexplore.ieee.org/document/9760674"
              target="_blank"
              rel="noreferrer"
            >
              [link]
            </a>
          </li>
          <li>
            Published a paper titled{" "}
            <strong>
              {" "}
              "Developing an Intelligent Model to Detect Micro Facial
              Expression"
            </strong>{" "}
            in IEEE April 2022,
            <a
              href="https://doi.org/10.1109/ICACTA54488.2022.9753581"
              target="_blank"
              rel="noreferrer"
            >
              [link]
            </a>
          </li>
        </ul>
      </div>
    );
  };

  const getLeadershipActivaties = () => {
    return (
      <div className="education">
        <div>
          <h2>LEADERSHIP & ACTIVITIES</h2>
          <hr style={{ borderTop: "1px solid white" }} />
        </div>
        <div className="education-item">
          <strong>
            Member, Syracuse University | InfoSec Club – Syracuse, NY
          </strong>{" "}
          <strong>August 2022 – May 2024</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Spearheaded 5 events engaging 200 students with a team of 12,
              including national-level workshops and hackathons, notably
              organizing a <b>"Play with Pixels"</b> workshop for 120+ participants and
              a <b>“UI/UX”</b> hackathon for 100 students.led vulnerability scans,
              enhancing security for Windows 10 hosts.
            </li>
            <li>
              <b>Competitions:</b> AmritaCTF By VIT.
            </li>
          </ul>
        </div>
        <div className="education-item">
          <strong>
            Vice President, New Horizon | NOTE (Open-Source Technology) Club –
            Bangalore, IN
          </strong>
          <strong>January 2020 – December 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Led debriefings and hands-on training for 40 members on advanced
              security tools and conference insights like{" "}
              <b>“DEFCON”, “CCDC”;</b>
              orchestrated competitive practice sessions and developed
              cloud-based enumeration labs with a team of 6 members.
            </li>
            <li>
              <b>Competitions:</b> Runner-up at NCAE Cybergames Northeast, Winner at
              CNY,Hive storm by UTSA,Lockdown by SUNY Buffalo, CyberStartCTF.
            </li>
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="output resume">
      {getHeader()}
      {getEducation()}
      {getSkills()}
      {getCertifications()}
      {getProfessionalExperience()}
      {getProjects()}
      {getPublication()}
      {getLeadershipActivaties()}
    </div>
  );
};

export default Resume;
