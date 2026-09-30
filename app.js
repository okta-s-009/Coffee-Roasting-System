/**
 * COFFEE ROASTING SYSTEM - CORE APPLICATION LOGIC
 * High-performance, reactive SPA implementation
 * Supporting all 18 mobile wireframe screens
 */

// ==================== INITIAL DATA (SEEDS) ====================
const SEED_DATA = {
    user: {
        username: 'admin',
        name: 'Admin',
        role: 'Administrator',
        email: 'admin@coffee.co.id'
    },
    coffees: [
        {
            id: 'c1',
            kode: 'COF-001',
            nama: 'Arabica Gayo',
            negara: 'Indonesia',
            region: 'Gayo',
            farm: 'Takengon',
            varietas: 'Typica',
            ketinggian: '1200',
            proses: 'Washed',
            grade: 'G1',
            supplier: 'PT. Nusantara Coffee',
            catatan: 'Kopi dengan karakter rasa citrus dan floral yang seimbang.',
            status: 'Aktif'
        },
        {
            id: 'c2',
            kode: 'COF-002',
            nama: 'Robusta Lampung',
            negara: 'Indonesia',
            region: 'Lampung',
            farm: 'Liwa Highlands',
            varietas: 'Robusta',
            ketinggian: '600',
            proses: 'Natural',
            grade: 'G1',
            supplier: 'CV. Bumi Kopi',
            catatan: 'Body tebal, aroma cokelat pekat dan nutty cocok untuk espresso blend.',
            status: 'Aktif'
        },
        {
            id: 'c3',
            kode: 'COF-003',
            nama: 'Arabica Toraja',
            negara: 'Indonesia',
            region: 'Sulawesi Selatan',
            farm: 'Sesean Toraja',
            varietas: 'S-795',
            ketinggian: '1400',
            proses: 'Washed',
            grade: 'Specialty',
            supplier: 'PT. Sumber Rejeki',
            catatan: 'Keasaman lembut herbal dengan sentuhan dark chocolate dan rempah.',
            status: 'Aktif'
        },
        {
            id: 'c4',
            kode: 'COF-004',
            nama: 'Robusta Temanggung',
            negara: 'Indonesia',
            region: 'Jawa Tengah',
            farm: 'Gunung Sindoro',
            varietas: 'Robusta',
            ketinggian: '700',
            proses: 'Honey',
            grade: 'G1',
            supplier: 'Koperasi Kopi Rakyat',
            catatan: 'Karakter manis mocca dengan rasa gurih yang dominan.',
            status: 'Aktif'
        },
        {
            id: 'c5',
            kode: 'COF-005',
            nama: 'Arabica Java',
            negara: 'Indonesia',
            region: 'Jawa Tengah',
            farm: 'Gunung Slamet',
            varietas: 'Typica',
            ketinggian: '1300',
            proses: 'Wet Hulled',
            grade: 'G1',
            supplier: 'Java Estate Supplier',
            catatan: 'Rasa rempah manis, kayu manis dan sentuhan buah matang seimbang.',
            status: 'Aktif'
        },
        {
            id: 'c6',
            kode: 'COF-006',
            nama: 'Arabica Bali Kintamani',
            negara: 'Indonesia',
            region: 'Bali',
            farm: 'Kintamani Hills',
            varietas: 'Catimor',
            ketinggian: '1350',
            proses: 'Natural',
            grade: 'Specialty',
            supplier: 'PT. Nusantara Coffee',
            catatan: 'Aroma khas jeruk keprok dengan body medium halus.',
            status: 'Aktif'
        },
        {
            id: 'c7',
            kode: 'COF-007',
            nama: 'Arabica Flores Bajawa',
            negara: 'Indonesia',
            region: 'NTT',
            farm: 'Ngada Bajawa',
            varietas: 'Typica',
            ketinggian: '1450',
            proses: 'Washed',
            grade: 'Specialty',
            supplier: 'CV. Bumi Kopi',
            catatan: 'Notes apel karamel, vanila, dan aftertaste yang bersih.',
            status: 'Aktif'
        },
        {
            id: 'c8',
            kode: 'COF-008',
            nama: 'Arabica Papua Wamena',
            negara: 'Indonesia',
            region: 'Papua',
            farm: 'Lembah Baliem',
            varietas: 'Typica',
            ketinggian: '1600',
            proses: 'Washed',
            grade: 'Specialty',
            supplier: 'PT. Sumber Rejeki',
            catatan: 'Kopi organik rasa cokelat lembut dan aroma floral liar pegunungan.',
            status: 'Aktif'
        },
        {
            id: 'c9',
            kode: 'COF-009',
            nama: 'Arabica Mandheling',
            negara: 'Indonesia',
            region: 'Sumatera Utara',
            farm: 'Lintong Nihuta',
            varietas: 'Typica',
            ketinggian: '1300',
            proses: 'Wet Hulled',
            grade: 'G1',
            supplier: 'PT. Nusantara Coffee',
            catatan: 'Syrupy body, earthy aromatik dengan aftertaste rempah hangat.',
            status: 'Aktif'
        },
        {
            id: 'c10',
            kode: 'COF-010',
            nama: 'Robusta Dampit Malang',
            negara: 'Indonesia',
            region: 'Jawa Timur',
            farm: 'Dampit Lereng Semeru',
            varietas: 'Robusta',
            ketinggian: '650',
            proses: 'Natural',
            grade: 'G1',
            supplier: 'Koperasi Kopi Rakyat',
            catatan: 'Cita rasa karamel gurih cokelat pekat tanpa rasa asam berlebih.',
            status: 'Aktif'
        },
        {
            id: 'c11',
            kode: 'COF-011',
            nama: 'Arabica Kerinci',
            negara: 'Indonesia',
            region: 'Jambi',
            farm: 'Kayu Aro',
            varietas: 'Andung Sari',
            ketinggian: '1500',
            proses: 'Anaerobic',
            grade: 'Specialty',
            supplier: 'Java Estate Supplier',
            catatan: 'Rasa tropical fruit fermentasi eksotis yang manis semerbak.',
            status: 'Aktif'
        },
        {
            id: 'c12',
            kode: 'COF-012',
            nama: 'Arabica Ijen Raung',
            negara: 'Indonesia',
            region: 'Jawa Timur',
            farm: 'Bondowoso',
            varietas: 'Bourbon',
            ketinggian: '1250',
            proses: 'Washed',
            grade: 'G1',
            supplier: 'CV. Bumi Kopi',
            catatan: 'Karakter rasa kacang sangrai, gula kelapa, dan teh melati.',
            status: 'Aktif'
        }
    ],
    suppliers: [
        {
            id: 's1',
            kode: 'SUP-001',
            nama: 'PT. Nusantara Coffee',
            kontak: 'Budi Santoso',
            telepon: '0812-3456-7890',
            email: 'nusantara@coffee.co.id',
            alamat: 'Jakarta • Jl. Kopi Specialty No. 10, Jakarta Selatan',
            status: 'Aktif'
        },
        {
            id: 's2',
            kode: 'SUP-002',
            nama: 'CV. Bumi Kopi',
            kontak: 'Asep Sunarya',
            telepon: '0813-6789-0123',
            email: 'bumikopi@co.id',
            alamat: 'Bandung • Jl. Lembang No. 45, Bandung Barat',
            status: 'Aktif'
        },
        {
            id: 's3',
            kode: 'SUP-003',
            nama: 'PT. Sumber Rejeki',
            kontak: 'Hendra Wijaya',
            telepon: '0812-9876-5432',
            email: 'sumber@rejeki.co.id',
            alamat: 'Surabaya • Kawasan Pergudangan Margomulyo, Surabaya',
            status: 'Aktif'
        },
        {
            id: 's4',
            kode: 'SUP-004',
            nama: 'Koperasi Kopi Rakyat',
            kontak: 'Slamet Riyadi',
            telepon: '0813-2468-1357',
            email: 'koperasi@kopi.co.id',
            alamat: 'Jember • Desa Kemuning Lor, Arjasa, Jember',
            status: 'Aktif'
        },
        {
            id: 's5',
            kode: 'SUP-005',
            nama: 'Java Estate Supplier',
            kontak: 'Bambang Sutrisno',
            telepon: '0812-1122-3344',
            email: 'java@estate.co.id',
            alamat: 'Semarang • Jl. Pahlawan No. 88, Semarang',
            status: 'Aktif'
        }
    ],
    mesin: [
        {
            id: 'm1',
            kode: 'MES-001',
            nama: 'Mesin 1',
            merek: 'Probat',
            model: 'P12',
            minCap: 5,
            maxCap: 12,
            pemanas: 'Gas',
            catatan: 'Drum roaster klasik Jerman dengan kontrol burner presisi.',
            status: 'Aktif'
        },
        {
            id: 'm2',
            kode: 'MES-002',
            nama: 'Mesin 2',
            merek: 'Loring',
            model: 'S35 Kestrel',
            minCap: 7,
            maxCap: 35,
            pemanas: 'Listrik',
            catatan: 'Single burner convection roaster super hemat energi.',
            status: 'Aktif'
        },
        {
            id: 'm3',
            kode: 'MES-003',
            nama: 'Mesin 3',
            merek: 'Typhoon',
            model: 'Typhoon 500',
            minCap: 10,
            maxCap: 50,
            pemanas: 'Gas',
            catatan: 'Fluid bed air roaster untuk batch volume roasting komersial.',
            status: 'Aktif'
        }
    ],
    operators: [
        {
            id: 'o1',
            nama: 'Budi Santoso',
            email: 'roaster@coffee.co.id',
            telepon: '0812-3456-7890',
            role: 'Roaster',
            status: 'Aktif'
        },
        {
            id: 'o2',
            nama: 'Siti Rahayu',
            email: 'qc@coffee.co.id',
            telepon: '0813-9876-5432',
            role: 'QC',
            status: 'Aktif'
        },
        {
            id: 'o3',
            nama: 'Andi Pratama',
            email: 'operator@coffee.co.id',
            telepon: '0811-2345-6789',
            role: 'Operator',
            status: 'Aktif'
        },
        {
            id: 'o4',
            nama: 'Dewi Lestari',
            email: 'admin@coffee.co.id',
            telepon: '0819-8765-4321',
            role: 'Manager',
            status: 'Aktif'
        }
    ],
    batches: []
};

// ==================== STATE MANAGEMENT ====================
class Store {
    constructor() {
        this.STORAGE_KEY = 'crs_roasting_database_v1';
        this.SESSION_KEY = 'crs_auth_session';
        this.THEME_KEY = 'crs_theme_pref';
        this.LANG_KEY = 'crs_lang_pref';
        this.NOTIF_KEY = 'crs_notif_pref';
        
        this.data = this.loadData();
        this.theme = localStorage.getItem(this.THEME_KEY) || 'dark';
        this.lang = localStorage.getItem(this.LANG_KEY) || 'Indonesia';
        this.notif = localStorage.getItem(this.NOTIF_KEY) || 'Aktif';
    }

    loadData() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            if (raw) {
                return JSON.parse(raw);
            }
        } catch (e) {
            console.warn('Storage read error, loading default seed', e);
        }
        this.saveData(SEED_DATA);
        return JSON.parse(JSON.stringify(SEED_DATA));
    }

    saveData(data) {
        this.data = data;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }

    commit() {
        this.saveData(this.data);
    }

    isLoggedIn() {
        return localStorage.getItem(this.SESSION_KEY) === 'true';
    }

    setLoggedIn(status) {
        if (status) {
            localStorage.setItem(this.SESSION_KEY, 'true');
        } else {
            localStorage.removeItem(this.SESSION_KEY);
        }
    }
}

const store = new Store();

// Navigation Stack
let navHistory = ['dashboard'];
let currentView = 'dashboard';
let currentDetailKopiId = null;

// Filter state
let filterKopiPill = 'all';
let filterSupplierPill = 'all';
let filterMesinPill = 'all';
let filterOperatorPill = 'all';

// Pending delete callback
let deleteActionCallback = null;

// Roaster Timer State
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;
let roastMilestones = { tp: null, dry: null, fc: null, drop: null };

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(store.theme);
    applyLanguage(store.lang);
    applyNotificationSetting(store.notif);

    // Initial Splash screen transition
    const splashScreen = document.getElementById('splash-screen');
    const loginScreen = document.getElementById('login-screen');
    const mainApp = document.getElementById('main-app');

    // Skip splash on click
    splashScreen.addEventListener('click', skipSplash);

    setTimeout(() => {
        skipSplash();
    }, 2400);

    function skipSplash() {
        if (!splashScreen.classList.contains('active')) return;
        splashScreen.classList.remove('active');
        if (store.isLoggedIn()) {
            loginScreen.classList.remove('active');
            mainApp.classList.add('active');
            renderDashboard();
        } else {
            loginScreen.classList.add('active');
            mainApp.classList.remove('active');
        }
    }

    // Login form handler
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('btn-login');
            btn.innerHTML = '<span class="material-icons-round" style="animation:spin 1s linear infinite;">sync</span> Masuk...';
            btn.disabled = true;

            setTimeout(() => {
                store.setLoggedIn(true);
                btn.innerHTML = 'Login';
                btn.disabled = false;
                loginScreen.classList.remove('active');
                mainApp.classList.add('active');
                navigateTo('dashboard');
                showToast('Selamat datang di Coffee Roasting System!');
            }, 600);
        });
    }

    // Populate dynamic dropdowns
    refreshSupplierDropdown();
    refreshRoastBatchDropdowns();

    // Initialize View Mode: Auto-adjust to screen size (Desktop Web on >= 768px, Mobile on < 768px)
    const isDesktop = window.innerWidth >= 768;
    const initialMode = isDesktop ? 'web' : 'mobile';
    setViewMode(initialMode, false);
});

// Auto-adjust layout when window is resized
let resizeDebounce = null;
window.addEventListener('resize', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(() => {
        const isWide = window.innerWidth >= 768;
        if (isWide && currentViewMode !== 'web') {
            setViewMode('web', false);
        } else if (!isWide && currentViewMode !== 'mobile') {
            setViewMode('mobile', false);
        }
    }, 120);
});

// ==================== VIEW MODE (DESKTOP WEB vs MOBILE PHONE) ====================
let currentViewMode = 'web';

function setViewMode(mode, showNotice = true) {
    currentViewMode = mode;
    localStorage.setItem('crs_view_mode', mode);

    const appEl = document.getElementById('app');
    const btnWeb = document.getElementById('btn-mode-web');
    const btnMobile = document.getElementById('btn-mode-mobile');

    if (appEl) {
        if (mode === 'web') {
            appEl.classList.remove('mobile-mode');
            appEl.classList.add('web-mode');
            document.body.classList.remove('is-mobile-preview');
            document.body.classList.add('is-web-mode');
            if (btnWeb) btnWeb.classList.add('active');
            if (btnMobile) btnMobile.classList.remove('active');
            if (showNotice) showToast('Tampilan disesuaikan ke Web Desktop (Layar Lebar)');
        } else {
            appEl.classList.remove('web-mode');
            appEl.classList.add('mobile-mode');
            document.body.classList.remove('is-web-mode');
            document.body.classList.add('is-mobile-preview');
            if (btnWeb) btnWeb.classList.remove('active');
            if (btnMobile) btnMobile.classList.add('active');
            if (showNotice) showToast('Tampilan disesuaikan ke Mobile');
        }
    }

    // Trigger canvas resize if on roast-profile view
    if (currentView === 'roast-profile') {
        setTimeout(() => drawRoastProfileChart(), 80);
    }
}

// Master Kopi Layout Switcher (Card Grid vs Data Table)
let currentKopiViewLayout = 'grid';

function setKopiViewLayout(layout) {
    currentKopiViewLayout = layout;
    const btnGrid = document.getElementById('btn-view-grid');
    const btnTable = document.getElementById('btn-view-table');
    const gridContainer = document.getElementById('kopi-list');
    const tableContainer = document.getElementById('kopi-table-container');

    if (layout === 'table') {
        if (btnGrid) btnGrid.classList.remove('active');
        if (btnTable) btnTable.classList.add('active');
        if (gridContainer) gridContainer.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'block';
    } else {
        if (btnGrid) btnGrid.classList.add('active');
        if (btnTable) btnTable.classList.remove('active');
        if (gridContainer) gridContainer.style.display = '';
        if (tableContainer) tableContainer.style.display = 'none';
    }
}

// Desktop Top Bar Global Search
function handleGlobalSearch(event) {
    const query = (event.target.value || '').toLowerCase().trim();
    if (!query) return;

    if (currentView !== 'master-kopi') {
        navigateTo('master-kopi');
    }
    const searchKopiInput = document.getElementById('search-kopi');
    if (searchKopiInput) {
        searchKopiInput.value = query;
    }
    filterKopi();
}

// ==================== THEME & PREFERENCES ====================
function applyTheme(theme) {
    store.theme = theme;
    localStorage.setItem(store.THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeEl = document.getElementById('setting-theme-val');
    if (themeEl) {
        themeEl.textContent = theme === 'light' ? 'Terang' : 'Gelap';
    }
}

function toggleTheme() {
    const nextTheme = store.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(`Tema diubah ke ${nextTheme === 'light' ? 'Terang (Roastery Cream)' : 'Gelap (Espresso Dark)'}`);
}

function applyLanguage(lang) {
    store.lang = lang;
    localStorage.setItem(store.LANG_KEY, lang);
    const langEl = document.getElementById('setting-lang-val');
    if (langEl) langEl.textContent = lang;
}

function toggleLanguage() {
    const nextLang = store.lang === 'Indonesia' ? 'English' : 'Indonesia';
    applyLanguage(nextLang);
    showToast(`Bahasa diatur ke ${nextLang}`);
}

function applyNotificationSetting(val) {
    store.notif = val;
    localStorage.setItem(store.NOTIF_KEY, val);
    const notifEl = document.getElementById('setting-notif-val');
    if (notifEl) notifEl.textContent = val;
}

function toggleNotifications() {
    const next = store.notif === 'Aktif' ? 'Senyap' : 'Aktif';
    applyNotificationSetting(next);
    showToast(`Notifikasi sistem sekarang ${next}`);
}

// ==================== AUTHENTICATION & SESSION ====================
function togglePassword() {
    const input = document.getElementById('login-password');
    const icon = document.querySelector('.toggle-password .material-icons-round');
    if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility';
    } else {
        input.type = 'password';
        icon.textContent = 'visibility_off';
    }
}

function logout() {
    store.setLoggedIn(false);
    closeSidebar();
    closeMasterDataSheet();
    closeRoastingSheet();
    document.getElementById('main-app').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    showToast('Anda telah keluar dari aplikasi');
}

// ==================== NAVIGATION ENGINE ====================
function navigateTo(viewName, params = {}) {
    closeSidebar();
    closeMasterDataSheet();
    closeRoastingSheet();

    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(v => v.classList.remove('active'));

    const targetView = document.getElementById(`view-${viewName}`);
    if (!targetView) {
        console.error(`View ${viewName} not found!`);
        return;
    }

    targetView.classList.add('active');

    // Update history stack
    if (currentView !== viewName) {
        navHistory.push(viewName);
    }
    currentView = viewName;

    // Update Top Bar (Title & Buttons)
    updateTopBar(viewName, params);

    // Update Bottom Nav active state
    updateBottomNav(viewName);

    // Update Sidebar active state
    updateSidebarNav(viewName);

    // View-specific renderers
    switch (viewName) {
        case 'dashboard':
            renderDashboard();
            break;
        case 'master-kopi':
            renderKopiList();
            break;
        case 'detail-kopi':
            if (params.id) renderDetailKopi(params.id);
            break;
        case 'tambah-kopi':
            setupKopiForm(params.editId);
            break;
        case 'master-supplier':
            renderSupplierList();
            break;
        case 'tambah-supplier':
            setupSupplierForm(params.editId);
            break;
        case 'master-mesin':
            renderMesinList();
            break;
        case 'tambah-mesin':
            setupMesinForm(params.editId);
            break;
        case 'master-operator':
            renderOperatorList();
            break;
        case 'tambah-operator':
            setupOperatorForm(params.editId);
            break;
        case 'roast-batch':
            refreshRoastBatchDropdowns();
            break;
        case 'roast-profile':
            setTimeout(() => drawRoastProfileChart(), 50);
            break;
        case 'cupping':
            refreshCuppingDropdown();
            break;
        case 'laporan':
            renderLaporanStats();
            break;
    }

    // Scroll container to top
    const content = document.getElementById('content');
    if (content) content.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTopBar(viewName, params) {
    const pageTitle = document.getElementById('page-title');
    const btnBack = document.getElementById('btn-back');
    const btnMenu = document.getElementById('btn-menu');

    // Titles matching screen wireframe
    const titles = {
        'dashboard': 'Dashboard',
        'master-kopi': 'Master Kopi',
        'detail-kopi': 'Detail Kopi',
        'tambah-kopi': params.editId ? 'Edit Kopi' : 'Tambah Kopi',
        'master-supplier': 'Master Supplier',
        'tambah-supplier': params.editId ? 'Edit Supplier' : 'Tambah Supplier',
        'master-mesin': 'Master Mesin Roasting',
        'tambah-mesin': params.editId ? 'Edit Mesin Roasting' : 'Tambah Mesin Roasting',
        'master-operator': 'Operator',
        'tambah-operator': params.editId ? 'Edit Operator' : 'Tambah Operator',
        'roast-batch': 'Roast Batch',
        'roast-profile': 'Roast Profile',
        'roast-history': 'Roast History',
        'cupping': 'Cupping',
        'quality-control': 'Quality Control',
        'laporan': 'Laporan',
        'pengaturan': 'Pengaturan'
    };

    if (pageTitle) {
        pageTitle.textContent = titles[viewName] || 'Coffee Roasting';
    }

    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = titles[viewName] || 'Dashboard';
    }

    if (viewName === 'dashboard') {
        if (btnBack) btnBack.style.display = 'none';
        if (btnMenu) btnMenu.style.display = 'flex';
    } else {
        if (btnBack) btnBack.style.display = 'flex';
        if (btnMenu) btnMenu.style.display = 'none';
    }
}

function updateBottomNav(viewName) {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
        const itemTarget = item.getAttribute('data-view');
        if (
            (itemTarget === 'dashboard' && viewName === 'dashboard') ||
            (itemTarget === 'master-data' && ['master-kopi', 'detail-kopi', 'tambah-kopi', 'master-supplier', 'tambah-supplier', 'master-mesin', 'tambah-mesin', 'master-operator', 'tambah-operator'].includes(viewName)) ||
            (itemTarget === 'roasting' && ['roast-batch', 'roast-profile', 'roast-history'].includes(viewName)) ||
            (itemTarget === 'laporan' && viewName === 'laporan') ||
            (itemTarget === 'pengaturan' && viewName === 'pengaturan')
        ) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function updateSidebarNav(viewName) {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        const text = item.textContent.trim().toLowerCase();
        if (
            (text === 'dashboard' && viewName === 'dashboard') ||
            (text === 'kopi' && ['master-kopi', 'detail-kopi', 'tambah-kopi'].includes(viewName)) ||
            (text === 'supplier' && ['master-supplier', 'tambah-supplier'].includes(viewName)) ||
            (text === 'mesin roasting' && ['master-mesin', 'tambah-mesin'].includes(viewName)) ||
            (text === 'operator' && ['master-operator', 'tambah-operator'].includes(viewName)) ||
            (text === 'roast batch' && viewName === 'roast-batch') ||
            (text === 'roast profile' && viewName === 'roast-profile') ||
            (text === 'roast history' && viewName === 'roast-history') ||
            (text === 'cupping' && viewName === 'cupping') ||
            (text === 'quality control' && viewName === 'quality-control')
        ) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function goBack() {
    if (navHistory.length > 1) {
        navHistory.pop(); // Remove current
        const prev = navHistory[navHistory.length - 1];
        navigateTo(prev);
    } else {
        navigateTo('dashboard');
    }
}

// ==================== SIDEBAR & BOTTOM SHEETS ====================
function openSidebar() {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('sidebar-overlay').classList.add('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function toggleMasterDataSheet() {
    const sheet = document.getElementById('master-data-sheet');
    const overlay = document.getElementById('master-data-overlay');
    const isOpen = sheet.classList.contains('active');
    if (isOpen) {
        closeMasterDataSheet();
    } else {
        closeRoastingSheet();
        sheet.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeMasterDataSheet() {
    const sheet = document.getElementById('master-data-sheet');
    const overlay = document.getElementById('master-data-overlay');
    if (sheet) sheet.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function toggleRoastingSheet() {
    const sheet = document.getElementById('roasting-sheet');
    const overlay = document.getElementById('roasting-overlay');
    const isOpen = sheet.classList.contains('active');
    if (isOpen) {
        closeRoastingSheet();
    } else {
        closeMasterDataSheet();
        sheet.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeRoastingSheet() {
    const sheet = document.getElementById('roasting-sheet');
    const overlay = document.getElementById('roasting-overlay');
    if (sheet) sheet.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

// ==================== DASHBOARD VIEW ====================
function renderDashboard() {
    // Stat Counters
    const statKopi = document.getElementById('stat-kopi');
    const statSupplier = document.getElementById('stat-supplier');
    const statMesin = document.getElementById('stat-mesin');
    const statBatch = document.getElementById('stat-batch');

    if (statKopi) statKopi.textContent = store.data.coffees.length;
    if (statSupplier) statSupplier.textContent = store.data.suppliers.length;
    if (statMesin) statMesin.textContent = store.data.mesin.length;
    if (statBatch) statBatch.textContent = store.data.batches.length;

    // Recent Coffee Table (Desktop & Mobile responsive)
    const recentTable = document.getElementById('recent-kopi-table');
    if (recentTable) {
        if (store.data.coffees.length === 0) {
            recentTable.innerHTML = '<tr><td colspan="6" class="empty-cell">Belum ada data kopi</td></tr>';
        } else {
            const topCoffees = store.data.coffees.slice(0, 5);
            recentTable.innerHTML = topCoffees.map((c, index) => `
                <tr onclick="navigateTo('detail-kopi', { id: '${c.id}' })" style="cursor:pointer;" title="Lihat detail kopi">
                    <td>${index + 1}</td>
                    <td style="font-weight:600; color:var(--text-primary);">${c.nama}</td>
                    <td>${c.region ? c.region + ' - ' : ''}${c.negara}</td>
                    <td class="desktop-only-col">${c.varietas || '-'}</td>
                    <td class="desktop-only-col">${c.proses || '-'}</td>
                    <td class="desktop-only-col"><span class="badge-status-pill ${c.status === 'Aktif' ? 'ready' : 'inactive'}">${c.status || 'Aktif'}</span></td>
                </tr>
            `).join('');
        }
    }
}

// ==================== MASTER KOPI (SCREEN 5, 6, 7) ====================
function toggleFilterPills(module) {
    const el = document.getElementById(`filter-pills-${module}`);
    const btn = document.getElementById(`btn-filter-${module}`);
    if (!el) return;
    const isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'flex' : 'none';
    if (btn) btn.classList.toggle('active', isHidden);
}

function setKopiFilterPill(filter, pillBtn) {
    filterKopiPill = filter;
    document.querySelectorAll('#filter-pills-kopi .pill').forEach(p => p.classList.remove('active'));
    if (pillBtn) pillBtn.classList.add('active');
    filterKopi();
}

function filterKopi() {
    const query = (document.getElementById('search-kopi')?.value || '').toLowerCase().trim();
    renderKopiList(query, filterKopiPill);
}

function renderKopiList(query = '', filter = 'all') {
    const container = document.getElementById('kopi-list');
    if (!container) return;

    let items = store.data.coffees;

    // Filter by category pill
    if (filter === 'Arabica' || filter === 'Robusta') {
        items = items.filter(c => (c.varietas || '').toLowerCase().includes(filter.toLowerCase()) || (c.nama || '').toLowerCase().includes(filter.toLowerCase()));
    } else if (filter === 'Aktif') {
        items = items.filter(c => c.status === 'Aktif');
    }

    // Filter by search query
    if (query) {
        items = items.filter(c =>
            c.nama.toLowerCase().includes(query) ||
            c.kode.toLowerCase().includes(query) ||
            (c.region || '').toLowerCase().includes(query) ||
            (c.negara || '').toLowerCase().includes(query)
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-round">coffee</span>
                <p>Tidak ada data kopi yang cocok</p>
                <button class="btn-primary btn-sm" onclick="navigateTo('tambah-kopi')">Tambah Kopi Baru</button>
            </div>
        `;
        const tableBody = document.getElementById('kopi-table-body');
        if (tableBody) {
            tableBody.innerHTML = '<tr><td colspan="10" class="empty-cell">Tidak ada data kopi yang cocok</td></tr>';
        }
        return;
    }

    container.innerHTML = items.map(c => `
        <div class="list-item" onclick="navigateTo('detail-kopi', { id: '${c.id}' })">
            <div class="list-item-avatar kopi-avatar">
                <span class="material-icons-round">coffee</span>
            </div>
            <div class="list-item-info">
                <div class="list-item-title">${c.nama}</div>
                <div class="list-item-subtitle">${c.kode} • ${c.varietas || 'Arabica'}</div>
                <div class="list-item-subtitle">${c.region ? c.region + ' - ' : ''}${c.negara}</div>
            </div>
            <span class="list-item-badge ${c.status === 'Aktif' ? 'badge-aktif' : 'badge-nonaktif'}">${c.status || 'Aktif'}</span>
        </div>
    `).join('');

    // Populate Desktop Data Table
    const tableBody = document.getElementById('kopi-table-body');
    if (tableBody) {
        tableBody.innerHTML = items.map(c => `
            <tr onclick="navigateTo('detail-kopi', { id: '${c.id}' })" style="cursor:pointer;">
                <td style="font-weight:600; color:var(--accent-primary);">${c.kode}</td>
                <td style="font-weight:600; color:var(--text-primary);">${c.nama}</td>
                <td>${c.region ? c.region + ' - ' : ''}${c.negara}</td>
                <td>${c.varietas || '-'}</td>
                <td>${c.ketinggian ? c.ketinggian + ' MDPL' : '-'}</td>
                <td>${c.proses || '-'}</td>
                <td>${c.grade || '-'}</td>
                <td>${c.supplier || '-'}</td>
                <td><span class="badge-status-pill ${c.status === 'Aktif' ? 'ready' : 'inactive'}">${c.status || 'Aktif'}</span></td>
                <td onclick="event.stopPropagation();">
                    <div style="display:flex; gap:6px;">
                        <button class="btn-icon" style="width:28px; height:28px;" onclick="navigateTo('tambah-kopi', { editId: '${c.id}' })" title="Edit"><span class="material-icons-round" style="font-size:16px;">edit</span></button>
                        <button class="btn-icon" style="width:28px; height:28px;" onclick="promptDeleteKopi('${c.id}')" title="Hapus"><span class="material-icons-round" style="font-size:16px; color:#e74c3c;">delete_outline</span></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }
}

// Detail Kopi View (Screen 6)
function renderDetailKopi(id) {
    currentDetailKopiId = id;
    const kopi = store.data.coffees.find(c => c.id === id);
    const container = document.getElementById('detail-kopi-content');
    if (!container) return;

    if (!kopi) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Data kopi tidak ditemukan</p>
                <button class="btn-primary btn-sm" onclick="navigateTo('master-kopi')">Kembali</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="detail-photo-card">
            <div class="detail-photo-title-row">
                <div>
                    <h2>${kopi.nama}</h2>
                    <span style="font-size:0.8rem; color:var(--accent-warm); opacity:0.9;">${kopi.kode}</span>
                </div>
                <span class="list-item-badge ${kopi.status === 'Aktif' ? 'badge-aktif' : 'badge-nonaktif'}">${kopi.status}</span>
            </div>
        </div>

        <div class="detail-info-grid">
            <div class="detail-info-row">
                <div class="detail-info-label">Kode Kopi</div>
                <div class="detail-info-value">${kopi.kode}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Nama Kopi</div>
                <div class="detail-info-value">${kopi.nama}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Origin</div>
                <div class="detail-info-value">${kopi.region ? kopi.region + ' - ' : ''}${kopi.negara}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Region</div>
                <div class="detail-info-value">${kopi.region || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Farm</div>
                <div class="detail-info-value">${kopi.farm || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Varietas</div>
                <div class="detail-info-value">${kopi.varietas || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Ketinggian</div>
                <div class="detail-info-value">${kopi.ketinggian ? Number(kopi.ketinggian).toLocaleString('id-ID') + ' MDPL' : '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Proses</div>
                <div class="detail-info-value">${kopi.proses || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Grade</div>
                <div class="detail-info-value">${kopi.grade || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Supplier</div>
                <div class="detail-info-value">${kopi.supplier || '-'}</div>
            </div>
            <div class="detail-info-row">
                <div class="detail-info-label">Catatan</div>
                <div class="detail-info-value">${kopi.catatan || '-'}</div>
            </div>
        </div>

        <div class="detail-action-buttons">
            <button class="btn-action-edit" onclick="navigateTo('tambah-kopi', { editId: '${kopi.id}' })">
                <span class="material-icons-round">edit</span> Edit
            </button>
            <button class="btn-action-toggle" onclick="toggleKopiStatus('${kopi.id}')">
                <span class="material-icons-round">${kopi.status === 'Aktif' ? 'block' : 'check_circle'}</span>
                ${kopi.status === 'Aktif' ? 'Nonaktifkan' : 'Aktifkan'}
            </button>
            <button class="btn-action-delete" onclick="promptDeleteKopi('${kopi.id}')" title="Hapus Kopi">
                <span class="material-icons-round">delete_outline</span>
            </button>
        </div>
    `;
}

function toggleKopiStatus(id) {
    const kopi = store.data.coffees.find(c => c.id === id);
    if (!kopi) return;
    kopi.status = kopi.status === 'Aktif' ? 'Nonaktif' : 'Aktif';
    store.commit();
    showToast(`Status ${kopi.nama} diubah ke ${kopi.status}`);
    renderDetailKopi(id);
}

function promptDeleteKopi(id) {
    const kopi = store.data.coffees.find(c => c.id === id);
    if (!kopi) return;
    confirmDeleteModal(`Kopi "${kopi.nama}" (${kopi.kode})`, () => {
        store.data.coffees = store.data.coffees.filter(c => c.id !== id);
        store.commit();
        showToast('Data kopi berhasil dihapus');
        navigateTo('master-kopi');
    });
}

// Tambah / Edit Kopi View (Screen 7)
function setupKopiForm(editId = null) {
    refreshSupplierDropdown();
    const form = document.getElementById('form-kopi');
    if (!form) return;
    form.reset();

    const editIdInput = document.getElementById('kopi-edit-id');
    editIdInput.value = editId || '';

    if (editId) {
        const kopi = store.data.coffees.find(c => c.id === editId);
        if (kopi) {
            document.getElementById('kopi-kode').value = kopi.kode || '';
            document.getElementById('kopi-nama').value = kopi.nama || '';
            document.getElementById('kopi-negara').value = kopi.negara || 'Indonesia';
            document.getElementById('kopi-region').value = kopi.region || '';
            document.getElementById('kopi-farm').value = kopi.farm || '';
            document.getElementById('kopi-varietas').value = kopi.varietas || '';
            document.getElementById('kopi-ketinggian').value = kopi.ketinggian || '';
            document.getElementById('kopi-proses').value = kopi.proses || '';
            document.getElementById('kopi-grade').value = kopi.grade || '';
            document.getElementById('kopi-supplier').value = kopi.supplier || '';
            document.getElementById('kopi-catatan').value = kopi.catatan || '';
        }
    } else {
        // Auto generate code COF-XXX
        const nextNum = store.data.coffees.length + 1;
        document.getElementById('kopi-kode').value = `COF-${String(nextNum).padStart(3, '0')}`;
        document.getElementById('kopi-negara').value = 'Indonesia';
    }
}

function refreshSupplierDropdown() {
    const select = document.getElementById('kopi-supplier');
    if (!select) return;
    const currentVal = select.value;
    select.innerHTML = '<option value="">Pilih supplier</option>' +
        store.data.suppliers.map(s => `<option value="${s.nama}">${s.nama}</option>`).join('');
    if (currentVal) select.value = currentVal;
}

function saveKopi(event) {
    event.preventDefault();
    const editId = document.getElementById('kopi-edit-id').value;
    const kode = document.getElementById('kopi-kode').value.trim();
    const nama = document.getElementById('kopi-nama').value.trim();

    if (!kode || !nama) {
        showToast('Kode dan Nama kopi wajib diisi');
        return;
    }

    const payload = {
        kode,
        nama,
        negara: document.getElementById('kopi-negara').value,
        region: document.getElementById('kopi-region').value.trim(),
        farm: document.getElementById('kopi-farm').value.trim(),
        varietas: document.getElementById('kopi-varietas').value,
        ketinggian: document.getElementById('kopi-ketinggian').value.trim(),
        proses: document.getElementById('kopi-proses').value,
        grade: document.getElementById('kopi-grade').value,
        supplier: document.getElementById('kopi-supplier').value,
        catatan: document.getElementById('kopi-catatan').value.trim(),
        status: 'Aktif'
    };

    if (editId) {
        const index = store.data.coffees.findIndex(c => c.id === editId);
        if (index !== -1) {
            payload.id = editId;
            payload.status = store.data.coffees[index].status || 'Aktif';
            store.data.coffees[index] = payload;
            store.commit();
            showToast('Data kopi berhasil diperbarui');
            navigateTo('detail-kopi', { id: editId });
            return;
        }
    }

    // New item
    payload.id = 'c_' + Date.now();
    store.data.coffees.unshift(payload);
    store.commit();
    showToast('Kopi baru berhasil ditambahkan');
    navigateTo('master-kopi');
}

// ==================== MASTER SUPPLIER (SCREEN 8 & 9) ====================
function setSupplierFilterPill(filter, pillBtn) {
    filterSupplierPill = filter;
    document.querySelectorAll('#filter-pills-supplier .pill').forEach(p => p.classList.remove('active'));
    if (pillBtn) pillBtn.classList.add('active');
    filterSupplier();
}

function filterSupplier() {
    const query = (document.getElementById('search-supplier')?.value || '').toLowerCase().trim();
    renderSupplierList(query, filterSupplierPill);
}

function renderSupplierList(query = '', filter = 'all') {
    const container = document.getElementById('supplier-list');
    if (!container) return;

    let items = store.data.suppliers;

    if (filter === 'Aktif') {
        items = items.filter(s => s.status === 'Aktif');
    }

    if (query) {
        items = items.filter(s =>
            s.nama.toLowerCase().includes(query) ||
            s.kode.toLowerCase().includes(query) ||
            (s.kontak || '').toLowerCase().includes(query) ||
            (s.email || '').toLowerCase().includes(query)
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-round">local_shipping</span>
                <p>Belum ada data supplier</p>
                <button class="btn-primary btn-sm" onclick="navigateTo('tambah-supplier')">Tambah Supplier</button>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(s => `
        <div class="list-item" onclick="navigateTo('tambah-supplier', { editId: '${s.id}' })">
            <div class="list-item-avatar supplier-avatar">
                <span class="material-icons-round">local_shipping</span>
            </div>
            <div class="list-item-info">
                <div class="list-item-title">${s.nama}</div>
                <div class="list-item-subtitle">${s.kontak ? s.kontak + ' • ' : ''}${s.telepon || '-'}</div>
                <div class="list-item-subtitle">${s.email || s.alamat || ''}</div>
            </div>
            <span class="list-item-badge badge-aktif">${s.status || 'Aktif'}</span>
        </div>
    `).join('');
}

function setupSupplierForm(editId = null) {
    const form = document.getElementById('form-supplier');
    if (!form) return;
    form.reset();

    const editInput = document.getElementById('supplier-edit-id');
    editInput.value = editId || '';

    if (editId) {
        const sup = store.data.suppliers.find(s => s.id === editId);
        if (sup) {
            document.getElementById('supplier-kode').value = sup.kode || '';
            document.getElementById('supplier-nama').value = sup.nama || '';
            document.getElementById('supplier-kontak').value = sup.kontak || '';
            document.getElementById('supplier-telepon').value = sup.telepon || '';
            document.getElementById('supplier-email').value = sup.email || '';
            document.getElementById('supplier-alamat').value = sup.alamat || '';
        }
    } else {
        const nextNum = store.data.suppliers.length + 1;
        document.getElementById('supplier-kode').value = `SUP-${String(nextNum).padStart(3, '0')}`;
    }
}

function saveSupplier(event) {
    event.preventDefault();
    const editId = document.getElementById('supplier-edit-id').value;
    const kode = document.getElementById('supplier-kode').value.trim();
    const nama = document.getElementById('supplier-nama').value.trim();

    if (!kode || !nama) {
        showToast('Kode dan Nama supplier wajib diisi');
        return;
    }

    const payload = {
        kode,
        nama,
        kontak: document.getElementById('supplier-kontak').value.trim(),
        telepon: document.getElementById('supplier-telepon').value.trim(),
        email: document.getElementById('supplier-email').value.trim(),
        alamat: document.getElementById('supplier-alamat').value.trim(),
        status: 'Aktif'
    };

    if (editId) {
        const index = store.data.suppliers.findIndex(s => s.id === editId);
        if (index !== -1) {
            payload.id = editId;
            store.data.suppliers[index] = payload;
            store.commit();
            showToast('Supplier berhasil diperbarui');
            navigateTo('master-supplier');
            return;
        }
    }

    payload.id = 's_' + Date.now();
    store.data.suppliers.unshift(payload);
    store.commit();
    showToast('Supplier baru berhasil disimpan');
    navigateTo('master-supplier');
}

// ==================== MASTER MESIN (SCREEN 10 & 11) ====================
function setMesinFilterPill(filter, pillBtn) {
    filterMesinPill = filter;
    document.querySelectorAll('#filter-pills-mesin .pill').forEach(p => p.classList.remove('active'));
    if (pillBtn) pillBtn.classList.add('active');
    filterMesin();
}

function filterMesin() {
    const query = (document.getElementById('search-mesin')?.value || '').toLowerCase().trim();
    renderMesinList(query, filterMesinPill);
}

function renderMesinList(query = '', filter = 'all') {
    const container = document.getElementById('mesin-list');
    if (!container) return;

    let items = store.data.mesin;

    if (filter === 'Gas' || filter === 'Listrik') {
        items = items.filter(m => (m.pemanas || '').toLowerCase() === filter.toLowerCase());
    }

    if (query) {
        items = items.filter(m =>
            m.nama.toLowerCase().includes(query) ||
            m.kode.toLowerCase().includes(query) ||
            (m.merek || '').toLowerCase().includes(query) ||
            (m.model || '').toLowerCase().includes(query)
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-round">precision_manufacturing</span>
                <p>Belum ada data mesin</p>
                <button class="btn-primary btn-sm" onclick="navigateTo('tambah-mesin')">Tambah Mesin</button>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(m => `
        <div class="list-item" onclick="navigateTo('tambah-mesin', { editId: '${m.id}' })">
            <div class="list-item-avatar mesin-avatar">
                <span class="material-icons-round">precision_manufacturing</span>
            </div>
            <div class="list-item-info">
                <div class="list-item-title">${m.nama}</div>
                <div class="list-item-subtitle">${m.merek} ${m.model} • ${m.maxCap} kg</div>
                <div class="list-item-subtitle">Pemanas: ${m.pemanas || 'Gas'}</div>
            </div>
            <span class="list-item-badge badge-aktif">${m.status || 'Aktif'}</span>
        </div>
    `).join('');
}

function setupMesinForm(editId = null) {
    const form = document.getElementById('form-mesin');
    if (!form) return;
    form.reset();

    const editInput = document.getElementById('mesin-edit-id');
    editInput.value = editId || '';

    if (editId) {
        const m = store.data.mesin.find(item => item.id === editId);
        if (m) {
            document.getElementById('mesin-kode').value = m.kode || '';
            document.getElementById('mesin-nama').value = m.nama || '';
            document.getElementById('mesin-merek').value = m.merek || '';
            document.getElementById('mesin-model').value = m.model || '';
            document.getElementById('mesin-kapasitas-min').value = m.minCap || '';
            document.getElementById('mesin-kapasitas-max').value = m.maxCap || '';
            document.getElementById('mesin-pemanas').value = m.pemanas || '';
            document.getElementById('mesin-catatan').value = m.catatan || '';
        }
    } else {
        const nextNum = store.data.mesin.length + 1;
        document.getElementById('mesin-kode').value = `MES-${String(nextNum).padStart(3, '0')}`;
        document.getElementById('mesin-pemanas').value = 'Gas';
    }
}

function saveMesin(event) {
    event.preventDefault();
    const editId = document.getElementById('mesin-edit-id').value;
    const kode = document.getElementById('mesin-kode').value.trim();
    const nama = document.getElementById('mesin-nama').value.trim();

    if (!kode || !nama) {
        showToast('Kode dan Nama mesin wajib diisi');
        return;
    }

    const payload = {
        kode,
        nama,
        merek: document.getElementById('mesin-merek').value.trim(),
        model: document.getElementById('mesin-model').value.trim(),
        minCap: Number(document.getElementById('mesin-kapasitas-min').value) || 1,
        maxCap: Number(document.getElementById('mesin-kapasitas-max').value) || 10,
        pemanas: document.getElementById('mesin-pemanas').value,
        catatan: document.getElementById('mesin-catatan').value.trim(),
        status: 'Aktif'
    };

    if (editId) {
        const index = store.data.mesin.findIndex(m => m.id === editId);
        if (index !== -1) {
            payload.id = editId;
            store.data.mesin[index] = payload;
            store.commit();
            showToast('Data mesin berhasil diperbarui');
            navigateTo('master-mesin');
            return;
        }
    }

    payload.id = 'm_' + Date.now();
    store.data.mesin.unshift(payload);
    store.commit();
    showToast('Mesin baru berhasil ditambahkan');
    navigateTo('master-mesin');
}

// ==================== MASTER OPERATOR (SCREEN 12) ====================
function setOperatorFilterPill(filter, pillBtn) {
    filterOperatorPill = filter;
    document.querySelectorAll('#filter-pills-operator .pill').forEach(p => p.classList.remove('active'));
    if (pillBtn) pillBtn.classList.add('active');
    filterOperator();
}

function filterOperator() {
    const query = (document.getElementById('search-operator')?.value || '').toLowerCase().trim();
    renderOperatorList(query, filterOperatorPill);
}

function renderOperatorList(query = '', filter = 'all') {
    const container = document.getElementById('operator-list');
    if (!container) return;

    let items = store.data.operators;

    if (filter !== 'all') {
        items = items.filter(o => o.role === filter);
    }

    if (query) {
        items = items.filter(o =>
            o.nama.toLowerCase().includes(query) ||
            (o.email || '').toLowerCase().includes(query) ||
            (o.role || '').toLowerCase().includes(query)
        );
    }

    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="material-icons-round">engineering</span>
                <p>Belum ada data operator</p>
                <button class="btn-primary btn-sm" onclick="navigateTo('tambah-operator')">Tambah Operator</button>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(o => `
        <div class="list-item" onclick="navigateTo('tambah-operator', { editId: '${o.id}' })">
            <div class="list-item-avatar operator-avatar">
                <span class="material-icons-round">person</span>
            </div>
            <div class="list-item-info">
                <div class="list-item-title">${o.nama}</div>
                <div class="list-item-subtitle">${o.email || '-'}</div>
                <div class="list-item-subtitle">${o.telepon || ''} • <strong>${o.role}</strong></div>
            </div>
            <span class="list-item-badge badge-aktif">${o.status || 'Aktif'}</span>
        </div>
    `).join('');
}

function setupOperatorForm(editId = null) {
    const form = document.getElementById('form-operator');
    if (!form) return;
    form.reset();

    const editInput = document.getElementById('operator-edit-id');
    editInput.value = editId || '';

    if (editId) {
        const o = store.data.operators.find(op => op.id === editId);
        if (o) {
            document.getElementById('operator-nama').value = o.nama || '';
            document.getElementById('operator-email').value = o.email || '';
            document.getElementById('operator-telepon').value = o.telepon || '';
            document.getElementById('operator-role').value = o.role || 'Roaster';
            document.getElementById('operator-status').value = o.status || 'Aktif';
        }
    } else {
        document.getElementById('operator-role').value = 'Roaster';
        document.getElementById('operator-status').value = 'Aktif';
    }
}

function saveOperator(event) {
    event.preventDefault();
    const editId = document.getElementById('operator-edit-id').value;
    const nama = document.getElementById('operator-nama').value.trim();
    const role = document.getElementById('operator-role').value;

    if (!nama || !role) {
        showToast('Nama dan Role operator wajib diisi');
        return;
    }

    const payload = {
        nama,
        email: document.getElementById('operator-email').value.trim(),
        telepon: document.getElementById('operator-telepon').value.trim(),
        role,
        status: document.getElementById('operator-status').value
    };

    if (editId) {
        const index = store.data.operators.findIndex(o => o.id === editId);
        if (index !== -1) {
            payload.id = editId;
            store.data.operators[index] = payload;
            store.commit();
            showToast('Data operator berhasil diperbarui');
            navigateTo('master-operator');
            return;
        }
    }

    payload.id = 'o_' + Date.now();
    store.data.operators.unshift(payload);
    store.commit();
    showToast('Operator baru berhasil ditambahkan');
    navigateTo('master-operator');
}

// ==================== ROAST BATCH SIMULATOR (SCREEN 13) ====================
function toggleBatchDemo() {
    const ph = document.getElementById('roast-batch-placeholder');
    const sim = document.getElementById('roast-batch-interactive');
    if (!ph || !sim) return;
    const isSimVisible = sim.style.display !== 'none';
    ph.style.display = isSimVisible ? 'block' : 'none';
    sim.style.display = isSimVisible ? 'none' : 'block';
    if (!isSimVisible) {
        refreshRoastBatchDropdowns();
    }
}

function refreshRoastBatchDropdowns() {
    const selKopi = document.getElementById('batch-kopi');
    const selMesin = document.getElementById('batch-mesin');
    const selOperator = document.getElementById('batch-operator');

    if (selKopi) {
        selKopi.innerHTML = store.data.coffees.map(c => `<option value="${c.nama}">${c.nama} (${c.kode})</option>`).join('');
    }
    if (selMesin) {
        selMesin.innerHTML = store.data.mesin.map(m => `<option value="${m.nama}">${m.nama} - ${m.merek} ${m.model} (${m.maxCap}kg)</option>`).join('');
    }
    if (selOperator) {
        selOperator.innerHTML = store.data.operators.map(o => `<option value="${o.nama}">${o.nama} (${o.role})</option>`).join('');
    }
}

function startRoastTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    document.getElementById('timer-phase-badge').textContent = 'ROASTING IN PROGRESS';
    document.getElementById('timer-phase-badge').style.background = 'rgba(245, 158, 11, 0.2)';
    document.getElementById('timer-phase-badge').style.color = 'var(--status-warning)';

    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function pauseRoastTimer() {
    if (!isTimerRunning) return;
    isTimerRunning = false;
    clearInterval(timerInterval);
    document.getElementById('timer-phase-badge').textContent = 'PAUSED';
}

function resetRoastTimer() {
    pauseRoastTimer();
    timerSeconds = 0;
    roastMilestones = { tp: null, dry: null, fc: null, drop: null };
    updateTimerDisplay();

    ['tp', 'dry', 'fc', 'drop'].forEach(key => {
        const btn = document.getElementById(`btn-ms-${key}`);
        const span = document.getElementById(`ms-time-${key}`);
        if (btn) btn.classList.remove('recorded');
        if (span) span.textContent = '--:--';
    });

    document.getElementById('timer-phase-badge').textContent = 'STANDBY / CHARGE';
    document.getElementById('timer-phase-badge').style.background = 'var(--accent-primary-light)';
    document.getElementById('timer-phase-badge').style.color = 'var(--accent-primary)';
}

function updateTimerDisplay() {
    const min = Math.floor(timerSeconds / 60);
    const sec = timerSeconds % 60;
    const str = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    const display = document.getElementById('timer-display');
    if (display) display.textContent = str;
}

function recordMilestone(type) {
    if (!isTimerRunning && timerSeconds === 0) {
        showToast('Mulai timer terlebih dahulu');
        return;
    }
    const min = Math.floor(timerSeconds / 60);
    const sec = timerSeconds % 60;
    const timeStr = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    roastMilestones[type] = timeStr;

    const btn = document.getElementById(`btn-ms-${type}`);
    const timeSpan = document.getElementById(`ms-time-${type}`);
    if (btn) btn.classList.add('recorded');
    if (timeSpan) timeSpan.textContent = timeStr;

    showToast(`Milestone ${type.toUpperCase()} tercatat pada ${timeStr}`);
}

function calcWeightLoss() {
    const green = parseFloat(document.getElementById('batch-green-weight')?.value) || 0;
    const roasted = parseFloat(document.getElementById('batch-roasted-weight')?.value) || 0;
    const lossDisplay = document.getElementById('batch-loss-display');

    if (green > 0 && roasted > 0 && roasted <= green) {
        const loss = ((green - roasted) / green) * 100;
        if (lossDisplay) lossDisplay.value = loss.toFixed(1) + '%';
    }
}

function saveRoastBatch(event) {
    event.preventDefault();
    const kopi = document.getElementById('batch-kopi').value;
    const mesin = document.getElementById('batch-mesin').value;
    const roaster = document.getElementById('batch-operator').value;
    const greenWeight = parseFloat(document.getElementById('batch-green-weight').value) || 5;
    const roastedWeight = parseFloat(document.getElementById('batch-roasted-weight').value) || 4.2;
    const roastLevel = document.getElementById('batch-level').value;

    const newBatch = {
        id: 'b_' + Date.now(),
        batchNumber: `BATCH-${new Date().getFullYear()}-${String(store.data.batches.length + 1).padStart(3, '0')}`,
        kopi,
        mesin,
        roaster,
        greenWeight,
        roastedWeight,
        roastLevel,
        lossPercent: (((greenWeight - roastedWeight) / greenWeight) * 100).toFixed(1) + '%',
        roastTime: document.getElementById('timer-display').textContent,
        milestones: { ...roastMilestones },
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    store.data.batches.unshift(newBatch);
    store.commit();

    showToast(`Batch ${newBatch.batchNumber} berhasil disimpan!`);
    resetRoastTimer();
    toggleBatchDemo();
    renderDashboard();
}

// ==================== ROAST PROFILE CANVAS (SCREEN 14) ====================
function toggleProfileDemo() {
    const ph = document.getElementById('roast-profile-placeholder');
    const sim = document.getElementById('roast-profile-interactive');
    if (!ph || !sim) return;
    const isVisible = sim.style.display !== 'none';
    ph.style.display = isVisible ? 'block' : 'none';
    sim.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        setTimeout(drawRoastProfileChart, 50);
    }
}

function drawRoastProfileChart() {
    const canvas = document.getElementById('roastCanvas');
    if (!canvas) return;

    if (canvas.parentElement) {
        const pWidth = canvas.parentElement.clientWidth;
        if (pWidth > 150) {
            canvas.width = Math.min(pWidth - 32, 900);
        }
    }

    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = 'rgba(200, 149, 108, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 40; x < w; x += Math.max(40, Math.floor(w / 10))) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h - 20);
        ctx.stroke();
    }
    for (let y = 20; y < h - 20; y += 30) {
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }

    // Scale factors
    const scaleX = (w - 60) / 340;

    // Time Axis
    ctx.fillStyle = '#7a6b5d';
    ctx.font = '10px Inter, sans-serif';
    const numTicks = 5;
    for (let i = 0; i < numTicks; i++) {
        const xPos = 35 + ((w - 60) / (numTicks - 1)) * i;
        ctx.fillText(`${i * 3}m`, xPos - 8, h - 6);
    }

    // Profile type select
    const profileType = document.getElementById('profile-select')?.value || 'espresso-medium';

    // Temperature Curve (BT)
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e8a87c';
    ctx.moveTo(35, 60); // Charge at 200°C
    ctx.quadraticCurveTo(35 + 45 * scaleX, 150, 35 + 85 * scaleX, 120); // Turning point at 90°C
    ctx.quadraticCurveTo(35 + 205 * scaleX, 70, 35 + 275 * scaleX, 45); // First crack
    ctx.lineTo(35 + 335 * scaleX, profileType === 'omni-dark' ? 25 : (profileType === 'filter-light' ? 50 : 35));
    ctx.stroke();

    // Environment Temp Curve (ET)
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#3b82f6';
    ctx.moveTo(35, 45);
    ctx.quadraticCurveTo(35 + 85 * scaleX, 80, 35 + 165 * scaleX, 50);
    ctx.quadraticCurveTo(35 + 245 * scaleX, 35, 35 + 335 * scaleX, 20);
    ctx.stroke();

    // RoR Curve (Rate of Rise)
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#f59e0b';
    ctx.moveTo(35 + 45 * scaleX, 90);
    ctx.quadraticCurveTo(35 + 125 * scaleX, 110, 35 + 205 * scaleX, 135);
    ctx.lineTo(35 + 335 * scaleX, 160);
    ctx.stroke();

    // Landmark Points
    drawDot(ctx, 35 + 65 * scaleX, 130, '#e8a87c', 'TP 1:18');
    drawDot(ctx, 35 + 155 * scaleX, 85, '#e8a87c', 'Dry 4:32');
    drawDot(ctx, 35 + 275 * scaleX, 45, '#e8a87c', 'FC 8:50');
}

function drawDot(ctx, x, y, color, label) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f5f0eb';
    ctx.font = '9px Inter, sans-serif';
    ctx.fillText(label, x - 12, y - 8);
}

// ==================== CUPPING SCA PROTOCOL (SCREEN 15) ====================
function toggleCuppingDemo() {
    const ph = document.getElementById('cupping-placeholder');
    const sim = document.getElementById('cupping-interactive');
    if (!ph || !sim) return;
    const isVisible = sim.style.display !== 'none';
    ph.style.display = isVisible ? 'block' : 'none';
    sim.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        refreshCuppingDropdown();
    }
}

function refreshCuppingDropdown() {
    const sel = document.getElementById('cupping-kopi-select');
    if (!sel) return;
    sel.innerHTML = store.data.coffees.map(c => `<option value="${c.nama}">${c.nama} (${c.kode})</option>`).join('');
}

function updateCuppingScore() {
    const aroma = parseFloat(document.getElementById('range-aroma').value) || 8.5;
    const flavor = parseFloat(document.getElementById('range-flavor').value) || 8.5;
    const aftertaste = parseFloat(document.getElementById('range-aftertaste').value) || 8.25;
    const acidity = parseFloat(document.getElementById('range-acidity').value) || 8.5;
    const body = parseFloat(document.getElementById('range-body').value) || 8.25;
    const balance = parseFloat(document.getElementById('range-balance').value) || 8.5;

    document.getElementById('val-aroma').textContent = aroma.toFixed(2);
    document.getElementById('val-flavor').textContent = flavor.toFixed(2);
    document.getElementById('val-aftertaste').textContent = aftertaste.toFixed(2);
    document.getElementById('val-acidity').textContent = acidity.toFixed(2);
    document.getElementById('val-body').textContent = body.toFixed(2);
    document.getElementById('val-balance').textContent = balance.toFixed(2);

    // SCA base standard calculation: 30 base fixed for Clean/Sweetness/Uniformity + attributes + 5 overall
    const total = 30 + aroma + flavor + aftertaste + acidity + body + balance + 8.5;
    const scoreVal = document.getElementById('cupping-score-val');
    const gradeBadge = document.getElementById('cupping-grade-badge');

    if (scoreVal) scoreVal.textContent = total.toFixed(2);
    if (gradeBadge) {
        if (total >= 90) {
            gradeBadge.textContent = 'OUTSTANDING (90+)';
            gradeBadge.style.color = '#e8a87c';
        } else if (total >= 85) {
            gradeBadge.textContent = 'EXCELLENT SPECIALTY (85 - 89.9)';
            gradeBadge.style.color = 'var(--status-active)';
        } else if (total >= 80) {
            gradeBadge.textContent = 'VERY GOOD SPECIALTY (80 - 84.9)';
            gradeBadge.style.color = 'var(--status-info)';
        } else {
            gradeBadge.textContent = 'COMMERCIAL GRADE (<80)';
            gradeBadge.style.color = 'var(--status-warning)';
        }
    }
}

function saveCuppingScore() {
    const kopi = document.getElementById('cupping-kopi-select').value;
    const total = document.getElementById('cupping-score-val').textContent;
    showToast(`Nilai Cupping ${kopi}: ${total} poin tersimpan`);
    toggleCuppingDemo();
}

// ==================== LAPORAN PRODUKSI (SCREEN 16) ====================
function toggleLaporanDemo() {
    const ph = document.getElementById('laporan-placeholder');
    const sim = document.getElementById('laporan-interactive');
    if (!ph || !sim) return;
    const isVisible = sim.style.display !== 'none';
    ph.style.display = isVisible ? 'block' : 'none';
    sim.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        renderLaporanStats();
    }
}

function renderLaporanStats() {
    const batches = store.data.batches;
    let totalGreen = 60.0;
    let totalRoasted = 50.8;
    let count = batches.length + 6; // Include baseline demo batches

    batches.forEach(b => {
        totalGreen += b.greenWeight || 0;
        totalRoasted += b.roastedWeight || 0;
    });

    const avgLoss = (((totalGreen - totalRoasted) / totalGreen) * 100).toFixed(1);

    const elGreen = document.getElementById('rep-green');
    const elRoasted = document.getElementById('rep-roasted');
    const elLoss = document.getElementById('rep-loss');
    const elBatches = document.getElementById('rep-batches');

    if (elGreen) elGreen.textContent = totalGreen.toFixed(1) + ' kg';
    if (elRoasted) elRoasted.textContent = totalRoasted.toFixed(1) + ' kg';
    if (elLoss) elLoss.textContent = avgLoss + '%';
    if (elBatches) elBatches.textContent = count + ' Batch';
}

function exportDataCSV() {
    let csv = 'Kode Kopi,Nama Kopi,Varietas,Proses,Origin,Grade,Supplier,Status\n';
    store.data.coffees.forEach(c => {
        csv += `"${c.kode}","${c.nama}","${c.varietas}","${c.proses}","${c.region || ''} ${c.negara}","${c.grade}","${c.supplier}","${c.status}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `laporan-kopi-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    showToast('Laporan CSV berhasil diunduh');
}

// ==================== MODALS & SETTINGS ====================
function openModalProfile() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        document.getElementById('prof-name').value = store.data.user.name;
        document.getElementById('prof-email').value = store.data.user.email;
        document.getElementById('profile-name-display').textContent = store.data.user.name;
        modal.classList.add('active');
    }
}

function closeProfileModal() {
    document.getElementById('profile-modal')?.classList.remove('active');
}

function saveUserProfile(event) {
    event.preventDefault();
    const name = document.getElementById('prof-name').value.trim();
    const email = document.getElementById('prof-email').value.trim();
    if (!name || !email) return;

    store.data.user.name = name;
    store.data.user.email = email;
    store.commit();

    const welcomeName = document.getElementById('dashboard-user-name');
    if (welcomeName) welcomeName.textContent = name;

    closeProfileModal();
    showToast('Profil pengguna berhasil diperbarui');
}

function openModalPassword() {
    document.getElementById('password-modal')?.classList.add('active');
}

function closePasswordModal() {
    const m = document.getElementById('password-modal');
    if (m) {
        m.classList.remove('active');
        document.getElementById('form-change-password')?.reset();
    }
}

function saveNewPassword(event) {
    event.preventDefault();
    const newPwd = document.getElementById('pwd-new').value;
    const confirmPwd = document.getElementById('pwd-confirm').value;

    if (newPwd !== confirmPwd) {
        showToast('Konfirmasi password tidak cocok');
        return;
    }

    closePasswordModal();
    showToast('Password berhasil diperbarui');
}

function openModalAbout() {
    document.getElementById('about-modal')?.classList.add('active');
}

function closeAboutModal() {
    document.getElementById('about-modal')?.classList.remove('active');
}

function confirmDeleteModal(itemName, onConfirm) {
    const modal = document.getElementById('delete-modal');
    const msg = document.getElementById('delete-modal-msg');
    const btn = document.getElementById('btn-confirm-delete');

    if (!modal || !btn) return;
    if (msg) msg.textContent = `Apakah Anda yakin ingin menghapus ${itemName}? Tindakan ini tidak dapat dibatalkan.`;

    deleteActionCallback = onConfirm;

    btn.onclick = () => {
        if (deleteActionCallback) deleteActionCallback();
        closeDeleteModal();
    };

    modal.classList.add('active');
}

function closeDeleteModal() {
    document.getElementById('delete-modal')?.classList.remove('active');
    deleteActionCallback = null;
}

// Backup & Restore
function backupData() {
    const dataStr = JSON.stringify(store.data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `coffee-roasting-system-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    showToast('Backup database JSON berhasil diunduh');
}

function triggerRestoreFileInput() {
    const input = document.getElementById('backup-file-input');
    if (input) input.click();
}

function handleRestoreFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed.coffees && parsed.suppliers && parsed.mesin) {
                store.saveData(parsed);
                showToast('Data berhasil dipulihkan dari backup!');
                renderDashboard();
            } else {
                showToast('Format file JSON tidak valid!');
            }
        } catch (err) {
            showToast('Gagal membaca file backup');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

// Global Toast helper
let toastTimeout = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('active');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
    }, 2800);
}
