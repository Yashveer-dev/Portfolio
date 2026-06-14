const projects = {
    video: {
        id: "SYSTEM_01",
        title: "Batch-Processing Video Automation Pipeline",
        details: [
            "Engineered a local Python orchestration system that parses structured JSON datasets, automates audio synthesis via the Edge TTS API, and dynamically retrieves image assets for content generation.",
            "Automated video post-production using MoviePy — including auto-cropping, zooming, and media stitching — to generate standardized 1080x1920 vertical format videos at scale.",
            "Designed a resilient hybrid fallback architecture with robust error-handling and retry logic, maintaining pipeline uptime despite third-party API rate limits and intermittent network conditions."
        ],
        diagram: "[Input: JSON Dataset]\n   │\n   ▼\n[Local Python Orchestrator] ──► [Edge TTS API] (Audio Synth)\n   │\n   ▼\n[MoviePy Engine] (Auto-Crop, Zoom, Video Stitch)\n   │\n   ▼\n[Output: 1080x1920 Vertical MP4 Video]"
    },
    krishi: {
        id: "SYSTEM_02",
        title: "KrishiMitra AI",
        details: [
            "Architected and deployed a multilingual AI advisory platform on AWS (EC2, S3, Lambda), delivering real-time, serverless weather alerts and crop-planning guidance to farmers across Odisha.",
            "Built a voice-to-text conversational assistant supporting local languages, reducing reliance on typed input to improve accessibility for rural, non-technical users.",
            "Designed scalable cloud storage architecture on AWS S3 to manage large agricultural datasets, enabling real-time data processing for hyper-local recommendations."
        ],
        diagram: "[Input: Rural Voice Query]\n   │\n   ▼\n[Voice-to-Text Module] ──► [Weather API Stream]\n   │\n   ▼\n[AWS EC2 Engine] (Multi-lingual AI Processing)\n   │\n   ▼\n[AWS S3 Datasets] / [AWS Lambda Alerts]\n   │\n   ▼\n[Output: hyper-local agricultural advisory alerts]"
    },
    qkd: {
        id: "SYSTEM_03",
        title: "Quantum Key Distribution (QKD) Web Application",
        details: [
            "Developed and deployed a full-stack web application demonstrating QKD-based encryption protocols, implementing secure key generation, distribution, and verification logic.",
            "Engineered real-time cryptographic data handling using JavaScript and modern web APIs, applying network security principles directly relevant to safeguarding sensitive healthcare data transmissions."
        ],
        diagram: "[Alice: Random State Gen]\n   │\n   ▼\n[QKD Protocol Channel] (JavaScript Web Crypto API)\n   │\n   ▼\n[Bob: State Measurement & Basis Reconciliation]\n   │\n   ▼\n[Sifting Process] ──► [Key Generation & Verification]\n   │\n   ▼\n[Output: Verified Shared Symmetric Secret Key]"
    },
    ngo: {
        id: "SYSTEM_04",
        title: "Naya Savera NGO Website",
        details: [
            "Designed and deployed a responsive website from scratch for a Deoria-based non-profit (naya-savera.co.in), covering wireframing, UI design, hosting, and custom domain configuration.",
            "Implemented an SEO-optimized structure and metadata, increasing organic visibility for the organization's key initiatives."
        ],
        diagram: "[Design: Custom Wireframes]\n   │\n   ▼\n[Stack: Vanilla HTML5 / CSS3 / Grid Layout]\n   │\n   ▼\n[SEO Framework] (Semantic Tags, Meta Structures)\n   │\n   ▼\n[Hosting Stack] (Custom Domain DNS, CDN Optimization)\n   │\n   ▼\n[Output: Deployed Web Presence naya-savera.co.in]"
    }
};

const logs = [
    "SYS.SYSTEM_INIT() ACTIVE...",
    "CORE.KERNEL_LOAD(CORE_V2.0.4)... [SUCCESS]",
    "NET.DNS_ESTABLISH(LOCAL)... [CONNECTED]",
    "PORTFOLIO.SYNC_RESUME_DATA()... [SYNCED]",
    "ARSENAL.LOAD_LANGUAGES(PYTHON, JAVA, C, SQL)... [100%]",
    "ARSENAL.LOAD_ML_MODELS(TENSORFLOW, SCIKIT)... [OK]",
    "DEVOPS.LOAD_AWS_NODES(EC2, S3, LAMBDA)... [ONLINE]",
    "PIPELINES.LOAD_AUTOMATION_MODULES()... [SUCCESS]",
    "PORTFOLIO.COMPILED_SUCCESSFULLY."
];

const logConsole = document.getElementById('log-console');
let logIndex = 0;

function printLog() {
    if (logIndex < logs.length) {
        const p = document.createElement('p');
        p.textContent = logs[logIndex];
        logConsole.appendChild(p);
        logIndex++;
        setTimeout(printLog, Math.random() * 100 + 30);
    } else {
        setTimeout(triggerIntroTransition, 300);
    }
}

function triggerIntroTransition() {
    const introLogo = document.getElementById('intro-logo');
    const navLogo = document.getElementById('nav-logo-target');
    const loaderScreen = document.getElementById('loader-screen');
    const appContent = document.getElementById('app-content');
    
    const firstRect = introLogo.getBoundingClientRect();
    
    navLogo.appendChild(introLogo);
    introLogo.classList.remove('text-white');
    introLogo.classList.add('text-black', 'dark:text-white', 'w-16', 'h-6');
    
    const lastRect = introLogo.getBoundingClientRect();
    
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;
    const deltaW = firstRect.width / lastRect.width;
    const deltaH = firstRect.height / lastRect.height;
    
    introLogo.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`;
    introLogo.style.transformOrigin = 'top left';
    introLogo.style.transition = 'none';
    
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            appContent.classList.remove('opacity-0', 'pointer-events-none');
            appContent.classList.add('opacity-100');
            document.body.classList.remove('overflow-hidden');
            
            introLogo.style.transition = 'transform 1.0s cubic-bezier(0.77, 0, 0.175, 1)';
            introLogo.style.transform = 'none';
            
            loaderScreen.classList.add('opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                loaderScreen.remove();
            }, 1000);
        });
    });
}

document.addEventListener('DOMContentLoaded', printLog);

const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    document.documentElement.classList.add('dark');
}

document.getElementById('theme-btn').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

setInterval(() => {
    const lat = Math.floor(Math.random() * (58 - 32) + 32);
    document.getElementById('latency').textContent = `${lat}ms`;
}, 3000);

function renderProject(key) {
    const proj = projects[key];
    document.getElementById('proj-id').textContent = proj.id;
    document.getElementById('proj-title').textContent = proj.title;
    
    const detailsContainer = document.getElementById('proj-details');
    detailsContainer.innerHTML = '';
    proj.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsContainer.appendChild(li);
    });
    
    document.getElementById('diagram-container').textContent = proj.diagram;
}

const tabs = {
    'btn-video': 'video',
    'btn-krishi': 'krishi',
    'btn-qkd': 'qkd',
    'btn-ngo': 'ngo'
};

Object.keys(tabs).forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
        Object.keys(tabs).forEach(tid => {
            document.getElementById(tid).classList.remove('border-l-8', 'border-l-steel-600', 'border-l-steel-400');
        });
        const button = e.currentTarget;
        button.classList.add('border-l-8', 'border-l-steel-600', 'border-l-steel-400');
        renderProject(tabs[id]);
    });
});

renderProject('video');

document.getElementById('sys-contact').addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'PAYLOAD_TRANSMITTING...';
    status.className = 'text-xs text-yellow-600 dark:text-yellow-400';
    
    setTimeout(() => {
        status.textContent = 'PAYLOAD DELIVERED SUCCESSFULLY.';
        status.className = 'text-xs text-green-600 dark:text-green-400';
        document.getElementById('sys-contact').reset();
    }, 1200);
});
