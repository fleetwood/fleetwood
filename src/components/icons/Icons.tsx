import { ClassName } from "@/types/ClassName";
import { IconProps } from "@/types/props/IconProps";
import { SVGAttributes } from "react";
import {
  LuDownload,
  LuExpand,
  LuFileText,
  LuLightbulb,
  LuMonitorX,
  LuMoon,
  LuStopCircle,
  LuSun,
} from "react-icons/lu";
import { FaTimeline } from "react-icons/fa6";

export type SizeProps = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const currentColor = "currentColor",
  none = "none";

const sizeToClass = (size: SizeProps) =>
  size === undefined
    ? "w-10" // undefined
    : size === "xs"
    ? "w-4"
    : size === "sm"
    ? "w-6"
    : size === "lg"
    ? "w-12"
    : size === "xl"
    ? "w-32"
    : size === "2xl"
    ? "w-64"
    : "w-8"; // default or 'md'

export type SvgProps = SVGAttributes<SVGElement> &
  ClassName & {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  };

export const SvgIcon = ({
  fill = currentColor,
  viewBox = "0 0 50 50",
  size = "md",
  children,
  ...props
}: SvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    viewBox={viewBox}
    className={[sizeToClass(size), props.className].join(" ")}
    {...props}
  >
    {children}
  </svg>
);

export const IconDownload = (props: IconProps) => <LuDownload {...props} />;

export const IconExpand = (props: IconProps) => <LuExpand {...props} />;

export const IconLightbulb = (props: IconProps) => <LuLightbulb {...props} />;

export const IconMonitorX = (props: IconProps) => <LuMonitorX {...props} />;

export const IconMoon = (props: IconProps) => <LuMoon {...props} />;

export const IconResume = (props: IconProps) => <LuFileText {...props} />;

export const IconStop = (props: IconProps) => <LuStopCircle {...props} />;

export const IconTimeline = (props: IconProps) => <FaTimeline {...props} />;

export const IconSun = (props: IconProps) => <LuSun {...props} />;

export const FleetwoodLogo = (props: SvgProps) => (
  <SvgIcon fill={currentColor} viewBox="0 0 480 270" {...props}>
    <g fill={currentColor} stroke="none" transform="translate(0.000000,276.000000) scale(0.100000,-0.100000)">
    <path
        d="M830 2545 c-149 -31 -211 -82 -250 -210 -8 -25 -15 -158 -20 -360 -9
-345 -16 -395 -65 -453 -35 -42 -95 -63 -197 -69 l-88 -6 0 -62 0 -62 82 -6
c106 -7 154 -23 195 -64 58 -59 65 -101 73 -458 8 -345 14 -390 64 -465 56
-84 150 -119 349 -127 l127 -6 0 67 0 66 -64 0 c-84 0 -165 16 -196 38 -14 10
-34 36 -45 58 -18 36 -20 66 -26 374 -5 277 -9 344 -23 388 -24 74 -81 133
-161 168 l-63 28 52 21 c114 46 167 117 186 250 5 39 10 186 10 327 0 282 8
344 49 390 32 36 113 58 214 58 l67 0 0 65 0 65 -102 -1 c-57 0 -132 -7 -168
-14z"
      />
      <path
        d="M3750 2495 l0 -65 68 0 c71 0 176 -22 201 -43 8 -7 23 -32 35 -57 19
-41 21 -72 27 -375 7 -363 12 -398 69 -467 29 -35 136 -97 169 -98 9 -1 -6
-10 -33 -20 -99 -39 -157 -98 -188 -192 -6 -19 -13 -169 -17 -368 -6 -331 -6
-336 -31 -385 -34 -68 -71 -85 -200 -92 l-100 -6 0 -63 0 -64 94 0 c153 0 288
34 350 89 10 9 27 34 39 56 44 87 49 127 57 465 7 343 10 365 58 429 35 48 96
71 202 78 l90 6 0 62 0 62 -90 6 c-139 9 -201 45 -236 137 -14 37 -18 102 -25
365 -7 333 -12 374 -56 460 -12 22 -29 47 -39 56 -62 55 -197 89 -350 89 l-94
0 0 -65z"
      />
      <path
        d="M2670 2496 c-73 -16 -151 -43 -227 -77 l-63 -28 0 -166 0 -165 58 0
59 0 13 58 c25 115 83 197 168 239 112 55 269 30 344 -55 58 -67 81 -135 86
-252 5 -122 -7 -191 -47 -277 -52 -110 -139 -184 -278 -239 l-73 -28 0 -203 0
-203 75 0 75 0 0 159 0 159 78 26 c217 72 363 225 402 419 27 134 10 299 -40
398 -55 107 -193 206 -327 234 -81 17 -227 18 -303 1z"
      />
      <path
        d="M1855 2476 c-155 -39 -245 -147 -276 -333 -7 -46 -9 -151 -4 -325 l7
-257 -98 -3 -99 -3 -3 -67 -3 -68 101 0 100 0 0 -405 0 -405 235 0 235 0 0 70
0 70 -130 0 -130 0 0 335 0 335 165 0 165 0 0 64 0 63 -161 6 c-88 3 -164 8
-167 12 -4 4 -7 142 -7 308 0 339 6 386 59 441 55 59 174 72 249 29 36 -21 77
-93 77 -135 0 -27 1 -28 55 -28 l55 0 0 125 c0 146 15 130 -149 164 -115 23
-201 26 -276 7z"
      />
      <path
        d="M2710 877 c-100 -67 -100 -217 0 -284 97 -66 224 15 224 142 0 92
-66 165 -149 165 -27 0 -54 -8 -75 -23z"
      />
    </g>
  </SvgIcon>
);
