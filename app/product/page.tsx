import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daftar Produk | CV Anicon Pracast",
  description: "This is Blog Page for Daftar Produk | CV Anicon Pracast",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Daftar Produk"
        description="Anda dapat melihat semua produk yang dapat kami supply di bawah ini, seluruh harga masih bersifat penawaran, klik salah satu produk untuk melihat harga"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
          {/* <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
