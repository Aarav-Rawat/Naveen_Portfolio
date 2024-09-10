import React from 'react'

export const MagicButton = ({icon,title}:{icon: React.ReactNode, title: string}) => {
  return (
    <button className="relative inline-flex h-8 w-full overflow-hidden rounded-md p-[1px] focus:outline-none my-5 ">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-base font-semibold text-white backdrop-blur-3xl gap-2">
   {title}
   {icon}
  </span>
</button>
  )
}