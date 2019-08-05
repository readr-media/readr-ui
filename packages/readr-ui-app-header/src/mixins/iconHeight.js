export default {
  data() {
    return {
      breakpoint: 768,
      iconHeight: 30,
      iconHeightSmall: 24,
      iconHeightLarge: 30
    }
  },
  methods: {
    handleIconHeight() {
      this.iconHeight =
        window.innerWidth <= this.breakpoint
          ? this.iconHeightSmall
          : this.iconHeightLarge
    }
  },
  beforeMount() {
    this.handleIconHeight()
    window.addEventListener('resize', this.handleIconHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleIconHeight)
  }
}
