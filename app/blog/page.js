import { createClient } from "@/utils/supabase/server";

const BlogPage = async () => {
  const supabase = createClient();
  const { data: posts, error } = await supabase.from("posts").select("*");

  return (
    <div className='p-5 min-h-[73vh]'>
      <div className='w-full rounded-lg overflow-hidden border shadow-md'>
        <div className='flex items-center justify-between bg-gray-100 p-4'>
          <div>logo</div>
          <p className='text-sm'>Oct 11, 2023</p>
        </div>
        <div className='text-xl bg-gray-50 p-4'>
          Public Servant Retirement: The Strategic Advantage of Early Business
          Ventures
        </div>
      </div>

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default BlogPage;
