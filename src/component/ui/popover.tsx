// "use client";
// import React, { useState, useRef, useEffect, ReactNode } from "react";
// import "@/styles/component/ui/ui.css";

// interface PopoverProps {
//   trigger: ReactNode;
//   children: ReactNode;
// }

// const Popover: React.FC<PopoverProps> = ({ trigger, children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const popoverRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLButtonElement>(null);

//   const togglePopover = () => setIsOpen((prev) => !prev);
//   const closePopover = () => setIsOpen(false);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         popoverRef.current &&
//         !popoverRef.current.contains(event.target as Node) &&
//         !triggerRef.current?.contains(event.target as Node)
//       ) {
//         closePopover();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div
//       // className="popover-container"
//       style={{ position: "relative", display: "inline-block" }}
//     >
//       <button ref={triggerRef} onClick={togglePopover}>
//         {trigger}
//       </button>
//       {isOpen && (
//         <div
//           ref={popoverRef}
//           className="popover-content"
//           style={{
//             position: "absolute",
//             top: "100%", // Aligns the popover below the trigger
//             left: 0,
//             marginTop: "0.5rem", // Adds spacing below the trigger button
//             zIndex: 1000,
//           }}
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Popover;
