import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const blogData: Record<
  string,
  { title: string; description: string; date: string; readTime: string; category: string; content: string[] }
> = {
  "best-dermatologist-in-jamshedpur": {
    title: "Best Dermatologist in Jamshedpur — What to Look For",
    description: "A comprehensive guide to finding the right dermatologist in Jamshedpur for your skin and hair concerns.",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    category: "Guide",
    content: [
      "Choosing the right dermatologist is one of the most important decisions you can make for your skin health. With so many options available, it can be overwhelming to know where to start.",
      "Here are the key factors to consider when selecting a dermatologist in Jamshedpur:",
      "1. Qualifications & Board Certification — Look for a doctor with an MBBS and MD in Dermatology from a recognized institution. Board certification ensures they have met rigorous professional standards.",
      "2. Experience & Specialization — A dermatologist with years of experience and specialization in your specific concern (acne, hair loss, cosmetic procedures) will likely deliver better results.",
      "3. Technology & Equipment — Modern dermatology relies on advanced technology. Ensure the clinic is equipped with the latest lasers, diagnostic tools, and treatment devices.",
      "4. Patient Reviews — Check Google reviews and patient testimonials. A 4.5+ star rating with hundreds of reviews is a strong indicator of quality care.",
      "5. Consultation Approach — The best dermatologists take time to understand your concerns, explain treatment options, and create personalized plans rather than offering one-size-fits-all solutions.",
      "Dr. Pallawi's Skin & Hair Clinic in Jamshedpur meets all these criteria with a 4.7-star Google rating, 500+ happy patients, and over a decade of specialized experience in clinical and cosmetic dermatology.",
    ],
  },
  "acne-treatment-in-jamshedpur": {
    title: "Complete Guide to Acne Treatment in Jamshedpur",
    description: "Everything you need to know about treating acne — from causes and types to advanced medical treatments.",
    date: "Oct 28, 2024",
    readTime: "7 min read",
    category: "Skin Care",
    content: [
      "Acne is the most common skin condition worldwide, affecting nearly 85% of people at some point in their lives. While it's most prevalent during adolescence, adult acne is increasingly common.",
      "Understanding the Types of Acne:",
      "Comedonal Acne (blackheads & whiteheads) — Caused by clogged pores. Responds well to topical retinoids and salicylic acid.",
      "Inflammatory Acne (papules & pustules) — Red, swollen bumps that may contain pus. Requires anti-inflammatory treatments and sometimes antibiotics.",
      "Cystic Acne — Deep, painful nodules under the skin. The most severe form, often requiring oral medications like isotretinoin.",
      "Modern Treatment Options Available in Jamshedpur:",
      "Chemical Peels — Glycolic and salicylic acid peels help unclog pores and reduce post-acne marks.",
      "LED Light Therapy — Blue light kills acne-causing bacteria while red light reduces inflammation.",
      "Laser Treatment — Targets sebaceous glands to reduce oil production and kill bacteria.",
      "Microneedling — Stimulates collagen production to repair acne scars and improve skin texture.",
      "At Dr. Pallawi's Clinic, we create customized treatment plans that address both active acne and the scarring it leaves behind.",
    ],
  },
  "hair-fall-treatment-guide": {
    title: "Hair Fall Treatment — Causes, Diagnosis & Solutions",
    description: "An expert guide to understanding hair fall causes and the most effective treatment options including PRP therapy.",
    date: "Oct 12, 2024",
    readTime: "6 min read",
    category: "Hair Care",
    content: [
      "Losing 50-100 hairs per day is normal. But when you notice excessive shedding, thinning patches, or a receding hairline, it's time to see a dermatologist.",
      "Common Causes of Hair Fall:",
      "Androgenic Alopecia — The most common cause, driven by genetics and hormones. Affects both men and women differently.",
      "Nutritional Deficiencies — Iron, zinc, vitamin D, and biotin deficiencies can trigger significant hair loss.",
      "Stress & Lifestyle — Telogen effluvium caused by physical or emotional stress can lead to temporary but alarming hair shedding.",
      "Medical Conditions — Thyroid disorders, PCOS, and autoimmune conditions can all manifest as hair loss.",
      "Effective Treatment Options:",
      "PRP Therapy — Platelet-Rich Plasma is injected into the scalp to stimulate dormant hair follicles. Most patients see results after 3-4 sessions.",
      "Minoxidil — FDA-approved topical treatment that increases blood flow to hair follicles and promotes growth.",
      "Finasteride — An oral medication for male pattern baldness that blocks DHT, the hormone responsible for hair miniaturization.",
      "Mesotherapy — Microinjections of vitamins, minerals, and amino acids directly into the scalp to nourish hair follicles.",
      "Early intervention is key. If you're noticing increased hair fall, book a consultation with Dr. Pallawi to identify the cause and start treatment before permanent damage occurs.",
    ],
  },
  "fungal-infection-treatment-tips": {
    title: "Fungal Infections: Prevention & Treatment Tips",
    description: "Learn about common fungal skin infections, how to prevent them, and the most effective treatment approaches.",
    date: "Sep 25, 2024",
    readTime: "5 min read",
    category: "Skin Care",
    content: [
      "Fungal infections are extremely common in India's humid climate. They can affect the skin, nails, scalp, and even mucous membranes.",
      "Common Types of Fungal Infections:",
      "Ringworm (Tinea Corporis) — Circular, red, scaly patches on the body. Highly contagious through direct contact.",
      "Athlete's Foot (Tinea Pedis) — Itchy, scaly rash between the toes, common in people who wear closed shoes for long hours.",
      "Jock Itch (Tinea Cruris) — Affects the groin area, causing intense itching and redness.",
      "Candidiasis — Caused by Candida yeast, commonly affecting skin folds, mouth, and genital areas.",
      "Prevention Tips:",
      "Keep skin clean and dry, especially in skin folds. Wear loose, breathable cotton clothing. Avoid sharing towels, clothes, and personal items. Change wet clothes and socks promptly.",
      "Treatment Approach:",
      "Mild cases respond well to topical antifungal creams (clotrimazole, ketoconazole). Moderate to severe cases may require oral antifungal medications. Complete the full course of treatment even if symptoms improve — stopping early leads to recurrence.",
      "If you have a persistent or recurrent fungal infection, visit Dr. Pallawi's Clinic for proper diagnosis and a targeted treatment plan.",
    ],
  },
  "pigmentation-treatment-options": {
    title: "Pigmentation Treatment — From Dark Spots to Even Skin Tone",
    description: "Discover the best treatments for melasma, dark spots, and uneven skin tone from an expert dermatologist.",
    date: "Sep 10, 2024",
    readTime: "6 min read",
    category: "Cosmetic",
    content: [
      "Skin pigmentation issues like dark spots, melasma, and uneven skin tone are among the top concerns patients bring to our clinic. Understanding the type of pigmentation is the first step to effective treatment.",
      "Types of Pigmentation:",
      "Melasma — Brown or gray-brown patches, typically on the cheeks, forehead, and upper lip. Triggered by hormones (pregnancy, birth control) and sun exposure.",
      "Post-Inflammatory Hyperpigmentation (PIH) — Dark marks left behind after acne, eczema, or any skin injury or inflammation.",
      "Sun Spots (Solar Lentigines) — Flat brown spots caused by years of sun exposure, commonly on the face and hands.",
      "Treatment Options:",
      "Topical Agents — Hydroquinone, kojic acid, arbutin, and vitamin C serums work as skin lightening agents for mild pigmentation.",
      "Chemical Peels — Glycolic acid, lactic acid, and TCA peels exfoliate pigmented skin layers to reveal brighter skin.",
      "Laser Therapy — Q-switched Nd:YAG laser targets melanin deposits deep in the skin for stubborn pigmentation.",
      "Sunscreen is Non-Negotiable — No pigmentation treatment will work without daily SPF 50+ sunscreen application. UV exposure triggers melanin production and undoes treatment progress.",
      "At Dr. Pallawi's Clinic, we combine multiple approaches for the best results — because pigmentation rarely responds to a single treatment alone.",
    ],
  },
};

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) return { title: "Blog | Dr. Pallawi's Clinic" };

  return {
    title: `${blog.title} | Dr. Pallawi's Clinic`,
    description: blog.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-gray-600 mb-8">This article may have been moved or doesn&apos;t exist yet.</p>
        <Link href="/blog" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{blog.category}</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {blog.date}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {blog.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>
          <p className="text-lg text-gray-600">{blog.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-gray max-w-none">
            {blog.content.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Expert Advice?</h3>
            <p className="text-gray-600 mb-6">
              Book a consultation with Dr. Pallawi for personalized diagnosis and treatment.
            </p>
            <Link
              href="/book"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full h-12 px-8 shadow-lg shadow-primary/20",
              })}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
