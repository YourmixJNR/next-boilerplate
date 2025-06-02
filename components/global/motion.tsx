"use client";
import { motion, Variants } from "framer-motion";

interface MotionProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
}

const Motion = ({
  children,
  variants,
  className = "",
  delay = 0,
}: MotionProps) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Motion;
