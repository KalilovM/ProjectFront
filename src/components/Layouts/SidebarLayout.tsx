import React from "react";

const SidebarLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <aside className="mb-4 flex-none order-1 w-[325px]">
      <div className={"text-base mb-3.5 rounded-sm bg-gray-800 text-left px-4 py-5"}>
        <div className={"mb-2 gap-7 grid grid-flow-row grid-cols-[100%] min-w-0"}>
          {children}
        </div>
      </div>
    </aside>
  );
};

export default SidebarLayout;