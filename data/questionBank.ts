import { Question, CoreType } from "../types";

// Helper to create a partial question for type safety
type QuestionTemplate = Omit<Question, "id">;

/* 
  CompTIA A+ Core 1 (220-1201) Question Bank
  Comprehensive coverage of:
  1.0 Mobile Devices (13%)
  2.0 Networking (23%)
  3.0 Hardware (25%)
  4.0 Virtualization and Cloud Computing (11%)
  5.0 Hardware and Network Troubleshooting (28%)
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
      explanation: "Lithium-ion batteries can ignite if punctured, especially if they are already swollen or damaged. Physical safety regarding the battery integrity is paramount."
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
      text: "A user is traveling and needs to connect their laptop to the internet using their smartphone's data plan. Which feature should be enabled?",
      options: ["Airplane Mode", "Hotspot / Tethering", "VPN", "NFC"],
      correctAnswerIndex: 1,
      explanation: "Hotspot or Tethering allows a mobile device to share its cellular data connection with other devices via Wi-Fi, Bluetooth, or USB."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.4",
      text: "Which type of memory form factor is primarily used in laptops?",
      options: ["DIMM", "SODIMM", "ECC", "VRAM"],
      correctAnswerIndex: 1,
      explanation: "Small Outline Dual In-line Memory Module (SODIMM) is the compact RAM standard for laptops."
    },
    {
      type: "pbq",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.3",
      text: "SIMULATION: You are configuring a corporate mobile device for a user. Order the following steps to ensure secure access to corporate email (Office 365) via MDM.",
      options: [
        "1. Enroll in MDM -> 2. Install Authenticator -> 3. Configure Email Profile",
        "1. Install Outlook -> 2. Enter Password -> 3. Disable PIN",
        "1. Turn on Wi-Fi -> 2. Download Mail App -> 3. Share contacts",
        "1. Root the device -> 2. Install Certificate -> 3. Connect to VPN"
      ],
      correctAnswerIndex: 0,
      explanation: "Standard MDM workflow: Enroll the device to push policies, ensure MFA is ready (Authenticator), and then the MDM often pushes the secure Email Profile."
    }
  ],
  "2.0 Networking": [
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.1",
      text: "Which port number is used by the HTTPS protocol for secure web browsing?",
      options: ["80", "443", "22", "25"],
      correctAnswerIndex: 1,
      explanation: "HTTPS uses port 443. Port 80 is HTTP, 22 is SSH, and 25 is SMTP."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.4",
      text: "A network administrator needs to assign IP addresses automatically to client devices. Which service should be configured?",
      options: ["DNS", "DHCP", "RDP", "LDAP"],
      correctAnswerIndex: 1,
      explanation: "DHCP (Dynamic Host Configuration Protocol) assigns IP addresses and network configuration to devices automatically."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.3",
      text: "Which wireless standard operates ONLY on the 5GHz frequency band?",
      options: ["802.11n", "802.11ac", "802.11g", "802.11b"],
      correctAnswerIndex: 1,
      explanation: "802.11ac is exclusive to the 5GHz band. 802.11n can operate on both 2.4GHz and 5GHz."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Networking",
      objectiveId: "2.5",
      text: "A technician needs to terminate a CAT6 cable to a patch panel. Which tool is MOST appropriate?",
      options: ["Crimper", "Punchdown tool", "Wire stripper", "Toner probe"],
      correctAnswerIndex: 1,
      explanation: "A punchdown tool is used to terminate wires into insulation-displacement connectors (IDC) on patch panels and keystone jacks."
    },
    {
      type: "pbq",
      domain: "2.0 Networking",
      objectiveId: "2.6",
      text: "SIMULATION: You are configuring a SOHO wireless router for a small coffee shop. They want to isolate guest traffic from the Point-of-Sale (POS) system. Select the correct configuration set.",
      options: [
        "Enable WEP, set SSID Broadcast to Visible, use VLAN tagging",
        "Configure WPA3, Enable Guest Network (VLAN isolation), Change default Admin password",
        "Disable DHCP, Enable MAC Filtering, Use WPA-TKIP",
        "Set static IPs for all guests, Enable UPnP, Disable Firewall"
      ],
      correctAnswerIndex: 1,
      explanation: "For security: WPA3 is current standard, Guest Networks provide VLAN isolation from the main network (POS), and changing default creds is mandatory."
    },
    {
      type: "pbq",
      domain: "2.0 Networking",
      objectiveId: "2.8",
      text: "SIMULATION: Drag and Drop (Select the correct sequence). You are terminating a Cat6 cable using the T568B standard. Which color order is correct from Pin 1 to Pin 8?",
      options: [
        "White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown",
        "White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown",
        "Blue, White/Blue, Orange, White/Orange, Green, White/Green, Brown, White/Brown",
        "White/Orange, Orange, Green, White/Green, Blue, White/Blue, White/Brown, Brown"
      ],
      correctAnswerIndex: 1,
      explanation: "T568B Order: White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown."
    }
  ],
  "3.0 Hardware": [
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.4",
      text: "Which RAID level provides striping with parity, requiring at least three drives?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
      correctAnswerIndex: 2,
      explanation: "RAID 5 uses striping with parity. It provides fault tolerance and requires a minimum of 3 disks."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.1",
      text: "A video editor needs a new monitor with the highest color accuracy. Which panel type should you recommend?",
      options: ["TN", "IPS", "VA", "OLED"],
      correctAnswerIndex: 1,
      explanation: "In-Plane Switching (IPS) panels typically offer the best color accuracy and viewing angles compared to TN or VA."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Hardware",
      objectiveId: "3.5",
      text: "Which motherboard form factor is the largest among common consumer boards?",
      options: ["Mini-ITX", "Micro-ATX", "ATX", "E-ATX"],
      correctAnswerIndex: 3,
      explanation: "Extended ATX (E-ATX) is larger than standard ATX, Micro-ATX, and Mini-ITX."
    },
    {
      type: "pbq",
      domain: "3.0 Hardware",
      objectiveId: "3.5",
      text: "SIMULATION: You are building a graphic design workstation. The client needs fast rendering and massive redundant storage. Select the best component combination.",
      options: [
        "CPU: Intel Celeron, RAM: 8GB, Storage: 256GB SSD",
        "CPU: High-end Multicore (i9/Ryzen 9), RAM: 64GB, Storage: 1TB NVMe (OS) + 4x4TB HDD in RAID 10",
        "CPU: i5, RAM: 16GB, Storage: 1TB HDD, GPU: Integrated",
        "CPU: i7, RAM: 8GB, Storage: 500GB SSD, GPU: Dedicated 2GB"
      ],
      correctAnswerIndex: 1,
      explanation: "Graphic design/Rendering needs high CPU cores, high RAM, fast OS drive (NVMe), and RAID 10 provides speed+redundancy for large asset files."
    }
  ],
  "4.0 Virtualization and Cloud Computing": [
    {
      type: "multiple-choice",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.1",
      text: "Which cloud service model provides the consumer with the underlying hardware, networking, and storage, but allows them to install their own OS?",
      options: ["SaaS", "PaaS", "IaaS", "DaaS"],
      correctAnswerIndex: 2,
      explanation: "IaaS (Infrastructure as a Service) provides the basic compute resources. The customer manages the OS and applications."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.2",
      text: "Which cloud characteristic allows for resources to be automatically scaled outward and inward commensurate with demand?",
      options: ["Rapid Elasticity", "On-demand self-service", "Broad network access", "Resource pooling"],
      correctAnswerIndex: 0,
      explanation: "Rapid Elasticity enables the cloud environment to automatically add or remove resources based on traffic load."
    },
    {
      type: "pbq",
      domain: "4.0 Virtualization and Cloud Computing",
      objectiveId: "4.2",
      text: "SIMULATION: A host server has 64GB RAM and 16 vCPUs. You need to spin up 3 VMs. VM A needs 32GB RAM, VM B needs 16GB. Why does VM C (needing 20GB) fail to start?",
      options: [
        "CPU overcommitment",
        "Insufficient physical RAM available",
        "Hypervisor Type 2 limitation",
        "Network bridging error"
      ],
      correctAnswerIndex: 1,
      explanation: "32GB (A) + 16GB (B) = 48GB used. 64GB Total - 48GB = 16GB remaining. VM C needs 20GB, which exceeds available physical RAM."
    }
  ],
  "5.0 Hardware and Network Troubleshooting": [
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.1",
      text: "A computer POSTs with a series of beeps and does not boot. What is the first thing you should check?",
      options: ["The hard drive cables", "The motherboard manual for beep codes", "The monitor power cable", "The Windows event logs"],
      correctAnswerIndex: 1,
      explanation: "Beep codes are specific to the BIOS/motherboard manufacturer and indicate which hardware component is failing during POST."
    },
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.2",
      text: "A user reports a loud clicking noise coming from their computer case. The computer is also running very slowly. What is the most likely cause?",
      options: ["Failing SSD", "Failing Mechanical Hard Drive (HDD)", "Loose Fan", "Coil Whine"],
      correctAnswerIndex: 1,
      explanation: "The 'Click of Death' is a classic symptom of a mechanical hard drive read/write head failure."
    },
    {
      type: "multiple-choice",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.4",
      text: "A projector is shutting down intermittently. You notice a warning light on the chassis. What is the most likely cause?",
      options: ["Dead pixel", "Overheating / Bulb failure", "Incorrect resolution", "Keystone misalignment"],
      correctAnswerIndex: 1,
      explanation: "Projectors produce significant heat. Warning lights usually indicate overheating or that the bulb is reaching the end of its life."
    },
    {
      type: "pbq",
      domain: "5.0 Hardware and Network Troubleshooting",
      objectiveId: "5.6",
      text: "SIMULATION: A Laser Printer is printing vertical black lines down the entire page. You have already cleaned the corona wire. Which component is the MOST likely culprit needing replacement?",
      options: [
        "Fuser Assembly",
        "Toner Cartridge (Drum)",
        "Pickup Rollers",
        "Duplexer"
      ],
      correctAnswerIndex: 1,
      explanation: "Vertical black lines typically indicate a groove or scratch on the EP Drum (integrated into toner cartridges often) or a dirty charging wire."
    }
  ]
};

/* 
  CompTIA A+ Core 2 (220-1202) Question Bank
  Comprehensive coverage of:
  1.0 Operating Systems (28%)
  2.0 Security (28%)
  3.0 Software Troubleshooting (23%)
  4.0 Operational Procedures (21%)
*/
export const CORE_2_BANK: Record<string, QuestionTemplate[]> = {
  "1.0 Operating Systems": [
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.5",
      text: "Which Windows command-line tool is used to manage disk partitions?",
      options: ["format", "diskpart", "chkdsk", "defrag"],
      correctAnswerIndex: 1,
      explanation: "'diskpart' is the command-line utility for managing disks, partitions, and volumes in Windows."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.2",
      text: "Which file system is the default for macOS installations?",
      options: ["NTFS", "ext4", "APFS", "FAT32"],
      correctAnswerIndex: 2,
      explanation: "APFS (Apple File System) is the modern default file system for macOS, optimized for flash storage."
    },
    {
      type: "multiple-choice",
      domain: "1.0 Operating Systems",
      objectiveId: "1.9",
      text: "Which Linux command allows a user to run a command with superuser (root) privileges?",
      options: ["chmod", "chown", "sudo", "grep"],
      correctAnswerIndex: 2,
      explanation: "'sudo' (SuperUser DO) allows a permitted user to execute a command as the superuser or another user."
    },
    {
      type: "pbq",
      domain: "1.0 Operating Systems",
      objectiveId: "1.2",
      text: "SIMULATION: You are using Disk Management in Windows. You have a new 1TB drive. You need to create a volume that spans across two physical drives to increase speed (striping). Which volume type do you select?",
      options: [
        "Simple Volume",
        "Spanned Volume",
        "Striped Volume (RAID 0)",
        "Mirrored Volume (RAID 1)"
      ],
      correctAnswerIndex: 2,
      explanation: "Striped Volumes (RAID 0) write data across multiple disks to improve performance but offer no redundancy."
    },
    {
      type: "pbq",
      domain: "1.0 Operating Systems",
      objectiveId: "1.5",
      text: "SIMULATION: A user's computer has lost network connectivity. You are at the command prompt. Select the correct order of commands to release and renew the IP address.",
      options: [
        "ipconfig /flushdns -> ipconfig /renew",
        "ipconfig /release -> ipconfig /renew",
        "ping 127.0.0.1 -> ipconfig /all",
        "netstat -an -> ipconfig /release"
      ],
      correctAnswerIndex: 1,
      explanation: "The standard procedure to refresh a DHCP lease via CLI is 'ipconfig /release' followed by 'ipconfig /renew'."
    }
  ],
  "2.0 Security": [
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.2",
      text: "Which concept involves granting users only the permissions necessary to perform their job functions?",
      options: ["Defense in depth", "Principle of least privilege", "Single Sign-On", "Zero Trust"],
      correctAnswerIndex: 1,
      explanation: "The Principle of Least Privilege states that users should have only the bare minimum access rights needed."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.1",
      text: "Which of the following is considered 'Something you are' in multi-factor authentication?",
      options: ["Smart Card", "Password", "Fingerprint", "GPS Location"],
      correctAnswerIndex: 2,
      explanation: "Biometrics like fingerprints, retina scans, and facial recognition fall under the 'Something you are' factor."
    },
    {
      type: "multiple-choice",
      domain: "2.0 Security",
      objectiveId: "2.4",
      text: "A user receives an email that looks like it's from their bank asking for their password. This is an example of:",
      options: ["Tailgating", "Phishing", "Dumpster Diving", "Man-in-the-middle"],
      correctAnswerIndex: 1,
      explanation: "Phishing is a social engineering attack where an attacker sends fraudulent emails to trick the recipient into revealing sensitive info."
    },
    {
      type: "pbq",
      domain: "2.0 Security",
      objectiveId: "2.3",
      text: "SIMULATION: You are hardening a corporate WAP. You need to configure it for the highest security available for legacy clients that support AES but not WPA3. What settings do you apply?",
      options: [
        "Mode: WPA2-Enterprise, Encryption: AES/CCMP",
        "Mode: WPA-Personal, Encryption: TKIP",
        "Mode: WEP, Encryption: RC4",
        "Mode: Open, Encryption: None"
      ],
      correctAnswerIndex: 0,
      explanation: "WPA2-Enterprise (using 802.1x RADIUS) with AES is the strongest security standard for devices that don't support WPA3."
    }
  ],
  "3.0 Software Troubleshooting": [
    {
      type: "multiple-choice",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.1",
      text: "A Windows computer boots to a 'Blue Screen of Death' (BSOD). What is the first step in troubleshooting?",
      options: ["Reinstall Windows", "Note the error code/stop code", "Replace the hard drive", "Flash the BIOS"],
      correctAnswerIndex: 1,
      explanation: "The error code on the BSOD provides the critical clue needed to identify the driver or hardware causing the crash."
    },
    {
      type: "multiple-choice",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.2",
      text: "An app on an Android phone keeps crashing immediately after opening. What is the first logical step to try?",
      options: ["Factory reset the phone", "Clear the app cache/data", "Root the device", "Replace the battery"],
      correctAnswerIndex: 1,
      explanation: "Clearing the app cache or data often resolves corruption issues causing the crash. It is less destructive than a factory reset."
    },
    {
      type: "pbq",
      domain: "3.0 Software Troubleshooting",
      objectiveId: "3.4",
      text: "SIMULATION: You have identified malware on a Windows PC and disconnected it from the network. According to the CompTIA 7-step malware removal process, what is the IMMEDIATE next step?",
      options: [
        "Schedule scans and run updates",
        "Educate the end user",
        "Quarantine the infected system",
        "Disable System Restore (in Windows)"
      ],
      correctAnswerIndex: 2,
      explanation: "Step 1: Identify. Step 2: Quarantine. Step 3: Disable System Restore. Step 4: Remediate. Step 5: Schedule Scans. Step 6: Enable Restore. Step 7: Educate."
    }
  ],
  "4.0 Operational Procedures": [
    {
      type: "multiple-choice",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.1",
      text: "Which document contains information about the safe handling and disposal of chemical substances?",
      options: ["SLA", "EULA", "MSDS / SDS", "AUP"],
      correctAnswerIndex: 2,
      explanation: "The Material Safety Data Sheet (MSDS) or Safety Data Sheet (SDS) lists hazards and safety measures for chemicals."
    },
    {
      type: "multiple-choice",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.3",
      text: "Which backup type copies all selected files but does not mark them as backed up (archive bit remains on)?",
      options: ["Full Backup", "Incremental Backup", "Differential Backup", "Copy Backup"],
      correctAnswerIndex: 3,
      explanation: "A Copy Backup captures the data but does not clear the archive bit, so it does not affect the rotation of Incremental/Differential backups."
    },
    {
      type: "pbq",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.1",
      text: "SIMULATION: You have 3 tickets. Ticket A: 'Entire Sales Dept cannot access internet'. Ticket B: 'CEO's mouse is laggy'. Ticket C: 'HR needs new toner'. In what order do you prioritize these?",
      options: [
        "B, A, C",
        "A, B, C",
        "C, A, B",
        "A, C, B"
      ],
      correctAnswerIndex: 1,
      explanation: "Ticket A affects multiple users (Scope/Severity high). Ticket B affects a VIP (High priority). Ticket C is routine maintenance. Order: A, B, C."
    },
    // PBQ Template: Change Management
    {
      type: "pbq",
      domain: "4.0 Operational Procedures",
      objectiveId: "4.2",
      text: "SIMULATION: You plan to upgrade the RAM on a critical server. You have filled out the 'Request for Change'. What is the next logical step in the Change Management process?",
      options: [
        "Implement the change immediately",
        "Document findings",
        "Submit to Change Advisory Board (CAB) for approval",
        "End user acceptance testing"
      ],
      correctAnswerIndex: 2,
      explanation: "After requesting a change, it must be approved by the relevant authority (CAB) before implementation begins."
    }
  ]
};
