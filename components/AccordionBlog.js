"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const AccordionBlog = () => {
  return (
    <div>
      <Accordion
        type='single'
        collapsible
        className='w-full max-w-3xl mx-auto space-y-4'>
        <AccordionItem
          value='item-1'
          className='rounded-xl overflow-hidden border shadow-md my-0'>
          <AccordionTrigger>
            <div className='w-full '>
              <div className='flex items-center justify-between pl-4'>
                <Image
                  alt=''
                  priority
                  width={30}
                  height={30}
                  src='/logo.webp'
                />

                <p className='text-sm font-light'>Oct 11, 2023</p>
              </div>
              <h1 className='font-light text-2xl text-left p-4'>
                Staff Retirement: The Strategic Advantage of Early Business
                Ventures
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className='px-4 space-y-3 text-lg'>
              <p>
                Retirement marks a significant transition in life, especially
                for public servants who have dedicated years to serving the
                community. However, this new chapter can be daunting due to the
                unpredictable nature of pension disbursements and the often
                harsh economic climate. That&apos;s why it&apos;s essential to
                consider entrepreneurship before hanging up your hat.
              </p>
              <p>
                <strong>The Risks of Post-Retirement</strong> Start-ups Starting
                a business after retirement might seem like a natural step, but
                it comes with considerable risks:
              </p>
              <ul className='mx-5'>
                <li>
                  <strong>Financial Instability:</strong> Pensions may not
                  always cover living expenses, let alone the costs associated
                  with launching a new venture.
                </li>
                <li>
                  <strong>Market Unpredictability:</strong> Without prior market
                  research, new retirees can find themselves investing in
                  unprofitable markets.
                </li>
                <li>
                  <strong>Time Management:</strong> Adjusting to the demands of
                  a new business can be overwhelming without the structure of a
                  regular job.
                </li>
              </ul>
              <p>Why Start Before Retirement?</p>
              <ol className='ml-5'>
                <li>
                  <strong>Test the Waters:</strong> Starting a business 5-6
                  years before retirement allows you to understand the market
                  and customer needs.
                </li>
                <li>
                  <strong>Balance Commitments:</strong> It ensures your new
                  venture doesn&apos;t conflict with your current job
                  responsibilities.
                </li>
                <li>
                  <strong>Gain Insights:</strong> You&apos;ll get a realistic
                  preview of the time and effort required to run your business
                  full-time.
                </li>
              </ol>
              <p>Potential Ventures for Public Servants:</p>
              <ul className='ml-5'>
                <li>Property Management</li>
                <li>Writing and Editing</li> <li>Consulting</li>{" "}
                <li>Catering</li>
                <li>Public Speaking</li> <li>Blogging</li>
                <li>Affiliate Marketing</li> <li>Food Processing</li>
                <li>Laundry Services</li> <li>Printing and Publishing</li>
                <li>Poultry Farming</li> <li>eCommerce</li>
                <li>Bed and Breakfast Operations</li> <li>Soap Production</li>
                <li>Educational Services</li> <li>Online Tutoring</li>
                <li>And many more…</li>
              </ul>

              <p>The Perks of Early Entrepreneurship:</p>
              <ul className='ml-5'>
                <li>
                  <strong>Financial Security:</strong> Supplement your pension
                  and increase your income.
                </li>
                <li>
                  <strong>New Horizons:</strong> Explore different industries
                  and passions.
                </li>
                <li>
                  <strong>Active Engagement:</strong> Stay mentally and
                  physically active through business challenges.
                </li>
              </ul>

              <p>Success Factors:</p>
              <ul className='ml-5'>
                <li>
                  <strong>Passion:</strong> Choose a business that excites you.
                </li>
                <li>
                  <strong>Research:</strong> Conduct a comprehensive feasibility
                  study.
                </li>
                <li>
                  <strong>Modern Marketing:</strong> Utilize efficient, digital
                  marketing strategies to reach a wider audience.
                </li>
              </ul>
              <p>
                <strong>Embracing the Digital Age:</strong> In today&apos;s
                world, traditional marketing methods are no longer sufficient. A
                website can serve as your business&apos;s virtual headquarters,
                saving on rent and reaching customers globally.
              </p>
              <p>
                <strong>Introducing CodeMat Soft-lutions:</strong> CodeMat
                Soft-lutions is your partner in this journey, offering
                affordable, reliable website and software solutions. We&apos;re
                here to turn your business aspirations into reality, setting you
                up for a rewarding post-retirement life. Reach out to us, and
                let&apos;s make your dream business a thriving success.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value='item-2'
          className='rounded-xl overflow-hidden border shadow-md my-0'>
          <AccordionTrigger>
            {" "}
            <div className='w-full '>
              <div className='flex items-center justify-between pl-4'>
                <Image
                  alt=''
                  priority
                  width={30}
                  height={30}
                  src='/logo.webp'
                />

                <p className='text-sm font-light'>Oct 20, 2023</p>
              </div>
              <h1 className='font-light text-2xl text-left p-4'>
                The Power of a Website in Today&apos;s Competitive Market
              </h1>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className='px-4 space-y-3 text-lg'>
              <p>
                In the fast-paced, digital world we live in, businesses must
                employ strategic tactics to stay ahead of the competition. One
                such strategy is the use of a website optimized for search
                engines (SEO). Here are some compelling reasons why a modern
                business needs a website:
              </p>
              <div>
                <p className='text-lg font-medium'>Constant Online Presence</p>
                <p>
                  A website provides your business with a 24/7 online presence.
                  This means that your customers can find and contact you at any
                  time, even outside of regular business hours.
                </p>
              </div>

              <div>
                <p className='text-lg font-medium'>
                  Breaking Geographical Barriers
                </p>
                <p>
                  A website accessible worldwide allows your business to break
                  through geographical barriers. This global reach can lead to
                  significant market expansion.
                </p>
              </div>

              <div>
                <p className='text-lg font-medium'>Effective Advertising</p>
                <p>
                  A well-optimized website can increase the visibility of your
                  products or services exponentially faster than traditional
                  offline advertising methods. It&apos;s like having a billboard that
                  millions can see at once.
                </p>
              </div>

              <div>
                <p className='text-lg font-medium'>
                  Staying Ahead of the Competition
                </p>
                <p>
                  If your business doesn&apos;t have a website, it&apos;s likely that your
                  competitors do. This means you could be missing out on
                  attracting new customers. Having a website helps you stay
                  competitive and potentially outperform your competitors.
                </p>
              </div>

              <div>
                <p className='text-lg font-medium'>Enhanced Interaction</p>
                <p>
                  A well-designed website facilitates easy interaction with
                  clients. Prompt responses to client inquiries can foster
                  positive customer relations. Plus, positive feedback can be
                  showcased as testimonials, attracting more customers.
                </p>
              </div>

              <div>
                <p className='text-lg font-medium'>Opportunities for Growth</p>
                <p>
                  A website serves as a platform to highlight your achievements
                  and future potential to clients and investors. It&apos;s a space to
                  share your story, your successes, and your vision for the
                  future.
                </p>
              </div>
              <p>
                In conclusion, a website is not just a digital presence. It&apos;s a
                powerful tool for growth, expansion, and success in today&apos;s
                competitive market. Don&apos;t miss out on the opportunities it can
                offer.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionBlog;
