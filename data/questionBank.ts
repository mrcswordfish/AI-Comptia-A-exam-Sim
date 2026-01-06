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
    // ... (Keeping previous items, updating with objectiveId)
    {
      type: "multiple-choice",
      domain: "1.0 Mobile Devices",
      objectiveId: "1.1",
      text: "Which component in a laptop display provides the light for the screen?",
      options: ["Inverter", "Digitizer", "Backlight", "LCD Matrix"],
      correctAnswerIndex: 2,
      explanation: "The backlight (typically LED in modern laptops, or CCFL in older ones) provides the illumination."
    },
    // PBQ Template: Mobile Device Configuration
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
    // PBQ Template: SOHO Router Configuration
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
    // PBQ Template: Wiring Standards
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
    // PBQ Template: PC Build
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
    // PBQ Template: Virtualization Resource Allocation
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
    // PBQ Template: Printer Troubleshooting
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
    // PBQ Template: Disk Partitioning
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
    // PBQ Template: Command Line Tools
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
    // PBQ Template: Wireless Security Hardening
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
    // PBQ Template: Malware Removal Workflow
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
    // PBQ Template: Ticket Triage
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