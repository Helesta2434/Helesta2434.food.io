// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const foods = [
        'ข้าวผัด',
        'ผัดไทย',
        'ต้มยำกุ้ง',
        'ผัดกะเพรา',
        'แกงเขียวหวาน',
        'ข้าวมันไก่',
        'ข้าวหมูแดง',
        'ข้าวหมูกรอบ',
        'ผัดซีอิ๊ว',
        'ข้าวหน้าเป็ด',
        'แกงส้ม',
        'ผัดเผ็ด',
        'ข้าวผัดปู',
        'ข้าวผัดกุ้ง',
        'ข้าวคลุกกะปิ',
        'ส้มตำ',
        'ข้าวซอย',
        'ก๋วยเตี๋ยวเรือ',
        'ราดหน้า',
        'ข้าวไข่เจียว',
        'ผัดผงกะหรี่',
        'ลาบหมู',
        'แกงป่า',
        'ขนมจีน',
        'ก๋วยเตี๋ยวลุยสวน',
        'ผัดบวบ',
        'หอยทอด',
        'ข้าวยำไก่แซ่บ',
        'ข้าวขาหมู',
        'ข้าวมันส้มตำ',
        'ไก่ย่าง',
        'ต้มแซ่บ',
        'หมูมะนาว',
        'ไส้กรอกอีสาน',
        'ปลาทอด',
        'หมูสะเต๊ะ'
    ];

    const button = document.getElementById('random-food-button');
    const result = document.getElementById('result');
    const foodList = document.getElementById('food-list-items');

    // Populate the list of foods
    foods.forEach(food => {
        const listItem = document.createElement('div');
        listItem.className = 'col-md-2 mb-3';
        listItem.innerHTML = `<div class="card"><div class="card-body">${food}</div></div>`;
        foodList.appendChild(listItem);
    });

    // Random food selection
    button.onclick = () => {
        const randomFood = foods[Math.floor(Math.random() * foods.length)];
        result.textContent = `อาหารที่สุ่มได้คือ: ${randomFood}`;
    };
});
