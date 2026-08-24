import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  // Lock scrolling while the message is being sent
  useEffect(() => {
    if (sending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sending]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (sending) return;

    setSending(true);

    const toId = toast.loading("Sending");

    try {
      const response = await fetch(
        "/api/v1/mail/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.dismiss(toId);

      if (response.ok) {
        toast.success("Message sent successfully!");

        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);

      toast.dismiss(toId);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      // Remove loading screen whether success or failure
      setSending(false);
    }
  };

  return (
    <>
      {/* =====================================================
          FULL SCREEN MAIL LOADING OVERLAY
      ====================================================== */}

      {sending && (
        <div className="mail-loading-overlay">
          <div className="mail-loading-box">
            <div className="mail-loading-spinner"></div>

            <h3>Sending Message</h3>

            <p>Please wait...</p>
          </div>
        </div>
      )}

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <section className="contact">
        <div className="container">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance"
            id="contact"
          >
            Send Message
          </h2>

          <div className="contact-content">
            <div className="contact-textbox">
              {/* <strong href="#" className="hire-alert">
                <span className="indicator"></span>
                Available for hire
              </strong> */}

              <p className="contact-text">
                I am a <b>Software Engineer</b> driven by the challenge of
                building scalable, high-performance and AI systems. My
                experience ranges from optimizing AI/ML pipelines to
                architecting full-stack applications that support hundreds of
                active users.
              </p>

              <p className="contact-text">
                With a strong foundation as a{" "}
                <b>Competitive Programmer</b> (Codeforces Candidate Masters
                and Codechef 5 star), I approach development with an
                algorithmic mindset—prioritizing efficiency, clean logic, and
                robust architecture in every line of code I write.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  id="name"
                  required
                  disabled={sending}
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  required
                  inputMode="email"
                  disabled={sending}
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">How can I help you?</label>

                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={sending}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-cta"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          CSS
      ====================================================== */}

      <style>
        {`
          .mail-loading-overlay {
            position: fixed;
            inset: 0;

            width: 100vw;
            height: 100vh;

            display: flex;
            align-items: center;
            justify-content: center;

            background: rgba(0, 0, 0, 0.55);

            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            z-index: 2147483647;

            cursor: wait;
          }

          .mail-loading-box {
            width: 340px;
            max-width: calc(100vw - 40px);

            padding: 40px 30px;

            text-align: center;

            background: #111;

            border: 1px solid rgba(255, 255, 255, 0.15);

            border-radius: 10px;

            box-shadow:
              0 25px 70px rgba(0, 0, 0, 0.55),
              0 0 0 1px rgba(255, 255, 255, 0.03);

            animation: mailBoxAppear 0.2s ease-out;
          }

          .mail-loading-spinner {
            width: 42px;
            height: 42px;

            margin: 0 auto 24px;

            border-radius: 50%;

            border: 3px solid rgba(255, 255, 255, 0.15);
            border-top-color: #ffffff;

            animation: mailSpinner 0.8s linear infinite;
          }

          .mail-loading-box h3 {
            margin: 0;

            color: #ffffff;

            font-size: 20px;
            font-weight: 600;
          }

          .mail-loading-box p {
            margin: 10px 0 0;

            color: rgba(255, 255, 255, 0.55);

            font-size: 14px;
          }

          @keyframes mailSpinner {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes mailBoxAppear {
            from {
              opacity: 0;
              transform: scale(0.96);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;