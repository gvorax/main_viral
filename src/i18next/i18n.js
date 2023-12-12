import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        forContact: "Bog'lanish uchun",
        home: "Asosiy",
        about: "Biz haqimizda",
        product: "Mahsulotlar",
        services: "Xizmatlar",
        contact: "Bog'lanish",
        forComford: "Qulaylik va Sifat Uyg‘unligi",
        clean: "Toza & Shifobaxsh Ichimlik suvi",
        order: "Buyurtma berish",
        advice: "Bepul maslahat",
        aboutText: ` Vital kompaniyasi sizning va yaqinlaringizning sog'lig'i haqida
        qayg'uradi va iliq suv bilan ishlaydigan kulerlarni taklif etadi va iliq
        suv bilan ishlaydigan kulerlarni taklif etadiva iliq suv bilan
        ishlaydigan kulerlarni taklif etadi. Vital – Hayot ekologiyasi.`,
        aboutText2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        cum neque, sint, cupiditate exercitationem dolores quidem alias nisi
        itaque nulla possimus libero aliquam eum officia.`,
        more: "Ko'proq o'qish",
        less: "Kamroq o'qish",
        forFamily: `  Siz va Yaqinlarigiz Uchun`,
        forFamilyText: ` Munosib Suv`,
        confirmed: "Tasdiqlangan",
        confirmedText: `Suvning hayotimizdagi ahamiyati tufayli biz mijozlarimizga 99,99%
        toza suv beramiz.`,
        confirmedText1: `Bizning suvlarimizda 0,5 mg/l dan kamroq kloridlar mavjud.`,
        confirmedTexta: `Suv turli xil bakteriyalarga ega. 5 bosqichli filtrlash esa
        suvning barcha bakteriyalardan xalos qiladi.`,
        confirmedTexta1: `Suv turli xil bakteriyalarga ega. 5 bosqichli filtrlash esa suvning barcha bakteriyalardan xalos qiladi.`,
        confirmedTextb: `Mijozlarning hayoti haqida o'ylaymiz shuning uchun biz suvga past
        miqdorda tuz qo‘shamiz, chunki tuz sog'lig'imizga zarar yetkazadi.`,
        confirmedTextb1: `Mijozlarning hayoti haqida o'ylaymiz shuning uchun biz suvga past miqdorda tuz qo‘shamiz, chunki tuz sog'lig'imizga zarar yetkazadi.`,
        confirmedTextc: `Ishlab chiqarish va qadoqlash jarayonlari to'la
        avtomatlashtirilgan va har qanday inson aralashuvidan himoyalangan`,
        confirmedTextc1: `Ishlab chiqarish va qadoqlash jarayonlari to'la avtomatlashtirilgan va har qanday inson aralashuvidan himoyalangan`,
        confirmedTextd: `Bizning suv kapsulalarimiz 15 bosqichli tozalash jarayonidan
        o‘tadi va mijozlarga toza holatda yetkazildi.`,
        confirmedTextd1: `Bizning suv kapsulalarimiz 15 bosqichli tozalash jarayonidan o‘tadi va mijozlarga toza holatda yetkazildi.`,
        composition: `Suvning tarkibi`,
        motive: `Mijozlarning hayoti haqida o'ylaymiz shuning uchun biz suvga xlor
        qo‘shmaymiz, chunki xlor sog'lig'imizga jiddiy zarar yetkazadi.`,
        sulfat: "Sulfat",
        g: "mg/L",
        sulfatText: `Sulfat hujayralardagi eng muhim
        makronutrientlardan biridir.`,
        bikorbanat: "Bikorbonat",
        bikorbanatText: `Bikarbonat antasid bo'lib, oshqozon ekşimesi va
        kislotali ovqat hazm qilishni bartaraf etish uchun ishlatiladi.`,
        magniy: "Magniy",
        magniyText: `Magniy tananing sog'lom bo'lishi uchun zarur
        bo'lgan ozuqaviy moddadir.`,
        kalsiy: `Kalsiy`,
        kalsiyText: `Bizning tanamizdagi kalsiyning taxminan 99% suyaklarimiz va tishlarimizda.`,
        xlorid: "Xlorid",
        xloridText: `Suvni xlorlashning samaradorligi, suvni zararli moddalardan toʻliq xalos qilishida`,
      },
    },
    rus: {
      translation: {
        forContact: "для связи",
        home: "Главный",
        about: "O нас",
        product: "Продукты",
        services: "Услуги",
        contact: "Контакт",
        forComford: "Гармония удобства и качества",
        clean: "Чистая и здоровая питьевая вода",
        order: "Разместить заказ",
        advice: "Бесплатная консультация",
        aboutText: `Компания Витал – о здоровье вас и ваших близких
        заботится и предлагает кулеры с горячей водой и тепло
        предлагает кулеры для воды и горячую воду
        предлагает рабочие кулеры. Витальное – экология жизни.`,
        aboutText2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        cum neque, sint, cupiditate exercitationem dolores quidem alias nisi
        itaque nulla possimus libero aliquam eum officia.`,
        more: "Читать далее",
        less: "Читать меньше",
        forFamily: ` Для вас и ваших близких`,
        forFamilyText: `Подходящая вода`,
        confirmed: "Подтвержденный",
        confirmedText: `Из-за важности воды в нашей жизни мы обеспечиваем наших клиентов 99,99%
        мы даем чистую воду.`,
        confirmedText1: `Наши воды содержат менее 0,5 мг/л хлоридов.`,
        confirmedTexta: `В воде обитают разнообразные бактерии. И 5-ступенчатая фильтрация
        удаляет все бактерии из воды.`,
        confirmedTexta1: `В воде обитают разнообразные бактерии. 5-ступенчатая фильтрация удаляет из воды все бактерии.`,
        confirmedTextb: `Мы думаем о жизни наших клиентов, поэтому у нас мало воды
        мы добавляем много соли, потому что соль вредна для нашего здоровья.`,
        confirmedTextb1: `Мы думаем о жизни наших клиентов, поэтому добавляем в воду небольшое количество соли, ведь соль вредна для нашего здоровья.`,
        confirmedTextc: `Процессы производства и упаковки завершены.
        автоматизирован и защищен от любого вмешательства человека`,
        confirmedTextc1: `Процессы производства и упаковки завершены.
        автоматизирован и защищен от любого вмешательства человека`,
        confirmedTextd: `Наши капсулы с водой проходят 15-ступенчатую очистку.
        сдан и доставлен клиентам в первозданном состоянии.`,
        confirmedTextd1: `Наши капсулы с водой проходят 15-ступенчатый процесс очистки и доставляются клиентам в первозданном виде.`,
        composition: `Состав воды`,
        motive: `Мы думаем о жизни наших клиентов, поэтому хлорируем воду
        мы его не добавляем, потому что хлор серьезно вредит нашему здоровью.`,
        sulfat: "Сульфат",
        g: "мг/л",
        sulfatText: `Сульфат является самым важным в клетках
        является одним из макроэлементов.`,
        bikorbanat: "Бикарбонат",
        bikorbanatText: `Бикарбонат – антацид, средство от изжоги и
        используется для облегчения кислотного расстройства желудка.`,
        magniy: "Магний",
        magniyText: `Магний необходим для здоровья организма
        является питательным веществом.`,
        kalsiy: `Кальций`,
        kalsiyText: `Около 99% кальция в нашем организме находится в костях и зубах.`,
        xlorid: "Хлористый",
        xloridText: `Эффективность хлорирования воды заключается в том, что вода полностью свободна от вредных веществ.`,
      },
    },
    eng: {
      translation: {
        forContact: "For contact",
        home: "Home",
        about: "About us",
        product: "Products",
        services: "Services",
        contact: "Contact",
        forComford: "Convenience and Quality Harmony",
        clean: "Clean & Healthy Drinking Water",
        order: "Order Now",
        advice: "Free advice",
        aboutText: ` Vital company is about the health of you and your loved ones
        cares and offers hot water coolers and warm
        offers water coolers and hot water
        offers working coolers. Vital - ecology of life.`,
        aboutText2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        cum neque, sint, cupiditate exercitationem dolores quidem alias nisi
        itaque nulla possimus libero aliquam eum officia.`,
        more: "Read more",
        less: "Read less",
        forFamily: `For you and your loved ones`,
        forFamilyText: `Suitable water`,
        confirmed: "Confirmed",
        confirmedText: `Because of the importance of water in our lives, we provide our customers with 99.99%
        we give clean water.`,
        confirmedText1: `Our waters contain less than 0.5 mg/l of chlorides.`,
        confirmedTexta: `Water has a variety of bacteria. And 5-step filtering
        removes all bacteria from the water.`,
        confirmedTexta1: `Water has a variety of bacteria. And 5-step filtering
        removes all bacteria from the water.`,
        confirmedTextb: `We think about the lives of our customers, so we are low on water
        we add a lot of salt, because salt is harmful to our health.`,
        confirmedTextb1: `We think about the lives of our customers, so we are low on water
        we add a lot of salt, because salt is harmful to our health.`,
        confirmedTextc: `The production and packaging processes are complete
        automated and protected from any human intervention`,
        confirmedTextc1: `The production and packaging processes are complete
        automated and protected from any human intervention`,
        confirmedTextd: `Our water capsules come from a 15-step purification process
        passed and delivered to customers in pristine condition.`,
        confirmedTextd1: `Our water capsules go through a 15-step purification process and are delivered to customers in pristine condition.`,
        composition: `The composition of water`,
        motive: `We think about the lives of our customers, that's why we chlorinate the water
        we do not add it, because chlorine seriously harms our health.`,
        sulfat: "Sulfate",
        g: "mg/L",
        sulfatText: `Sulfate is the most important in cells
        is one of the macronutrients.`,
        bikorbanat: "Bicarbonate",
        bikorbanatText: `Bicarbonate is an antacid, heartburn and
        used to relieve acid indigestion.`,
        magniy: "Magnesium",
        magniyText: `Magnesium is essential for a healthy body
        is a nutrient.`,
        kalsiy: `Calcium`,
        kalsiyText: `About 99% of the calcium in our body is in our bones and teeth.`,
        xlorid: "Chloristy",
        xloridText: `The effectiveness of water chlorination is that the water is completely free of harmful substances`,
      },
    },
  },
  lng: localStorage.getItem("language") || "uz",
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
