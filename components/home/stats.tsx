export default function Stats() {
  return (
    <section id="stats" className="bg-light">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-secondry font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-secondry uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats: { number: string; label: string }[] = [
  { number: "50K+", label: "Active Users" },
  { number: "1000+", label: "Group Sessions" },
  { number: "92%", label: "User Satisfaction" },
  { number: "24/7", label: "Support Available" },
];
