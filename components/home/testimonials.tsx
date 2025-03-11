export default function Testimonial() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-16 capitalize">
          what our users say
        </h2>
        <ul className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="bg-light p-6 rounded-lg shadow-xl border border-primary"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-lighter flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold">{testimonial.author}</h3>
                  <span className="text-secondry">{testimonial.role}</span>
                </div>
              </div>
              <p className="mt-5 text-lg">
                <q>{testimonial.quote}</q>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const testimonials: {
  quote: string;
  author: string;
  role: string;
}[] = [
  {
    quote:
      "This platform has transformed how I manage my mental health. The AI analysis is incredibly accurate.",
    author: "Sarah M.",
    role: "User",
  },
  {
    quote:
      "The group therapy sessions have given me a supportive community I never knew I needed.",
    author: "Michael R.",
    role: "Group Member",
  },
  {
    quote:
      "The personalized insights helped me understand my patterns and make positive changes.",
    author: "Emma L.",
    role: "Active User",
  },
];
