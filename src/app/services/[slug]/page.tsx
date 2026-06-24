import { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const serviceData: Record<
  string,
  { title: string; description: string; content: string[]; benefits: string[] }
> = {
  "acne-treatment": {
    title: "Acne Treatment in Jamshedpur",
    description:
      "Get the best acne treatment in Jamshedpur by Dr. Pallawi. Advanced therapies to clear your skin and remove acne scars permanently.",
    content: [
      "Acne is a common skin condition that affects people of all ages. At Dr. Pallawi's Skin & Hair Clinic, we offer comprehensive and personalized acne treatments tailored to your skin type and the severity of your condition.",
      "Our approach combines medical-grade skincare, chemical peels, and advanced laser therapies to not only treat active acne but also prevent future breakouts and minimize scarring.",
      "We begin with a thorough skin analysis to identify the root cause — whether it's hormonal imbalance, bacterial infection, or clogged pores — and then create a customized treatment plan for lasting results.",
    ],
    benefits: [
      "Clears active breakouts",
      "Prevents new pimples",
      "Reduces acne scarring",
      "Improves overall skin texture",
    ],
  },
  "pigmentation-treatment": {
    title: "Pigmentation Treatment in Jamshedpur",
    description:
      "Advanced pigmentation correction for dark spots, melasma, and uneven skin tone by an expert dermatologist.",
    content: [
      "Pigmentation disorders such as melasma, dark spots, and uneven skin tone can significantly impact your confidence. Dr. Pallawi specializes in diagnosing and treating all types of skin discoloration.",
      "We use a combination of chemical peels, laser treatments, and medical-grade lightening agents to gradually fade pigmentation and restore an even, radiant complexion.",
    ],
    benefits: [
      "Fades dark spots and patches",
      "Evens out skin tone",
      "Treats melasma effectively",
      "Safe for all skin types",
    ],
  },
  "fungal-infection-treatment": {
    title: "Fungal Infection Treatment in Jamshedpur",
    description:
      "Fast and effective treatment for ringworm, candidiasis, tinea, and other fungal skin infections.",
    content: [
      "Fungal infections are extremely common, especially in humid climates. They can cause itching, redness, and scaling. Dr. Pallawi provides targeted antifungal treatments that clear infections quickly and prevent recurrence.",
      "We perform a clinical and microscopic evaluation to accurately diagnose the type of fungal infection before prescribing the most effective antifungal medications — topical, oral, or a combination.",
    ],
    benefits: [
      "Quick symptom relief",
      "Prevents recurrence",
      "Treats root cause",
      "Safe long-term management",
    ],
  },
  "psoriasis-treatment": {
    title: "Psoriasis Treatment in Jamshedpur",
    description:
      "Expert psoriasis management with topical, systemic, and light-based therapies for long-term control.",
    content: [
      "Psoriasis is a chronic autoimmune condition that causes red, scaly patches on the skin. While there is no permanent cure, Dr. Pallawi offers advanced treatments that effectively manage symptoms and improve quality of life.",
      "Treatment options include topical corticosteroids, vitamin D analogues, phototherapy, and biologic medications for severe cases.",
    ],
    benefits: [
      "Reduces flare-ups",
      "Controls symptoms long-term",
      "Improves skin appearance",
      "Personalized treatment plans",
    ],
  },
  "eczema-treatment": {
    title: "Eczema Treatment in Jamshedpur",
    description:
      "Gentle and effective eczema treatment to soothe itching, reduce inflammation, and restore your skin barrier.",
    content: [
      "Eczema (atopic dermatitis) causes itchy, inflamed skin that can severely impact daily life. Dr. Pallawi offers comprehensive eczema management focused on barrier repair, inflammation control, and trigger avoidance.",
      "We provide tailored moisturizer recommendations, prescription topical treatments, and lifestyle modifications to keep eczema under control.",
    ],
    benefits: [
      "Soothes itching and inflammation",
      "Repairs skin barrier",
      "Prevents future flares",
      "Safe for children and adults",
    ],
  },
  "hair-fall-treatment": {
    title: "Hair Fall Treatment in Jamshedpur",
    description:
      "Effective hair fall treatment and PRP therapy by top dermatologist in Jamshedpur. Stop hair loss and promote natural hair regrowth.",
    content: [
      "Hair loss can be distressing, but with early intervention and the right treatment, you can restore your hair's natural volume and strength.",
      "We utilize state-of-the-art diagnostic tools to identify the root cause of your hair fall, whether it's hormonal, nutritional, or genetic. Treatments range from topical solutions and oral medications to advanced PRP (Platelet-Rich Plasma) therapy.",
      "Every patient receives a customized hair care regimen along with in-clinic treatments for maximum results.",
    ],
    benefits: [
      "Stops excessive hair shedding",
      "Stimulates new hair growth",
      "Strengthens hair follicles",
      "Non-surgical approach",
    ],
  },
  "prp-therapy": {
    title: "PRP Therapy for Hair in Jamshedpur",
    description:
      "Advanced Platelet-Rich Plasma therapy to stimulate hair growth, strengthen follicles, and restore hair density.",
    content: [
      "PRP (Platelet-Rich Plasma) therapy is a revolutionary treatment that uses your own blood platelets to stimulate dormant hair follicles and promote natural hair growth.",
      "The procedure is minimally invasive, with no downtime. Most patients notice visible improvement after 3-4 sessions spaced a month apart.",
    ],
    benefits: [
      "Uses your body's natural healing",
      "Minimally invasive",
      "No downtime",
      "Visible results in weeks",
    ],
  },
  "dandruff-treatment": {
    title: "Dandruff Treatment in Jamshedpur",
    description:
      "Permanent dandruff solutions with medicated shampoos, scalp treatments, and personalized care routines.",
    content: [
      "Persistent dandruff can be embarrassing and uncomfortable. Dr. Pallawi identifies the underlying cause — whether fungal (Malassezia), seborrheic dermatitis, or dry scalp — and prescribes targeted treatments.",
      "We combine medicated shampoos, scalp serums, and lifestyle advice for long-lasting dandruff-free results.",
    ],
    benefits: [
      "Eliminates flaking",
      "Reduces scalp itching",
      "Treats root cause",
      "Long-lasting results",
    ],
  },
  "alopecia-treatment": {
    title: "Alopecia Treatment in Jamshedpur",
    description:
      "Specialized treatment for alopecia areata, androgenic alopecia, and pattern baldness with advanced therapies.",
    content: [
      "Alopecia can present as patchy hair loss, receding hairline, or diffuse thinning. Dr. Pallawi offers evidence-based treatments including corticosteroid injections, minoxidil, finasteride, and PRP therapy.",
      "Early intervention is key to preventing permanent hair loss. Our diagnostic approach helps determine the exact type and stage of alopecia for optimal treatment.",
    ],
    benefits: [
      "Targets specific alopecia type",
      "Multiple treatment options",
      "Promotes regrowth",
      "Prevents further loss",
    ],
  },
  "hydra-facial": {
    title: "Hydra Facial in Jamshedpur",
    description:
      "Premium Hydra Facial treatment for deep cleansing, hydration, and instant glow at Dr. Pallawi's Clinic.",
    content: [
      "The Hydra Facial is a multi-step skin treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously.",
      "It's perfect for achieving an instant glow before special occasions, or as part of a regular skincare routine for maintaining healthy, radiant skin.",
    ],
    benefits: [
      "Instant glow and radiance",
      "Deep pore cleansing",
      "Suitable for all skin types",
      "No downtime required",
    ],
  },
  "chemical-peel": {
    title: "Chemical Peel Treatment in Jamshedpur",
    description:
      "Medical-grade chemical peels for acne scars, pigmentation, fine lines, and overall skin rejuvenation.",
    content: [
      "Chemical peels use controlled application of specialized acids to exfoliate damaged skin layers, revealing smoother, brighter skin underneath.",
      "We offer superficial, medium, and deep peels depending on your skin concerns — from mild discoloration to deep acne scars.",
    ],
    benefits: [
      "Reduces acne scars",
      "Improves skin texture",
      "Brightens complexion",
      "Minimal recovery time",
    ],
  },
  "laser-treatment": {
    title: "Laser Treatment in Jamshedpur",
    description:
      "State-of-the-art laser therapies for hair removal, scar treatment, skin tightening, and pigmentation correction.",
    content: [
      "Our clinic uses the latest FDA-approved laser technology for a wide range of skin and hair concerns, including laser hair removal, scar reduction, skin tightening, and treatment of vascular lesions.",
      "All laser treatments are performed by Dr. Pallawi personally, ensuring maximum safety and efficacy with every session.",
    ],
    benefits: [
      "Precise and targeted treatment",
      "Minimal discomfort",
      "Long-lasting results",
      "Safe for Indian skin tones",
    ],
  },
  "anti-aging-treatment": {
    title: "Anti-aging Treatment in Jamshedpur",
    description:
      "Turn back the clock with Botox, dermal fillers, collagen therapy, and skin tightening procedures.",
    content: [
      "Aging is natural, but looking aged is optional. Dr. Pallawi offers a range of anti-aging treatments including Botox, hyaluronic acid fillers, collagen-stimulating therapies, and radiofrequency skin tightening.",
      "Our approach focuses on subtle, natural-looking results that enhance your features without looking 'overdone'.",
    ],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Restores facial volume",
      "Tightens sagging skin",
      "Natural-looking results",
    ],
  },
  "skin-rejuvenation": {
    title: "Skin Rejuvenation in Jamshedpur",
    description:
      "Comprehensive skin rejuvenation treatments to restore youthful glow, improve elasticity, and diminish signs of aging.",
    content: [
      "Skin rejuvenation encompasses a variety of treatments designed to refresh and restore your skin's natural vitality, including microneedling, LED therapy, chemical peels, and PRP facials.",
      "Whether you want to address dullness, uneven tone, fine lines, or loss of elasticity, we create a customized rejuvenation plan to help you achieve your skin goals.",
    ],
    benefits: [
      "Restores youthful glow",
      "Improves skin elasticity",
      "Reduces fine lines",
      "Stimulates collagen production",
    ],
  },
};

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: "Treatment | Dr. Pallawi's Clinic" };

  return {
    title: `${service.title} | Dr. Pallawi's Clinic`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-3xl font-bold mb-4 capitalize">{slug.replace(/-/g, " ")} Treatment</h1>
        <p className="text-gray-600 mb-8">This treatment page is coming soon. Please contact us for more information.</p>
        <Link href="/services" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-50 py-16 md:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{service.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
            {service.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Benefits of Our Treatment</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium text-gray-900">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready for a Transformation?</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Schedule a consultation with Dr. Pallawi to discuss a personalized treatment plan for your condition.
              </p>
              <Link
                href="/book"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full rounded-full h-12 shadow-md shadow-primary/20",
                })}
              >
                Book Appointment
              </Link>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-wider">Or reach us directly</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full h-10 bg-[#25D366]/10 text-[#25D366] rounded-full font-medium text-sm hover:bg-[#25D366]/20 transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
