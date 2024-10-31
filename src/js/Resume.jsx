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
            Security Researcher, Syracuse University – Syracuse, NY
          </strong>
          <strong>July 2024 – Present</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Conducted in-depth vulnerability assessments on Blockchain-based
              IoT devices to detect and address security gaps in authentication
              protocols and data encryption, helping strengthen device-level
              protection against cyber threats.
            </li>
            <li>
              Researched and implemented Blockchain frameworks tailored to IoT,
              enhancing data integrity, user privacy, and accountability within
              decentralized networks, which facilitated secure and trustworthy
              IoT communication.
            </li>
            <li>
              Developed risk assessment methodologies specifically for
              Blockchain-IoT systems, focusing on secure data transmission and
              ensuring device identity verification, which mitigated risks
              related to data interception and unauthorized access.
            </li>
            <li>
              Analyzed smart contract security within IoT contexts, pinpointing
              vulnerabilities and implementing secure coding practices to
              prevent unauthorized access and data breaches in connected
              devices.
            </li>
            <li>
              Proposed a multi-layered security architecture integrating
              Blockchain and IoT security best practices, which improved device
              resilience against distributed network attacks, adding an extra
              layer of defense for IoT systems.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Graduate Teaching Assistant, Syracuse University – Syracuse, NY
          </strong>
          <strong>June 2023 – August 2023</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Led hands-on cybersecurity workshops for over 50 participants,
              increasing engagement and enhancing comprehension and skill
              development by 20% through interactive learning experiences.
            </li>
            <li>
              Organized and hosted a Capture the Flag (CTF) competition with
              100+ participants, fostering teamwork and practical cybersecurity
              application, which enhanced participants’ collaborative and
              technical skills.
            </li>
            <li>
              Directed a team of 10 in the Cyber Collegiate Defense Competition
              (CCDC), achieving first place among 20 groups through strategic
              planning and strong network defense measures.
            </li>
            <li>
              Implemented pre-competition training sessions that significantly
              boosted team members' skills in network security and threat
              analysis, contributing to improved overall performance in
              competitions.
            </li>
            <li>
              Collaborated with industry professionals to continually update
              workshop and competition content, utilizing participant feedback
              to refine scenarios and align with current industry standards,
              leading to higher success rates in future events.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>
            Financial risk Analyst, Abacus Education Pvt. Ltd. - Indore, IN
          </strong>
          <strong>May 2021 – May 2022</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Conducted static and behavioral analysis of financial systems and
              transactions, proactively identifying and mitigating risks before
              they impacted business operations, thereby reducing risk exposure.
            </li>
            <li>
              Implemented preemptive threat analysis techniques to detect
              potential threats early, strengthening the organization’s security
              posture and enhancing overall risk management protocols for
              financial data.
            </li>
            <li>
              Developed customized alerts and use cases to monitor key financial
              indicators, allowing for real-time identification of emerging
              risks, which improved responsiveness and reduced potential for
              financial fraud.
            </li>
            <li>
              Designed dynamic dashboards and reports that enabled real-time
              tracking of financial risks, providing actionable insights for
              decision-makers and facilitating more informed risk-based
              decisions.
            </li>
            <li>
              Improved regulatory compliance and alignment with industry
              standards by proactively identifying vulnerabilities and
              mitigating risks in financial processes, which helped in
              maintaining a robust and secure financial infrastructure.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Security Engineer, Haqurity Infotech - Mumbai IN </strong>
          <strong>January 2017 – July 2018</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Integrated DevSecOps principles into CI/CD pipelines, automating
              security checks using SAST and DAST tools (e.g., OWASP ZAP, Burp
              Suite), which reduced vulnerabilities by 35% in the software
              development lifecycle.
            </li>
            <li>
              Led Threat Modeling sessions using the DREAD framework to identify
              critical risks early in development, leading to a 30% reduction in
              security incidents during production and increased stakeholder
              awareness.
            </li>
            <li>
              Configured security features for web applications with IaC tools
              (e.g., Ansible, Docker), automating secure infrastructure
              deployments, which decreased security misconfigurations and
              streamlined secure application delivery.
            </li>
            <li>
              Deployed container security measures by auditing Docker daemons
              and scanning images with Clair, reducing attack surfaces in
              containerized environments by 15% and securing microservices from
              potential threats.
            </li>
            <li>
              Optimized security of API endpoints by implementing OWASP
              guidelines, ensuring sensitive data protection and reducing
              exposure to API vulnerabilities by 20%, which enhanced overall
              application security.
            </li>
          </ul>
        </div>
        <div className="professional-experience-item">
          <strong>Software Engineer, Haqurity Infotech - Mumbai IN </strong>
          <strong>June 2016 – December 2016</strong>
          <ul style={{ textAlign: "justify" }}>
            <li>
              Resolved application bottlenecks with caching strategies using
              Redis and Spring Cache, ensuring code reliability through unit and
              integration testing with JUnit and Mockito, which enhanced
              application performance.
            </li>
            <li>
              Managed schema design, query optimization, and data migration with
              Firebase and MongoDB, enforcing security best practices for
              authentication, authorization, and data encryption to protect
              sensitive information.
            </li>
            <li>
              Developed CI/CD pipelines with Jenkins and Docker, reducing
              deployment times and improving software reliability. Used Git for
              version control and performed thorough code reviews to maintain
              high quality.
            </li>
            <li>
              Collaborated with UX/UI designers, product managers, and QA
              engineers to deliver quality software solutions, participating in
              agile methodologies to track project progress effectively.
            </li>
            <li>
              Improved application modularity and scalability by mentoring
              junior developers and fostering a culture of continuous learning
              and knowledge sharing within the team.
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
            <strong>Programming Languages :</strong> Python, Core Java, C / C++,
            Android, Bash, PowerShell, Assembly
          </li>
          <li>
            <strong>Skills :</strong> Incident Response, Network Pen-testing,
            Threat Modeling, STRIDE, OWASP Top 10.
          </li>
          <li>
            <strong>Web & Database</strong> HTML, CSS, JavaScript, jQuery, Core
            PHP, WordPress, Drupal, MySQL, MongoDB, Firebase
          </li>
          <li>
            <strong>Operating Systems :</strong> Linux Distribution (Ubuntu,
            Kali, Parrot OS), Windows 10, Windows Server Edition, Mac
          </li>
          <li>
            <strong>Developer Tools :</strong> Git, GitHub, VS Code
          </li>
          <li>
            <strong>Security Tools :</strong> Nmap, Wireshark, Metasploit,
            Nessus, Snort, Tcpdump, Burp Suite, Nikto, Hydra, Hashcat, John,
            Wpscan, Sqlmap, Responder, GNU Debugger (GDB), Android Studio,
            Google Suite, VMWare, Autopsy, Ghidra, Ida pro, foremost, AWS
            Console, Splunk SIEM
          </li>
          <li>
            <strong>Frameworks :</strong> NIST, MITRE ATT&CK, PCI-DSS, GDPR,
            HIPAA, ISO 2700x, SOX, SOC 2, CCPA, FERPA, OWASP Top 10
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
              organizing a <b>"Play with Pixels"</b> workshop for 120+
              participants and a <b>“UI/UX”</b> hackathon for 100 students.led
              vulnerability scans, enhancing security for Windows 10 hosts.
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
              <b>Competitions:</b> Runner-up at NCAE Cybergames Northeast,
              Winner at CNY,Hive storm by UTSA,Lockdown by SUNY Buffalo,
              CyberStartCTF.
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
