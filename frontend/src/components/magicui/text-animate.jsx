import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  show: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.5 } },
};

export function TextAnimate({
  children,
  className,
  as: Component = "div",
  animation = "blurIn",
  delay = 0,
}) {
  const words = typeof children === 'string' ? children.split(" ") : [children];
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn(className)}
      style={{ display: 'inline-block' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span variants={defaultItemVariants} style={{ display: 'inline-block' }}>
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </React.Fragment>
      ))}
    </MotionComponent>
  );
}
