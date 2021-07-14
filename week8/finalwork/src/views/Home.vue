<template>
  <div class="position-relative mb-5">
    <div
      class="position-absolute"
      style="top:0; bottom:0; left:0; right:0;
      background-image: url(https://images.unsplash.com/photo-1606471192041-f58c3cfca17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80);
      background-position:right; opacity: 0.2; pointer-events: none"
    ></div>

    <div class="container d-flex flex-column" style="min-height: 100vh;">
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2 data-aos="fade-in" data-aos-delay="500">穿鞋，是一種格調</h2>
          <p class="text-muted mb-0">
            如同手錶一般，每雙鞋款都有不同的表態<br />可以隨便選，但不能隨便穿
          </p>
        </div>
        <button
          type="button"
          class="btn position-absolute"
          style="bottom:50px;max-width:10%;"
          @click="scroll"
        >
          <p
            class="animate__fadeInDown
              animate__animated animate__infinite"
          >
            Scroll Down<br /><i
              class="bi bi-chevron-double-down animate__fadeInDown
              animate__animated animate__infinite"
              style="font-size:5px"
            ></i>
          </p>
        </button>
      </div>
    </div>
  </div>

  <!-- content -->
  <div class="container" id="main">
    <div
      class="row justify-content-end align-items-center"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div class="col-md-5 mt-5 mb-3">
        <img style="width:90%" src="../assets/picture/idea.jpeg" alt="" />
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">品牌理念</h2>
        <span
          >我們是一群潮鞋愛好者，對於各式各樣的鞋款有莫名的熱情，卻時常在尋找的途中處處碰壁<br />於是抱著不想讓其他和我們一樣的人找不到自己心中鞋款的理念，創立了這個品牌。</span
        >
      </div>
    </div>
    <div
      class="row justify-content-start align-items-center"
      data-aos="fade-left"
      data-aos-delay="200"
    >
      <div class="col-md-5 order-md-last  mt-5 mb-3">
        <img style="width:90%" src="../assets/picture/choose-us.jpeg" alt="" />
      </div>
      <div class="col-md-6 order-md-first">
        <h2 class="mb-3">為何選擇我們？</h2>
        <span
          >我們擁有最多、最齊全且最熱門的鞋款，<br />讓您在尋找心目中的鞋款時不需要東奔西跑，在這裡有各式各樣的品牌供您挑選，讓您買的愉快、穿得舒適。</span
        >
      </div>
    </div>
    <div
      id="main"
      class="row justify-content-end align-items-center mt-5"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div class="col-md-5 mt-5 mb-3">
        <img style="width:90%" src="../assets/picture/after-sale.jpeg" alt="" />
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">最完善的售後服務</h2>
        <span
          >只要在本店購買的鞋款，不管有任何問題，<br />如：外觀瑕疵、尺寸不符...，等相關問題都可以尋求我們為您協助處理相關事宜，<br />且每雙鞋款擁有七天鑑賞期，
          只要七天內帶著購買證明皆可辦理退換貨，給您最安心的保障。</span
        >
      </div>
    </div>
    <div
      class="row justify-content-start align-items-center"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <div class="col-md-5 order-md-last my-5">
        <img style="width:90%" src="../assets/picture/pay_methods.jpeg" alt="" />
      </div>
      <div class="col-md-6 order-md-first">
        <h2 class="mb-3">多元化付款方式</h2>
        <span
          >網路逐漸成長，付款方式也跟著進步，我們也不例外。<br />本店提供了 Apple Pay , Line Pay ,
          街口支付 , ATM 及貨到付款， 讓您不再煩惱如何付款。</span
        >
      </div>
    </div>
  </div>

  <!-- accordion -->
  <div class="container" style="width:70%">
    <h2 class="mt-5 mb-3">常見問題</h2>
    <div
      class="accordion accordion-flush mb-5"
      id="accordionExample"
      data-aos="fade-in"
      data-aos-delay="300"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed text-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            付款後多久可以收到？
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            我們配合了多家物流，讓您不管身在何處都能在
            <strong>一至三天</strong>
            內收到，<br />如貨運遲到經我們確認後補償給您折價券，供下一次購買時可以使用，以表達我們最高的敬意。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            我的鞋子出了問題，該怎麼辦？
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            我們會在您收到後主動聯繫您有關品項的相關問題，<br />
            如出現任何問題都會在第一時間解決，替您省下聯繫、等待的時間，讓每一次購買都留下最好的印象。
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            鞋子的來源是哪裡？
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            我們和全球各地的供貨商合作，並在我們收到的當下確認無誤之後才會將商品寄出，讓您購買不需擔心是否買到仿冒品，<br />
            因檢驗工作為人工，如出現收到商品卻有疑慮的情況，隨時可以聯繫我們立即為您解決問題。
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-dark py-3">
    <div class="container d-flex justify-content-center">
      <div class="row mb-3">
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-instagram pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Instagram</span></a
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-facebook pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Facebook</span></a
            >
          </div>
        </div>
        <div class="col">
          <div class="d-flex mx-3" style="width:10%">
            <i class="bi bi-twitter pe-2" style="font-size:1.5em; color:white"></i>
            <a href="#" class="text-decoration-none"
              ><span class="align-middle text-white">Twitter</span></a
            >
          </div>
        </div>
      </div>
    </div>
    <span class="text-white">Copyright © 1999-2021 鞋頭物語 All rights reserved.</span>
  </footer>
</template>

<script>
export default {
  methods: {
    scroll() {
      const main = document.querySelector('#main');
      window.scrollTo({ top: main.offsetTop + 1, behavior: 'smooth' });
    },
  },
};
</script>
