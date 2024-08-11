"use client";
import { motion } from "framer-motion";

const circles = [
  { cx: 63.2801208, cy: 39.4836693, r: 3.5781164 },
  { cx: 47.8211975, cy: 45.7652626, r: 10.5989332 },
  { cx: 67.1561584, cy: 52.0069809, r: 7.4547563 },
  { cx: 74.6109009, cy: 39.483757, r: 5.0688348 },
  { cx: 79.3803711, cy: 49.6212349, r: 3.8769031 },
  { cx: 79.0830078, cy: 30.2406883, r: 2.9809473 },
  { cx: 65.6653442, cy: 26.9606724, r: 7.7522621 },
  { cx: 54.0368347, cy: 30.8368931, r: 2.6836023 },
  { cx: 12.2460632, cy: 29.0809765, r: 2.6836023 },
  { cx: 89.2203369, cy: 54.6895638, r: 5.6659174 },
  { cx: 68.9446411, cy: 12.052619, r: 5.3674645 },
  { cx: 48.6696472, cy: 20.1028423, r: 7.75175 },
  { cx: 45.9857178, cy: 31.4332886, r: 2.0870283 },
  { cx: 12.0159607, cy: 62.2856178, r: 6.8580084 },
  { cx: 30.1643066, cy: 14.7968512, r: 5.8226504 },
  { cx: 33.3986816, cy: 29.6770401, r: 7.4403577 },
  { cx: 33.3986816, cy: 41.3214455, r: 2.2643397 },
  { cx: 22.4004517, cy: 45.525547, r: 6.7926006 },
  { cx: 81.3523254, cy: 72.9260406, r: 8.3484993 },
  { cx: 66.7413635, cy: 77.6965103, r: 5.9630885 },
  { cx: 35.9855652, cy: 69.4203949, r: 8.4098864 },
  { cx: 46.6603088, cy: 76.2125549, r: 3.2347298 },
  { cx: 78.5843506, cy: 59.0333977, r: 3.0467765 },
  { cx: 69.6456299, cy: 64.7219467, r: 4.265645 },
  { cx: 56.6438293, cy: 57.2054749, r: 2.2348571 },
  { cx: 51.7272644, cy: 91.7970047, r: 2.2348571 },
  { cx: 55.4251404, cy: 67.7685699, r: 6.7031717 },
  { cx: 45.2675781, cy: 60.4556007, r: 2.8437576 },
  { cx: 37.9544373, cy: 57.0020866, r: 2.4380357 },
  { cx: 32.8760376, cy: 49.0792007, r: 2.6410723 },
  { cx: 26.7814331, cy: 58.0182495, r: 4.4696827 },
];

const colors = ["#6A0DAD", "#FF6347", "#FFD700", "#1E90FF"];

const AnimatedCircles = () => (
  <svg viewBox="0 0 100 100" className="w-1/2 self-center px-8 hidden xl:flex">
    {circles.map((circle, index) => (
      <motion.circle
        key={index}
        cx={circle.cx}
        cy={circle.cy}
        r={circle.r}
        fill={colors[index % colors.length]}
        stroke={colors[index % colors.length]}
        strokeWidth={0.8}
        initial={{
          opacity: 0.05,
          fillOpacity: 1,
        }}
        whileInView={{
          opacity: 1,
          translateX: [0, -1, 0, 1, 0],
          translateY: [0, -1, 0, 1, 0],
          fillOpacity: 0,
          transition: { duration: 0.5, delay: index * 0.15 },
        }}
        whileHover={{ fillOpacity: 1, transition: { duration: 0.5 } }}
      />
    ))}
  </svg>
);

export default AnimatedCircles;
