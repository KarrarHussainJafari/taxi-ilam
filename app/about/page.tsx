const About = () => (
  <div className="container mx-auto p-8">
    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
      <img
        src="/driver-photo.jpg"
        alt="Driver"
        className="rounded-full w-40 h-40 shadow-lg"
      />
      <div>
        <h2 className="text-2xl font-bold">John Doe - Trusted Taxi Driver</h2>
        <p className="mt-4 text-gray-700">
          With over 10 years of experience, I am committed to providing safe,
          reliable, and professional rides. I’m certified and have countless
          testimonials from happy clients.
        </p>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold">Testimonials</h3>
      <ul className="mt-4 space-y-2">
        <li>⭐️⭐️⭐️⭐️⭐️ "John is always on time and friendly!" - Sarah</li>
        <li>⭐️⭐️⭐️⭐️⭐️ "The ride was smooth and professional." - Alex</li>
      </ul>
    </div>
  </div>
);
export default About;
