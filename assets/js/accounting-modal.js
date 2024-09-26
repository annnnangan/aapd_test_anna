document.addEventListener('DOMContentLoaded', function() {
  const addCategoryCard = document.getElementById('addCategoryCard');
  const addSubCategoryCard = document.getElementById('addSubCategoryCard');
  const selectDateCard = document.getElementById('selectDateCard');
  const periodSettingCard = document.getElementById('periodSettingCard');
  const remarksCard = document.getElementById('remarksCard');

  const closeAddCategoryCard = document.getElementById('closeAddCategoryCard');
  const closeAddSubCategoryCard = document.getElementById('closeAddSubCategoryCard');
  const closeSelectDateCard = document.getElementById('closeSelectDateCard');
  const closePeriodSettingCard = document.getElementById('closePeriodSettingCard');
  const closeRemarksCard = document.getElementById('closeRemarksCard');

  const addCategoryModalTrigger = document.getElementById('addCategoryModal');
  const addSubCategoryModalTrigger = document.getElementById('addSubCategoryModal');
  const addSelectDateModalTrigger = document.getElementById('addSelectDateModal');
  const periodSettingModalTrigger = document.getElementById('periodSettingModal');
  const remarksModalTrigger = document.getElementById('remarksModal');

  // 黑色遮罩
  const addCategoryBackdrop = document.getElementById('custom-backdrop-addCategory');
  const addSubCategoryBackdrop = document.getElementById('custom-backdrop-addSubCategory');
  const selectDateBackdrop = document.getElementById('custom-backdrop-selectDate');
  const periodSettingBackdrop = document.getElementById('custom-backdrop-periodSetting');
  const remarksBackdrop = document.getElementById('custom-backdrop-remarks');

  const calTotalRemark = document.getElementById('cal-total-remark');
  const addPeriodSettingBtn = document.getElementById('addPeriodSettingBtn');

  addCategoryModalTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    addCategoryCard.classList.remove('d-none');
    addCategoryBackdrop.classList.remove('d-none');

    addCategoryBackdrop.addEventListener('click', function() {
      addCategoryCard.classList.add('d-none');
      addCategoryBackdrop.classList.add('d-none');
    });
  });

  addSubCategoryModalTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    addSubCategoryCard.classList.remove('d-none');
    addSubCategoryBackdrop.classList.remove('d-none');

    addSubCategoryBackdrop.addEventListener('click', function() {
      addSubCategoryCard.classList.add('d-none');
      addSubCategoryBackdrop.classList.add('d-none');
    });
  });

  addSelectDateModalTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    selectDateCard.classList.remove('d-none');
    selectDateBackdrop.classList.remove('d-none');

    selectDateBackdrop.addEventListener('click', function() {
      selectDateCard.classList.add('d-none');
      selectDateBackdrop.classList.add('d-none'); 
    });
  });

  periodSettingModalTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    periodSettingCard.classList.remove('d-none');
    periodSettingBackdrop.classList.remove('d-none');

    periodSettingBackdrop.addEventListener('click', function() {
      periodSettingCard.classList.add('d-none');
      periodSettingBackdrop.classList.add('d-none');
    });
  });

  remarksModalTrigger.addEventListener('click', function(event) {
    event.preventDefault();
    remarksCard.classList.remove('d-none');
    remarksBackdrop.classList.remove('d-none');

    remarksBackdrop.addEventListener('click', function() {
      remarksCard.classList.add('d-none');
      remarksBackdrop.classList.add('d-none');
    });
  });

  closeAddCategoryCard.addEventListener('click', function() {
    addCategoryCard.classList.add('d-none');
    addCategoryBackdrop.classList.add('d-none');
  });
  closeAddSubCategoryCard.addEventListener('click', function() {
    addSubCategoryCard.classList.add('d-none');
    addSubCategoryBackdrop.classList.add('d-none');
  });
  closeSelectDateCard.addEventListener('click', function() {
    selectDateCard.classList.add('d-none');
    selectDateBackdrop.classList.add('d-none'); 
  });
  closePeriodSettingCard.addEventListener('click', function() {
    periodSettingCard.classList.add('d-none');
    periodSettingBackdrop.classList.add('d-none'); 
  });
  closeRemarksCard.addEventListener('click', function() {
    remarksCard.classList.add('d-none');
    remarksBackdrop.classList.add('d-none');
  });


  const cancelAddCategory = document.getElementById('cancelAddCategory');
  cancelAddCategory.addEventListener('click', function() {
    addCategoryCard.classList.add('d-none');
  });
  const cancelAddSubCategory = document.getElementById('cancelAddSubCategory');
  cancelAddSubCategory.addEventListener('click', function() {
    addSubCategoryCard.classList.add('d-none');
  });
  const cancelPeriodSettingCard = document.getElementById('cancelPeriodSettingCard');
  cancelPeriodSettingCard.addEventListener('click', function() {
    periodSettingCard.classList.add('d-none');
  });
  const cancelSelectDateCard = document.getElementById('cancelSelectDateCard');
  cancelSelectDateCard.addEventListener('click', function() {
    selectDateCard.classList.add('d-none');
  });

  /* 計算機週期文字 */
  addPeriodSettingBtn.addEventListener('click', function() {
    event.preventDefault();
    periodSettingCard.classList.add('d-none');
    calTotalRemark.classList.remove('d-none');
  });
});

