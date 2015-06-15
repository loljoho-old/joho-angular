# APPLICATION STRUCTURE
```
╞══ HEADER
│   │
│   ├── toolbar
│   │   ├── title           --> Brand               PATCH <-- ~0.8.2
│   │   ├── subtitle        --> Text
│   │   ├── navigation      --> Tabs
│   │   └── button          --> Menu
│   │       └── SIDENAV     --> Mini-CV             MINOR <-- #0.9.0
│   └── bar                 --> Progress Bar        MAJOR <-- ^1.0.0
│
│
╞══ CONTENT
│   ║
│   ║
│   ╠══ home/               --> Overview
│   ║
│   ║
│   ╠══ life/               --> Bio, Interests
│   ║
│   ║
│   ╚══ code/               --> Skills, Projects
│
│
╞══ FOOTER
│   │
│   ├── section             --> Contact Info        MINOR <-- #0.9.0
│   │   ├── Email           --> Email Address       PATCH <-- ~0.9.0
│   │   ├── Location        --> City State          PATCH <-- ~0.9.0
│   │   ├── Phone           --> Number Image        MINOR <-- #0.9.0
│   │   └── Form            --> Contact Form        MAJOR <-- ^1.0.0
│   │
│   ├── toolbar             --> Footer Bar          PATCH <-- ~0.8.2
│   │   ├── license         --> License             MINOR <-- #0.9.0
│   │   ├── credit          --> "Made With"         PATCH <-- ~0.8.3
│   │   ├── buttons         --> Profile Links       PATCH <-- ~0.8.2
│   │   │   ├── GitHub                              PATCH <-- ~0.8.2
│   │   │   ├── Reddit                              PATCH <-- ~0.8.2
│   │   │   ├── CodePen                             PATCH <-- ~0.8.2
│   │   │   ├── LinkedIn                            PATCH <-- ~0.8.2
│   │   │   └── AngelList                           PATCH <-- ~0.8.2
│   │
│   └── button              --> Top of Page         MINOR <-- #0.9.0

```


# FILE STRUCTURE
```
src/
├── api/
├── app/
│   ├── components/
│   │   ├── header/                     --> Page Header
│   │   │   ├── header.ctrl.js
│   │   │   ├── header.html
│   │   │   └── header.scss
│   │   ├── footer/                     --> Page Footer
│   │   │   ├── footer.ctrl.js
│   │   │   ├── footer.html
│   │   │   └── footer.scss
│   │   ├── view/                       --> Page View Manager
│   │   │   ├── 
│   │   │   └── 
│   │   └── 
│   ├── content/
│   │   ├── about/
│   │   │   ├── 
│   │   │   └── 
│   │   ├── study/
│   │   │   ├── 
│   │   │   └── 
│   │   ├── work/
│   │   │   ├── 
│   │   │   └── 
│   │   └── 
│   ├── main/
│   │   ├── main.ctrl.js                --> Main Controller
│   │   ├── main.html                   --> Main Template File
│   │   └── main.scss
│   ├── app.js                          --> Main Application File
│   ├── app.scss
│   ├── vendor.scss                     --> Compiled Bower styles
│   ├── data.service.js                 --> Main Data Service
│   └── 
├── assets/
│   ├── icons/
│   │   ├── fa/
│   │   │   ├── 
│   │   │   ├── 
│   │   │   ├── 
│   │   │   └──
│   │   ├── md/
│   │   │   ├── 
│   │   │   ├── 
│   │   │   ├── 
│   │   │   └──
│   │   └── 
│   ├── images/
│   │   ├── thumbs/
│   │   │   ├── 
│   │   │   └── 
│   │   ├── 
│   │   └── 
│   └── 
├── index.html
├── 
├── 
├── 
├── 
└── 
```