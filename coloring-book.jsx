import { useState } from "react";

const S = `
  .ln { fill: none; stroke: #2a1810; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
  .tn { fill: none; stroke: #2a1810; stroke-width: 1.2; stroke-linecap: round; stroke-linejoin: round; }
  .tk { fill: none; stroke: #2a1810; stroke-width: 2.8; stroke-linecap: round; stroke-linejoin: round; }
  .dt { fill: none; stroke: #2a1810; stroke-width: 0.8; stroke-linecap: round; stroke-linejoin: round; }
`;

function Page1() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <rect x="40" y="30" width="720" height="540" rx="8" className="tk" />
      <rect x="52" y="42" width="696" height="516" rx="4" className="tn" />
      <circle cx="52" cy="42" r="12" className="ln" /><circle cx="52" cy="42" r="6" className="dt" />
      <circle cx="748" cy="42" r="12" className="ln" /><circle cx="748" cy="42" r="6" className="dt" />
      <circle cx="52" cy="558" r="12" className="ln" /><circle cx="52" cy="558" r="6" className="dt" />
      <circle cx="748" cy="558" r="12" className="ln" /><circle cx="748" cy="558" r="6" className="dt" />
      <path d="M 160 420 Q 160 380 200 370 L 600 370 Q 660 370 670 340 Q 680 310 670 290 Q 660 270 640 275 L 630 290" className="tk" />
      <path d="M 160 420 L 160 480 Q 160 500 180 500 L 200 500" className="tk" />
      <path d="M 600 420 L 630 480 Q 640 500 620 505 L 600 500" className="tk" />
      <path d="M 160 420 L 630 420" className="ln" />
      <path d="M 190 500 L 190 540 M 185 540 L 195 540" className="ln" />
      <path d="M 600 500 L 605 540 M 600 540 L 610 540" className="ln" />
      <path d="M 200 380 Q 250 395 300 380 Q 350 395 400 380 Q 450 395 500 380 Q 550 395 600 380" className="dt" />
      <path d="M 200 400 Q 250 410 300 400 Q 350 410 400 400 Q 450 410 500 400 Q 550 410 600 400" className="dt" />
      <path d="M 640 275 Q 620 260 630 245 Q 645 235 655 250 Q 660 265 650 278" className="ln" />
      <ellipse cx="400" cy="340" rx="120" ry="50" className="tk" />
      <ellipse cx="540" cy="280" rx="50" ry="45" className="tk" />
      <path d="M 515 245 L 520 210 L 540 235" className="ln" />
      <path d="M 523 225 L 527 215 L 533 228" className="dt" />
      <path d="M 555 240 L 565 208 L 575 238" className="ln" />
      <path d="M 560 222 L 564 213 L 570 225" className="dt" />
      <ellipse cx="527" cy="275" rx="8" ry="9" className="ln" />
      <ellipse cx="557" cy="275" rx="8" ry="9" className="ln" />
      <circle cx="525" cy="273" r="3" fill="#2a1810" />
      <circle cx="555" cy="273" r="3" fill="#2a1810" />
      <ellipse cx="542" cy="290" rx="5" ry="3" fill="#2a1810" />
      <path d="M 542 293 L 542 300 M 538 300 Q 542 305 546 300" className="dt" />
      <line x1="500" y1="288" x2="470" y2="282" className="dt" />
      <line x1="500" y1="293" x2="468" y2="295" className="dt" />
      <line x1="500" y1="298" x2="472" y2="308" className="dt" />
      <line x1="580" y1="288" x2="610" y2="282" className="dt" />
      <line x1="580" y1="293" x2="612" y2="295" className="dt" />
      <line x1="580" y1="298" x2="608" y2="308" className="dt" />
      <path d="M 500 350 Q 520 365 530 390 L 520 395 Q 515 380 500 365" className="ln" />
      <path d="M 480 355 Q 495 370 500 395 L 490 398 Q 488 382 475 368" className="ln" />
      <path d="M 280 330 Q 240 310 220 280 Q 210 260 225 250 Q 240 245 245 260 Q 248 272 240 278" className="tk" />
      <path d="M 350 310 Q 360 305 370 310" className="dt" />
      <path d="M 400 305 Q 410 300 420 305" className="dt" />
      <path d="M 450 310 Q 460 305 470 310" className="dt" />
      <path d="M 518 215 L 522 195 L 530 210 L 540 190 L 550 210 L 558 195 L 562 215" className="ln" />
      <circle cx="540" cy="192" r="3" className="dt" />
      <rect x="120" y="80" width="80" height="100" rx="2" className="ln" />
      <rect x="126" y="86" width="68" height="88" className="dt" />
      <path d="M 135 150 Q 155 120 175 150" className="dt" />
      <rect x="600" y="70" width="110" height="90" rx="2" className="ln" />
      <rect x="607" y="77" width="96" height="76" className="dt" />
      <ellipse cx="655" cy="115" rx="30" ry="25" className="dt" />
      <path d="M 100 250 L 100 340 M 85 340 L 115 340" className="ln" />
      <path d="M 100 250 L 80 230 L 80 210 M 100 250 L 120 230 L 120 210 M 100 250 L 100 210" className="ln" />
      <line x1="40" y1="555" x2="760" y2="555" className="tn" />
    </svg>
  );
}

function Page2() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <rect x="140" y="30" width="520" height="540" rx="6" className="tk" />
      <rect x="150" y="40" width="500" height="520" rx="4" className="ln" />
      <rect x="162" y="52" width="476" height="496" rx="2" className="tn" />
      <path d="M 300 35 Q 320 20 340 35 Q 360 20 380 35 Q 400 20 420 35 Q 440 20 460 35 Q 480 20 500 35" className="dt" />
      <path d="M 300 565 Q 320 578 340 565 Q 360 578 380 565 Q 400 578 420 565 Q 440 578 460 565 Q 480 578 500 565" className="dt" />
      <path d="M 162 300 Q 250 260 350 280 Q 450 300 550 270 Q 600 255 638 270" className="dt" />
      <path d="M 162 340 Q 280 310 400 330 Q 500 345 638 320" className="dt" />
      <path d="M 350 548 Q 360 480 380 420 Q 400 380 420 350 Q 440 330 445 310" className="dt" />
      <path d="M 370 548 Q 380 480 395 420 Q 410 385 425 355 Q 442 335 450 315" className="dt" />
      <path d="M 162 270 L 220 180 L 280 250 L 340 160 L 400 230 L 460 140 L 520 220 L 580 170 L 638 240" className="dt" />
      <rect x="170" y="200" width="30" height="300" className="tn" />
      <rect x="600" y="200" width="30" height="300" className="tn" />
      <path d="M 340 380 Q 330 350 340 320 Q 350 300 370 290 L 430 290 Q 450 300 460 320 Q 470 350 460 380 Q 460 420 460 460 Q 455 500 440 520 L 360 520 Q 345 500 340 460 Q 335 420 340 380" className="tk" />
      <ellipse cx="400" cy="250" rx="55" ry="50" className="tk" />
      <path d="M 360 210 L 355 170 L 380 200" className="ln" />
      <path d="M 362 190 L 360 178 L 372 195" className="dt" />
      <path d="M 430 205 L 440 168 L 450 200" className="ln" />
      <path d="M 435 188 L 438 176 L 445 192" className="dt" />
      <path d="M 375 242 Q 382 238 390 242" className="ln" />
      <path d="M 375 245 Q 382 248 390 245" className="ln" />
      <circle cx="383" cy="243" r="2.5" fill="#2a1810" />
      <path d="M 410 240 Q 417 236 425 240" className="ln" />
      <path d="M 410 243 Q 417 246 425 243" className="ln" />
      <circle cx="418" cy="241" r="2.5" fill="#2a1810" />
      <ellipse cx="400" cy="260" rx="5" ry="3.5" fill="#2a1810" />
      <path d="M 385 272 Q 395 280 400 280 Q 405 280 415 272" className="ln" />
      <path d="M 388 272 Q 396 276 400 276 Q 404 276 412 272" className="dt" />
      <line x1="365" y1="262" x2="330" y2="256" className="dt" />
      <line x1="365" y1="267" x2="328" y2="268" className="dt" />
      <line x1="365" y1="272" x2="332" y2="280" className="dt" />
      <line x1="435" y1="262" x2="470" y2="256" className="dt" />
      <line x1="435" y1="267" x2="472" y2="268" className="dt" />
      <line x1="435" y1="272" x2="468" y2="280" className="dt" />
      <path d="M 360 470 Q 370 460 385 465 Q 400 470 415 465 Q 430 460 440 470" className="ln" />
      <path d="M 365 475 Q 375 490 390 485 L 395 480" className="ln" />
      <path d="M 435 475 Q 425 490 410 485 L 405 480" className="ln" />
      <path d="M 340 310 Q 320 320 310 350 Q 300 380 310 420 Q 315 440 320 460" className="ln" />
      <path d="M 460 310 Q 480 320 490 350 Q 500 380 490 420 Q 485 440 480 460" className="ln" />
      <path d="M 365 295 Q 380 310 400 315 Q 420 310 435 295" className="dt" />
      <path d="M 460 480 Q 490 490 510 470 Q 530 450 520 430 Q 510 420 500 430" className="ln" />
      <rect x="330" y="535" width="140" height="18" rx="2" className="dt" />
    </svg>
  );
}

function Page3() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <path d="M 60 30 Q 400 10 740 30" className="tk" />
      <path d="M 60 570 Q 400 590 740 570" className="tk" />
      <path d="M 60 30 Q 40 300 60 570" className="tk" />
      <path d="M 740 30 Q 760 300 740 570" className="tk" />
      <path d="M 80 50 Q 200 40 300 50 Q 400 60 500 50 Q 600 40 720 50" className="ln" />
      <path d="M 80 550 Q 200 560 300 550 Q 400 540 500 550 Q 600 560 720 550" className="ln" />
      <path d="M 75 100 Q 85 150 78 200 Q 72 250 80 300 Q 88 350 75 400 Q 68 450 78 500" className="ln" />
      <path d="M 78 130 Q 100 120 110 130 Q 115 140 105 148 Q 95 150 85 142" className="ln" />
      <path d="M 75 250 Q 95 240 105 250 Q 110 260 100 268 Q 90 270 80 262" className="ln" />
      <path d="M 78 380 Q 98 370 108 380 Q 113 390 103 398 Q 93 400 83 392" className="ln" />
      <path d="M 725 100 Q 715 150 722 200 Q 728 250 720 300 Q 712 350 725 400 Q 732 450 722 500" className="ln" />
      <path d="M 722 160 Q 702 150 692 160 Q 687 170 697 178 Q 707 180 717 172" className="ln" />
      <path d="M 720 300 Q 700 290 690 300 Q 685 310 695 318 Q 705 320 715 312" className="ln" />
      <path d="M 250 80 L 250 280 Q 250 350 400 350 Q 550 350 550 280 L 550 80 Q 400 60 250 80" className="ln" />
      <path d="M 400 80 L 400 350" className="dt" />
      <path d="M 250 180 L 550 180" className="dt" />
      <path d="M 300 80 Q 300 130 350 130 Q 400 130 400 80" className="dt" />
      <path d="M 400 80 Q 400 130 450 130 Q 500 130 500 80" className="dt" />
      <circle cx="330" cy="280" r="25" className="dt" />
      <circle cx="470" cy="280" r="25" className="dt" />
      <circle cx="400" cy="310" r="15" className="dt" />
      <ellipse cx="400" cy="430" rx="180" ry="30" className="ln" />
      <path d="M 400 460 L 400 530 M 350 530 L 450 530" className="ln" />
      <path d="M 350 390 Q 345 370 360 360 Q 380 355 400 355 Q 420 355 440 360 Q 455 370 450 390" className="ln" />
      <path d="M 350 390 Q 345 410 360 420 Q 380 425 400 425 Q 420 425 440 420 Q 455 410 450 390" className="ln" />
      <path d="M 390 355 Q 395 340 400 335 Q 405 340 410 355" className="ln" />
      <path d="M 350 375 Q 330 370 325 380 Q 320 390 330 395 Q 335 398 345 393" className="ln" />
      <path d="M 450 375 L 475 368 Q 478 370 475 375 L 450 385" className="ln" />
      <circle cx="400" cy="388" r="8" className="dt" />
      <path d="M 500 400 Q 495 385 510 380 Q 530 378 550 380 Q 565 385 560 400 Q 558 410 545 415 Q 530 418 515 415 Q 502 410 500 400" className="ln" />
      <path d="M 560 388 Q 572 385 575 392 Q 575 400 565 400" className="ln" />
      <path d="M 200 410 Q 180 370 190 330 Q 200 300 220 285 Q 240 275 260 280 Q 280 285 290 300 Q 300 330 300 370 Q 300 410 290 440 L 210 440 Q 200 430 200 410" className="tk" />
      <ellipse cx="250" cy="240" rx="48" ry="44" className="tk" />
      <path d="M 218 208 L 210 170 L 235 198" className="ln" />
      <path d="M 272 204 L 280 168 L 292 198" className="ln" />
      <ellipse cx="235" cy="235" rx="10" ry="11" className="ln" />
      <ellipse cx="265" cy="233" rx="10" ry="11" className="ln" />
      <circle cx="237" cy="233" r="4" fill="#2a1810" />
      <circle cx="267" cy="231" r="4" fill="#2a1810" />
      <ellipse cx="250" cy="252" rx="4.5" ry="3" fill="#2a1810" />
      <path d="M 250 255 L 250 260 M 246 260 Q 250 265 254 260" className="dt" />
      <line x1="220" y1="254" x2="185" y2="248" className="dt" />
      <line x1="220" y1="258" x2="183" y2="260" className="dt" />
      <line x1="280" y1="252" x2="315" y2="246" className="dt" />
      <line x1="280" y1="256" x2="317" y2="258" className="dt" />
      <path d="M 290 370 Q 310 360 330 365 Q 340 368 340 375 L 330 380 Q 320 378 310 380" className="ln" />
      <path d="M 200 430 Q 170 440 155 420 Q 140 400 150 380 Q 158 370 168 378" className="ln" />
      <ellipse cx="470" cy="418" rx="25" ry="8" className="ln" />
      <circle cx="462" cy="412" r="5" className="dt" />
      <circle cx="478" cy="412" r="5" className="dt" />
    </svg>
  );
}

function Page4() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <rect x="100" y="50" width="600" height="500" rx="4" className="tk" />
      <rect x="108" y="58" width="584" height="484" rx="2" className="tn" />
      <path d="M 80 50 L 400 20 L 720 50" className="tk" />
      <circle cx="400" cy="32" r="8" className="ln" />
      <line x1="108" y1="175" x2="692" y2="175" className="ln" />
      <line x1="108" y1="310" x2="692" y2="310" className="ln" />
      <line x1="108" y1="420" x2="692" y2="420" className="ln" />
      <line x1="300" y1="58" x2="300" y2="175" className="tn" />
      <line x1="500" y1="58" x2="500" y2="175" className="tn" />
      <line x1="400" y1="175" x2="400" y2="310" className="tn" />
      <circle cx="200" cy="135" r="30" className="ln" />
      <ellipse cx="200" cy="135" rx="30" ry="10" className="dt" />
      <ellipse cx="200" cy="135" rx="10" ry="30" className="dt" />
      <path d="M 200 165 L 200 172 M 190 172 L 210 172" className="ln" />
      <circle cx="400" cy="125" r="35" className="ln" />
      <circle cx="400" cy="125" r="30" className="tn" />
      <line x1="400" y1="125" x2="400" y2="102" className="ln" />
      <line x1="400" y1="125" x2="418" y2="118" className="ln" />
      <circle cx="400" cy="125" r="2" fill="#2a1810" />
      <path d="M 580 170 Q 575 150 580 130 Q 585 120 600 120 Q 615 120 620 130 Q 625 150 620 170" className="ln" />
      <path d="M 590 120 Q 585 90 575 70" className="dt" />
      <path d="M 600 120 Q 600 85 600 65" className="dt" />
      <path d="M 610 120 Q 615 90 625 70" className="dt" />
      <rect x="130" y="195" width="80" height="12" rx="1" className="ln" />
      <rect x="135" y="207" width="70" height="14" rx="1" className="ln" />
      <rect x="125" y="221" width="85" height="11" rx="1" className="ln" />
      <rect x="140" y="232" width="65" height="13" rx="1" className="ln" />
      <rect x="260" y="245" width="50" height="40" rx="3" className="ln" />
      <circle cx="285" cy="260" r="12" className="ln" />
      <circle cx="285" cy="260" r="7" className="dt" />
      <rect x="270" y="240" width="30" height="8" rx="2" className="ln" />
      <path d="M 450 300 Q 445 280 450 260 Q 455 240 470 230 Q 485 240 490 260 Q 495 280 490 300" className="ln" />
      <circle cx="470" cy="262" r="4" className="dt" />
      <path d="M 455 270 Q 465 280 475 270 Q 485 280 490 270" className="dt" />
      <circle cx="590" cy="250" r="20" className="ln" />
      <circle cx="590" cy="250" r="17" className="tn" />
      <path d="M 604 264 L 625 285" className="tk" />
      <ellipse cx="510" cy="240" rx="40" ry="35" className="tk" />
      <path d="M 485 215 L 478 178 L 500 208" className="ln" />
      <path d="M 528 212 L 538 177 L 545 208" className="ln" />
      <ellipse cx="498" cy="237" rx="9" ry="10" className="ln" />
      <ellipse cx="522" cy="235" rx="9" ry="10" className="ln" />
      <circle cx="500" cy="235" r="4" fill="#2a1810" />
      <circle cx="524" cy="233" r="4" fill="#2a1810" />
      <ellipse cx="510" cy="250" rx="4" ry="3" fill="#2a1810" />
      <path d="M 510 253 L 510 257 M 507 257 Q 510 261 513 257" className="dt" />
      <line x1="485" y1="250" x2="455" y2="244" className="dt" />
      <line x1="485" y1="255" x2="453" y2="257" className="dt" />
      <line x1="535" y1="248" x2="560" y2="242" className="dt" />
      <line x1="535" y1="253" x2="562" y2="255" className="dt" />
      <path d="M 550 390 Q 530 370 525 340 Q 522 310 530 290" className="tk" />
      <path d="M 600 400 Q 590 380 585 350 Q 582 320 585 295" className="tk" />
      <path d="M 480 270 Q 475 280 470 290 Q 468 298 475 305 L 485 305" className="ln" />
      <path d="M 535 268 Q 540 280 542 295 Q 543 302 537 305 L 528 305" className="ln" />
      <path d="M 600 390 Q 620 370 625 340 Q 628 320 620 310" className="tk" />
      <rect x="140" y="430" width="60" height="40" rx="3" className="ln" />
      <path d="M 140 430 L 170 420 L 200 430" className="ln" />
      <circle cx="170" cy="448" r="8" className="dt" />
      <path d="M 280 465 Q 290 440 310 438 Q 330 440 335 455 Q 330 468 310 470 Q 290 470 280 465" className="ln" />
      <path d="M 420 468 L 420 440 Q 420 435 430 433 Q 440 435 440 440 L 440 468" className="ln" />
      <path d="M 415 468 L 445 468 M 415 472 L 445 472" className="ln" />
    </svg>
  );
}

function Page5() {
  return (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <rect x="40" y="30" width="720" height="540" className="tk" />
      <rect x="40" y="30" width="60" height="60" className="ln" />
      <rect x="50" y="40" width="40" height="40" className="tn" />
      <line x1="40" y1="30" x2="100" y2="90" className="dt" />
      <rect x="700" y="30" width="60" height="60" className="ln" />
      <rect x="710" y="40" width="40" height="40" className="tn" />
      <line x1="760" y1="30" x2="700" y2="90" className="dt" />
      <rect x="40" y="480" width="60" height="90" className="ln" />
      <rect x="700" y="480" width="60" height="90" className="ln" />
      <path d="M 250 50 L 250 250 Q 250 300 400 300 Q 550 300 550 250 L 550 50" className="ln" />
      <path d="M 400 300 L 400 50" className="dt" />
      <path d="M 400 300 L 310 55" className="dt" />
      <path d="M 400 300 L 265 120" className="dt" />
      <path d="M 400 300 L 260 200" className="dt" />
      <path d="M 400 300 L 490 55" className="dt" />
      <path d="M 400 300 L 535 120" className="dt" />
      <path d="M 400 300 L 540 200" className="dt" />
      <path d="M 400 300 L 350 52" className="dt" />
      <path d="M 400 300 L 450 52" className="dt" />
      <line x1="310" y1="300" x2="240" y2="500" className="dt" strokeDasharray="8,6" />
      <line x1="360" y1="300" x2="320" y2="500" className="dt" strokeDasharray="8,6" />
      <line x1="400" y1="300" x2="400" y2="500" className="dt" strokeDasharray="8,6" />
      <line x1="440" y1="300" x2="480" y2="500" className="dt" strokeDasharray="8,6" />
      <line x1="490" y1="300" x2="560" y2="500" className="dt" strokeDasharray="8,6" />
      <line x1="60" y1="500" x2="740" y2="500" className="ln" />
      <path d="M 100 500 L 150 540 L 200 500 L 250 540 L 300 500 L 350 540 L 400 500 L 450 540 L 500 500 L 550 540 L 600 500 L 650 540 L 700 500" className="dt" />
      <path d="M 100 490 Q 95 470 105 450 L 115 450 Q 125 470 120 490" className="ln" />
      <rect x="92" y="490" width="36" height="10" rx="2" className="ln" />
      <path d="M 110 450 Q 80 400 60 360" className="ln" />
      <path d="M 110 450 Q 130 395 160 370" className="ln" />
      <path d="M 110 450 Q 90 410 70 400" className="ln" />
      <path d="M 660 490 Q 655 470 665 450 L 675 450 Q 685 470 680 490" className="ln" />
      <rect x="652" y="490" width="36" height="10" rx="2" className="ln" />
      <path d="M 670 450 Q 640 400 620 360" className="ln" />
      <path d="M 670 450 Q 700 395 720 370" className="ln" />
      <rect x="600" y="380" width="80" height="8" rx="1" className="ln" />
      <path d="M 620 388 L 625 490 M 660 388 L 655 490" className="ln" />
      <path d="M 615 490 L 665 490" className="ln" />
      <path d="M 625 365 L 640 380 L 655 365" className="ln" />
      <path d="M 340 430 Q 310 420 300 400 Q 290 380 300 360 Q 310 340 340 335 Q 370 330 400 340 Q 430 350 445 370 Q 460 390 455 415 Q 450 435 430 445 Q 410 455 380 455 Q 355 452 340 430" className="tk" />
      <ellipse cx="345" cy="390" rx="40" ry="35" className="tk" />
      <path d="M 320 365 L 315 345 L 332 360" className="ln" />
      <path d="M 355 360 L 360 342 L 370 358" className="ln" />
      <path d="M 325 387 Q 332 383 340 387" className="ln" />
      <path d="M 352 385 Q 359 381 366 385" className="ln" />
      <ellipse cx="346" cy="398" rx="4" ry="2.5" fill="#2a1810" />
      <path d="M 340 405 Q 346 409 352 405" className="dt" />
      <line x1="318" y1="398" x2="290" y2="395" className="dt" />
      <line x1="318" y1="403" x2="288" y2="405" className="dt" />
      <line x1="372" y1="396" x2="398" y2="393" className="dt" />
      <line x1="372" y1="401" x2="400" y2="403" className="dt" />
      <path d="M 315 410 Q 310 420 315 430 Q 320 435 328 430" className="ln" />
      <path d="M 430 445 Q 450 440 460 425 Q 465 410 455 400" className="ln" />
      <path d="M 370 370 Q 380 365 390 370" className="dt" />
      <path d="M 400 380 Q 410 375 420 380" className="dt" />
      <path d="M 410 410 Q 420 405 430 410" className="dt" />
      <text x="380" y="325" fontSize="16" fill="none" stroke="#2a1810" strokeWidth="1.2" fontFamily="serif" fontStyle="italic">z</text>
      <text x="395" y="305" fontSize="20" fill="none" stroke="#2a1810" strokeWidth="1.2" fontFamily="serif" fontStyle="italic">z</text>
      <text x="415" y="280" fontSize="24" fill="none" stroke="#2a1810" strokeWidth="1.2" fontFamily="serif" fontStyle="italic">z</text>
    </svg>
  );
}

function Page6() {
  return (
    <svg viewBox="0 0 800 620" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs><style>{S}</style></defs>
      <rect x="45" y="35" width="710" height="550" rx="6" className="tk" />
      <rect x="55" y="45" width="690" height="530" rx="4" className="tn" />
      <rect x="320" y="140" width="160" height="400" rx="4" className="tk" />
      <path d="M 315 140 Q 400 120 485 140" className="ln" />
      <path d="M 320 540 Q 310 545 310 555 L 490 555 Q 490 545 480 540" className="ln" />
      <circle cx="400" cy="220" r="55" className="tk" />
      <circle cx="400" cy="220" r="48" className="ln" />
      <circle cx="400" cy="220" r="3" fill="#2a1810" />
      <line x1="400" y1="220" x2="400" y2="180" className="ln" />
      <line x1="400" y1="220" x2="430" y2="210" className="ln" />
      {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => {
        const a = (i * 30 - 90) * Math.PI / 180;
        return <line key={i} x1={400+42*Math.cos(a)} y1={220+42*Math.sin(a)} x2={400+48*Math.cos(a)} y2={220+48*Math.sin(a)} className="dt" />;
      })}
      <rect x="360" y="310" width="80" height="120" rx="3" className="ln" />
      <rect x="365" y="315" width="70" height="110" rx="2" className="dt" />
      <line x1="400" y1="310" x2="385" y2="400" className="ln" />
      <circle cx="383" cy="405" r="15" className="ln" />
      <circle cx="383" cy="405" r="8" className="dt" />
      <path d="M 395 120 Q 400 105 405 120" className="ln" />
      <circle cx="400" cy="103" r="5" className="ln" />
      <path d="M 340 125 Q 330 105 345 85 Q 360 70 380 68 Q 400 66 420 68 Q 440 70 455 85 Q 470 105 460 125" className="tk" />
      <ellipse cx="400" cy="50" rx="42" ry="35" className="tk" />
      <path d="M 372 25 L 368 5 L 385 22" className="ln" />
      <path d="M 420 22 L 428 3 L 438 22" className="ln" />
      <ellipse cx="387" cy="46" rx="9" ry="10" className="ln" />
      <ellipse cx="413" cy="46" rx="9" ry="10" className="ln" />
      <circle cx="389" cy="44" r="4" fill="#2a1810" />
      <circle cx="415" cy="44" r="4" fill="#2a1810" />
      <ellipse cx="400" cy="60" rx="4.5" ry="3" fill="#2a1810" />
      <path d="M 400 63 L 400 67 M 397 67 Q 400 71 403 67" className="dt" />
      <line x1="370" y1="60" x2="340" y2="55" className="dt" />
      <line x1="370" y1="64" x2="338" y2="66" className="dt" />
      <line x1="430" y1="60" x2="460" y2="55" className="dt" />
      <line x1="430" y1="64" x2="462" y2="66" className="dt" />
      <path d="M 345 125 Q 335 132 330 145 L 338 148" className="ln" />
      <path d="M 455 125 Q 465 132 470 145 L 462 148" className="ln" />
      <path d="M 460 110 Q 485 115 495 140 Q 505 180 498 220 Q 492 250 488 265" className="tk" />
      <rect x="80" y="170" width="180" height="370" className="ln" />
      <line x1="80" y1="270" x2="260" y2="270" className="tn" />
      <line x1="80" y1="370" x2="260" y2="370" className="tn" />
      <line x1="80" y1="440" x2="260" y2="440" className="tn" />
      <rect x="95" y="190" width="15" height="75" rx="1" className="dt" />
      <rect x="113" y="200" width="12" height="65" rx="1" className="dt" />
      <rect x="128" y="185" width="18" height="80" rx="1" className="dt" />
      <rect x="150" y="195" width="14" height="70" rx="1" className="dt" />
      <rect x="100" y="290" width="14" height="75" rx="1" className="dt" />
      <rect x="118" y="285" width="18" height="80" rx="1" className="dt" />
      <rect x="540" y="200" width="150" height="120" rx="3" className="ln" />
      <rect x="550" y="210" width="130" height="100" rx="2" className="dt" />
      <path d="M 560 280 Q 590 250 620 270 Q 650 250 670 280" className="dt" />
      <circle cx="590" cy="240" r="8" className="dt" />
      <ellipse cx="400" cy="555" rx="280" ry="15" className="ln" />
      <ellipse cx="400" cy="555" rx="250" ry="10" className="dt" />
      <path d="M 580 535 Q 590 530 600 533 Q 605 535 603 540 Q 598 543 590 541 Q 582 539 580 535" className="ln" />
      <circle cx="598" cy="534" r="1.5" fill="#2a1810" />
      <path d="M 600 533 Q 608 530 612 533" className="dt" />
      <path d="M 580 538 Q 572 535 568 538" className="dt" />
    </svg>
  );
}

const PAGES = [
  { title: "The Duchess on Her Chaise", subtitle: "A pampered feline surveys her domain from a Victorian settee", Comp: Page1 },
  { title: "Mona Whiskers", subtitle: "A mysterious feline poses in the style of the Italian masters", Comp: Page2 },
  { title: "L'Heure du Thé", subtitle: "Tea time among Art Nouveau lilies and stained glass", Comp: Page3 },
  { title: "The Collector's Cabinet", subtitle: "A curious cat explores a Wunderkammer of treasures", Comp: Page4 },
  { title: "The Sunbeam Nap", subtitle: "Afternoon repose among Art Deco geometries and potted palms", Comp: Page5 },
  { title: "Château Chat", subtitle: "A regal feline guards the manor from atop a grandfather clock", Comp: Page6 },
];

export default function ColoringBook() {
  const [cur, setCur] = useState(0);
  const [flip, setFlip] = useState(false);
  const [dir, setDir] = useState("next");

  const go = (d) => {
    const n = d === "next" ? cur + 1 : cur - 1;
    if (n < 0 || n >= PAGES.length || flip) return;
    setDir(d);
    setFlip(true);
    setTimeout(() => { setCur(n); setFlip(false); }, 260);
  };

  const jump = (i) => {
    if (i === cur || flip) return;
    setDir(i > cur ? "next" : "prev");
    setFlip(true);
    setTimeout(() => { setCur(i); setFlip(false); }, 260);
  };

  const pg = PAGES[cur];
  const Comp = pg.Comp;

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f5efe6,#e8dfd4 50%,#f0e8dd)", fontFamily: "'Playfair Display',Georgia,serif", display: "flex", flexDirection: "column", alignItems: "center", padding: 20 }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, color: "#2a1810", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>Cats &amp; Curiosities</h1>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontStyle: "italic", color: "#6b5744", letterSpacing: "0.15em", margin: 0 }}>A Coloring Book for Lovers of the Finer Things</p>
        <div style={{ width: 120, height: 2, background: "linear-gradient(90deg,transparent,#8b7355,transparent)", margin: "10px auto 0" }} />
      </div>

      <div style={{ background: "white", borderRadius: 8, boxShadow: "0 8px 40px rgba(42,24,16,0.15)", padding: 24, maxWidth: 700, width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 600, color: "#2a1810", marginBottom: 4 }}>{pg.title}</h2>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, fontStyle: "italic", color: "#8b7355", margin: 0 }}>{pg.subtitle}</p>
        </div>
        <div style={{
          aspectRatio: "4/3", background: "#fefcf9", borderRadius: 4, border: "1px solid #e8dfd4", overflow: "hidden",
          transition: "opacity 0.26s ease, transform 0.26s ease",
          opacity: flip ? 0 : 1,
          transform: flip ? `translateX(${dir === "next" ? "-20px" : "20px"})` : "translateX(0)",
        }}>
          <Comp />
        </div>
        <div style={{ textAlign: "center", marginTop: 12, fontFamily: "'Cormorant Garamond',serif", fontSize: 13, color: "#a0917e", letterSpacing: "0.1em" }}>
          — {cur + 1} of {PAGES.length} —
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 20 }}>
        <button onClick={() => go("prev")} disabled={cur === 0} style={{ background: cur === 0 ? "#d4ccc0" : "#2a1810", color: "#fefcf9", border: "none", borderRadius: 6, padding: "10px 20px", fontFamily: "'Cormorant Garamond',serif", fontSize: 15, letterSpacing: "0.08em", cursor: cur === 0 ? "default" : "pointer", opacity: cur === 0 ? 0.5 : 1 }}>
          ← Previous
        </button>
        <div style={{ display: "flex", gap: 6 }}>
          {PAGES.map((_, i) => (
            <button key={i} onClick={() => jump(i)} style={{ width: i === cur ? 24 : 10, height: 10, borderRadius: 5, border: "none", background: i === cur ? "#2a1810" : "#c4b8a8", cursor: "pointer", transition: "all 0.3s ease" }} />
          ))}
        </div>
        <button onClick={() => go("next")} disabled={cur === PAGES.length - 1} style={{ background: cur === PAGES.length - 1 ? "#d4ccc0" : "#2a1810", color: "#fefcf9", border: "none", borderRadius: 6, padding: "10px 20px", fontFamily: "'Cormorant Garamond',serif", fontSize: 15, letterSpacing: "0.08em", cursor: cur === PAGES.length - 1 ? "default" : "pointer", opacity: cur === PAGES.length - 1 ? 0.5 : 1 }}>
          Next →
        </button>
      </div>

      <p style={{ marginTop: 16, fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "#a0917e", fontStyle: "italic" }}>
        Every line is generated entirely as SVG code — no images, just math and art
      </p>
    </div>
  );
}
