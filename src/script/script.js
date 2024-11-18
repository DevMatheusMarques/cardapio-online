let cart = [];

export function openCart(event) {
    this.cartModal.style.display = "flex";
    updateCartModal();
}

export function closeCart(event) {
    if (event.target === this.cartModal) {
        this.cartModal.style.display = "none";
    } else if (event.target === this.closeModalBtn) {
        this.cartModal.style.display = "none";
    }
}

export function formattedPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
}

export function addBurgerCart({name, price}) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        //Se o item já existe, aumenta apenas a quantidade + 1
        existingItem.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            quantity: 1
        })
    }
    this.updateCartModal();
    console.log(cart);
}
export function updateCartModal() {
    if (!this.cartItemsContainer) return; // Verifica se cartItemsContainer existe

    this.cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col", "items-cart");
        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
              <div>
                <p class="font-bold text-yellow-500">${item.name}</p>
                <p>Quantidade: ${item.quantity}</p>
                <p class="font-medium mt-2">${formattedPrice(item.price)}</p>
              </div>
              <button class="remove-item-cart text-red-500" data-name="${item.name}">Remover</button>
            </div>
        `;

        total += item.price * item.quantity;
        this.cartItemsContainer.appendChild(cartItemElement);
    });

    let cartTotal = document.getElementById("cart-total");
    cartTotal.textContent = formattedPrice(total);
    let cartCounter = document.getElementById("cart-count");
    cartCounter.innerHTML = cart.length;

    // Adiciona os eventos de clique para os botões de remover
    this.cartItemsContainer.querySelectorAll(".remove-item-cart").forEach(button => {
        button.addEventListener("click", removeItemCart.bind(this));
    });
}

export function removeItemCart(event) {
    const name = event.target.getAttribute("data-name");
    const index = cart.findIndex(item => item.name === name);

    if (index !== -1) {
        const item = cart[index];
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCartModal.call(this); // Usa `call` para garantir que `this` está correto
    }
}

export function alertAddress(context) {
    context.addressInput.addEventListener("input", function (event) {
        let inputValue = event.target.value;

        if (inputValue !== "") {
            context.addressWarn.classList.add("hidden");
            context.addressInput.classList.remove("border-red-500")
        }
    });
}

export function finishOrder(context) {
    context.checkoutBtn.addEventListener("click", function (event) {
        const isOpen = checkRestaurantOpen();

        if (!isOpen) {
            showAlert('Restaurante fechado no momento!', 2500);
            return;
        }

        if (cart.length === 0) {
            showAlert('Seu carrinho está vazio!', 2500);
            return;
        }

        if (context.addressInput.value === "") {
            context.addressWarn.classList.remove("hidden");
            context.addressInput.classList.add("border-red-500");
            return;
        }

        const cartItems = cart
            .map((item) => `- ${item.name} (Quantidade: ${item.quantity}, Preço: R$ ${item.price.toFixed(2)})`)
            .join("\n");

        const client = context.clientInput.value;
        const address = context.addressInput.value;
        const phone = "18991532494";

        const message = encodeURI(`*Cliente:* ${client}\n\n*Pedido:*\n${cartItems}\n\n*Endereço de entrega:* ${address}`);

        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

        cart.length = 0;
        updateCartModal();
    });
}

export function checkRestaurantOpen() {
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 23;
}

export function restaurantOpen() {
    const spanItem = document.getElementById("date-span")
    const isOpen = checkRestaurantOpen();

    if (isOpen) {
        spanItem.classList.remove("bg-red-500");
        spanItem.classList.add("bg-green-600")
    } else {
        spanItem.classList.remove("bg-green-600");
        spanItem.classList.add("bg-red-500")
    }
}

export function showAlert(message, duration = 5000) {
    const alert = document.getElementById("alert");
    const durationAlert = document.getElementById("duration");
    const alertMessage = document.getElementById("alert-message");

    alertMessage.textContent = message;
    alert.classList.remove("hidden");

    // Esconde o alerta depois que o tempo expirar
    setTimeout(() => {
        alert.classList.add("hidden");
        durationAlert.style.animation = "none"; // Reseta a animação para o próximo uso
    }, duration);
}