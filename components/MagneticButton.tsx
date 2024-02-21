import Link from "next/link";
import {
  MotionValue,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

export default function Nav() {
  const MotionLink = motion(Link);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };

  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 200);
    y.set(yRange * 200);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const textX = useTransform(x, (latest) => latest * 5);
  const textY = useTransform(y, (latest) => latest * 5);

  return (
    <motion.div
      className="w-[200px] h-[200px] bg-black rounded-full text-white flex items-center justify-center hover:bg-blue-700 cursor-pointer duration-300"
      onPointerMove={(event) => {
        const item = event.currentTarget;
        setTransform(item, event, x, y);
      }}
      onPointerLeave={(event) => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
    >
      <MotionLink href={"/hello"}>
        <motion.span style={{ x: textX, y: textY }} className="z-10 relative text-2xl">
          About
        </motion.span>
      </MotionLink>
    </motion.div>
  );
}
