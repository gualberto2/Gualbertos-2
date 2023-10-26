// ("use client");

// import * as React from "react";
// import * as SeparatorPrimitive from "@radix-ui/react-separator";

// import { cn } from "@/lib/utils";

// const PoweredByOcomni = React.forwardRef<
//   React.ElementRef<typeof SeparatorPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
// >((
//     { className, orientation = "horizontal", decorative = true, ...props },
//     ref
//   )) => ()

// const Separator = React.forwardRef<
//   React.ElementRef<typeof SeparatorPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
// >(
//   (
//     { className, orientation = "horizontal", decorative = true, ...props },
//     ref
//   ) => (
//     <SeparatorPrimitive.Root
//       ref={ref}
//       decorative={decorative}
//       orientation={orientation}
//       className={cn(
//         "shrink-0 bg-border",
//         orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
//         className
//       )}
//       {...props}
//     />
//   )
// );
// Separator.displayName = SeparatorPrimitive.Root.displayName;

const PoweredByOcomni = () => {
  return (
    <section className="bg-white">
      <div>
        <p>
          Powered by <span className="text-ocomni uppercase ">OCOMNI</span>
        </p>
      </div>
    </section>
  );
};
export default PoweredByOcomni;
