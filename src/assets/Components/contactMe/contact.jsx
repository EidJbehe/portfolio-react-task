import style from "./contact.module.css";
function Contact() {
  return (
    <>
      <div className="my-5">
        <h2>CONTACT ME</h2>
        <div className="container py-5">
          {/*Full Name */}
          <div className="mb-4 position-relative">
            <label htmlFor="name" className="form-label fs-5">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="form-control "
              placeholder="Enter your name..."
              required
            />
            <div className="invalid-feedback">A name is required.</div>
          </div>

          {/* Email */}
          <div className="mb-4 position-relative">
            <label htmlFor="email" className="form-label fs-5">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="name@example.com"
              required
            />
            <div className="invalid-feedback">An email is required.</div>
          </div>

          {/* Phone */}
          <div className="mb-4 position-relative">
            <label htmlFor="phone" className="form-label fs-5">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="+970..."
              required
            />
            <div className="invalid-feedback">A phone number is required.</div>
          </div>

          {/* Message */}
          <div className="mb-4 position-relative">
            <label htmlFor="message" className="form-label fs-5">
              Message
            </label>
            <textarea
              id="message"
              className="form-control"
              rows="4"
              placeholder="Enter your message..."
              required
            ></textarea>
            <div className="invalid-feedback">A message is required.</div>
          </div>
          <div class="col-12">
            <button class={`${style.btnSubmit} btn `} type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
