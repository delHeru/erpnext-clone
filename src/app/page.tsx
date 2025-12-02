'use client'

export default function Home() {
  return (
    <div className="flex h-screen">
<div className="w-[220px] border-r border-gray-200 bg-white">
    sidebar content
  </div>

  <div className="flex-1 overflow-auto">
    main content…
  </div>
    </div>
    
  );
}
