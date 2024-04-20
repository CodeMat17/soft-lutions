import { AiOutlineLoading } from "react-icons/ai";

const Loading = () => {
  return (
    <div className='flex items-center justify-center py-32'>
      <AiOutlineLoading className='text-3xl animate-spin' />
    </div>
  );
};

export default Loading;
