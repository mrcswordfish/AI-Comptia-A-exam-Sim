import { Question, CoreType } from "../types";

// Helper to create a partial question for type safety
type QuestionTemplate = Omit<Question, "id">;

/* 
  CompTIA A+ Core 1 (220-1201) Question Bank
*/
export const CORE_1_BANK: Record<string, QuestionTemplate[]> = {
  "1.0 Mobile Devices": [
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.1",
      text: "A technician is replacing a battery in a modern smartphone. Which of the following safety precautions is MOST critical to prevent a fire hazard?",
      options: ["Use an ESD strap", "Avoid puncturing the swollen battery", "Wear safety goggles", "Discharge the motherboard capacitors"],
      correctAnswerIndex: 1,
      explanation: "Lithium-ion batteries can ignite if punctured, especially if they are already swollen or damaged."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.2",
      text: "Which of the following connectivity types would be BEST for a short-range wireless payment transaction?",
      options: ["Bluetooth", "NFC", "RFID", "Infrared"],
      correctAnswerIndex: 1,
      explanation: "NFC (Near Field Communication) is the standard used for contactless payments on mobile devices."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.1",
      text: "Which component in a laptop display provides the light for the screen?",
      options: ["Inverter", "Digitizer", "Backlight", "LCD Matrix"],
      correctAnswerIndex: 2,
      explanation: "The backlight (typically LED in modern laptops, or CCFL in older ones) provides the illumination."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.3",
      text: "A user needs to connect their laptop to the internet via their smartphone. Which feature should be enabled?",
      options: ["Airplane Mode", "Hotspot / Tethering", "VPN", "NFC"],
      correctAnswerIndex: 1,
      explanation: "Hotspot or Tethering allows a mobile device to share its cellular data connection via Wi-Fi, Bluetooth, or USB."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.4",
      text: "Which memory form factor is primarily used in laptops?",
      options: ["DIMM", "SODIMM", "ECC", "VRAM"],
      correctAnswerIndex: 1,
      explanation: "Small Outline Dual In-line Memory Module (SODIMM) is the compact RAM standard for laptops."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.5",
      text: "A user reports their laptop cursor is drifting automatically. What is the most likely cause?",
      options: ["Defective Touchpad Driver", "Swollen Battery pressing on touchpad", "Malware", "Dirty Screen"],
      correctAnswerIndex: 1,
      explanation: "A swollen battery often presses against the underside of the touchpad, causing phantom clicks or drift."
    },
    {
      type: "pbq",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.3",
      text: "SIMULATION: Configure a corporate mobile device for secure email. Order the steps:",
      options: [
        "1. Enroll in MDM -> 2. Install Authenticator -> 3. Configure Email Profile",
        "1. Install Outlook -> 2. Enter Password -> 3. Disable PIN",
        "1. Turn on Wi-Fi -> 2. Download Mail App -> 3. Share contacts",
        "1. Root the device -> 2. Install Certificate -> 3. Connect to VPN"
      ],
      correctAnswerIndex: 0,
      explanation: "Standard MDM workflow: Enroll the device, ensure MFA (Authenticator), then push the secure Email Profile."
    }
  ],
  "2.0 Networking": [
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.1",
      text: "Which port number is used by the HTTPS protocol?",
      options: ["80", "443", "22", "25"],
      correctAnswerIndex: 1,
      explanation: "HTTPS uses port 443."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.4",
      text: "Which service assigns IP addresses automatically?",
      options: ["DNS", "DHCP", "RDP", "LDAP"],
      correctAnswerIndex: 1,
      explanation: "DHCP (Dynamic Host Configuration Protocol) assigns IP addresses automatically."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.3",
      text: "Which wireless standard operates ONLY on the 5GHz frequency band?",
      options: ["802.11n", "802.11ac", "802.11g", "802.11b"],
      correctAnswerIndex: 1,
      explanation: "802.11ac is exclusive to the 5GHz band."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.5",
      text: "Which tool terminates a CAT6 cable to a patch panel?",
      options: ["Crimper", "Punchdown tool", "Wire stripper", "Toner probe"],
      correctAnswerIndex: 1,
      explanation: "A punchdown tool terminates wires into IDC connectors on patch panels."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.1",
      text: "Which protocol is used for sending email?",
      options: ["POP3", "IMAP", "SMTP", "SNMP"],
      correctAnswerIndex: 2,
      explanation: "SMTP (Simple Mail Transfer Protocol) is used for sending email. POP3/IMAP are for receiving."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.2",
      text: "A technician needs to configure a firewall to allow Remote Desktop connections. Which port should be opened?",
      options: ["3389", "22", "445", "3306"],
      correctAnswerIndex: 0,
      explanation: "RDP uses TCP port 3389."
    },
    {
      type: "pbq",
      domain: "2.0 Networking",
      objectiveId: "2.6",
      text: "SIMULATION: Configure a SOHO router to isolate guest traffic from the POS system.",
      options: [
        "Enable WEP, set SSID Broadcast to Visible",
        "Configure WPA3, Enable Guest Network (VLAN isolation)",
        "Disable DHCP, Enable MAC Filtering",
        "Set static IPs for all guests"
      ],
      correctAnswerIndex: 1,
      explanation: "WPA3 is secure, and Guest Networks provide VLAN isolation."
    },
    {
      type: "pbq",
      domain: "2.0 Networking",
      objectiveId: "2.8",
      text: "SIMULATION: T568B Standard. Select the correct color order (Pin 1-8).",
      options: [
        "White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown",
        "White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown",
        "Blue, White/Blue, Orange, White/Orange, Green, White/Green, Brown, White/Brown",
        "White/Orange, Orange, Green, White/Green, Blue, White/Blue, White/Brown, Brown"
      ],
      correctAnswerIndex: 1,
      explanation: "T568B: White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown."
    }
  ],
  "3.0 Hardware": [
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.4",
      text: "Which RAID level provides striping with parity (min 3 drives)?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
      correctAnswerIndex: 2,
      explanation: "RAID 5 uses striping with parity."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.1",
      text: "Which monitor panel type offers the best color accuracy?",
      options: ["TN", "IPS", "VA", "OLED"],
      correctAnswerIndex: 1,
      explanation: "IPS (In-Plane Switching) panels offer the best color accuracy."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.5",
      text: "Which motherboard form factor is the largest?",
      options: ["Mini-ITX", "Micro-ATX", "ATX", "E-ATX"],
      correctAnswerIndex: 3,
      explanation: "Extended ATX (E-ATX) is larger than standard ATX."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.3",
      text: "Which connector transports both high-definition video and audio?",
      options: ["VGA", "DVI-D", "HDMI", "Composite"],
      correctAnswerIndex: 2,
      explanation: "HDMI carries both digital video and audio signals."
    },
    {
      type: "pbq",
      domain: "3.0 Hardware",
      objectiveId: "3.5",
      text: "SIMULATION: Build a Graphic Design Workstation. Select the best components.",
      options: [
        "CPU: Intel Celeron, RAM: 8GB, Storage: 256GB SSD",
        "CPU: High-end Multicore, RAM: 64GB, Storage: 1TB NVMe + RAID 10 Array",
        "CPU: i5, RAM: 16GB, Storage: 1TB HDD",
        "CPU: i7, RAM: 8GB, Storage: 500GB SSD"
      ],
      correctAnswerIndex: 1,
      explanation: "Graphic design needs high cores, RAM, and fast storage."
    }
  ],
  "4.0 Virtualization and Cloud Computing": [
    {
      type: "multiple-choice",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.1",
      text: "Which cloud model gives the consumer basic compute resources (hardware) only?",
      options: ["SaaS", "PaaS", "IaaS", "DaaS"],
      correctAnswerIndex: 2,
      explanation: "IaaS (Infrastructure as a Service) provides the hardware; you manage the OS."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.2",
      text: "Which cloud characteristic allows for automatic scaling?",
      options: ["Rapid Elasticity", "On-demand self-service", "Broad network access", "Resource pooling"],
      correctAnswerIndex: 0,
      explanation: "Rapid Elasticity allows resources to scale with demand."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.1",
      text: "Google Workspace and Office 365 are examples of which cloud model?",
      options: ["IaaS", "PaaS", "SaaS", "Private Cloud"],
      correctAnswerIndex: 2,
      explanation: "Software as a Service (SaaS) provides fully managed applications."
    },
    {
      type: "pbq",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.2",
      text: "SIMULATION: A host has 64GB RAM. VM A has 32GB, VM B has 16GB. VM C needs 20GB and fails. Why?",
      options: [
        "CPU overcommitment",
        "Insufficient physical RAM",
        "Hypervisor Type 2 limitation",
        "Network bridging error"
      ],
      correctAnswerIndex: 1,
      explanation: "48GB used. 16GB remaining. VM C needs 20GB."
    }
  ],
  "5.0 Hardware and Network Troubleshooting": [
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.1",
      text: "A computer POSTs with beeps and no video. What do you check first?",
      options: ["HDD cables", "Motherboard manual for beep codes", "Monitor power", "Event Viewer"],
      correctAnswerIndex: 1,
      explanation: "Beep codes indicate specific hardware failures during POST."
    },
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.2",
      text: "A clicking noise from the case and slow performance indicates:",
      options: ["Failing SSD", "Failing HDD", "Loose Fan", "Coil Whine"],
      correctAnswerIndex: 1,
      explanation: "The 'Click of Death' indicates mechanical drive failure."
    },
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.4",
      text: "A projector shuts down intermittently with a warning light. Cause?",
      options: ["Dead pixel", "Overheating / Bulb failure", "Incorrect resolution", "Keystone misalignment"],
      correctAnswerIndex: 1,
      explanation: "Warning lights usually indicate overheating or bulb life."
    },
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.3",
      text: "A laptop battery is not charging even when plugged in. You verified the adapter works on another laptop. What is the next likely issue?",
      options: ["DC Jack failure", "Screen failure", "OS corruption", "BIOS update needed"],
      correctAnswerIndex: 0,
      explanation: "If the adapter is good, the DC jack on the laptop is a common failure point."
    },
    {
      type: "pbq",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.6",
      text: "SIMULATION: Laser Printer has vertical black lines. Corona wire cleaned. What to replace?",
      options: [
        "Fuser",
        "Toner Cartridge (Drum)",
        "Pickup Rollers",
        "Duplexer"
      ],
      correctAnswerIndex: 1,
      explanation: "Vertical lines indicate a scratched Drum (often in the toner cartridge)."
    }
  ]
};

/* 
  CompTIA A+ Core 2 (220-1202) Question Bank
*/
export const CORE_2_BANK: Record<string, QuestionTemplate[]> = {
  "1.0 Operating Systems": [
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.5",
      text: "Which command manages disk partitions in Windows?",
      options: ["format", "diskpart", "chkdsk", "defrag"],
      correctAnswerIndex: 1,
      explanation: "diskpart is the CLI tool for partitions."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.2",
      text: "Default file system for modern macOS?",
      options: ["NTFS", "ext4", "APFS", "FAT32"],
      correctAnswerIndex: 2,
      explanation: "APFS (Apple File System)."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.9",
      text: "Linux command for superuser privileges?",
      options: ["chmod", "chown", "sudo", "grep"],
      correctAnswerIndex: 2,
      explanation: "sudo (SuperUser DO)."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.4",
      text: "Which Windows utility is used to view real-time system resource usage?",
      options: ["Task Manager", "Device Manager", "Disk Management", "Event Viewer"],
      correctAnswerIndex: 0,
      explanation: "Task Manager (Performance tab) shows real-time CPU, RAM, Disk, and Network usage."
    },
    {
      type: "pbq",
      domain: "1.0 Operating Systems",
      objectiveId: "1.2",
      text: "SIMULATION: Create a volume spanning two drives for speed (striping). Which type?",
      options: [
        "Simple Volume",
        "Spanned Volume",
        "Striped Volume (RAID 0)",
        "Mirrored Volume (RAID 1)"
      ],
      correctAnswerIndex: 2,
      explanation: "Striped Volumes (RAID 0) provide speed."
    },
    {
      type: "pbq",
      domain: "1.0 Operating Systems",
      objectiveId: "1.5",
      text: "SIMULATION: Correct order to release and renew IP.",
      options: [
        "ipconfig /flushdns -> ipconfig /renew",
        "ipconfig /release -> ipconfig /renew",
        "ping 127.0.0.1 -> ipconfig /all",
        "netstat -an -> ipconfig /release"
      ],
      correctAnswerIndex: 1,
      explanation: "ipconfig /release then ipconfig /renew."
    }
  ],
  "2.0 Security": [
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.2",
      text: "Granting only necessary permissions is known as:",
      options: ["Defense in depth", "Principle of least privilege", "SSO", "Zero Trust"],
      correctAnswerIndex: 1,
      explanation: "Principle of least privilege."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.1",
      text: "'Something you are' refers to:",
      options: ["Smart Card", "Password", "Fingerprint", "GPS"],
      correctAnswerIndex: 2,
      explanation: "Biometrics (Fingerprint)."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.4",
      text: "Fake bank email asking for password is:",
      options: ["Tailgating", "Phishing", "Dumpster Diving", "MITM"],
      correctAnswerIndex: 1,
      explanation: "Phishing."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.3",
      text: "Which wireless security protocol uses SAE (Simultaneous Authentication of Equals)?",
      options: ["WPA2", "WPA3", "WEP", "WPA"],
      correctAnswerIndex: 1,
      explanation: "WPA3 uses SAE to replace the 4-way handshake, preventing dictionary attacks."
    },
    {
      type: "pbq",
      domain: "2.0 Security",
      objectiveId: "2.3",
      text: "SIMULATION: Harden a corporate WAP for legacy AES clients (No WPA3).",
      options: [
        "WPA2-Enterprise, AES/CCMP",
        "WPA-Personal, TKIP",
        "WEP, RC4",
        "Open"
      ],
      correctAnswerIndex: 0,
      explanation: "WPA2-Enterprise with AES is the strongest legacy option."
    }
  ],
  "3.0 Software Troubleshooting": [
    {
      type: "multiple-choice",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.1",
      text: "First step for BSOD?",
      options: ["Reinstall Windows", "Note error code", "Replace HDD", "Flash BIOS"],
      correctAnswerIndex: 1,
      explanation: "Note the error code."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.2",
      text: "Android app crashing immediately. First step?",
      options: ["Factory reset", "Clear app cache/data", "Root device", "Replace battery"],
      correctAnswerIndex: 1,
      explanation: "Clear app cache/data."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.3",
      text: "A user cannot access a specific website but can access others. Flush DNS didn't help. What to check?",
      options: ["Hosts file", "Power cable", "Monitor settings", "Keyboard language"],
      correctAnswerIndex: 0,
      explanation: "The 'hosts' file can be used to maliciously redirect or block specific websites locally."
    },
    {
      type: "pbq",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.4",
      text: "SIMULATION: Malware Removal. PC isolated. Next step?",
      options: [
        "Schedule scans",
        "Educate user",
        "Quarantine system",
        "Disable System Restore"
      ],
      correctAnswerIndex: 3,
      explanation: "After Identify and Quarantine (already done per scenario), Step 3 is Disable System Restore."
    }
  ],
  "4.0 Operational Procedures": [
    {
      type: "multiple-choice",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.1",
      text: "Document for chemical safety?",
      options: ["SLA", "EULA", "MSDS / SDS", "AUP"],
      correctAnswerIndex: 2,
      explanation: "MSDS / SDS."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.3",
      text: "Backup that copies files but doesn't clear archive bit?",
      options: ["Full", "Incremental", "Differential", "Copy"],
      correctAnswerIndex: 3,
      explanation: "Copy backup."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.2",
      text: "Which type of license is generally for a specific number of users in an organization?",
      options: ["Open Source", "Per-seat / Volume", "Personal", "Freeware"],
      correctAnswerIndex: 1,
      explanation: "Per-seat or Volume licensing allows a set number of simultaneous users."
    },
    {
      type: "pbq",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.1",
      text: "SIMULATION: Prioritize Tickets. A: Dept internet down. B: CEO mouse lag. C: Toner low.",
      options: [
        "B, A, C",
        "A, B, C",
        "C, A, B",
        "A, C, B"
      ],
      correctAnswerIndex: 1,
      explanation: "A (Severity/Impact) -> B (VIP) -> C (Routine)."
    },
    {
      type: "pbq",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.2",
      text: "SIMULATION: Change Request filled. Next step?",
      options: [
        "Implement",
        "Document",
        "Submit to CAB for approval",
        "Test"
      ],
      correctAnswerIndex: 2,
      explanation: "Submit to CAB (Change Advisory Board)."
    }
  ]
};