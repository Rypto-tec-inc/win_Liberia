import { GlowingEffect } from "@/components/grid-glow-effect-purple-blue";
import { cn } from "@/lib/utils";
import { TrophyIcon, Gift, Phone } from "lucide-react";
import { CgDollar } from "react-icons/cg";

export default function GlowingEffects() {
  return (
    <div className="h-fit flex items-center justify-center w-full">
      <ul
        className={cn(
          // base: stack (1 column full width)
          "flex flex-col gap-6 w-full max-w-6xl",

          // md: flex row (wrap cards instead of grid)
          " md:flex-row md:flex-wrap md:justify-center",

          // lg+: use custom grid
          "lg:grid lg:gap-0 lg:h-[38rem]",
          "lg:grid-cols-[1fr_1fr_0.1fr_1fr_1fr]",
          "lg:grid-rows-[1fr_1fr_0.1fr_1fr_1fr]"
        )}
      >
        <GridItem
          area="lg:col-[4/6] lg:row-[1/3]"
          icon={<Gift className="h-4 w-4" />}
          title="Select WinLiberia OR One of our Partners"
          description="Select your playing amount"
        />
        <GridItem
          area="lg:col-[1/3] lg:row-[1/3]"
          icon={<Phone className="h-4 w-4" />}
          title="Dial *255#"
          description="Using your mobile phone, dial *255# to access the WINLIBERIA menu. Available on MTN number in Liberia."
        />
        <GridItem
          area="lg:col-[1/3] lg:row-[4/6]"
          icon={<CgDollar className="h-4 w-4" />}
          title="When prompted"
          description="Pay securely using mobile money. The minimum stake is just 100 LRD, with opportunities to win up to 1,000,000 LRD!"
        />
        <GridItem
          area="lg:col-[4/6] lg:row-[4/6]"
          icon={<TrophyIcon className="h-4 w-4" />}
          title="Wait for Results"
          description="Results are announced regularly throughout the day. Winners are notified instantly via SMS."
        />

        {/* Center glowing circle */}
        <li className=" max-md:hidden lg:col-[3/4] lg:row-[3/4] flex items-center justify-center">
          <div className="relative w-8 h-8 rounded-full bg-white/80 dark:bg-black border border-slate-200/70 dark:border-slate-700/40 shadow-lg shadow-blue-500/30 dark:shadow-blue-900/50">
            <GlowingEffect
              spread={45}
              glow={true}
              disabled={false}
              proximity={70}
              inactiveZone={0.05}
              borderWidth={2}
              variant="blue-purple"
              blur={1}
              movementDuration={2}
            />
            <div className="absolute inset-1 rounded-full bg-black/80 dark:bg-black" />
          </div>
        </li>
      </ul>
    </div>
  );
}

interface GridItemProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("list-none min-h-[12rem] flex-1", area)}>
      <div className="relative h-full rounded-[1.25rem] border border-slate-200/60 dark:border-slate-700/40 p-3 md:rounded-[1.5rem] md:p-4 bg-white/50 dark:bg-black backdrop-blur-sm shadow-lg">
        <GlowingEffect
          spread={45}
          glow={true}
          disabled={false}
          proximity={70}
          inactiveZone={0.05}
          borderWidth={3}
          variant="blue-purple-dark"
          blur={1}
          movementDuration={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-slate-100/70 dark:border-slate-700/30 bg-white/80 dark:bg-black backdrop-blur-sm p-7 md:p-7 shadow-sm dark:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.3)]">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="w-fit rounded-lg border border-slate-200/50 dark:border-slate-600/40 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 p-2.5 shadow-sm">
              <div className="text-blue-600 dark:text-blue-400">{icon}</div>
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-2xl font-Agdasima font-semibold text-slate-900 dark:text-slate-100">
                {title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
