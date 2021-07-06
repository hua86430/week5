import productModal from "./productModal.js";

VeeValidate.defineRule("email", VeeValidateRules["email"]);
VeeValidate.defineRule("required", VeeValidateRules["required"]);

VeeValidateI18n.loadLocaleFromURL("./zh_TW.json");

// Activate the locale
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize("zh_TW"),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});

const app = Vue.createApp({
  data() {
    return {
      url: "https://vue3-course-api.hexschool.io/",
      path: "hua430",
      products: [],
      product: {},
      loadingStatus: {
        loadingItem: "",
      },
      carts: {},
      order: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  components: {
    productModal,
  },
  methods: {
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    getProducts() {
      axios.get(`${this.url}api/${this.path}/products?`).then((res) => {
        this.products = res.data.products;
      });
    },
    getProduct(id) {
      this.loadingStatus.loadingItem = id;
      axios
        .get(`${this.url}api/${this.path}/product/${id}`)
        .then((res) => {
          this.loadingStatus.loadingItem = "";
          this.product = res.data.product;
          this.$refs.productModal.openModal();
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    addCart(id, qty = 1) {
      this.loadingStatus.loadingItem = id;
      const itemData = {
        product_id: id,
        qty,
      };
      axios
        .post(`${this.url}api/${this.path}/cart`, {
          data: itemData,
        })
        .then((res) => {
          this.loadingStatus.loadingItem = "";
          this.$refs.productModal.hideModal();
          this.getCart();
          alert(res.data.message);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    getCart() {
      axios
        .get(`${this.url}api/${this.path}/cart`)
        .then((res) => {
          this.carts = res.data.data;
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    updateCart(data) {
      const itemData = {
        product_id: data.product_id,
        qty: data.qty,
      };
      this.loadingStatus.loadingItem = data.id;

      axios
        .put(`${this.url}api/${this.path}/cart/${data.id}`, {
          data: itemData,
        })
        .then((res) => {
          this.loadingStatus.loadingItem = "";
          this.getCart();
          alert(res.data.message);
        })
        .catch((res) => {
          console.log(res.data);
        });
    },
    deleteItem(id) {
      this.loadingStatus.loadingItem = id;
      axios.delete(`${this.url}api/${this.path}/cart/${id}`).then((res) => {
        this.loadingStatus.loadingItem = "";
        this.getCart();
        alert(res.data.message);
      });
    },
    deleteAll() {
      axios.delete(`${this.url}api/${this.path}/carts`).then((res) => {
        this.getCart();
        alert(res.data.message);
      });
    },
    onSubmit() {
      axios
        .post(`${this.url}api/${this.path}/order`, {
          data: this.order,
        })
        .then((res) => {
          if (res.data.success) {
            this.$refs.form.resetForm();
            this.getCart();
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
})

  .component("VForm", VeeValidate.Form)
  .component("VField", VeeValidate.Field)
  .component("ErrorMessage", VeeValidate.ErrorMessage)
  .mount("#app");
