import {
  CheckCircle2,
  FileCheck2,
  Clock3,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: FileCheck2,
    title: "Complete Documentation",
    description:
      "Expert guidance through every document requirement to minimize delays and rejection risks.",
  },
  {
    icon: Clock3,
    title: "Fast & Reliable",
    description:
      "Processing aligned with the latest immigration policies for a smooth, time-efficient journey.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    description:
      "Clear communication and honest guidance with no hidden confusion or unexpected hurdles.",
  },
  {
    icon: CheckCircle2,
    title: "Personalized Support",
    description:
      "Tailored solutions for work, visit, and student visas based on your specific profile.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Header Area */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--brand-royal) sm:text-xs">
            The WMIBC Advantage
          </p>

          <h2 className="text-(--text-heading) mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Trusted Expertise for Your Global Success
          </h2>

          <p className="text-(--text-body) mt-6 text-base leading-relaxed sm:text-lg">
            We help professionals and students from Qatar and the GCC move
            toward international opportunities with absolute confidence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Side: Authority Card */}
          <div className="flex flex-col rounded-[2.5rem] border border-slate-100 bg-(--bg-soft-blue) p-8 shadow-sm lg:col-span-5 lg:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-(--brand-royal) shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              </span>
              Trusted Partner
            </span>

            <h3 className="text-(--text-heading) mt-6 text-2xl font-black leading-tight sm:text-3xl">
              Helping You Reach Global Goals with Confidence
            </h3>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-(--text-body)">
              <p>
                From our offices in **Doha** and **Bangladesh**, we provide 
                expert visa guidance for Europe, Canada, Australia, and the UK.
              </p>
              <p>
                Whether it's work, study, or business setup, we provide 
                personalized consultation and reliable end-to-end assistance.
              </p>
            </div>

            {/* Stats Highlight */}
            <div className="mt-10 rounded-3xl bg-linear-to-br from-(--brand-navy) to-(--brand-royal) p-7 text-white shadow-lg">
              <div className="flex items-center justify-between">
                <p className="text-2xl font-black">7+ Years</p>
                <ArrowUpRight className="h-6 w-6 opacity-50" />
              </div>
              <p className="mt-2 text-sm font-medium leading-relaxed text-blue-100/90">
                Industry experience supporting thousands of successful 
                immigration applications with professional guidance.
              </p>
            </div>
          </div>

          {/* Right Side: Feature Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
            {reasons.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col rounded-4xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-(--bg-soft-blue) transition-colors group-hover:bg-(--brand-royal)">
                    <Icon className="h-6 w-6 text-(--brand-royal) transition-colors group-hover:text-white" />
                  </div>

                  <h4 className="text-(--text-heading) mt-5 text-lg font-bold">
                    {item.title}
                  </h4>

                  <p className="text-(--text-body) mt-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}