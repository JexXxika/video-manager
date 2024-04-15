import React from "react";

export default function Widget() {
  const widgetData = [
    {
      name: "Pixels After Dark",
      occupation: "YouTuber",
      testimonial:
        "I took a call with Nate and he helped me understand the theory behind hooks, and proceeded to give me tips and tricks to become better at storytelling in general. A guy that actually wants to aid growth.",
      avatar: "https://placehold.co/100x100",
    },
    {
      name: "Jack Cole",
      occupation: "Owner of VP+ Community",
      testimonial:
        "My channel now averages 1.5k subs per month along with a 1/4 million views while being in a very small niche all while still in school.",
      avatar: "https://placehold.co/100x100",
    },
    {
      name: "Milan",
      occupation: "Marketing Executive",
      testimonial:
        "Nate is, what I would say, the person behind me realising I could be maximising my YouTube Channel a lot more. He went over my processes and made them more efficient. He is extremely knowledgeable.",
      avatar: "https://placehold.co/100x100",
    },
  ];

  return (
    <div className="bg-zinc-900 text-white p-6 mx-auto max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {widgetData.map((widget, index) => (
          <div key={index} className="bg-zinc-800 p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img src={widget.avatar} alt="Avatar" className="rounded-full" />
              <div>
                <p className="font-semibold">{widget.name}</p>
                <p className="text-zinc-400 text-sm">{widget.occupation}</p>
              </div>
            </div>
            <p className="text-gray-500 text-lg">"{widget.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}

