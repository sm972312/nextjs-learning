import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
export default function Hero() {
    return (
        <>
            <section className="bg-amber-100">
                <div className="text-black text-2xl text-center bg-fuchsia-700 p-4 mb-5">Hero Section fullwidth</div>
                <Container>

                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6 text-blue-700">
                            Build Modern Websites with Next.js
                        </h1>

                        <p className="text-lg text-gray-600 mb-8">
                            Learn Next.js and Tailwind CSS step by step.
                        </p>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Button   href="/contact">Get Started </Button>
                            <Button variant="outline">Get Started </Button>
                        </div>

                    </div>
                    <Image src="/images/hero.jpg" alt="Hero Image" width={500} height={400} className="rounded-xl m-auto mt-5" />

                </Container>
            </section>
        </>
    );
}