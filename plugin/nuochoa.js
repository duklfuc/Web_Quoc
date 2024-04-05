// Mảng để lưu trữ sản phẩm đã được thêm vào giỏ hàng
let cartItems = [];

// Hàm để thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    // Tạo một đối tượng để đại diện cho sản phẩm mới
    let newItem = {
        name: productName,
        price: price
    };

    // Thêm sản phẩm vào mảng cartItems
    cartItems.push(newItem);

    // Tạo một thông báo
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${productName} đã được thêm vào giỏ hàng !`;

    // Thêm thông báo vào trang
    document.body.appendChild(notification);

    // Sau một khoảng thời gian nhất định, xóa thông báo
    setTimeout(function() {
        notification.remove();
    }, 3000); // Xóa thông báo sau 3 giây (có thể điều chỉnh)

    // Gọi hàm để cập nhật hiển thị giỏ hàng
    updateCartDisplay();
}

// Hàm để xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    // Lưu tên sản phẩm đang bị xóa để hiển thị trong thông báo
    const removedProductName = cartItems[index].name;

    // Xóa sản phẩm khỏi mảng cartItems
    cartItems.splice(index, 1);

    // Sau khi xóa, cập nhật lại hiển thị giỏ hàng
    updateCartDisplay();

    // Hiển thị thông báo đã xóa sản phẩm
    const removeNotification = document.createElement('div');
    removeNotification.className = 'notification';
    removeNotification.textContent = `${removedProductName} đã được xóa khỏi giỏ hàng.`;
    document.body.appendChild(removeNotification);

    // Xóa thông báo sau một khoảng thời gian
    setTimeout(function() {
        removeNotification.remove();
    }, 3000);
}

// Hàm để đặt hàng
function placeOrder() {
    // Thực hiện xử lý đặt hàng (ở đây bạn có thể gửi dữ liệu đặt hàng đến máy chủ hoặc thực hiện các thao tác khác)

    // Hiển thị thông báo đặt hàng thành công
    const orderNotification = document.createElement('div');
    orderNotification.className = 'notification';
    orderNotification.textContent = 'Đặt hàng thành công!';
    document.body.appendChild(orderNotification);

    // Sau một khoảng thời gian nhất định, xóa thông báo
    setTimeout(function() {
        orderNotification.remove();
    }, 3000); // Xóa thông báo sau 3 giây (có thể điều chỉnh)

    // Đóng modal giỏ hàng sau khi đặt hàng thành công
    document.getElementById("modal").style.display = "none";

    // Xóa toàn bộ sản phẩm trong giỏ hàng sau khi đặt hàng
    cartItems = [];
    updateCartDisplay();
}

// Hàm để cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    let cartList = document.getElementById("cartList");

    // Xóa toàn bộ nội dung hiện tại của thẻ ul
    cartList.innerHTML = "";

    // Lặp qua mảng cartItems và tạo các mục danh sách cho mỗi sản phẩm
    cartItems.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;

        // Tạo nút "Xóa" và thêm sự kiện click để gọi hàm removeFromCart
        let removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.addEventListener("click", function() {
            removeFromCart(index);
        });

        // Thêm nút "Xóa" vào mục danh sách
        li.appendChild(removeButton);

        // Thêm mục danh sách vào giỏ hàng
        cartList.appendChild(li);
    });
}

// Xử lý sự kiện khi nhấn vào thẻ <li>Giỏ hàng</li>
document.getElementById("cart").addEventListener("click", function() {
    // Hiển thị modal
    document.getElementById("modal").style.display = "block";
});

// Đóng modal khi nhấn vào nút đóng
document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Xử lý sự kiện khi nhấn vào nút "Đặt hàng" trong modal giỏ hàng
document.getElementById("placeOrderButton").addEventListener("click", function() {
    // Gọi hàm để đặt hàng
    placeOrder();
});

// Biến để theo dõi ngôn ngữ hiện tại (mặc định là tiếng Việt)
let isVietnamese = true;

// Hàm để chuyển đổi ngôn ngữ và cập nhật nội dung của các phần tử văn bản
function toggleLanguage() {
    // Lấy phần tử chứa ngôn ngữ
    let languageElement = document.querySelector('.ngonngu');

    // Kiểm tra ngôn ngữ hiện tại và thay đổi
    if (isVietnamese) {
        // Đổi sang tiếng Anh
        languageElement.textContent = 'Language: English';
        // Thực hiện thay đổi văn bản cho các phần tử khác nếu cần
    } else {
        // Đổi sang tiếng Việt
        languageElement.textContent = 'Ngôn ngữ: Tiếng Việt';
        // Thực hiện thay đổi văn bản cho các phần tử khác nếu cần
    }

    // Đảo ngược trạng thái ngôn ngữ
    isVietnamese = !isVietnamese;
}

// Gắn sự kiện click cho phần tử ngôn ngữ
document.querySelector('.ngonngu').addEventListener('click', toggleLanguage);

