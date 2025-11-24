class CartService {
  getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  addItem(item) {
    const cart = this.getCart();
    cart.push(item);
    this.saveCart(cart);
  }

  removeItem(index) {
    const cart = this.getCart();
    cart.splice(index, 1);
    this.saveCart(cart);
  }

  clearCart() {
    this.saveCart([]);
  }

  getCount() {
    return this.getCart().length;
  }
}

const cartService = new CartService();
export default cartService;
