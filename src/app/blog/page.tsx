import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Skin & Hair Care Tips — Dr. Pallawi's Clinic",
  description:
    "Read expert articles on acne, hair fall, pigmentation, fungal infections, and cosmetic treatments by Dr. Pallawi, Jamshedpur.",
};

const blogs = [
  {
    slug: "best-dermatologist-in-jamshedpur",
    title: "Best Dermatologist in Jamshedpur — What to Look For",
    excerpt:
      "Finding a trusted dermatologist is essential for effective skin and hair care. Learn what qualifications and expertise to look for.",
    date: "Nov 15, 2024",
    category: "Guide",
  },
  {
    slug: "acne-treatment-in-jamshedpur",
    title: "Complete Guide to Acne Treatment in Jamshedpur",
    excerpt:
      "Struggling with stubborn acne? Explore the latest medical and cosmetic treatments available for clear, blemish-free skin.",
    date: "Oct 28, 2024",
    category: "Skin Care",
  },
  {
    slug: "hair-fall-treatment-guide",
    title: "Hair Fall Treatment — Causes, Diagnosis & Solutions",
    excerpt:
      "From PRP therapy to minoxidil — learn about the most effective treatments for hair loss and how to choose the right one.",
    date: "Oct 12, 2024",
    category: "Hair Care",
  },
  {
    slug: "fungal-infection-treatment-tips",
    title: "Fungal Infections: Prevention & Treatment Tips",
    excerpt:
      "Understand the types of fungal infections, how they spread, and the best treatment options for fast, lasting relief.",
    date: "Sep 25, 2024",
    category: "Skin Care",
  },
  {
    slug: "pigmentation-treatment-options",
    title: "Pigmentation Treatment — From Dark Spots to Even Skin Tone",
    excerpt:
      "Discover how chemical peels, laser therapy, and topical agents can effectively treat stubborn pigmentation and melasma.",
    date: "Sep 10, 2024",
    category: "Cosmetic",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Skin & Hair Care Blog
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert insights, treatment guides, and skincare tips from Dr. Pallawi to help you make informed decisions about your skin and hair health.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Placeholder header */}
                <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 flex items-center justify-center">
                  <span className="text-primary/30 text-6xl font-extrabold">DP</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

                  <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 gap-1 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Question?</h2>
          <p className="text-gray-600 mb-8">
            Book a consultation with Dr. Pallawi for personalized advice on your specific skin or hair concern.
          </p>
          <Link
            href="/book"
            className={buttonVariants({
              size: "lg",
              className: "rounded-full h-14 px-10 shadow-xl shadow-primary/20 text-base",
            })}
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
