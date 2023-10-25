import c from './contact.module.css';

export default function Contact() {
    return (
      <div className="contact-us py-20 md:py-24 bg-[#f8fafc] dark:bg-dark" id="contact">
        <div className="container flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4 md:px-10 lg:px-0 mx-auto">
          <div className="ticket basis-2/3 ml-0 lg:ml-8 bg-sky-50 dark:bg-slate-800 rounded">
            <div className="py-16 px-6 lg:px-12">
              <div className="form-title">
                <h2 className="heading text-2xl lg:text-3xl font-bold text-black !leading-normal">
                Need Help? Contact us
                </h2>
            <p className="text-gray-500 dark:text-gray-400 text-opacity-90 text-base font-bold">
              When you encounter a problem, we will solve it immediately
            </p>
              </div>
            <div className="form-contact mt-10">
              <form action="#">
              <div className="flex flex-col lg:flex-row justify-center items-center mt-2 mb-6">
                <div className="flex flex-col basis-full w-full lg:basis-1/2 mr-0 lg:mr-3 my-3 lg:my-0">
                  <label htmlFor="name" className={c.formLabel}>
                    Your Name
                  </label>
                <input
                  type="text"
                  id="name"
                  className={c.formInput}
                  required
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="flex flex-col basis-full w-full lg:basis-1/2 ml-0 lg:ml-3 my-3 lg:my-0">
                <label htmlFor="email" className={c.formLabel}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={c.formInput}
                  required
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="message" className={c.formLabel}>
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Enter Your Message"
                className="resize-none form-input"
                required
                defaultValue={""}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className={c.btn}
              >
                Submit 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="subscribe basis-1/3 mr-0 lg:mr-8 rounded bg-sky-50">
      <div className="py-16 px-6 lg:px-12">
        <div className="form-title">
          <h2 className="heading text-2xl lg:text-3xl !leading-normal text-black">
            Subscribe to receive future updates
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-opacity-90 text-base font-bold mt-4 ">
          We will update the product and sync it to you as soon as possible.
          </p>
          <hr className="w-full my-12 bg-gray-600 text-gray-600 opacity-30" />
        </div>
        <div className="form-contact mt-8">
          <form action="#">
            <label className={c.formLabel}>
              Input
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                id="phone"
                className={c.subscribeInput}
                required
                placeholder="Enter Your Name"
              />
              <input
                type="email"
                id="address"
                className={c.subscribeInput}
                required
                placeholder="Enter Your Email"
              />
              <button
                type="submit"
                className={c.subscribeBtn}
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-opacity-90 text-base font-bold mt-6 text-center">
              No spam guaranteed, So please don’t send any spam mail.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

)
}