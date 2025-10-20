import { cart } from "../../data/cart.js";
import {getDelivery} from "../../data/deliveryOption.js";
import {getProduct} from '../../data/products.js';
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
    let cartQuantity = 0;
    let CartTotalPrice = 0;
    let shippingTotalPrice = 0;

    cart.forEach(cartItem => {
        const productId = cartItem.productId;
        const DeliveryId = cartItem.deliveryOptionId;

        const itemQuantity = cartItem.quantity;
        cartQuantity += itemQuantity;
        
        const matchingProduct = getProduct(productId);

        CartTotalPrice += itemQuantity * matchingProduct.priceCents;

        const matchingItem = getDelivery(DeliveryId);

        shippingTotalPrice += matchingItem.priceCents;
    });

    let HTML = `<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items ${cartQuantity}:</div>
            <div class="payment-summary-money">$${formatCurrency(CartTotalPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingTotalPrice)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency((CartTotalPrice+shippingTotalPrice))}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency((CartTotalPrice+shippingTotalPrice) / 10)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency((CartTotalPrice+shippingTotalPrice) * 11 / 10)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;

    document.querySelector('.js-payment-summary').innerHTML = HTML;
}

