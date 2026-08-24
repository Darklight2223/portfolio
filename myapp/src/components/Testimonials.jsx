import React from "react";
import richHarrisImage from "../assets/images/testimonials/rich-harris.png";
import frankMeadImage from "../assets/images/testimonials/frank-mcsherry.webp";
import brianHirshImage from "../assets/images/testimonials/brian-hirsh.png";
import adamImage from "../assets/images/testimonials/adam.png";
import valHeadImage from "../assets/images/testimonials/val-head.png";
import timSatterwhiteImage from "../assets/images/testimonials/tim-satterwhite.webp";

const Testimonials = () => {
  return (
    <section>
      <h2 className="h2">Testimonials</h2>
      <div className="container">
        <ol className="testimonials">
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Working with Syed was a great experience. His drive for clean
              aesthetics and his open communication style helped us collaborate
              closely on the solution.
            </blockquote>
            <figure className="testimonial-author">
              <img src={richHarrisImage} alt="Rich Harris" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Harris Kareem</h3>
                <p className="testimonial-author-job">Developer @Outlets</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Syed is a fantastic UI/UX designer and developer with a keen sense
              for marketing, and lead generation. He's the only designer I know
              who also has a deep understanding for code and front-end
              development.
            </blockquote>
            <figure className="testimonial-author">
              <img src={frankMeadImage} alt="Andrew Mead" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Andrew Mead</h3>
                <p className="testimonial-author-job">Chief Scientist @Logos</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Talented artist, experienced with various media and can make any
              project you are working on look good. He is easy to work with and
              is a self starter. I would work with Syed again.
            </blockquote>
            <figure className="testimonial-author">
              <img src={brianHirshImage} alt="Brian Hirsh" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Brian Hirsh</h3>
                <p className="testimonial-author-job">Head @Zero-in</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Syed is a true professional with amazing talent. He is a creative
              thinker, has his finger on the pulse of what's to come, and
              absolutely one of the quickest and best problem solvers I have
              ever met.
            </blockquote>
            <figure className="testimonial-author">
              <img src={adamImage} alt="Adam Argalye" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Adam Argalye</h3>
                <p className="testimonial-author-job">SWE @Google</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Syed is one of my favorite people to work with. He's my go-to
              colleague when troubleshooting any new technique or technology
              because she understands how to tackle unknown problems with
              gumption.
            </blockquote>
            <figure className="testimonial-author">
              <img src={valHeadImage} alt="Val Head" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Val Head</h3>
                <p className="testimonial-author-job">CEO @Engines</p>
              </figcaption>
            </figure>
          </li>
          <li className="testimonial">
            <blockquote className="testimonial-text">
              Syed is a talented artist. He is very experienced with various
              media and can make any project you are working on look good. He is
              easy to work with and is a self starter. I would work with Syed
              again.
            </blockquote>
            <figure className="testimonial-author">
              <img src={timSatterwhiteImage} alt="Gary Simon" loading="lazy" />
              <figcaption>
                <h3 className="testimonial-author-name">Gary Simon</h3>
                <p className="testimonial-author-job">A11y Advocate @W3C</p>
              </figcaption>
            </figure>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Testimonials;
