import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      ></link>
      <style type="text/css"></style>
      <div id="mc_embed_signup">
        <form
          action="https://band.us6.list-manage.com/subscribe/post?u=9fd981d55b149ba29e039214c&amp;id=e7bc6f4f7b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <label
              for="mce-EMAIL"
              style={{ fontSize: '2.3rem', color: '#fff' }}
            >
              Subscribe
            </label>
            <input
              type="email"
              // value=""
              name="EMAIL"
              class="email"
              id="mce-EMAIL"
              placeholder="email address"
              required
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_9fd981d55b149ba29e039214c_e7bc6f4f7b"
                tabindex="-1"
                // value=""
              />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
