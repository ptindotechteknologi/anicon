"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags, publishDate } = blog;
  const router = useRouter();
  return (
    <>
      <div
        className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
        onClick={() => router.push("/blog-details/" + blog.id)}
      >
        <div className="relative block aspect-[37/22] w-full ">
          {Boolean(tags.length) && (
            <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
              {tags[0]}
            </span>
          )}

          <Image src={image} alt="image" fill />
        </div>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
          <h3>
            <div className=" mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
              {title}
            </div>
          </h3>
          <p className=" whitespace-no-wrap h-20 overflow-hidden border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 ">
            {paragraph}
          </p>
          <Link
            href={"/blog-details/" + blog.id}
            className="flex mt-2 w-full items-center justify-center rounded-sm bg-primary px-9 py-1 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
             More Details
          </Link>
          {/* <button
            
            onClick={() => router.push("/blog-details/" + blog.id)}
            className="flex w-full items-center justify-center rounded-sm bg-primary px-9 py-1 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            More Details
          </button> */}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
