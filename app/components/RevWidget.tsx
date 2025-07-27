// components/ReviewWidget.js
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
      "name": "Luke Almond",
      "service": "Bathroom Renovation & Design",
      "review": "Fantastic Company! Really organised from start to finish. Said they would arrive Monday morning and be finished by the end of the week and they were. They organised everything from ripping out the old bathroom, plastering, tiling, plumbing, fitting and painting. I would highly recommend to anyone that wants a new bathroom or kitchen!",
    },
    {
      "name": "Jean Morriss",
      "service": "Walk in Showers & Wet Rooms",
      "review": "Alex recently fitted a new shower unit in our bathroom, he has done a fantastic job, extremely tidy & friendly, would highly recommend",
    },
    {
      "name": "Allen Tortoishell",
      "service": "Bathroom Renovation & Design",
      "review": "Just had my bathroom refurb done by Alex and his team along with Simon from Blythe ceramics who I’ve used before what can I say 10/10 absolutely fantastic will be using them again for future projects Alex is fantastic from start to finish going above and beyond to make sure the job is going along and communicating all the way 100% recommend them",
    },
    {
      "name": "Christine Horton",
      "service": "Boilers & Heating",
      "review": "We have used Ace solutions for some plumbing and also to install 6 radiators for us. I can not recommend them highly enough, extremely polite and professional. If I could give 10 stars I would. Thank you Ace solutions",
    }
];

export default function ReviewWidget() {
  return (
    <div className=" mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-start transition-all duration-300 hover:shadow-xl"
          >
            <div className="mb-3">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.service}</p>
              <div className="flex text-yellow-400 mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
            <p className="text-gray-700 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
