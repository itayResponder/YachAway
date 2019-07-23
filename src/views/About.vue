<template>
  <div class="about">
    <h1 class="title is-1">About Us</h1>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box quote-box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="itayImg" alt="Image" class="is-rounded" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Itay</strong>
                      <br />
                      <small class="quote-box-occupation">Co-Founder of YachtAway</small>
                      <br />
                      <br />
                      <span class="quote-box-content">When it ring right - You know it is right</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="column">
            <div class="box quote-box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="nivImg" alt="Image" class="is-rounded" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Niv Bekelman</strong>
                      <br />
                      <small class="quote-box-occupation">Expert Skipper</small>
                      <br />
                      <br />
                      <span
                        class="quote-box-content"
                      >A Skipper is away of life, if you can learn new way of life you can learn to be a skipper</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div class="column">
            <div class="box quote-box">
              <article class="media">
                <div class="media-left">
                  <figure class="image is-64x64">
                    <img :src="nadavImg" alt="Image" class="is-rounded" />
                  </figure>
                </div>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>Nadav Sabach</strong>
                      <br />
                      <small class="quote-box-occupation">Cyber Expert</small>
                      <br />
                      <br />
                      <span class="quote-box-content">A revolution start with people not with tech</span>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column is-half margin-top-2rem">
            <p class="column text-start">{{p1}}</p>
            <!-- <p> -->
              <figure class="image margin-top-2rem">
                <img
                  src="https://www.oceanindependence.com/sites/default/files/styles/half/public/%C2%A9Guillaume%20Plisson-49761_2000x1250%20%281%29.jpg"
                />
              </figure>
          </div>

          <div class="column margin-top-3rem">
            <figure class="image">
              <img
                src="https://www.oceanindependence.com/sites/default/files/styles/half/public/Guillaume_plisson_U4A6127_2000.jpg"
              />
        </figure>
            <p class="column margin-top-7rem text-start">{{p2}}</p>
          </div>
        </div>

        <!-- 
            -->
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
		itayImg: 'https://res.cloudinary.com/dopdel26f/image/upload/w_64,h_64/Users/Itay/IMG-20190531-WA0015_kwkbib.jpg',
		nivImg: 'https://res.cloudinary.com/dopdel26f/image/upload/w_64,h_64/Users/Niv/niv-ny-sm_eyyrgw.jpg',
		nadavImg: 'https://res.cloudinary.com/dopdel26f/image/upload/w_64,h_64/Users/Nadav/WhatsApp_Image_2019-07-18_at_17.24.47_uebkyz.jpg',
      p1: `If you want to explore the world, seek out adventure, experience the ultimate luxury and have the world spin on your axis, owning your own yacht is the definitive lifestyle choice. While there is significant emotional and financial outlay in the journey towards yacht purchase, in the end, owning a superyacht is an incomparable triumph. During this often-complex process, direction, experience and a degree of intuition will guide you to a successful conclusion. Ocean Independence will advise, inform and reassure you throughout, allowing you to be as involved or distant from the detail as you wish to guarantee you an efficient and effective purchase. Consider the wealth of opportunities that yacht ownership brings: access to the world’s most exclusive spots in complete privacy, the finest lifestyle design and precision engineering to ensure comfortable passage to unlimited horizons. `,
      p2: `Your own crew who can preempt your needs and ensure your personal preferences are always their number one priority. A home from home. Adventure between coasts and islands, dropping anchor in azure waters by pristine beaches where the breeze carries the scent of vineyards and lavender fields while you enjoy lingering lunches onboard. Explore hidden caves and dive among marine life, teaching your children to swim from the aft deck. Throw whimsical parties and celebrate family events, from your own wedding to your parents’ diamond wedding. Get a trackside view of the Grand Prix or simply follow the sun. Your yacht will fulfill your desire for unparalleled travel and access. Allow Ocean Independence to support you on the journey that lies ahead.`
    };
  }
};
</script>

