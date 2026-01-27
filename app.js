// ==========================================
// SCHOOL CANTEEN MANAGEMENT SYSTEM - LOGIC
// Complete JavaScript with Dummy Data
// ==========================================

// ==========================================
// DATA STORAGE (Dummy Data)
// ==========================================
let data = {
    canteens: [
        { id: 1, name: 'Main School Canteen', description: 'Primary canteen serving all students' }
    ],
    categories: [
        { id: 1, name: 'Breakfast', description: 'Morning food items' },
        { id: 2, name: 'Snacks', description: 'Light snacks and tiffin' },
        { id: 3, name: 'Drinks', description: 'Beverages' },
        { id: 4, name: 'Lunch', description: 'Main meals' }
    ],
    foodItems: [
        { id: 1, categoryId: 1, category: 'Breakfast', name: 'Idli', unit: 'plate', price: 20, description: '3 pieces with chutney' },
        { id: 2, categoryId: 1, category: 'Breakfast', name: 'Poha', unit: 'plate', price: 15, description: 'Vegetable poha' },
        { id: 3, categoryId: 2, category: 'Snacks', name: 'Samosa', unit: 'pcs', price: 10, description: 'Crispy samosa' },
        { id: 4, categoryId: 2, category: 'Snacks', name: 'Vada Pav', unit: 'pcs', price: 15, description: 'Mumbai style' },
        { id: 5, categoryId: 3, category: 'Drinks', name: 'Tea', unit: 'cup', price: 10, description: 'Hot tea' },
        { id: 6, categoryId: 3, category: 'Drinks', name: 'Cold Drink', unit: 'glass', price: 15, description: 'Chilled soft drink' },
        { id: 7, categoryId: 4, category: 'Lunch', name: 'Rice Plate', unit: 'plate', price: 40, description: 'Rice with dal and curry' },
        { id: 8, categoryId: 4, category: 'Lunch', name: 'Chapati Plate', unit: 'plate', price: 35, description: '4 chapatis with curry' }
    ],
    timeSlots: [
        { id: 1, name: 'Morning', description: '7:00 AM - 9:00 AM' },
        { id: 2, name: 'Tiffin', description: '11:00 AM - 12:00 PM' },
        { id: 3, name: 'Lunch', description: '1:00 PM - 2:00 PM' }
    ],
    diwaMenus: [
        { id: 1, class: 'Class 1', timeSlotId: 1, timeSlot: 'Morning', foodItemId: 1, foodItem: 'Idli', quantity: 1 },
        { id: 2, class: 'Class 2', timeSlotId: 1, timeSlot: 'Morning', foodItemId: 2, foodItem: 'Poha', quantity: 1 },
        { id: 3, class: 'Class 1', timeSlotId: 3, timeSlot: 'Lunch', foodItemId: 7, foodItem: 'Rice Plate', quantity: 1 }
    ],
    students: [
        { id: 1, name: 'Rahul Kumar', class: 'Class 1' },
        { id: 2, name: 'Priya Sharma', class: 'Class 1' },
        { id: 3, name: 'Amit Patel', class: 'Class 1' },
        { id: 4, name: 'Sneha Gupta', class: 'Class 2' },
        { id: 5, name: 'Vikram Singh', class: 'Class 2' },
        { id: 6, name: 'Anjali Reddy', class: 'Class 3' },
        { id: 7, name: 'Rohan Mehta', class: 'Class 4' },
        { id: 8, name: 'Pooja Iyer', class: 'Class 5' }
    ],
    distributions: [],
    sales: [],
    stock: {},
    expenses: []
};

// Initialize stock for all food items
data.foodItems.forEach(item => {
    data.stock[item.id] = {
        itemId: item.id,
        itemName: item.name,
        opening: 100,
        purchase: 0,
        diwaUsed: 0,
        canteenSold: 0,
        closing: 100
    };
});

// Sample distributions
data.distributions = [
    { id: 1, date: getTodayDate(), studentId: 1, studentName: 'Rahul Kumar', class: 'Class 1', foodItemId: 1, foodItem: 'Idli', quantity: 1, status: 'GIVEN' },
    { id: 2, date: getTodayDate(), studentId: 2, studentName: 'Priya Sharma', class: 'Class 1', foodItemId: 1, foodItem: 'Idli', quantity: 1, status: 'GIVEN' },
    { id: 3, date: getTodayDate(), studentId: 3, studentName: 'Amit Patel', class: 'Class 1', foodItemId: 1, foodItem: 'Idli', quantity: 1, status: 'ABSENT' }
];

// Sample sales
data.sales = [
    { 
        id: 1, 
        date: getTodayDate(), 
        timeSlotId: 2, 
        timeSlot: 'Tiffin', 
        customerType: 'Student', 
        items: [
            { itemId: 3, itemName: 'Samosa', quantity: 2, rate: 10, amount: 20 },
            { itemId: 5, itemName: 'Tea', quantity: 1, rate: 10, amount: 10 }
        ],
        total: 30,
        paymentMode: 'Cash'
    }
];

// Sample expenses
data.expenses = [
    { id: 1, date: getTodayDate(), name: 'Gas', amount: 500, description: 'Gas cylinder refill' },
    { id: 2, date: getTodayDate(), name: 'Vegetables', amount: 800, description: 'Daily vegetables' }
];

// Cart for POS
let cart = [];

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function generateId(array) {
    return array.length > 0 ? Math.max(...array.map(item => item.id)) + 1 : 1;
}

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Refresh data when showing sections
    if (sectionId === 'dashboard') {
        updateDashboard();
    } else if (sectionId === 'setup') {
        showSubSection('canteen-master');
        loadAllSetupData();
    } else if (sectionId === 'diwa-khaja') {
        showSubSection('menu-setup');
        loadDiwaData();
    } else if (sectionId === 'canteen') {
        showSubSection('pos');
        loadCanteenData();
    } else if (sectionId === 'reports') {
        showSubSection('stock');
        loadStockData();
    }
}

function showSubSection(subSectionId) {
    // Get parent section
    const parentSection = document.querySelector('.section.active');
    if (!parentSection) return;
    
    // Hide all sub-sections in parent
    parentSection.querySelectorAll('.sub-section').forEach(sub => {
        sub.classList.remove('active');
    });
    
    // Show selected sub-section
    const targetSubSection = document.getElementById(subSectionId);
    if (targetSubSection) {
        targetSubSection.classList.add('active');
    }
    
    // Update tab buttons
    parentSection.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ==========================================
// DASHBOARD FUNCTIONS
// ==========================================
function updateDashboard() {
    const today = getTodayDate();
    
    // Today's Diwa Khaja count
    const todayDiwa = data.distributions.filter(d => d.date === today && d.status === 'GIVEN').length;
    document.getElementById('todayDiwaCount').textContent = todayDiwa;
    
    // Today's sales
    const todaySales = data.sales
        .filter(s => s.date === today)
        .reduce((sum, sale) => sum + sale.total, 0);
    document.getElementById('todaySales').textContent = 'Rs' + todaySales.toFixed(2);
    
    // Total items
    document.getElementById('totalItems').textContent = data.foodItems.length;
    
    // Low stock
    const lowStockCount = Object.values(data.stock).filter(s => s.closing < 10).length;
    document.getElementById('lowStock').textContent = lowStockCount;
}

// ==========================================
// SETUP FUNCTIONS
// ==========================================
function loadAllSetupData() {
    loadCanteenTable();
    loadCategoryTable();
    loadFoodItemTable();
    loadTimeSlotTable();
    populateDropdowns();
}

// Canteen Master
document.getElementById('canteenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const canteen = {
        id: generateId(data.canteens),
        name: document.getElementById('canteenName').value,
        description: document.getElementById('canteenDesc').value
    };
    data.canteens.push(canteen);
    loadCanteenTable();
    this.reset();
    alert('Canteen saved successfully!');
});

function loadCanteenTable() {
    const tbody = document.querySelector('#canteenTable tbody');
    tbody.innerHTML = '';
    data.canteens.forEach(canteen => {
        const row = `
            <tr>
                <td>${canteen.id}</td>
                <td>${canteen.name}</td>
                <td>${canteen.description}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteCanteen(${canteen.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteCanteen(id) {
    if (confirm('Are you sure you want to delete this canteen?')) {
        data.canteens = data.canteens.filter(c => c.id !== id);
        loadCanteenTable();
    }
}

// Food Category
document.getElementById('categoryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const category = {
        id: generateId(data.categories),
        name: document.getElementById('categoryName').value,
        description: document.getElementById('categoryDesc').value
    };
    data.categories.push(category);
    loadCategoryTable();
    populateDropdowns();
    this.reset();
    alert('Category saved successfully!');
});

function loadCategoryTable() {
    const tbody = document.querySelector('#categoryTable tbody');
    tbody.innerHTML = '';
    data.categories.forEach(category => {
        const row = `
            <tr>
                <td>${category.id}</td>
                <td>${category.name}</td>
                <td>${category.description}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteCategory(${category.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteCategory(id) {
    if (confirm('Are you sure you want to delete this category?')) {
        data.categories = data.categories.filter(c => c.id !== id);
        loadCategoryTable();
        populateDropdowns();
    }
}

// Food Items
document.getElementById('foodItemForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const categoryId = parseInt(document.getElementById('foodCategory').value);
    const category = data.categories.find(c => c.id === categoryId);
    
    const foodItem = {
        id: generateId(data.foodItems),
        categoryId: categoryId,
        category: category.name,
        name: document.getElementById('foodName').value,
        unit: document.getElementById('foodUnit').value,
        price: parseFloat(document.getElementById('foodPrice').value),
        description: document.getElementById('foodDesc').value
    };
    
    data.foodItems.push(foodItem);
    
    // Initialize stock for new item
    data.stock[foodItem.id] = {
        itemId: foodItem.id,
        itemName: foodItem.name,
        opening: 0,
        purchase: 0,
        diwaUsed: 0,
        canteenSold: 0,
        closing: 0
    };
    
    loadFoodItemTable();
    populateDropdowns();
    this.reset();
    alert('Food item saved successfully!');
});

function loadFoodItemTable() {
    const tbody = document.querySelector('#foodItemTable tbody');
    tbody.innerHTML = '';
    data.foodItems.forEach(item => {
        const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.category}</td>
                <td>${item.name}</td>
                <td>${item.unit}</td>
                <td>Rs${item.price.toFixed(2)}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteFoodItem(${item.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteFoodItem(id) {
    if (confirm('Are you sure you want to delete this food item?')) {
        data.foodItems = data.foodItems.filter(f => f.id !== id);
        delete data.stock[id];
        loadFoodItemTable();
        populateDropdowns();
    }
}

// Time Slots
document.getElementById('timeSlotForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const slot = {
        id: generateId(data.timeSlots),
        name: document.getElementById('slotName').value,
        description: document.getElementById('slotDesc').value
    };
    data.timeSlots.push(slot);
    loadTimeSlotTable();
    populateDropdowns();
    this.reset();
    alert('Time slot saved successfully!');
});

function loadTimeSlotTable() {
    const tbody = document.querySelector('#timeSlotTable tbody');
    tbody.innerHTML = '';
    data.timeSlots.forEach(slot => {
        const row = `
            <tr>
                <td>${slot.id}</td>
                <td>${slot.name}</td>
                <td>${slot.description}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteTimeSlot(${slot.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteTimeSlot(id) {
    if (confirm('Are you sure you want to delete this time slot?')) {
        data.timeSlots = data.timeSlots.filter(t => t.id !== id);
        loadTimeSlotTable();
        populateDropdowns();
    }
}

// Populate Dropdowns
function populateDropdowns() {
    // Food Category dropdown
    const categoryDropdowns = ['foodCategory', 'diwaFoodItem', 'posItem', 'stockItem'];
    
    // Categories
    const foodCategorySelect = document.getElementById('foodCategory');
    if (foodCategorySelect) {
        foodCategorySelect.innerHTML = '<option value="">Select Category</option>';
        data.categories.forEach(cat => {
            foodCategorySelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
        });
    }
    
    // Food Items
    const foodItemSelects = ['diwaFoodItem', 'posItem', 'stockItem'];
    foodItemSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Select Item</option>';
            data.foodItems.forEach(item => {
                select.innerHTML += `<option value="${item.id}">${item.name} (${item.unit}) - Rs${item.price}</option>`;
            });
        }
    });
    
    // Time Slots
    const timeSlotSelects = ['diwaTimeSlot', 'distTimeSlot', 'posTimeSlot'];
    timeSlotSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = '<option value="">Select Time Slot</option>';
            data.timeSlots.forEach(slot => {
                select.innerHTML += `<option value="${slot.id}">${slot.name}</option>`;
            });
        }
    });
}

// ==========================================
// DIWA KHAJA FUNCTIONS
// ==========================================
function loadDiwaData() {
    populateDropdowns();
    loadDiwaMenuTable();
}

// Diwa Menu Setup
document.getElementById('diwaMenuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const timeSlotId = parseInt(document.getElementById('diwaTimeSlot').value);
    const timeSlot = data.timeSlots.find(t => t.id === timeSlotId);
    const foodItemId = parseInt(document.getElementById('diwaFoodItem').value);
    const foodItem = data.foodItems.find(f => f.id === foodItemId);
    
    const menu = {
        id: generateId(data.diwaMenus),
        class: document.getElementById('diwaClass').value,
        timeSlotId: timeSlotId,
        timeSlot: timeSlot.name,
        foodItemId: foodItemId,
        foodItem: foodItem.name,
        quantity: parseInt(document.getElementById('diwaQuantity').value)
    };
    
    data.diwaMenus.push(menu);
    loadDiwaMenuTable();
    this.reset();
    alert('Diwa Khaja menu saved successfully!');
});

function loadDiwaMenuTable() {
    const tbody = document.querySelector('#diwaMenuTable tbody');
    tbody.innerHTML = '';
    data.diwaMenus.forEach(menu => {
        const row = `
            <tr>
                <td>${menu.class}</td>
                <td>${menu.timeSlot}</td>
                <td>${menu.foodItem}</td>
                <td>${menu.quantity}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteDiwaMenu(${menu.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteDiwaMenu(id) {
    if (confirm('Are you sure you want to delete this menu?')) {
        data.diwaMenus = data.diwaMenus.filter(m => m.id !== id);
        loadDiwaMenuTable();
    }
}

// Distribution
function loadStudentsForDistribution() {
    const date = document.getElementById('distDate').value;
    const selectedClass = document.getElementById('distClass').value;
    const timeSlotId = parseInt(document.getElementById('distTimeSlot').value);
    
    if (!date || !selectedClass || !timeSlotId) {
        alert('Please select Date, Class, and Time Slot');
        return;
    }
    
    // Find menu for this class and time slot
    const menu = data.diwaMenus.find(m => m.class === selectedClass && m.timeSlotId === timeSlotId);
    
    if (!menu) {
        alert('No menu configured for this class and time slot');
        return;
    }
    
    // Get students of this class
    const students = data.students.filter(s => s.class === selectedClass);
    
    const tbody = document.querySelector('#distributionTable tbody');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${menu.foodItem}</td>
                <td>${menu.quantity}</td>
                <td>
                    <select class="dist-status" data-student-id="${student.id}">
                        <option value="GIVEN">GIVEN</option>
                        <option value="ABSENT">ABSENT</option>
                    </select>
                </td>
                <td>
                    <input type="checkbox" class="dist-checkbox" data-student-id="${student.id}" 
                           data-food-id="${menu.foodItemId}" data-food-name="${menu.foodItem}" 
                           data-quantity="${menu.quantity}" data-student-name="${student.name}" 
                           data-class="${selectedClass}" checked>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    
    document.getElementById('distributionTableDiv').style.display = 'block';
}

function saveDistribution() {
    const date = document.getElementById('distDate').value;
    const checkboxes = document.querySelectorAll('.dist-checkbox:checked');
    
    if (checkboxes.length === 0) {
        alert('No students selected for distribution');
        return;
    }
    
    checkboxes.forEach(checkbox => {
        const studentId = parseInt(checkbox.getAttribute('data-student-id'));
        const statusSelect = document.querySelector(`.dist-status[data-student-id="${studentId}"]`);
        const status = statusSelect.value;
        
        const distribution = {
            id: generateId(data.distributions),
            date: date,
            studentId: studentId,
            studentName: checkbox.getAttribute('data-student-name'),
            class: checkbox.getAttribute('data-class'),
            foodItemId: parseInt(checkbox.getAttribute('data-food-id')),
            foodItem: checkbox.getAttribute('data-food-name'),
            quantity: parseInt(checkbox.getAttribute('data-quantity')),
            status: status
        };
        
        data.distributions.push(distribution);
        
        // Update stock if GIVEN
        if (status === 'GIVEN') {
            const foodId = distribution.foodItemId;
            if (data.stock[foodId]) {
                data.stock[foodId].diwaUsed += distribution.quantity;
                data.stock[foodId].closing = data.stock[foodId].opening + data.stock[foodId].purchase - 
                                              data.stock[foodId].diwaUsed - data.stock[foodId].canteenSold;
            }
        }
    });
    
    alert(`Distribution saved for ${checkboxes.length} students!`);
    document.getElementById('distributionForm').reset();
    document.getElementById('distributionTableDiv').style.display = 'none';
    updateDashboard();
}

// Diwa Reports
function generateDiwaReport() {
    const reportType = document.getElementById('diwaReportType').value;
    const date = document.getElementById('diwaReportDate').value;
    const reportClass = document.getElementById('diwaReportClass').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily') {
        const dailyData = data.distributions.filter(d => d.date === date);
        reportHTML = `
            <h5>Daily Distribution Report - ${date}</h5>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Food Item</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;
        dailyData.forEach(d => {
            reportHTML += `
                <tr>
                    <td>${d.studentName}</td>
                    <td>${d.class}</td>
                    <td>${d.foodItem}</td>
                    <td>${d.quantity}</td>
                    <td><span class="badge ${d.status === 'GIVEN' ? 'badge-success' : 'badge-danger'}">${d.status}</span></td>
                </tr>
            `;
        });
        reportHTML += `</tbody></table>`;
        reportHTML += `<p><strong>Total Distributed:</strong> ${dailyData.filter(d => d.status === 'GIVEN').length}</p>`;
    } else if (reportType === 'class') {
        const classData = data.distributions.filter(d => !reportClass || d.class === reportClass);
        const grouped = {};
        classData.forEach(d => {
            if (!grouped[d.class]) grouped[d.class] = [];
            grouped[d.class].push(d);
        });
        
        reportHTML = `<h5>Class-wise Distribution Report</h5>`;
        for (const [className, records] of Object.entries(grouped)) {
            const given = records.filter(r => r.status === 'GIVEN').length;
            reportHTML += `<p><strong>${className}:</strong> ${given} students served</p>`;
        }
    } else if (reportType === 'student') {
        const studentData = data.distributions;
        const grouped = {};
        studentData.forEach(d => {
            if (!grouped[d.studentName]) grouped[d.studentName] = [];
            grouped[d.studentName].push(d);
        });
        
        reportHTML = `
            <h5>Student-wise Distribution Report</h5>
            <table>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Total Meals</th>
                    </tr>
                </thead>
                <tbody>
        `;
        for (const [studentName, records] of Object.entries(grouped)) {
            const meals = records.filter(r => r.status === 'GIVEN').length;
            const studentClass = records[0].class;
            reportHTML += `
                <tr>
                    <td>${studentName}</td>
                    <td>${studentClass}</td>
                    <td>${meals}</td>
                </tr>
            `;
        }
        reportHTML += `</tbody></table>`;
    }
    
    document.getElementById('diwaReportContent').innerHTML = reportHTML;
}

// ==========================================
// CANTEEN FUNCTIONS
// ==========================================
function loadCanteenData() {
    populateDropdowns();
    clearCart();
    document.getElementById('posDate').value = getTodayDate();
}

// Add to Cart
function addItemToCart() {
    const itemId = parseInt(document.getElementById('posItem').value);
    const quantity = parseInt(document.getElementById('posQuantity').value);
    
    if (!itemId || !quantity) {
        alert('Please select item and quantity');
        return;
    }
    
    const item = data.foodItems.find(f => f.id === itemId);
    
    // Check if item already in cart
    const existingItem = cart.find(c => c.itemId === itemId);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.amount = existingItem.quantity * existingItem.rate;
    } else {
        cart.push({
            itemId: itemId,
            itemName: item.name,
            quantity: quantity,
            rate: item.price,
            amount: quantity * item.price
        });
    }
    
    updateCartDisplay();
}

function updateCartDisplay() {
    const tbody = document.querySelector('#cartTable tbody');
    tbody.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item.amount;
        const row = `
            <tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td>Rs${item.rate.toFixed(2)}</td>
                <td>Rs${item.amount.toFixed(2)}</td>
                <td><span class="action-link delete-link" onclick="removeFromCart(${index})">Remove</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

function completeSale() {
    const date = document.getElementById('posDate').value;
    const timeSlotId = parseInt(document.getElementById('posTimeSlot').value);
    const customerType = document.getElementById('posCustomerType').value;
    const paymentMode = document.getElementById('posPaymentMode').value;
    
    if (!date || !timeSlotId || !customerType || cart.length === 0) {
        alert('Please fill all required fields and add items to cart');
        return;
    }
    
    const timeSlot = data.timeSlots.find(t => t.id === timeSlotId);
    const total = cart.reduce((sum, item) => sum + item.amount, 0);
    
    const sale = {
        id: generateId(data.sales),
        date: date,
        timeSlotId: timeSlotId,
        timeSlot: timeSlot.name,
        customerType: customerType,
        items: [...cart],
        total: total,
        paymentMode: paymentMode
    };
    
    data.sales.push(sale);
    
    // Update stock
    cart.forEach(item => {
        const foodId = item.itemId;
        if (data.stock[foodId]) {
            data.stock[foodId].canteenSold += item.quantity;
            data.stock[foodId].closing = data.stock[foodId].opening + data.stock[foodId].purchase - 
                                          data.stock[foodId].diwaUsed - data.stock[foodId].canteenSold;
        }
    });
    
    alert(`Sale completed! Total: Rs${total.toFixed(2)}`);
    clearCart();
    document.getElementById('posForm').reset();
    document.getElementById('posDate').value = getTodayDate();
    updateDashboard();
}

// Sales Reports
function generateSalesReport() {
    const reportType = document.getElementById('salesReportType').value;
    const date = document.getElementById('salesReportDate').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily') {
        const dailySales = data.sales.filter(s => s.date === date);
        const totalSales = dailySales.reduce((sum, s) => sum + s.total, 0);
        
        reportHTML = `
            <h5>Daily Sales Report - ${date}</h5>
            <p><strong>Total Sales:</strong> Rs${totalSales.toFixed(2)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Bill ID</th>
                        <th>Time Slot</th>
                        <th>Customer Type</th>
                        <th>Items</th>
                        <th>Total (Rs)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        dailySales.forEach(sale => {
            const itemsList = sale.items.map(i => `${i.itemName} (${i.quantity})`).join(', ');
            reportHTML += `
                <tr>
                    <td>${sale.id}</td>
                    <td>${sale.timeSlot}</td>
                    <td>${sale.customerType}</td>
                    <td>${itemsList}</td>
                    <td>Rs${sale.total.toFixed(2)}</td>
                </tr>
            `;
        });
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'item') {
        const itemSales = {};
        data.sales.forEach(sale => {
            sale.items.forEach(item => {
                if (!itemSales[item.itemName]) {
                    itemSales[item.itemName] = { quantity: 0, revenue: 0 };
                }
                itemSales[item.itemName].quantity += item.quantity;
                itemSales[item.itemName].revenue += item.amount;
            });
        });
        
        reportHTML = `
            <h5>Item-wise Sales Report</h5>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity Sold</th>
                        <th>Revenue (Rs)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        for (const [itemName, stats] of Object.entries(itemSales)) {
            reportHTML += `
                <tr>
                    <td>${itemName}</td>
                    <td>${stats.quantity}</td>
                    <td>Rs${stats.revenue.toFixed(2)}</td>
                </tr>
            `;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'timeslot') {
        const slotSales = {};
        data.sales.forEach(sale => {
            if (!slotSales[sale.timeSlot]) {
                slotSales[sale.timeSlot] = 0;
            }
            slotSales[sale.timeSlot] += sale.total;
        });
        
        reportHTML = `
            <h5>Time Slot-wise Sales Report</h5>
            <table>
                <thead>
                    <tr>
                        <th>Time Slot</th>
                        <th>Revenue (Rs)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        for (const [slot, revenue] of Object.entries(slotSales)) {
            reportHTML += `
                <tr>
                    <td>${slot}</td>
                    <td>Rs${revenue.toFixed(2)}</td>
                </tr>
            `;
        }
        reportHTML += `</tbody></table>`;
    }
    
    document.getElementById('salesReportContent').innerHTML = reportHTML;
}

// ==========================================
// STOCK & EXPENSE FUNCTIONS
// ==========================================
function loadStockData() {
    populateDropdowns();
    loadStockTable();
}

document.getElementById('stockForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const itemId = parseInt(document.getElementById('stockItem').value);
    const purchase = parseInt(document.getElementById('stockPurchase').value);
    
    if (data.stock[itemId]) {
        data.stock[itemId].purchase += purchase;
        data.stock[itemId].closing = data.stock[itemId].opening + data.stock[itemId].purchase - 
                                      data.stock[itemId].diwaUsed - data.stock[itemId].canteenSold;
    }
    
    loadStockTable();
    this.reset();
    alert('Stock updated successfully!');
    updateDashboard();
});

function loadStockTable() {
    const tbody = document.querySelector('#stockTable tbody');
    tbody.innerHTML = '';
    
    for (const [itemId, stock] of Object.entries(data.stock)) {
        const status = stock.closing < 10 ? 
            '<span class="badge badge-danger">LOW STOCK</span>' : 
            '<span class="badge badge-success">OK</span>';
        
        const row = `
            <tr>
                <td>${stock.itemName}</td>
                <td>${stock.opening}</td>
                <td>${stock.purchase}</td>
                <td>${stock.diwaUsed}</td>
                <td>${stock.canteenSold}</td>
                <td>${stock.closing}</td>
                <td>${status}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    }
}

// Expenses
document.getElementById('expenseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const expense = {
        id: generateId(data.expenses),
        date: document.getElementById('expenseDate').value,
        name: document.getElementById('expenseName').value,
        amount: parseFloat(document.getElementById('expenseAmount').value),
        description: document.getElementById('expenseDesc').value
    };
    
    data.expenses.push(expense);
    loadExpenseTable();
    this.reset();
    alert('Expense saved successfully!');
});

function loadExpenseTable() {
    const tbody = document.querySelector('#expenseTable tbody');
    tbody.innerHTML = '';
    
    data.expenses.slice().reverse().forEach(expense => {
        const row = `
            <tr>
                <td>${expense.date}</td>
                <td>${expense.name}</td>
                <td>Rs${expense.amount.toFixed(2)}</td>
                <td>${expense.description}</td>
                <td>
                    <span class="action-link delete-link" onclick="deleteExpense(${expense.id})">Delete</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function deleteExpense(id) {
    if (confirm('Are you sure you want to delete this expense?')) {
        data.expenses = data.expenses.filter(e => e.id !== id);
        loadExpenseTable();
    }
}

// Combined Reports
function generateCombinedReport() {
    const reportType = document.getElementById('combinedReportType').value;
    const fromDate = document.getElementById('reportFromDate').value;
    const toDate = document.getElementById('reportToDate').value;
    
    let reportHTML = '';
    
    if (reportType === 'stock-summary') {
        reportHTML = `
            <h5>Stock Summary Report</h5>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Opening</th>
                        <th>Purchase</th>
                        <th>Total Used</th>
                        <th>Closing</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
        `;
        for (const [itemId, stock] of Object.entries(data.stock)) {
            const totalUsed = stock.diwaUsed + stock.canteenSold;
            const status = stock.closing < 10 ? 'LOW' : 'OK';
            reportHTML += `
                <tr>
                    <td>${stock.itemName}</td>
                    <td>${stock.opening}</td>
                    <td>${stock.purchase}</td>
                    <td>${totalUsed}</td>
                    <td>${stock.closing}</td>
                    <td><span class="badge ${status === 'LOW' ? 'badge-danger' : 'badge-success'}">${status}</span></td>
                </tr>
            `;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'expense-summary') {
        const totalExpense = data.expenses.reduce((sum, e) => sum + e.amount, 0);
        const expenseByType = {};
        
        data.expenses.forEach(e => {
            if (!expenseByType[e.name]) expenseByType[e.name] = 0;
            expenseByType[e.name] += e.amount;
        });
        
        reportHTML = `
            <h5>Expense Summary Report</h5>
            <p><strong>Total Expenses:</strong> Rs${totalExpense.toFixed(2)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Expense Type</th>
                        <th>Total Amount (Rs)</th>
                    </tr>
                </thead>
                <tbody>
        `;
        for (const [type, amount] of Object.entries(expenseByType)) {
            reportHTML += `
                <tr>
                    <td>${type}</td>
                    <td>Rs${amount.toFixed(2)}</td>
                </tr>
            `;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'profit-loss') {
        const totalRevenue = data.sales.reduce((sum, s) => sum + s.total, 0);
        const totalExpense = data.expenses.reduce((sum, e) => sum + e.amount, 0);
        const profit = totalRevenue - totalExpense;
        
        reportHTML = `
            <h5>Profit & Loss Statement</h5>
            <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px;">
                <p><strong>Total Revenue (Canteen Sales):</strong> Rs${totalRevenue.toFixed(2)}</p>
                <p><strong>Total Expenses:</strong> Rs${totalExpense.toFixed(2)}</p>
                <hr>
                <h4 style="color: ${profit >= 0 ? '#38a169' : '#f56565'}">
                    ${profit >= 0 ? 'Profit' : 'Loss'}: Rs${Math.abs(profit).toFixed(2)}
                </h4>
            </div>
        `;
    }
    
    document.getElementById('combinedReportContent').innerHTML = reportHTML;
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Set today's date in date fields
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (input.id === 'posDate' || input.id === 'distDate' || input.id === 'stockDate' || 
            input.id === 'expenseDate' || input.id === 'salesReportDate' || input.id === 'diwaReportDate') {
            input.value = getTodayDate();
        }
    });
    
    // Initial load
    updateDashboard();
    loadAllSetupData();
    loadExpenseTable();
});
