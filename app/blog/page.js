import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CodeMat Soft-lutions | BLOG",
  description: "CodeMat Soft-lutions blogpost page",
};

const data = [
  {
    id: 1,
    title:
      " Staff Retirement: The Strategic Advantage of Early Business Ventures",
    content:
      "Retirement marks a significant transition in life, especially for public servants who have dedicated years to serving the community. However, this new chapter can be daunting due to the unpredictable nature of pension disbursements and the often harsh economic climate. That’s why it’s essential to consider entrepreneurship before hanging up your hat.",
    slug: "the_strategic_advantage_of_early_business_ventures",
    date: "Oct 11, 2023",
  },

  {
    id: 2,
    title: "The Power of a Website in Today’s Competitive Market",
    content:
      "In the fast-paced, digital world we live in, businesses must employ strategic tactics to stay ahead of the competition. One such strategy is the use of a website optimized for search engines (SEO). Here are some compelling reasons why a modern business needs a website:",
    slug: "the_power_of_a_website",
    date: "Oct 20, 2023",
  },
  // {
  //   id: 3,
  //   title: "",
  //   content: "",
  //   slug: "the_power_of_a_website",
  //   date: "Oct 22, 2023",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   content: "",
  //   slug: "the_power_of_a_website",
  //   date: "Oct 29, 2023",
  // },
];

const BlogPage = async () => {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select("*");

  return (
    <div className='px-4 py-8 min-h-screen '>
      <h1 className='font-semibold text-3xl text-center '>BLOG POSTS</h1>

      <div className='mt-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <div className='rounded-lg overflow-hidden border shadow-md'>
              <div className='flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4'>
                <Image
                  alt=''
                  priority
                  width={30}
                  height={30}
                  src='/logo.webp'
                />

                <p className='text-sm font-light'>{post.date}</p>
              </div>
              <div>
                <div className=' bg-gray-50 dark:bg-gray-700 p-4 space-y-3'>
                  <p className='font-light text-xl'>{post.title}</p>
                  <p className='text-sm line-clamp-3 font-light'>
                    {post.content}
                  </p>
                  <p className='text-xs italic'>- Soft-lutions</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
    </div>
  );
};

export default BlogPage;
