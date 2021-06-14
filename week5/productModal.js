export default {
  template: '#userProductModal',
  props: ["product"],
  data () {
    return {
      modal: "",
      qty: 1
    };
  },
  methods: {
    openModal () {
      this.modal.show();
      this.qty = 1;
    },
    hideModal () {
      this.modal.hide();
    }
  },
  mounted () {
    this.modal = new bootstrap.Modal(this.$refs.modal);
  }
}