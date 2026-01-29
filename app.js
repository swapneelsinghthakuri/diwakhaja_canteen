// ==========================================
// SCHOOL CANTEEN & MESS MANAGEMENT SYSTEM
// Complete Integrated Logic
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
        { id: 1, studentId: 'STU001', name: 'Rahul Kumar', class: 'Class 1', walletBalance: 500, dailyLimit: 100 },
        { id: 2, studentId: 'STU002', name: 'Priya Sharma', class: 'Class 1', walletBalance: 300, dailyLimit: 100 },
        { id: 3, studentId: 'STU003', name: 'Amit Patel', class: 'Class 1', walletBalance: 200, dailyLimit: 100 },
        { id: 4, studentId: 'STU004', name: 'Sneha Gupta', class: 'Class 2', walletBalance: 50, dailyLimit: 100 },
        { id: 5, studentId: 'STU005', name: 'Vikram Singh', class: 'Class 2', walletBalance: 600, dailyLimit: 150 },
        { id: 6, studentId: 'STU006', name: 'Anjali Reddy', class: 'Class 3', walletBalance: 450, dailyLimit: 120 },
        { id: 7, studentId: 'STU007', name: 'Rohan Mehta', class: 'Class 4', walletBalance: 380, dailyLimit: 120 },
        { id: 8, studentId: 'STU008', name: 'Pooja Iyer', class: 'Class 5', walletBalance: 520, dailyLimit: 150 }
    ],
    distributions: [],
    sales: [],
    qrSales: [],
    recharges: [],
    stock: {},
    expenses: [],
    counters: [
        { id: 'C1', name: 'Counter 1', active: true },
        { id: 'C2', name: 'Counter 2', active: true },
        { id: 'C3', name: 'Counter 3', active: false }
    ],
    // === MESS MANAGEMENT DATA ===
    messStudents: [
        { id: 1, studentId: 'MS001', name: 'Arjun Verma', class: 'Class 6', rollNo: '601', 
          studentType: 'Hostel', messType: 'Student', monthlyFee: 3000, status: 'Active' },
        { id: 2, studentId: 'MS002', name: 'Kavya Nair', class: 'Class 7', rollNo: '702', 
          studentType: 'Day Scholar', messType: 'Student', monthlyFee: 2000, status: 'Active' },
        { id: 3, studentId: 'MS003', name: 'Siddharth Joshi', class: 'Class 8', rollNo: '803', 
          studentType: 'Hostel', messType: 'Student', monthlyFee: 3000, status: 'Active' }
    ],
    messStaff: [
        { id: 1, staffId: 'STF001', name: 'Rajesh Kumar', department: 'Teaching', 
          designation: 'Principal', messType: 'Staff', mealAllowed: 'All meals', rateType: 'Subsidized' },
        { id: 2, staffId: 'STF002', name: 'Meena Sharma', department: 'Teaching', 
          designation: 'Teacher', messType: 'Staff', mealAllowed: 'Lunch only', rateType: 'Subsidized' },
        { id: 3, staffId: 'STF003', name: 'Suresh Reddy', department: 'Admin', 
          designation: 'Office Staff', messType: 'Staff', mealAllowed: 'Lunch only', rateType: 'Full' }
    ],
    messMealEntries: [],
    staffMealEntries: [],
    studentBilling: [],
    staffBilling: [],
    rateMaster: {
        breakfast: { studentRate: 25, staffSubsidized: 20, staffFull: 35 },
        lunch: { studentRate: 40, staffSubsidized: 30, staffFull: 50 },
        dinner: { studentRate: 40, staffSubsidized: 30, staffFull: 50 }
    }
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

data.expenses = [
    { id: 1, date: getTodayDate(), name: 'Gas', amount: 500, description: 'Gas cylinder refill' },
    { id: 2, date: getTodayDate(), name: 'Vegetables', amount: 800, description: 'Daily vegetables' }
];

// Cart for POS
let cart = [];

// QR System Variables
let currentCounterId = localStorage.getItem('currentCounterId') || 'C1';
let currentStudent = null;
let offlineQueue = JSON.parse(localStorage.getItem('offlineQueue') || '[]');

// Mess System Variables
let currentMessUser = null;
let currentMessType = null;

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

function generateId(array) {
    return array.length > 0 ? Math.max(...array.map(item => item.id || 0)) + 1 : 1;
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('canteenData', JSON.stringify(data));
        localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
        console.log('Data saved to localStorage');
    } catch (e) {
        console.error('LocalStorage full:', e);
    }
}

function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem('canteenData');
        if (stored) {
            const parsed = JSON.parse(stored);
            Object.keys(parsed).forEach(key => {
                if (parsed[key]) {
                    data[key] = parsed[key];
                }
            });
            console.log('Data loaded from localStorage');
        }
        
        const queue = localStorage.getItem('offlineQueue');
        if (queue) {
            offlineQueue = JSON.parse(queue);
        }
    } catch (e) {
        console.error('LocalStorage read error:', e);
    }
}

// ==========================================
// NAVIGATION FUNCTIONS
// ==========================================
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
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
    } else if (sectionId === 'qr-canteen') {
        showSubSection('qr-pos');
        loadQRCanteenData();
    } else if (sectionId === 'mess') {
        showSubSection('mess-student-entry');
        loadMessData();
    } else if (sectionId === 'reports') {
        showSubSection('stock');
        loadStockData();
    }
}

function showSubSection(subSectionId) {
    const parentSection = document.querySelector('.section.active');
    if (!parentSection) return;
    
    parentSection.querySelectorAll('.sub-section').forEach(sub => {
        sub.classList.remove('active');
    });
    
    const targetSubSection = document.getElementById(subSectionId);
    if (targetSubSection) {
        targetSubSection.classList.add('active');
    }
    
    parentSection.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
}

// ==========================================
// DASHBOARD FUNCTIONS
// ==========================================
function updateDashboard() {
    const today = getTodayDate();
    
    const todayDiwa = data.distributions.filter(d => d.date === today && d.status === 'GIVEN').length;
    document.getElementById('todayDiwaCount').textContent = todayDiwa;
    
    const todayRegularSales = data.sales
        .filter(s => s.date === today)
        .reduce((sum, sale) => sum + sale.total, 0);
    
    const todayQRSales = data.qrSales
        .filter(s => s.timestamp.startsWith(today))
        .reduce((sum, sale) => sum + sale.price, 0);
    
    const totalSales = todayRegularSales + todayQRSales;
    document.getElementById('todaySales').textContent = 'Rs' + totalSales.toFixed(2);
    
    document.getElementById('totalItems').textContent = data.foodItems.length;
    
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
    loadStudentTable();
    populateDropdowns();
}

document.getElementById('canteenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const canteen = {
        id: generateId(data.canteens),
        name: document.getElementById('canteenName').value,
        description: document.getElementById('canteenDesc').value
    };
    data.canteens.push(canteen);
    loadCanteenTable();
    saveToLocalStorage();
    this.reset();
    alert('Canteen saved successfully!');
});

function loadCanteenTable() {
    const tbody = document.querySelector('#canteenTable tbody');
    tbody.innerHTML = '';
    data.canteens.forEach(canteen => {
        const row = `<tr><td>${canteen.id}</td><td>${canteen.name}</td><td>${canteen.description}</td>
            <td><span class="action-link delete-link" onclick="deleteCanteen(${canteen.id})">Delete</span></td></tr>`;
        tbody.innerHTML += row;
    });
}

function deleteCanteen(id) {
    if (confirm('Are you sure?')) {
        data.canteens = data.canteens.filter(c => c.id !== id);
        loadCanteenTable();
        saveToLocalStorage();
    }
}

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
    saveToLocalStorage();
    this.reset();
    alert('Category saved!');
});

function loadCategoryTable() {
    const tbody = document.querySelector('#categoryTable tbody');
    tbody.innerHTML = '';
    data.categories.forEach(cat => {
        tbody.innerHTML += `<tr><td>${cat.id}</td><td>${cat.name}</td><td>${cat.description}</td>
            <td><span class="action-link delete-link" onclick="deleteCategory(${cat.id})">Delete</span></td></tr>`;
    });
}

function deleteCategory(id) {
    if (confirm('Are you sure?')) {
        data.categories = data.categories.filter(c => c.id !== id);
        loadCategoryTable();
        populateDropdowns();
        saveToLocalStorage();
    }
}

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
    saveToLocalStorage();
    this.reset();
    alert('Food item saved!');
});

function loadFoodItemTable() {
    const tbody = document.querySelector('#foodItemTable tbody');
    tbody.innerHTML = '';
    data.foodItems.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.id}</td><td>${item.category}</td><td>${item.name}</td><td>${item.unit}</td>
            <td>Rs${item.price.toFixed(2)}</td>
            <td><span class="action-link delete-link" onclick="deleteFoodItem(${item.id})">Delete</span></td></tr>`;
    });
}

function deleteFoodItem(id) {
    if (confirm('Are you sure?')) {
        data.foodItems = data.foodItems.filter(f => f.id !== id);
        delete data.stock[id];
        loadFoodItemTable();
        populateDropdowns();
        saveToLocalStorage();
    }
}

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
    saveToLocalStorage();
    this.reset();
    alert('Time slot saved!');
});

function loadTimeSlotTable() {
    const tbody = document.querySelector('#timeSlotTable tbody');
    tbody.innerHTML = '';
    data.timeSlots.forEach(slot => {
        tbody.innerHTML += `<tr><td>${slot.id}</td><td>${slot.name}</td><td>${slot.description}</td>
            <td><span class="action-link delete-link" onclick="deleteTimeSlot(${slot.id})">Delete</span></td></tr>`;
    });
}

function deleteTimeSlot(id) {
    if (confirm('Are you sure?')) {
        data.timeSlots = data.timeSlots.filter(t => t.id !== id);
        loadTimeSlotTable();
        populateDropdowns();
        saveToLocalStorage();
    }
}

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const student = {
        id: generateId(data.students),
        studentId: document.getElementById('studentId').value,
        name: document.getElementById('studentName').value,
        class: document.getElementById('studentClass').value,
        walletBalance: parseFloat(document.getElementById('studentWallet').value) || 0,
        dailyLimit: parseFloat(document.getElementById('studentDailyLimit').value)
    };
    
    data.students.push(student);
    loadStudentTable();
    saveToLocalStorage();
    this.reset();
    alert('Student saved!');
});

function loadStudentTable() {
    const tbody = document.querySelector('#studentTable tbody');
    tbody.innerHTML = '';
    data.students.forEach(student => {
        tbody.innerHTML += `<tr><td>${student.studentId}</td><td>${student.name}</td><td>${student.class}</td>
            <td>Rs${student.walletBalance.toFixed(2)}</td><td>Rs${student.dailyLimit.toFixed(2)}</td>
            <td><span class="action-link delete-link" onclick="deleteStudent(${student.id})">Delete</span></td></tr>`;
    });
}

function deleteStudent(id) {
    if (confirm('Are you sure?')) {
        data.students = data.students.filter(s => s.id !== id);
        loadStudentTable();
        saveToLocalStorage();
    }
}

function populateDropdowns() {
    const foodCategorySelect = document.getElementById('foodCategory');
    if (foodCategorySelect) {
        foodCategorySelect.innerHTML = '<option value="">Select Category</option>';
        data.categories.forEach(cat => {
            foodCategorySelect.innerHTML += `<option value="${cat.id}">${cat.name}</option>`;
        });
    }
    
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
    saveToLocalStorage();
    this.reset();
    alert('Menu saved!');
});

function loadDiwaMenuTable() {
    const tbody = document.querySelector('#diwaMenuTable tbody');
    tbody.innerHTML = '';
    data.diwaMenus.forEach(menu => {
        tbody.innerHTML += `<tr><td>${menu.class}</td><td>${menu.timeSlot}</td><td>${menu.foodItem}</td><td>${menu.quantity}</td>
            <td><span class="action-link delete-link" onclick="deleteDiwaMenu(${menu.id})">Delete</span></td></tr>`;
    });
}

function deleteDiwaMenu(id) {
    if (confirm('Are you sure?')) {
        data.diwaMenus = data.diwaMenus.filter(m => m.id !== id);
        loadDiwaMenuTable();
        saveToLocalStorage();
    }
}

function loadStudentsForDistribution() {
    const date = document.getElementById('distDate').value;
    const selectedClass = document.getElementById('distClass').value;
    const timeSlotId = parseInt(document.getElementById('distTimeSlot').value);
    
    if (!date || !selectedClass || !timeSlotId) {
        alert('Please select Date, Class, and Time Slot');
        return;
    }
    
    const menu = data.diwaMenus.find(m => m.class === selectedClass && m.timeSlotId === timeSlotId);
    
    if (!menu) {
        alert('No menu configured');
        return;
    }
    
    const students = data.students.filter(s => s.class === selectedClass);
    
    const tbody = document.querySelector('#distributionTable tbody');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        tbody.innerHTML += `<tr><td>${student.studentId}</td><td>${student.name}</td><td>${menu.foodItem}</td><td>${menu.quantity}</td>
            <td><select class="dist-status" data-student-id="${student.id}"><option value="GIVEN">GIVEN</option><option value="ABSENT">ABSENT</option></select></td>
            <td><input type="checkbox" class="dist-checkbox" data-student-id="${student.id}" 
                   data-food-id="${menu.foodItemId}" data-food-name="${menu.foodItem}" 
                   data-quantity="${menu.quantity}" data-student-name="${student.name}" 
                   data-class="${selectedClass}" checked></td></tr>`;
    });
    
    document.getElementById('distributionTableDiv').style.display = 'block';
}

function saveDistribution() {
    const date = document.getElementById('distDate').value;
    const checkboxes = document.querySelectorAll('.dist-checkbox:checked');
    
    if (checkboxes.length === 0) {
        alert('No students selected');
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
        
        if (status === 'GIVEN') {
            const foodId = distribution.foodItemId;
            if (data.stock[foodId]) {
                data.stock[foodId].diwaUsed += distribution.quantity;
                data.stock[foodId].closing = data.stock[foodId].opening + data.stock[foodId].purchase - 
                                              data.stock[foodId].diwaUsed - data.stock[foodId].canteenSold;
            }
        }
    });
    
    saveToLocalStorage();
    alert('Distribution saved!');
    document.getElementById('distributionForm').reset();
    document.getElementById('distributionTableDiv').style.display = 'none';
    updateDashboard();
}

function generateDiwaReport() {
    const reportType = document.getElementById('diwaReportType').value;
    const date = document.getElementById('diwaReportDate').value;
    const reportClass = document.getElementById('diwaReportClass').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily') {
        const dailyData = data.distributions.filter(d => d.date === date);
        reportHTML = `<h5>Daily Distribution - ${date}</h5><table><thead><tr><th>Student</th><th>Class</th><th>Food</th><th>Qty</th><th>Status</th></tr></thead><tbody>`;
        dailyData.forEach(d => {
            reportHTML += `<tr><td>${d.studentName}</td><td>${d.class}</td><td>${d.foodItem}</td><td>${d.quantity}</td>
                <td><span class="badge ${d.status === 'GIVEN' ? 'badge-success' : 'badge-danger'}">${d.status}</span></td></tr>`;
        });
        reportHTML += `</tbody></table><p><strong>Total:</strong> ${dailyData.filter(d => d.status === 'GIVEN').length}</p>`;
    } else if (reportType === 'class') {
        const classData = data.distributions.filter(d => !reportClass || d.class === reportClass);
        const grouped = {};
        classData.forEach(d => {
            if (!grouped[d.class]) grouped[d.class] = [];
            grouped[d.class].push(d);
        });
        
        reportHTML = `<h5>Class-wise Report</h5>`;
        for (const [className, records] of Object.entries(grouped)) {
            const given = records.filter(r => r.status === 'GIVEN').length;
            reportHTML += `<p><strong>${className}:</strong> ${given} served</p>`;
        }
    } else {
        const grouped = {};
        data.distributions.forEach(d => {
            if (!grouped[d.studentName]) grouped[d.studentName] = [];
            grouped[d.studentName].push(d);
        });
        
        reportHTML = `<h5>Student-wise Report</h5><table><thead><tr><th>Student</th><th>Class</th><th>Total Meals</th></tr></thead><tbody>`;
        for (const [studentName, records] of Object.entries(grouped)) {
            const meals = records.filter(r => r.status === 'GIVEN').length;
            reportHTML += `<tr><td>${studentName}</td><td>${records[0].class}</td><td>${meals}</td></tr>`;
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

function addItemToCart() {
    const itemId = parseInt(document.getElementById('posItem').value);
    const quantity = parseInt(document.getElementById('posQuantity').value);
    
    if (!itemId || !quantity) {
        alert('Please select item and quantity');
        return;
    }
    
    const item = data.foodItems.find(f => f.id === itemId);
    
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
        tbody.innerHTML += `<tr><td>${item.itemName}</td><td>${item.quantity}</td><td>Rs${item.rate.toFixed(2)}</td>
            <td>Rs${item.amount.toFixed(2)}</td>
            <td><span class="action-link delete-link" onclick="removeFromCart(${index})">Remove</span></td></tr>`;
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
        alert('Please fill all fields and add items');
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
    
    cart.forEach(item => {
        const foodId = item.itemId;
        if (data.stock[foodId]) {
            data.stock[foodId].canteenSold += item.quantity;
            data.stock[foodId].closing = data.stock[foodId].opening + data.stock[foodId].purchase - 
                                          data.stock[foodId].diwaUsed - data.stock[foodId].canteenSold;
        }
    });
    
    saveToLocalStorage();
    alert(`Sale completed! Total: Rs${total.toFixed(2)}`);
    clearCart();
    document.getElementById('posForm').reset();
    document.getElementById('posDate').value = getTodayDate();
    updateDashboard();
}

function generateSalesReport() {
    const reportType = document.getElementById('salesReportType').value;
    const date = document.getElementById('salesReportDate').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily') {
        const dailySales = data.sales.filter(s => s.date === date);
        const totalSales = dailySales.reduce((sum, s) => sum + s.total, 0);
        
        reportHTML = `<h5>Daily Sales - ${date}</h5><p><strong>Total:</strong> Rs${totalSales.toFixed(2)}</p>
            <table><thead><tr><th>Bill ID</th><th>Slot</th><th>Customer</th><th>Items</th><th>Total</th></tr></thead><tbody>`;
        dailySales.forEach(sale => {
            const itemsList = sale.items.map(i => `${i.itemName} (${i.quantity})`).join(', ');
            reportHTML += `<tr><td>${sale.id}</td><td>${sale.timeSlot}</td><td>${sale.customerType}</td>
                <td>${itemsList}</td><td>Rs${sale.total.toFixed(2)}</td></tr>`;
        });
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'item') {
        const itemSales = {};
        data.sales.forEach(sale => {
            sale.items.forEach(item => {
                if (!itemSales[item.itemName]) itemSales[item.itemName] = { quantity: 0, revenue: 0 };
                itemSales[item.itemName].quantity += item.quantity;
                itemSales[item.itemName].revenue += item.amount;
            });
        });
        
        reportHTML = `<h5>Item-wise Sales</h5><table><thead><tr><th>Item</th><th>Qty Sold</th><th>Revenue</th></tr></thead><tbody>`;
        for (const [itemName, stats] of Object.entries(itemSales)) {
            reportHTML += `<tr><td>${itemName}</td><td>${stats.quantity}</td><td>Rs${stats.revenue.toFixed(2)}</td></tr>`;
        }
        reportHTML += `</tbody></table>`;
    } else {
        const slotSales = {};
        data.sales.forEach(sale => {
            if (!slotSales[sale.timeSlot]) slotSales[sale.timeSlot] = 0;
            slotSales[sale.timeSlot] += sale.total;
        });
        
        reportHTML = `<h5>Time Slot-wise Sales</h5><table><thead><tr><th>Time Slot</th><th>Revenue</th></tr></thead><tbody>`;
        for (const [slot, revenue] of Object.entries(slotSales)) {
            reportHTML += `<tr><td>${slot}</td><td>Rs${revenue.toFixed(2)}</td></tr>`;
        }
        reportHTML += `</tbody></table>`;
    }
    
    document.getElementById('salesReportContent').innerHTML = reportHTML;
}

// ==========================================
// QR CANTEEN FUNCTIONS
// ==========================================
function loadQRCanteenData() {
    document.getElementById('counterSelector').value = currentCounterId;
    document.getElementById('offlineQueueCount').textContent = offlineQueue.length;
    loadRechargeTable();
    
    const qrInput = document.getElementById('qrInput');
    if (qrInput) {
        qrInput.addEventListener('change', function() {
            scanStudentQR(this.value);
            this.value = '';
        });
        
        qrInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                scanStudentQR(this.value);
                this.value = '';
            }
        });
    }
}

function setCounterId(counterId) {
    currentCounterId = counterId;
    localStorage.setItem('currentCounterId', counterId);
    console.log('Counter set:', counterId);
}

function scanStudentQR(studentId) {
    const student = data.students.find(s => s.studentId === studentId);
    
    if (!student) {
        showError('Student not found! ID: ' + studentId);
        return;
    }
    
    loadStudent(student);
}

function loadStudent(student) {
    currentStudent = student;
    
    document.getElementById('qrStudentName').textContent = student.name || '';
    document.getElementById('qrStudentClass').textContent = student.class || '';
    document.getElementById('qrStudentBalance').textContent = 'Rs' + student.walletBalance.toFixed(2);
    document.getElementById('qrStudentId').textContent = student.studentId || '';
    
    if (student.walletBalance < 50) {
        document.getElementById('qrStudentBalance').style.color = 'red';
    } else {
        document.getElementById('qrStudentBalance').style.color = '#48bb78';
    }
    
    document.querySelectorAll('.quick-sale-btn').forEach(btn => {
        btn.disabled = false;
    });
    
    const panel = document.getElementById('qrStudentPanel');
    if (panel) panel.style.display = 'block';
    
    const todayExpense = getTodayExpenseForStudent(student.studentId);
    const remainingLimit = student.dailyLimit - todayExpense;
    
    document.getElementById('qrTodayExpense').textContent = 'Rs' + todayExpense.toFixed(2);
    document.getElementById('qrRemainingLimit').textContent = 'Rs' + remainingLimit.toFixed(2);
}

function getTodayExpenseForStudent(studentId) {
    const today = getTodayDate();
    return data.qrSales
        .filter(sale => sale.studentId === studentId && sale.timestamp.startsWith(today))
        .reduce((sum, sale) => sum + sale.price, 0);
}

function resetQRSession() {
    currentStudent = null;
    
    document.getElementById('qrStudentName').textContent = '---';
    document.getElementById('qrStudentClass').textContent = '---';
    document.getElementById('qrStudentBalance').textContent = 'Rs0.00';
    document.getElementById('qrStudentId').textContent = '---';
    document.getElementById('qrTodayExpense').textContent = 'Rs0.00';
    document.getElementById('qrRemainingLimit').textContent = 'Rs0.00';
    
    document.querySelectorAll('.quick-sale-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    const panel = document.getElementById('qrStudentPanel');
    if (panel) panel.style.display = 'none';
    
    document.getElementById('qrInput').focus();
}

function quickSale(itemId) {
    if (!currentStudent) {
        showError('Scan student first!');
        return;
    }
    
    const item = data.foodItems.find(f => f.id === itemId);
    if (!item) {
        showError('Item not found!');
        return;
    }
    
    if (currentStudent.walletBalance < item.price) {
        showError('Insufficient balance!');
        return;
    }
    
    const todayExpense = getTodayExpenseForStudent(currentStudent.studentId);
    if ((todayExpense + item.price) > currentStudent.dailyLimit) {
        showError('Daily limit exceeded!');
        return;
    }
    
    processSale(currentStudent, item);
}

function processSale(student, item) {
    const timestamp = new Date().toISOString();
    
    const sale = {
        id: generateId(data.qrSales),
        studentId: student.studentId,
        studentName: student.name,
        itemId: item.id,
        itemName: item.name,
        price: item.price,
        counterId: currentCounterId,
        timestamp: timestamp,
        synced: false
    };
    
    student.walletBalance -= item.price;
    
    if (data.stock[item.id]) {
        data.stock[item.id].canteenSold += 1;
        data.stock[item.id].closing = data.stock[item.id].opening + data.stock[item.id].purchase - 
                                       data.stock[item.id].diwaUsed - data.stock[item.id].canteenSold;
    }
    
    data.qrSales.push(sale);
    
    offlineQueue.push({
        type: 'sale',
        data: sale,
        timestamp: timestamp
    });
    
    saveToLocalStorage();
    
    showSuccess(`✅ ${item.name} Rs${item.price.toFixed(2)} | Balance: Rs${student.walletBalance.toFixed(2)}`);
    
    setTimeout(() => {
        resetQRSession();
    }, 2000);
    
    syncOfflineData();
    updateDashboard();
}

function rechargeWallet(studentId, amount, mode = 'Cash') {
    const student = data.students.find(s => s.studentId === studentId);
    
    if (!student) {
        showError('Student not found!');
        return false;
    }
    
    if (amount <= 0) {
        showError('Invalid amount!');
        return false;
    }
    
    const recharge = {
        id: generateId(data.recharges),
        studentId: student.studentId,
        studentName: student.name,
        amount: amount,
        date: getTodayDate(),
        timestamp: new Date().toISOString(),
        mode: mode,
        adminId: 'ADMIN001'
    };
    
    student.walletBalance += amount;
    
    data.recharges.push(recharge);
    
    offlineQueue.push({
        type: 'recharge',
        data: recharge,
        timestamp: recharge.timestamp
    });
    
    saveToLocalStorage();
    
    showSuccess(`Wallet recharged! Rs${amount.toFixed(2)} added. New balance: Rs${student.walletBalance.toFixed(2)}`);
    
    loadRechargeTable();
    syncOfflineData();
    
    return true;
}

function loadRechargeTable() {
    const tbody = document.querySelector('#rechargeTable tbody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    const recent = data.recharges.slice().reverse().slice(0, 20);
    
    recent.forEach(recharge => {
        tbody.innerHTML += `<tr><td>${recharge.date}</td><td>${recharge.studentId}</td><td>${recharge.studentName}</td>
            <td>Rs${recharge.amount.toFixed(2)}</td><td>${recharge.mode}</td></tr>`;
    });
}

function getRechargeHistory(studentId) {
    return data.recharges
        .filter(r => r.studentId === studentId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
}

async function syncOfflineData() {
    if (offlineQueue.length === 0) return;
    
    if (!navigator.onLine) {
        console.log('Offline - sync postponed');
        document.getElementById('offlineQueueCount').textContent = offlineQueue.length;
        return;
    }
    
    console.log('Syncing', offlineQueue.length, 'records...');
    
    try {
        offlineQueue.forEach(item => {
            if (item.type === 'sale') {
                const sale = data.qrSales.find(s => s.id === item.data.id);
                if (sale) sale.synced = true;
            }
        });
        
        offlineQueue = [];
        saveToLocalStorage();
        
        document.getElementById('offlineQueueCount').textContent = '0';
        console.log('Sync completed');
    } catch (error) {
        console.error('Sync failed:', error);
    }
}

setInterval(() => {
    syncOfflineData();
}, 30000);

window.addEventListener('online', () => {
    console.log('Network restored - syncing...');
    syncOfflineData();
});

function generateQRReport() {
    const reportType = document.getElementById('qrReportType').value;
    const date = document.getElementById('qrReportDate').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily-qr') {
        const dailyQRSales = data.qrSales.filter(s => s.timestamp.startsWith(date));
        const totalSales = dailyQRSales.reduce((sum, s) => sum + s.price, 0);
        
        reportHTML = `<h5>Daily QR Sales - ${date}</h5><p><strong>Total Sales:</strong> Rs${totalSales.toFixed(2)}</p>
            <p><strong>Transactions:</strong> ${dailyQRSales.length}</p>
            <table><thead><tr><th>Time</th><th>Student ID</th><th>Name</th><th>Item</th><th>Price</th><th>Counter</th></tr></thead><tbody>`;
        dailyQRSales.forEach(sale => {
            const time = new Date(sale.timestamp).toLocaleTimeString();
            reportHTML += `<tr><td>${time}</td><td>${sale.studentId}</td><td>${sale.studentName}</td>
                <td>${sale.itemName}</td><td>Rs${sale.price.toFixed(2)}</td><td>${sale.counterId}</td></tr>`;
        });
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'student-expense') {
        const studentExpenses = {};
        data.qrSales.forEach(sale => {
            if (!studentExpenses[sale.studentId]) {
                studentExpenses[sale.studentId] = {
                    studentId: sale.studentId,
                    studentName: sale.studentName,
                    totalSpent: 0,
                    transactions: 0
                };
            }
            studentExpenses[sale.studentId].totalSpent += sale.price;
            studentExpenses[sale.studentId].transactions += 1;
        });
        
        reportHTML = `<h5>Student-wise Expense</h5><table><thead><tr><th>Student ID</th><th>Name</th><th>Total Spent</th><th>Transactions</th></tr></thead><tbody>`;
        for (const [studentId, expense] of Object.entries(studentExpenses)) {
            reportHTML += `<tr><td>${expense.studentId}</td><td>${expense.studentName}</td>
                <td>Rs${expense.totalSpent.toFixed(2)}</td><td>${expense.transactions}</td></tr>`;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'low-balance') {
        const lowBalanceStudents = data.students
            .filter(s => s.walletBalance < 100)
            .sort((a, b) => a.walletBalance - b.walletBalance);
        
        reportHTML = `<h5>Low Balance Students (Below Rs100)</h5><table><thead><tr><th>Student ID</th><th>Name</th><th>Class</th><th>Balance</th><th>Limit</th></tr></thead><tbody>`;
        lowBalanceStudents.forEach(student => {
            reportHTML += `<tr><td>${student.studentId}</td><td>${student.name}</td><td>${student.class}</td>
                <td style="color:${student.walletBalance < 50 ? 'red' : 'orange'}; font-weight:bold;">Rs${student.walletBalance.toFixed(2)}</td>
                <td>Rs${student.dailyLimit.toFixed(2)}</td></tr>`;
        });
        reportHTML += `</tbody></table>`;
    }
    
    document.getElementById('qrReportContent').innerHTML = reportHTML;
}

function loadParentView() {
    const studentId = document.getElementById('parentStudentId').value;
    
    if (!studentId) {
        alert('Enter Student ID');
        return;
    }
    
    const dashboard = getParentDashboard(studentId);
    
    if (!dashboard) {
        alert('Student not found!');
        return;
    }
    
    document.getElementById('parentDashboard').style.display = 'block';
    
    document.getElementById('parentBalance').textContent = 'Rs' + dashboard.currentBalance.toFixed(2);
    document.getElementById('parentTodayExpense').textContent = 'Rs' + dashboard.todayExpense.toFixed(2);
    document.getElementById('parentMonthlyExpense').textContent = 'Rs' + dashboard.monthlyExpense.toFixed(2);
    document.getElementById('parentDailyLimit').textContent = 'Rs' + dashboard.dailyLimit.toFixed(2);
    
    const transactionTbody = document.querySelector('#parentTransactionTable tbody');
    transactionTbody.innerHTML = '';
    dashboard.recentSales.forEach(sale => {
        const date = new Date(sale.timestamp).toLocaleString();
        transactionTbody.innerHTML += `<tr><td>${date}</td><td>${sale.itemName}</td><td>Rs${sale.price.toFixed(2)}</td><td>${sale.counterId}</td></tr>`;
    });
    
    const rechargeTbody = document.querySelector('#parentRechargeTable tbody');
    rechargeTbody.innerHTML = '';
    dashboard.rechargeHistory.forEach(recharge => {
        rechargeTbody.innerHTML += `<tr><td>${recharge.date}</td><td>Rs${recharge.amount.toFixed(2)}</td><td>${recharge.mode}</td></tr>`;
    });
}

function getParentDashboard(studentId) {
    const student = data.students.find(s => s.studentId === studentId);
    if (!student) return null;
    
    const todayExpense = getTodayExpenseForStudent(studentId);
    
    const thisMonth = new Date().toISOString().substring(0, 7);
    const monthlyExpense = data.qrSales
        .filter(s => s.studentId === studentId && s.timestamp.startsWith(thisMonth))
        .reduce((sum, s) => sum + s.price, 0);
    
    const recentSales = data.qrSales
        .filter(s => s.studentId === studentId)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 10);
    
    const rechargeHistory = getRechargeHistory(studentId);
    
    return {
        student: student,
        currentBalance: student.walletBalance,
        todayExpense: todayExpense,
        monthlyExpense: monthlyExpense,
        dailyLimit: student.dailyLimit,
        remainingLimit: student.dailyLimit - todayExpense,
        recentSales: recentSales,
        rechargeHistory: rechargeHistory
    };
}

// ==========================================
// MESS MANAGEMENT FUNCTIONS
// ==========================================
function loadMessData() {
    loadMessStudentsTable();
}

function loadMessStudent(studentId) {
    const student = data.messStudents.find(s => s.studentId === studentId);
    
    if (!student) {
        showError('Mess student not found!');
        return null;
    }
    
    if (student.status !== 'Active') {
        showError('Student is inactive!');
        return null;
    }
    
    currentMessUser = student;
    currentMessType = 'student';
    
    console.log('Mess student loaded:', student.name);
    return student;
}

function recordStudentMeal(studentId, mealType, entryMode = 'Manual') {
    const student = loadMessStudent(studentId);
    if (!student) return false;
    
    const today = getTodayDate();
    
    const existingEntry = data.messMealEntries.find(
        e => e.userId === studentId && 
             e.date === today && 
             e.mealType === mealType &&
             e.userType === 'Student'
    );
    
    if (existingEntry) {
        showError(`${mealType} already recorded today!`);
        return false;
    }
    
    const entry = {
        id: generateId(data.messMealEntries),
        date: today,
        userId: studentId,
        userName: student.name,
        userType: 'Student',
        studentType: student.studentType,
        mealType: mealType,
        taken: 'Yes',
        entryMode: entryMode,
        counterId: currentCounterId,
        timestamp: new Date().toISOString()
    };
    
    data.messMealEntries.push(entry);
    
    offlineQueue.push({
        type: 'mess-meal',
        data: entry,
        timestamp: entry.timestamp
    });
    
    saveToLocalStorage();
    showSuccess(`✅ ${mealType} recorded for ${student.name}`);
    
    syncOfflineData();
    return true;
}

function calculateStudentMonthlyBill(studentId, month) {
    const student = data.messStudents.find(s => s.studentId === studentId);
    if (!student) return null;
    
    const mealEntries = data.messMealEntries.filter(
        e => e.userId === studentId && 
             e.date.startsWith(month) &&
             e.taken === 'Yes'
    );
    
    const totalMeals = mealEntries.length;
    
    let bill = data.studentBilling.find(
        b => b.studentId === studentId && b.month === month
    );
    
    if (!bill) {
        bill = {
            id: generateId(data.studentBilling),
            month: month,
            studentId: studentId,
            studentName: student.name,
            studentType: student.studentType,
            totalMeals: totalMeals,
            monthlyFee: student.monthlyFee,
            extraCharges: 0,
            discount: 0,
            finalAmount: student.monthlyFee,
            paymentStatus: 'Due',
            generatedDate: getTodayDate()
        };
        
        data.studentBilling.push(bill);
    } else {
        bill.totalMeals = totalMeals;
        bill.finalAmount = bill.monthlyFee + bill.extraCharges - bill.discount;
    }
    
    saveToLocalStorage();
    return bill;
}

function getStudentMealCount(studentId, month) {
    return data.messMealEntries.filter(
        e => e.userId === studentId && 
             e.date.startsWith(month) &&
             e.taken === 'Yes'
    ).length;
}

function loadMessStaff(staffId) {
    const staff = data.messStaff.find(s => s.staffId === staffId);
    
    if (!staff) {
        showError('Staff not found!');
        return null;
    }
    
    currentMessUser = staff;
    currentMessType = 'staff';
    
    console.log('Mess staff loaded:', staff.name);
    return staff;
}

function recordStaffMeal(staffId, mealType) {
    const staff = loadMessStaff(staffId);
    if (!staff) return false;
    
    if (staff.mealAllowed === 'Lunch only' && mealType !== 'Lunch') {
        showError(`${staff.name} is only allowed Lunch!`);
        return false;
    }
    
    const today = getTodayDate();
    
    const existingEntry = data.staffMealEntries.find(
        e => e.staffId === staffId && 
             e.date === today && 
             e.mealType === mealType
    );
    
    if (existingEntry) {
        showError(`${mealType} already recorded today!`);
        return false;
    }
    
    const mealKey = mealType.toLowerCase();
    let rate = 0;
    
    if (data.rateMaster[mealKey]) {
        rate = staff.rateType === 'Subsidized' ? 
               data.rateMaster[mealKey].staffSubsidized : 
               data.rateMaster[mealKey].staffFull;
    }
    
    const amount = rate * 1;
    
    const entry = {
        id: generateId(data.staffMealEntries),
        date: today,
        staffId: staffId,
        staffName: staff.name,
        department: staff.department,
        mealType: mealType,
        quantity: 1,
        rateApplied: rate,
        amount: amount,
        counterId: currentCounterId,
        timestamp: new Date().toISOString()
    };
    
    data.staffMealEntries.push(entry);
    
    offlineQueue.push({
        type: 'staff-meal',
        data: entry,
        timestamp: entry.timestamp
    });
    
    saveToLocalStorage();
    showSuccess(`✅ ${mealType} recorded for ${staff.name} | Amount: Rs${amount.toFixed(2)}`);
    
    syncOfflineData();
    return true;
}

function calculateStaffBill(staffId, billingType = 'Monthly', month = null) {
    const staff = data.messStaff.find(s => s.staffId === staffId);
    if (!staff) return null;
    
    let mealEntries;
    
    if (billingType === 'Monthly' && month) {
        mealEntries = data.staffMealEntries.filter(
            e => e.staffId === staffId && e.date.startsWith(month)
        );
    } else {
        const today = getTodayDate();
        mealEntries = data.staffMealEntries.filter(
            e => e.staffId === staffId && e.date === today
        );
    }
    
    const totalMeals = mealEntries.length;
    const totalAmount = mealEntries.reduce((sum, e) => sum + e.amount, 0);
    
    const billKey = billingType === 'Monthly' ? month : getTodayDate();
    let bill = data.staffBilling.find(
        b => b.staffId === staffId && 
             b.billingType === billingType && 
             b.period === billKey
    );
    
    if (!bill) {
        bill = {
            id: generateId(data.staffBilling),
            billingType: billingType,
            period: billKey,
            staffId: staffId,
            staffName: staff.name,
            department: staff.department,
            totalMeals: totalMeals,
            totalAmount: totalAmount,
            deductionMode: 'Salary',
            paymentStatus: 'Pending',
            generatedDate: getTodayDate()
        };
        
        data.staffBilling.push(bill);
    } else {
        bill.totalMeals = totalMeals;
        bill.totalAmount = totalAmount;
    }
    
    saveToLocalStorage();
    return bill;
}

function generateDailyMessReport(date = getTodayDate()) {
    const studentMeals = data.messMealEntries.filter(
        e => e.date === date && e.userType === 'Student' && e.taken === 'Yes'
    );
    
    const staffMeals = data.staffMealEntries.filter(e => e.date === date);
    
    return {
        date: date,
        studentBreakfast: studentMeals.filter(e => e.mealType === 'Breakfast').length,
        studentLunch: studentMeals.filter(e => e.mealType === 'Lunch').length,
        studentDinner: studentMeals.filter(e => e.mealType === 'Dinner').length,
        staffBreakfast: staffMeals.filter(e => e.mealType === 'Breakfast').length,
        staffLunch: staffMeals.filter(e => e.mealType === 'Lunch').length,
        staffDinner: staffMeals.filter(e => e.mealType === 'Dinner').length,
        totalStudentMeals: studentMeals.length,
        totalStaffMeals: staffMeals.length,
        staffRevenue: staffMeals.reduce((sum, e) => sum + e.amount, 0)
    };
}

function generateStudentMonthlyReport(month) {
    const reports = [];
    
    data.messStudents.forEach(student => {
        const mealCount = getStudentMealCount(student.studentId, month);
        const bill = data.studentBilling.find(
            b => b.studentId === student.studentId && b.month === month
        );
        
        reports.push({
            studentId: student.studentId,
            studentName: student.name,
            studentType: student.studentType,
            totalMeals: mealCount,
            monthlyFee: student.monthlyFee,
            paymentStatus: bill ? bill.paymentStatus : 'Not Generated'
        });
    });
    
    return reports;
}

function generateStaffMonthlyReport(month) {
    const reports = [];
    
    data.messStaff.forEach(staff => {
        const mealEntries = data.staffMealEntries.filter(
            e => e.staffId === staff.staffId && e.date.startsWith(month)
        );
        
        const totalMeals = mealEntries.length;
        const totalAmount = mealEntries.reduce((sum, e) => sum + e.amount, 0);
        
        reports.push({
            staffId: staff.staffId,
            staffName: staff.name,
            department: staff.department,
            totalMeals: totalMeals,
            totalAmount: totalAmount
        });
    });
    
    return reports;
}

function generateMonthlyMessSummary(month) {
    const studentMeals = data.messMealEntries.filter(
        e => e.date.startsWith(month) && e.taken === 'Yes'
    );
    
    const staffMeals = data.staffMealEntries.filter(
        e => e.date.startsWith(month)
    );
    
    const studentBills = data.studentBilling.filter(b => b.month === month);
    const studentRevenue = studentBills.reduce((sum, b) => sum + b.finalAmount, 0);
    const studentPaid = studentBills.filter(b => b.paymentStatus === 'Paid')
                                    .reduce((sum, b) => sum + b.finalAmount, 0);
    const studentDue = studentRevenue - studentPaid;
    
    const staffRevenue = staffMeals.reduce((sum, e) => sum + e.amount, 0);
    
    return {
        month: month,
        totalStudentMeals: studentMeals.length,
        totalStaffMeals: staffMeals.length,
        studentRevenue: studentRevenue,
        studentPaid: studentPaid,
        studentDue: studentDue,
        staffRevenue: staffRevenue,
        totalRevenue: studentRevenue + staffRevenue
    };
}

// UI Helper Functions for Mess
function scanMessStudent(studentId) {
    const student = loadMessStudent(studentId);
    if (!student) return;
    
    document.getElementById('messStudentId').textContent = student.studentId;
    document.getElementById('messStudentName').textContent = student.name;
    document.getElementById('messStudentType').textContent = student.studentType;
    
    document.querySelectorAll('#messStudentPanel .quick-sale-btn').forEach(btn => {
        btn.disabled = false;
    });
    
    document.getElementById('messStudentPanel').style.display = 'block';
}

function scanMessStaff(staffId) {
    const staff = loadMessStaff(staffId);
    if (!staff) return;
    
    document.getElementById('messStaffIdDisplay').textContent = staff.staffId;
    document.getElementById('messStaffName').textContent = staff.name;
    document.getElementById('messStaffAllowed').textContent = staff.mealAllowed;
    
    document.querySelectorAll('#messStaffPanel .quick-sale-btn').forEach(btn => {
        btn.disabled = false;
    });
    
    document.getElementById('messStaffPanel').style.display = 'block';
}

function markStudentMeal(mealType) {
    if (!currentMessUser || currentMessType !== 'student') {
        showError('Scan student first!');
        return;
    }
    
    if (recordStudentMeal(currentMessUser.studentId, mealType, 'QR')) {
        setTimeout(() => resetMessSession(), 1500);
    }
}

function markStaffMeal(mealType) {
    if (!currentMessUser || currentMessType !== 'staff') {
        showError('Scan staff first!');
        return;
    }
    
    if (recordStaffMeal(currentMessUser.staffId, mealType)) {
        setTimeout(() => resetMessSession(), 1500);
    }
}

function resetMessSession() {
    currentMessUser = null;
    currentMessType = null;
    
    document.getElementById('messStudentPanel').style.display = 'none';
    document.getElementById('messStaffPanel').style.display = 'none';
    
    document.querySelectorAll('.quick-sale-btn').forEach(btn => btn.disabled = true);
}

function generateMessBills() {
    const month = document.getElementById('messBillMonth').value;
    const type = document.getElementById('messBillType').value;
    
    if (!month) {
        alert('Select month');
        return;
    }
    
    let html = '';
    
    if (type === 'student') {
        data.messStudents.forEach(student => {
            const bill = calculateStudentMonthlyBill(student.studentId, month);
            if (bill) {
                html += `<p>✅ Bill generated for ${student.name}: Rs${bill.finalAmount}</p>`;
            }
        });
    } else {
        data.messStaff.forEach(staff => {
            const bill = calculateStaffBill(staff.staffId, 'Monthly', month);
            if (bill) {
                html += `<p>✅ Bill generated for ${staff.name}: Rs${bill.totalAmount.toFixed(2)}</p>`;
            }
        });
    }
    
    document.getElementById('messBillContent').innerHTML = html || '<p>No bills generated</p>';
    saveToLocalStorage();
    alert('Bills generated!');
}

function generateMessReport() {
    const reportType = document.getElementById('messReportType').value;
    const dateValue = document.getElementById('messReportDate').value;
    
    let reportHTML = '';
    
    if (reportType === 'daily') {
        const report = generateDailyMessReport(dateValue);
        reportHTML = `<h5>Daily Meal Report - ${report.date}</h5>
            <table><tr><th>Meal</th><th>Students</th><th>Staff</th><th>Total</th></tr>
            <tr><td>Breakfast</td><td>${report.studentBreakfast}</td><td>${report.staffBreakfast}</td><td>${report.studentBreakfast + report.staffBreakfast}</td></tr>
            <tr><td>Lunch</td><td>${report.studentLunch}</td><td>${report.staffLunch}</td><td>${report.studentLunch + report.staffLunch}</td></tr>
            <tr><td>Dinner</td><td>${report.studentDinner}</td><td>${report.staffDinner}</td><td>${report.studentDinner + report.staffDinner}</td></tr>
            <tr><td><strong>Total</strong></td><td><strong>${report.totalStudentMeals}</strong></td><td><strong>${report.totalStaffMeals}</strong></td><td><strong>${report.totalStudentMeals + report.totalStaffMeals}</strong></td></tr>
            </table><p><strong>Staff Revenue:</strong> Rs${report.staffRevenue.toFixed(2)}</p>`;
    } else if (reportType === 'student-monthly') {
        const reports = generateStudentMonthlyReport(dateValue);
        reportHTML = `<h5>Student Monthly - ${dateValue}</h5><table>
            <tr><th>Student ID</th><th>Name</th><th>Type</th><th>Meals</th><th>Fee</th><th>Status</th></tr>`;
        reports.forEach(r => {
            reportHTML += `<tr><td>${r.studentId}</td><td>${r.studentName}</td><td>${r.studentType}</td><td>${r.totalMeals}</td><td>Rs${r.monthlyFee}</td><td>${r.paymentStatus}</td></tr>`;
        });
        reportHTML += `</table>`;
    } else if (reportType === 'staff-monthly') {
        const reports = generateStaffMonthlyReport(dateValue);
        reportHTML = `<h5>Staff Monthly - ${dateValue}</h5><table>
            <tr><th>Staff ID</th><th>Name</th><th>Department</th><th>Meals</th><th>Amount</th></tr>`;
        reports.forEach(r => {
            reportHTML += `<tr><td>${r.staffId}</td><td>${r.staffName}</td><td>${r.department}</td><td>${r.totalMeals}</td><td>Rs${r.totalAmount.toFixed(2)}</td></tr>`;
        });
        reportHTML += `</table>`;
    } else if (reportType === 'summary') {
        const summary = generateMonthlyMessSummary(dateValue);
        reportHTML = `<h5>Monthly Summary - ${summary.month}</h5>
            <div style="background:#f7fafc; padding:20px; border-radius:8px;">
                <p><strong>Total Student Meals:</strong> ${summary.totalStudentMeals}</p>
                <p><strong>Total Staff Meals:</strong> ${summary.totalStaffMeals}</p>
                <p><strong>Student Revenue:</strong> Rs${summary.studentRevenue.toFixed(2)}</p>
                <p><strong>Student Paid:</strong> Rs${summary.studentPaid.toFixed(2)}</p>
                <p><strong>Student Due:</strong> Rs${summary.studentDue.toFixed(2)}</p>
                <p><strong>Staff Revenue:</strong> Rs${summary.staffRevenue.toFixed(2)}</p>
                <hr><h4 style="color:#38a169;">Total Revenue: Rs${summary.totalRevenue.toFixed(2)}</h4>
            </div>`;
    }
    
    document.getElementById('messReportContent').innerHTML = reportHTML;
}

const messStudentForm = document.getElementById('messStudentForm');
if (messStudentForm) {
    messStudentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const student = {
            id: generateId(data.messStudents),
            studentId: document.getElementById('newMessStudentId').value,
            name: document.getElementById('newMessStudentName').value,
            class: '',
            rollNo: '',
            studentType: document.getElementById('newMessStudentType').value,
            messType: 'Student',
            monthlyFee: parseFloat(document.getElementById('newMessStudentFee').value),
            status: 'Active'
        };
        
        data.messStudents.push(student);
        saveToLocalStorage();
        this.reset();
        alert('Mess student added!');
        loadMessStudentsTable();
    });
}

function loadMessStudentsTable() {
    const tbody = document.querySelector('#messStudentsTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    data.messStudents.forEach(s => {
        tbody.innerHTML += `<tr><td>${s.studentId}</td><td>${s.name}</td><td>${s.studentType}</td>
            <td>Rs${s.monthlyFee}</td><td>${s.status}</td></tr>`;
    });
}

// ==========================================
// STOCK & EXPENSE FUNCTIONS
// ==========================================
function loadStockData() {
    populateDropdowns();
    loadStockTable();
    loadExpenseTable();
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
    saveToLocalStorage();
    this.reset();
    alert('Stock updated!');
    updateDashboard();
});

function loadStockTable() {
    const tbody = document.querySelector('#stockTable tbody');
    tbody.innerHTML = '';
    
    for (const [itemId, stock] of Object.entries(data.stock)) {
        const status = stock.closing < 10 ? 
            '<span class="badge badge-danger">LOW</span>' : 
            '<span class="badge badge-success">OK</span>';
        
        tbody.innerHTML += `<tr><td>${stock.itemName}</td><td>${stock.opening}</td><td>${stock.purchase}</td>
            <td>${stock.diwaUsed}</td><td>${stock.canteenSold}</td><td>${stock.closing}</td><td>${status}</td></tr>`;
    }
}

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
    saveToLocalStorage();
    this.reset();
    alert('Expense saved!');
});

function loadExpenseTable() {
    const tbody = document.querySelector('#expenseTable tbody');
    tbody.innerHTML = '';
    
    data.expenses.slice().reverse().forEach(expense => {
        tbody.innerHTML += `<tr><td>${expense.date}</td><td>${expense.name}</td><td>Rs${expense.amount.toFixed(2)}</td>
            <td>${expense.description}</td>
            <td><span class="action-link delete-link" onclick="deleteExpense(${expense.id})">Delete</span></td></tr>`;
    });
}

function deleteExpense(id) {
    if (confirm('Are you sure?')) {
        data.expenses = data.expenses.filter(e => e.id !== id);
        loadExpenseTable();
        saveToLocalStorage();
    }
}

function generateCombinedReport() {
    const reportType = document.getElementById('combinedReportType').value;
    
    let reportHTML = '';
    
    if (reportType === 'stock-summary') {
        reportHTML = `<h5>Stock Summary</h5><table><thead><tr><th>Item</th><th>Opening</th><th>Purchase</th><th>Used</th><th>Closing</th><th>Status</th></tr></thead><tbody>`;
        for (const [itemId, stock] of Object.entries(data.stock)) {
            const totalUsed = stock.diwaUsed + stock.canteenSold;
            const status = stock.closing < 10 ? 'LOW' : 'OK';
            reportHTML += `<tr><td>${stock.itemName}</td><td>${stock.opening}</td><td>${stock.purchase}</td><td>${totalUsed}</td><td>${stock.closing}</td>
                <td><span class="badge ${status === 'LOW' ? 'badge-danger' : 'badge-success'}">${status}</span></td></tr>`;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'expense-summary') {
        const totalExpense = data.expenses.reduce((sum, e) => sum + e.amount, 0);
        const expenseByType = {};
        
        data.expenses.forEach(e => {
            if (!expenseByType[e.name]) expenseByType[e.name] = 0;
            expenseByType[e.name] += e.amount;
        });
        
        reportHTML = `<h5>Expense Summary</h5><p><strong>Total:</strong> Rs${totalExpense.toFixed(2)}</p>
            <table><thead><tr><th>Type</th><th>Amount</th></tr></thead><tbody>`;
        for (const [type, amount] of Object.entries(expenseByType)) {
            reportHTML += `<tr><td>${type}</td><td>Rs${amount.toFixed(2)}</td></tr>`;
        }
        reportHTML += `</tbody></table>`;
    } else if (reportType === 'profit-loss') {
        const regularSalesTotal = data.sales.reduce((sum, s) => sum + s.total, 0);
        const qrSalesTotal = data.qrSales.reduce((sum, s) => sum + s.price, 0);
        const totalRevenue = regularSalesTotal + qrSalesTotal;
        const totalExpense = data.expenses.reduce((sum, e) => sum + e.amount, 0);
        const profit = totalRevenue - totalExpense;
        
        reportHTML = `<h5>Profit & Loss</h5>
            <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px;">
                <p><strong>Regular Sales:</strong> Rs${regularSalesTotal.toFixed(2)}</p>
                <p><strong>QR Sales:</strong> Rs${qrSalesTotal.toFixed(2)}</p>
                <p><strong>Total Revenue:</strong> Rs${totalRevenue.toFixed(2)}</p>
                <p><strong>Total Expenses:</strong> Rs${totalExpense.toFixed(2)}</p>
                <hr><h4 style="color: ${profit >= 0 ? '#38a169' : '#f56565'}">
                    ${profit >= 0 ? 'Profit' : 'Loss'}: Rs${Math.abs(profit).toFixed(2)}</h4>
            </div>`;
    }
    
    document.getElementById('combinedReportContent').innerHTML = reportHTML;
}

// ==========================================
// HELPER FUNCTIONS
// ==========================================
function showError(message) {
    const notification = document.getElementById('successNotification');
    if (notification) {
        notification.style.backgroundColor = '#f56565';
        notification.textContent = '❌ ' + message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
            notification.style.backgroundColor = '#48bb78';
        }, 3000);
    } else {
        alert('❌ ' + message);
    }
}

function showSuccess(message) {
    const notification = document.getElementById('successNotification');
    if (notification) {
        notification.textContent = message;
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (['posDate', 'distDate', 'stockDate', 'expenseDate', 'salesReportDate', 'diwaReportDate', 'qrReportDate'].includes(input.id)) {
            input.value = getTodayDate();
        }
    });
    
    updateDashboard();
    loadAllSetupData();
    
    console.log('School Canteen & Mess Management System Ready');
});
