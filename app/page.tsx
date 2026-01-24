import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex items-center min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-16">
          <div className="space-y-6 sm:space-y-8 text-left lg:flex-1">
            <div>
              <h1 className="text-4xl md:text-5xl tracking-tight font-bold ">
                Hello,
                <br />
                I&apos;m <span className="text-foreground">China</span>
              </h1>
            </div>
            <p className="text-foreground max-w-lg">
              a <strong>full-stack developer</strong> with a passion for
              transforming ideas into high-performance applications. Skilled in
              writing clean code, crafting elegant UI/UX designs, and delivering
              seamless user experiences across mobile and web platforms.
            </p>

            <Link href="/articles">
              <button className="w-32 h-9 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors flex items-center justify-center gap-2 text-foreground text-sm font-medium">
                ARTICLES
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center lg:justify-end lg:flex-shrink-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      result="blur"
                    ></feGaussianBlur>
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    ></feComposite>
                  </filter>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="rgb(var(--foreground))"
                  strokeWidth="0.5"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    values="20;30;20"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="opacity"
                    values="0.3;0.1;0.3"
                    dur="8s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    values="35;45;35"
                    dur="12s"
                    repeatCount="indefinite"
                  ></animate>
                  <animate
                    attributeName="opacity"
                    values="0.4;0.1;0.4"
                    dur="12s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                  opacity="0.3"
                ></circle>
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                  opacity="0.3"
                ></circle>
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                  opacity="0.3"
                ></circle>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="30s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 80 50"
                      to="360 80 50"
                      dur="8s"
                      repeatCount="indefinite"
                      additive="sum"
                    ></animateTransform>
                    <circle
                      cx="85"
                      cy="50"
                      r="1"
                      fill="currentColor"
                      opacity="0.7"
                    ></circle>
                  </g>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="120 50 50"
                    to="480 50 50"
                    dur="45s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="240 50 50"
                    to="600 50 50"
                    dur="20s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 50 50"
                    to="360 50 50"
                    dur="60s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <circle
                    cx="88.27627669215792"
                    cy="50"
                    r="0.9234979554924097"
                    fill="currentColor"
                    opacity="0.4464623358864245"
                  ></circle>
                  <circle
                    cx="86.23742744248864"
                    cy="70.92168848866035"
                    r="0.5545168383270778"
                    fill="currentColor"
                    opacity="0.3020947288767772"
                  ></circle>
                  <circle
                    cx="69.17981696462468"
                    cy="83.2204174626014"
                    r="0.49102809076941334"
                    fill="currentColor"
                    opacity="0.43795916573901483"
                  ></circle>
                  <circle
                    cx="50"
                    cy="89.30271321795615"
                    r="0.8474215788750685"
                    fill="currentColor"
                    opacity="0.6651910656720101"
                  ></circle>
                  <circle
                    cx="29.497730443592893"
                    cy="85.51097254216975"
                    r="0.7327343429743781"
                    fill="currentColor"
                    opacity="0.6947819101513832"
                  ></circle>
                  <circle
                    cx="19.11673296411996"
                    cy="67.83046253662043"
                    r="0.33519497339432747"
                    fill="currentColor"
                    opacity="0.3634393804569616"
                  ></circle>
                  <circle
                    cx="8.906571167364241"
                    cy="50.00000000000001"
                    r="0.9828662685974958"
                    fill="currentColor"
                    opacity="0.5027174306790732"
                  ></circle>
                  <circle
                    cx="15.70191365195403"
                    cy="30.197990614266626"
                    r="0.8427270359153494"
                    fill="currentColor"
                    opacity="0.43967124064806506"
                  ></circle>
                  <circle
                    cx="31.29448184686746"
                    cy="17.601092176872527"
                    r="0.4312811416164893"
                    fill="currentColor"
                    opacity="0.5026928859931165"
                  ></circle>
                  <circle
                    cx="49.99999999999999"
                    cy="14.06290947833687"
                    r="0.8186944583486626"
                    fill="currentColor"
                    opacity="0.3411477337831848"
                  ></circle>
                  <circle
                    cx="69.3514213496629"
                    cy="16.48235502371076"
                    r="0.6492032431912458"
                    fill="currentColor"
                    opacity="0.5925264961853924"
                  ></circle>
                  <circle
                    cx="86.06505159538004"
                    cy="29.177832753069566"
                    r="0.751729124548684"
                    fill="currentColor"
                    opacity="0.5626051425665125"
                  ></circle>
                </g>
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="180 50 50"
                    to="540 50 50"
                    dur="35s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </g>
                <g filter="url(#glow)">
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="75;67.67766952966369;75"
                      dur="8s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="50;67.67766952966369;50"
                      dur="8s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="5s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="67.67766952966369;50;67.67766952966369"
                      dur="9s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="67.67766952966369;75;67.67766952966369"
                      dur="9s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="50;32.32233047033631;50"
                      dur="10s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="75;67.67766952966369;75"
                      dur="10s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="7s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="32.32233047033631;25;32.32233047033631"
                      dur="11s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="67.67766952966369;50;67.67766952966369"
                      dur="11s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="25;32.32233047033631;25"
                      dur="12s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="50;32.32233047033631;50"
                      dur="12s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="9s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="32.32233047033631;49.99999999999999;32.32233047033631"
                      dur="13s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="32.32233047033631;25;32.32233047033631"
                      dur="13s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="10s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="49.99999999999999;67.67766952966369;49.99999999999999"
                      dur="14s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="25;32.32233047033631;25"
                      dur="14s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="11s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                  <circle r="0.7" opacity="0.7" fill="currentColor">
                    <animate
                      attributeName="cx"
                      values="67.67766952966369;75;67.67766952966369"
                      dur="15s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="cy"
                      values="32.32233047033631;49.99999999999999;32.32233047033631"
                      dur="15s"
                      repeatCount="indefinite"
                    ></animate>
                    <animate
                      attributeName="opacity"
                      values="0.7;0.3;0.7"
                      dur="12s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>
                </g>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden">
                  <Image
                    src="/images/me.png"
                    alt="Ing China - Full Stack Developer"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
