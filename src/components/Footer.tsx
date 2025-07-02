export const Footer = () => {
  return (
    <footer id="contact">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl"
          >
            Skilltrai
          </a>
          <p className="text-muted-foreground mt-2">
            Be Independent And Stay ahead.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div>
            <a href="mailto:skilltraail@gmail.com" className="opacity-60 hover:opacity-100">
              skilltraail@gmail.com 
            </a>
          </div>
          <div>
            <a href="tel:+918129624615" className="opacity-60 hover:opacity-100">
              +91 8129624615 
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/skilltrai"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram 
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.skilltrai.com"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Website 
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Skilltrai Freelance Academy
        </h3>
      </section>
    </footer>
  );
};