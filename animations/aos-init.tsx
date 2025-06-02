"use client";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    // initialize AOS with a default animation duration of 1000ms
    AOS.init({ duration: 1000 });

    // cleanup: refresh AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, []);
  // this component does not render anything
  return null;
}
