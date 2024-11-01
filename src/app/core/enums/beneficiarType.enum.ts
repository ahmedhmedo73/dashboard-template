export type BeneficiarTypes =
  | 'InternalHajj'
  | 'ExternalHajj'
  | 'HajjAffairsOffices'
  | 'TransportCompanies';

export enum BeneficiarTypesEnum {
  InternalHajj = 1, //حجاج الداخل
  ExternalHajj = 2, //حجاج الخارج
  HajjAffairsOffices = 3, //مكاتب شؤون الحج
  TransportCompanies = 4, // شركات النقل
}

export const BeneficiarTypesData = {
  InternalHajj: {
    title: 'قائمة شركات حجاج الداخل',
    placeholder:
      'البحث باسم الشركة ,رقم الترخيص ,البريد الإلكتروني ,اسم المفوض, رقم هوية المفوض, رقم جوال المفوض',
    columns: [
      {
        key: 'rowNumber',
        title: 'م',
      },
      {
        key: 'name',
        title: 'اسم الشركة',
      },
      {
        key: 'licenseNumber',
        title: 'رقم الترخيص',
      },
      {
        key: 'email',
        title: 'البريد الإلكتروني',
      },
      {
        key: 'numberOfBeneficiaries',
        title: 'عدد الحجاج',
      },
      {
        key: 'delegatorName',
        title: 'اسم المفوض',
      },
      {
        key: 'delegatorIdentityNumber',
        title: 'رقم هوية المفوض',
      },
      {
        key: 'delegatorNumber',
        title: 'رقم جوال المفوض',
      },
      {
        key: 'details',
        title: 'الإجراء',
      },
    ],
    details: [
      {
        title: 'اسم الشركة',
        key: 'name',
      },
      {
        title: 'رقم الترخيص',
        key: 'licenseNumber',
      },
      {
        title: 'رقم السجل التجاري',
        key: 'commercialNumber',
      },
      {
        title: 'رقم جوال الشركة',
        key: 'mobileNumber',
      },
      {
        title: 'البريد الإلكتروني',
        key: 'email',
      },
      {
        title: 'عنوان مقر الشركة الرئيسي',
        key: 'address',
      },
      {
        title: 'عدد الحجاج',
        key: 'numberOfBeneficiaries',
      },
      {
        title: 'اسم المفوض',
        key: 'delegatorName',
      },
      {
        title: 'رقم هوية المفوض',
        key: 'delegatorIdentityNumber',
      },
      {
        title: 'البريد الإلكتروني للمفوض',
        key: 'delegatorEmail',
      },
      {
        title: 'رقم جوال المفوض',
        key: 'delegatorNumber',
      },
      {
        title: 'حالة الحساب',
        key: 'isActive',
      },
      {
        title: 'تاريخ التسجيل',
        key: 'registrationDate',
      },
    ],
  },
  ExternalHajj: {
    title: 'قائمة شركات حجاج الخارج',
    placeholder:
      'البحث باسم الشركة ,رقم الترخيص , البريد الإلكتروني , اسم المفوض , رقم هوية المفوض, رقم جوال المفوض',
    columns: [
      {
        key: 'rowNumber',
        title: 'م',
      },
      {
        key: 'name',
        title: 'اسم الشركة',
      },
      {
        key: 'licenseNumber',
        title: 'رقم الترخيص',
      },
      {
        key: 'email',
        title: 'البريد الإلكتروني',
      },
      {
        key: 'numberOfBeneficiaries',
        title: 'عدد الحجاج',
      },
      {
        key: 'delegatorName',
        title: 'اسم المفوض',
      },
      {
        key: 'delegatorIdentityNumber',
        title: 'رقم هوية المفوض',
      },
      {
        key: 'delegatorNumber',
        title: 'رقم جوال المفوض',
      },
      {
        key: 'details',
        title: 'الإجراء',
      },
    ],
    details: [
      {
        title: 'اسم الشركة',
        key: 'name',
      },
      {
        title: 'رقم الترخيص',
        key: 'licenseNumber',
      },
      {
        title: 'رقم السجل التجاري',
        key: 'commercialNumber',
      },
      {
        title: 'رقم جوال الشركة',
        key: 'mobileNumber',
      },
      {
        title: 'البريد الإلكتروني',
        key: 'email',
      },
      {
        title: 'عنوان مقر الشركة الرئيسي',
        key: 'address',
      },
      {
        title: 'عدد الحجاج',
        key: 'numberOfBeneficiaries',
      },
      {
        title: 'اسم المفوض',
        key: 'delegatorName',
      },
      {
        title: 'رقم هوية المفوض',
        key: 'delegatorIdentityNumber',
      },
      {
        title: 'البريد الإلكتروني للمفوض',
        key: 'delegatorEmail',
      },
      {
        title: 'رقم جوال المفوض',
        key: 'delegatorNumber',
      },
      {
        title: 'حالة الحساب',
        key: 'isActive',
      },
      {
        title: 'تاريخ التسجيل',
        key: 'registrationDate',
      },
    ],
  },
  HajjAffairsOffices: {
    title: 'قائمة مكاتب شؤون الحجاج',
    placeholder:
      'البحث باسم المكتب ,رقم الترخيص,الدولة , البريد الإلكتروني , اسم المفوض , رقم هوية المفوض, رقم جوال المفوض',
    columns: [
      {
        key: 'rowNumber',
        title: 'م',
      },
      {
        key: 'name',
        title: 'اسم المكتب',
      },
      {
        key: 'licenseNumber',
        title: 'رقم الترخيص',
      },
      {
        key: 'countryName',
        title: 'الدولة',
      },
      {
        key: 'email',
        title: 'البريد الإلكتروني',
      },
      {
        key: 'numberOfBeneficiaries',
        title: 'عدد الحجاج',
      },
      {
        key: 'delegatorName',
        title: 'اسم المفوض',
      },
      {
        key: 'delegatorIdentityNumber',
        title: 'رقم هوية المفوض',
      },
      {
        key: 'delegatorNumber',
        title: 'رقم جوال المفوض',
      },
      {
        key: 'details',
        title: 'الإجراء',
      },
    ],
    details: [
      {
        title: 'اسم المكتب',
        key: 'name',
      },
      {
        title: 'رقم الترخيص',
        key: 'licenseNumber',
      },
      {
        title: 'الدولة',
        key: 'countryName',
      },
      {
        title: 'رقم جوال المكتب',
        key: 'mobileNumber',
      },
      {
        title: 'البريد الإلكتروني',
        key: 'email',
      },
      {
        title: 'عنوان المكتب الرئيسي',
        key: 'address',
      },
      {
        title: 'عدد الحجاج',
        key: 'numberOfBeneficiaries',
      },
      {
        title: 'اسم المفوض',
        key: 'delegatorName',
      },
      {
        title: 'رقم هوية المفوض',
        key: 'delegatorIdentityNumber',
      },
      {
        title: 'البريد الإلكتروني للمفوض',
        key: 'delegatorEmail',
      },
      {
        title: 'رقم جوال المفوض',
        key: 'delegatorNumber',
      },
      {
        title: 'حالة الحساب',
        key: 'isActive',
      },
      {
        title: 'تاريخ التسجيل',
        key: 'registrationDate',
      },
    ],
  },
  TransportCompanies: {
    title: 'قائمة شركات النقل',
    placeholder:
      'البحث باسم الشركة ,رقم الترخيص , البريد الإلكتروني , اسم المفوض , رقم هوية المفوض, رقم جوال المفوض',
    columns: [
      {
        key: 'rowNumber',
        title: 'م',
      },
      {
        key: 'name',
        title: 'اسم الشركة',
      },
      {
        key: 'licenseNumber',
        title: 'رقم الترخيص',
      },
      {
        key: 'email',
        title: 'البريد الإلكتروني',
      },
      {
        key: 'numberOfBeneficiaries',
        title: 'عدد الحافلات',
      },
      {
        key: 'delegatorName',
        title: 'اسم المفوض',
      },
      {
        key: 'delegatorIdentityNumber',
        title: 'رقم هوية المفوض',
      },
      {
        key: 'delegatorNumber',
        title: 'رقم جوال المفوض',
      },
      {
        key: 'details',
        title: 'الإجراء',
      },
    ],
    details: [
      {
        title: 'اسم الشركة',
        key: 'name',
      },
      {
        title: 'رقم الترخيص',
        key: 'licenseNumber',
      },
      {
        title: 'رقم السجل التجاري',
        key: 'commercialNumber',
      },
      {
        title: 'رقم جوال الشركة',
        key: 'mobileNumber',
      },
      {
        title: 'البريد الإلكتروني',
        key: 'email',
      },
      {
        title: 'عنوان مقر الشركة الرئيسي',
        key: 'address',
      },
      {
        title: 'عدد الحافلات',
        key: 'numberOfBeneficiaries',
      },
      {
        title: 'اسم المفوض',
        key: 'delegatorName',
      },
      {
        title: 'رقم هوية المفوض',
        key: 'delegatorIdentityNumber',
      },
      {
        title: 'البريد الإلكتروني للمفوض',
        key: 'delegatorEmail',
      },
      {
        title: 'رقم جوال المفوض',
        key: 'delegatorNumber',
      },
      {
        title: 'حالة الحساب',
        key: 'isActive',
      },
      {
        title: 'تاريخ التسجيل',
        key: 'registrationDate',
      },
    ],
  },
};
