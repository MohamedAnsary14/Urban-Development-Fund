// قاعدة بيانات الخدمات والمرفقات
const servicesData = [
    {
        id: 1,
        title: "تنازل للغير عن وحدة (سكني - تجاري - إداري)",
        icon: "fa-handshake",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "صورة ضوئية من استمارة حجز الوحدة",
            "صورة ضوئية من العقد صفحة رقم 1,2,16,17",
            "صورة ضوئية من إيصال مقدم الحجز وإيصال سداد الأقساط المستحقة",
            "في حالة السداد النقدي يتم ارفاق صورة اوامر الدفع وايصالات السداد",
            "صورة ضوئية من بطاقة الرقم القومي للوكيل او المفوض بالتعامل مع الصندوق (في حالة التعامل مع الوكيل)",
            "صورة ضوئية من التوكيل الصادر من المتعاقد بالتعامل مع الصندوق (في حالة التعامل مع الوكيل)",
            "صورة بطاقة الرقم القومي للمتنازل اليه"
        ],
        note: "** في حالة استلام مقدم الطلب نسخة العقد الخاص به يجب ارفاق صورة ضوئية من العقد، وفي هذه الحالة لا يلزم ارفاق المستندات الموضحة بالبند رقم (3, 4)."
    },
    {
        id: 2,
        title: "تنازل لصالح الصندوق عن وحدة (سكني - تجاري - إداري)",
        icon: "fa-building-circle-arrow-right",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "اصل / صورة من عقد بيع الوحدة المتنازل عليها + جدول السداد",
            "في حالة السداد النقدي يتم ارفاق صورة اوامر الدفع و اصل ايصالات السداد",
            "صورة ضوئية من بطاقة الرقم القومي للوكيل او المفوض بالتعامل مع الصندوق (في حالة التعامل مع الوكيل)",
            "صورة ضوئية من التوكيل الصادر من المتعاقد بالتعامل مع الصندوق (في حالة التعامل مع الوكيل)",
            "إفادة او شهادة من البنك برقم حساب العميل (IBAN)"
        ]
    },
    {
        id: 3,
        title: "طلب إلغاء تنازل",
        icon: "fa-file-circle-xmark",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب"
        ]
    },
    {
        id: 4,
        title: "طلب الحصول علي مخالصة (سكني – تجاري – إداري)",
        icon: "fa-file-signature",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "صورة جدول سداد الاقساط المستحقة",
            "في حالة السداد النقدي يتم ارفاق صورة اوامر الدفع وايصالات السداد"
        ]
    },
    {
        id: 5,
        title: "طلب تأجيل وديعة الصيانة",
        icon: "fa-calendar-alt",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "صورة ضوئية من عقد بيع الوحدة محل الطلب او الملحق المالي رقم '1' المرفق بالعقد",
            "صورة ضوئية من بطاقة الرقم القومي للوكيل او المفوض بالتعامل مع الصندوق (في حالة التعامل مع الوكيل)"
        ],
        note: "ملحوظة: لا يجوز قبول الطلب بتأجيل قيمة وديعة الصيانة متي كانت تلك القيمة مستحقة السداد خلال شهر من تاريخ تقديم الطلب ويلتزم العميل بمراعاة هذه المدة تجنباً لرفض الشيك من قبل البنك، كما يشترط سداد كافة المستحقات المالية علي الوحدة."
    },
    {
        id: 6,
        title: "طلب استرداد مقدم الحجز",
        icon: "fa-money-bill-transfer",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "أصل إستمارة الحجز",
            "أصل الإيداع / او التحويل",
            "أصل شهادة من البنك برقم الحساب البنكي"
        ]
    },
    {
        id: 7,
        title: "طلب استرداد مبالغ تم إيداعها بطريق الخطأ",
        icon: "fa-rotate-left",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "أصل الإيداع / او التحويل",
            "أصل شهادة من البنك برقم الحساب البنكي"
        ]
    },
    {
        id: 8,
        title: "طلب سحب شيكات",
        icon: "fa-money-check",
        attachments: [
            "صورة بطاقة الرقم القومي لمقدم الطلب",
            "صورة جدول السداد واضح ومسجل به ارقام الشيكات"
        ]
    }
];

// تهيئة وبناء كروت الخدمات في الصفحة الرئيسية عند التحميل
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('services-grid');
    
    servicesData.forEach(service => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-3';
        col.innerHTML = `
            <div class="service-card" onclick="showDetails(${service.id})">
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3 class="service-title">${service.title}</h3>
            </div>
        `;
        gridContainer.appendChild(col);
    });
});

// دالة عرض التفاصيل بناءً على الخدمة المختارة
function showDetails(id) {
    const service = servicesData.find(s => s.id === id);
    if(!service) return;

    // تعبئة البيانات
    document.getElementById('detail-title').innerText = service.title;
    
    const attachmentsList = document.getElementById('detail-attachments');
    attachmentsList.innerHTML = '';
    service.attachments.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        attachmentsList.appendChild(li);
    });

    const noteDiv = document.getElementById('detail-note');
    if(service.note) {
        noteDiv.innerText = service.note;
        noteDiv.classList.remove('d-none');
    } else {
        noteDiv.classList.add('d-none');
    }

    // تبديل واجهة العرض
    document.getElementById('services-grid').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'none';
    document.getElementById('details-section').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// دالة العودة للقائمة الرئيسية
function showMainGrid() {
    document.getElementById('details-section').style.display = 'none';
    document.querySelector('.hero-section').style.display = 'block';
    document.getElementById('services-grid').style.display = 'flex';
}