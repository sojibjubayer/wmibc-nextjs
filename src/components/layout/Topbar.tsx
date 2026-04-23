export default function TopBar() {
  return (
    <div className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm md:px-6">
        
        {/* Left Side */}
        <div className="flex flex-wrap items-center gap-4 text-slate-600">
          <span className="font-medium">
            📞 +974 4402 9807 
          </span>

          <span className="hidden md:block text-slate-300">|</span>

          <span className="font-medium">
            ✉ info@wmibc.com
          </span>
        </div>


      </div>
    </div>
  );
}