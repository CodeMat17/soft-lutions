import { Square_Peg } from "next/font/google";

const square_peg = Square_Peg({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "CodeMat Soft-lutions | WHY?",
  description:
    "Why you need a website. Find below reasons why you need a website.",
};

const reviews = [
  {
    id: 1,

    name: "Mr. Anukakwa Sam",
    note: "CodeMAt Soft-lution is a game-changer! Their innovative solutions transformed our business landscape. From AI development to web development, they deliver excellence. Highly recommended.",
    who: "Satisfied Client",
  },
  {
    id: 2,
    name: "Mardiko Ventures",
    note: "CodeMat Soft-lutions commitment to quality and attention to details and innovative mind set set the apart. Ere are thrilled with the results!.",
    who: "Satisfied Client",
  },
  {
    id: 3,
    name: "African Designs and Fabrics",
    note: "CodeMat Soft-lutions was the best decision we made. Their AI solutions streamlined our processes, and their web development captivated our audience. A reliable partner indeed!.",
    who: "Happy Customer",
  },
];

const Testimonial = () => {
  return (
    <div className='py-20 px-4 max-w-7xl mx-auto'>
      <h1 className='font-semibold text-3xl text-center uppercase'>
        Testimonials / Review
      </h1>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        {reviews.map((review) => (
          <div
            key={review.id}
            className='flex flex-col sm:flex-ro gap-3 sm:gap-1 bg-gray-100 dark:bg-gray-700 p-5 rounded-lg shadow-md max-w-xl mx-auto'>
            <div className=''>
              <p className={`text-cente font-light text-lg ${square_peg}`}>
                {review.note}
              </p>
            </div>
            <div>
              <p className='text-sm '>
                - {review.name},{" "}
                <span className='text-gray-500'>{review.who}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
