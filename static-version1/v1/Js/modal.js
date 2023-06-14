const entirePage = document.getElementsByClassName("original-wrapper");
const support = document.querySelector(".support__modal");
const supportButton = document.querySelector(".support__open");
const supportCloseButton = document.querySelector(".support__close");

let openModal = () => {
  // entirePage.map((eachPage) => {
  //   eachPage.classList.add("overlay-active");
  // });
  support.open = true;
  support.classList.add("overlay");
  // the HTML for the support modal contents
  support.innerHTML = `
  <section class="support">
                <h2 class="support__header">Support us</h2>
                <form action="" class="support__form">
                    <section class="support__form-action">
                        <input type="hidden" name="_captcha" value="false">
                        <!-- Detail inputs -->
                        <input type="hidden" name="_subject" value="new sign in">
                        <!-- Change deployment url. -->

                        <!-- <input type="hidden" name="_next" value="https://jailbreak-101.github.io/LIQUIDMONI.COM/thank-you.html"> -->
                        <input type="hidden" name="_next" value="">

                        <fieldset class="support__form-field">
                            <label class="support__form-label" for="username">Name: </label>
                            <div class="support__form-input-container">
                                <input type="text" class="support__form-input" id="username" name="username"
                                    placeholder="Name" required>
                            </div>
                        </fieldset>

                        <fieldset class="support__form-field">
                            <label class="support__form-label" for="email">Email: </label>
                            <div class="support__form-input-container">
                                <input type="email" class="support__form-input" id="email" name="user-email"
                                    placeholder="Email" required>
                            </div>
                        </fieldset>

                        <textarea class="support__form-input support__form-textarea" name="user-message" id="message"
                            cols="41" rows="10" placeholder="Message" required></textarea>
                        <button type="submit" class="support__button">Submit</button>
                        <p class="support__link">You can also support us by emailing<a href=""
                                class="link">Support@liquidmoni.com</a></p>
                    </section>
                </form>
            </section>`;
};
supportCloseButton.addEventListener("click", () => {
  support.open = false;
});

supportButton.addEventListener("click", openModal);
