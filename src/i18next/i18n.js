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
        aboutText: `Boshqa ishlab chiqaruvchi kompaniyalardan farqli o'laroq Vital Kompaniyasi mijozlar sog'ligi va organizmi uchun foydali bo'ladigan suv ishlab chiqarishda yetakchi kompaniyaligi tasdiqlangan`,
        aboutText2: `
        Vital kompaniyasi nafaqat mazali va foydali suv balki organizmga mutlaqo zararsiz ekologik toza hom-ashyolardan foydalangan holda ishlab chiqarilgan suv kullerlarini ham mijozlarga taqdim etib kelmoqda`,
        aboutText3: `Bizning Vital suvlarimiz !
        `,
        aboutText4: `Suv yer yuzidagi xar bir tirik jonzod uchun eng muxim xayot manbai xisoblanadi. Yer yuzining 70 foizini suv qoplaganligiga qaramay bu suvning 1 foizigina ichimlik suvi xisoblanadi. Biz VITAL kompaniyasi tiriklik manbaini ichimlik suvi sifatida foydalanish uchun ko’plab ishlar olib bordik. Suvlarimiz tog' suvi bo'lganligi va inson aralashuvisiz davom etadigan filtrlash jarayoni suv mazasi va tarkibini butkul havfsiz va foydali bo'lishini ta'minlaydi.  Suvni 9 bosqichli Yapon va Xitoy texnologiyalarida ya’ni to’liq avtomatlashtirilgan filtrlash jarayonlaridan o’tkazib suv tarkibini muvozanatga keltirib suvni yanada mazali qilish uchun tarkibiga asl Zam-Zam suvlarini qo’shamiz. Asl Zam-Zam suvlarini to’g’ridan-to’g’ri Saudia Arabistonidan keltiriladi. Suv ta’mi mazali,  yutumlari esa yumshoqligi bilan ko’plab mijozlarimiz maqtovlarga sazovor bo’lgan.`,
        aboutText5: `Kompaniyamiz tozalik va sifatga katta etibor qaratgan. Mijozlardan qaytgan kapsulalarni tekshirish jarayonlaridan o’tkazib ishga yaroqsiz kapsulalarni olib tashlanadi. Yaroqli kapsulalarimizni esa   3 xil xaroratda 15 bosqichli tozalash kanveyirlaridan o’tkazamiz va qadoqlash jarayoniga yuboramiz.
        `,
        aboutText6: `Suvlarimizni mijozlarimizga tezkor yetkazib berish xizmatlarida yetkazib beramiz. Yetkazib berish xizmatlarimiz xonadoningiz nechanchi qavatda bo’lishan qat’iy nazar eshik tagigacha olib chiqib beriladi.
        `,
        aboutText7: `Bizning  Kullerlar !
        `,
        aboutText8: `Kompaniyamiz  tomonidan suv uchun kullerlar xam ishlab chiqariladi. Kullerlarning 40 dan ortiq turlari mavjud. Butun O’zbekiston bo’ylab yetkazib berish imkoniga egamiz. Toshkent shaxrida o’zimizning showroomimz o’z ish faoliyatini olib boradi. U yerda kullarlarimiz haqida barcha ma’lumotlarni berib o’tamiz. Kullerlarimiz xam suvimiz kabi ko’plab mijozlarimizga ko’p yillardan buyon xizmat qilib kelmoqda.
        `,
        aboutText9: `Kelgusida bu ko’rsatkichlarni yanada ko’paytirib mijozlarimiz ishonchinj oqlashni maqsad qilganmiz!
        `,
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
        ourProduct: "Bizning Maxsulotlarimiz",
        cooler: `VT-7SX modeli bu sensorli boshqaruv tizimli, suvdagi
        bakteriyalarni bartaraf etish funksiyasiga ega va mutlaqo
        shovqinsiz ishlaydigan kulerdir`,
        sum: "so'm",
        buy: "Sotib olish",
        deliveryTitle: "Yetkazib berish",
        titleSpan: `xizmati`,
        deliveryText: `Suv yetkazib berish xizmatimiz bilan to'g'ridan-to'g'ri
        eshigingizgacha yetkazib beramiz.`,
        freeDel: `Bepul yetkazib berish`,
        workTime: `24/7 Istalgan vaqtda`,
        location: `Ostonagacha yetkazish`,
        water: "Vital Suvlariga",
        waterTitle: `Zam Zam`,
        waterSubtitle: `Qo'shilishini Bilarmidingiz?`,
        waterText: `Vital qadoqlangan tabiiy suvi muqaddas Zam Zam bulog‘idan suv
        qo‘shilishi bilan tayyorlanadi.`,
        water1: `Qudug‘dan Zam Zam Suvi Olinadi `,
        water2: `Maxsus idishlarga qadoqlanadi`,
        water3: `Vital zavodlariga yetkaziladi`,
        water4: `Labatoriya tekshiruvidan o'tkaziladi`,
        water5: "Vital suvlariga qo‘shiladi",
        contactTitle: `Bog'lanish Uchun`,
        contactSubtitle: `Ma'lumot `,
        headOffice: " Bosh ofisimiz",
        locationHead: `Toshkent sh., Shayxontohur tum., Kichik xalqa yo'li, 63A`,
        time: `Ish vaqti`,
        monday: "Dushanba",
        tuesday: "Seshanba",
        wednesday: "Chorshanba",
        thursday: "Payshanba",
        friday: "Juma",
        saturday: "Shanba",
        sunday: "Yakshanba",
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
        aboutText: `В отличие от других компаний-производителей, компания «Витал» зарекомендовала себя как ведущая компания по производству воды, полезной для здоровья и организма покупателей.`,
        aboutText2: `Компания «Витал» предлагает покупателям не только вкусную и полезную воду, но и кулеры для воды, изготовленные с использованием экологически чистых ингредиентов, абсолютно безвредных для организма.`,
        aboutText3: `Наши Жизненные воды!
        `,
        aboutText4: `Вода – важнейший источник жизни для каждого живого существа на Земле. Несмотря на то, что 70% поверхности Земли покрыто водой, только 1% этой воды считается питьевой. Мы, компания ВИТАЛ, сделали многое, чтобы использовать источник жизни – питьевую воду. Тот факт, что наши воды являются горными, а непрерывный процесс фильтрации без вмешательства человека гарантирует, что вкус и состав воды полностью безопасны и полезны для здоровья. Мы пропускаем воду через 9-ступенчатую японскую и китайскую технологию, то есть полностью автоматизированные процессы фильтрации, балансируем содержание воды и добавляем оригинальные воды Зам-Зам, чтобы вода была вкуснее. Оригинальную воду Зам-Зам привозят напрямую из Саудовской Аравии. Многие наши клиенты высоко оценили вкус воды и мягкость ее глотков.`,
        aboutText5: `Наша компания уделяет большое внимание чистоте и качеству. Капсулы, возвращенные от покупателей, проверяются и непригодные для использования капсулы удаляются. Мы пропускаем наши действительные капсулы через 15-ступенчатые конвейеры очистки при 3-х различных температурах и отправляем их в процесс упаковки.
        `,
        aboutText6: `Мы доставляем воду нашим клиентам службами экспресс-доставки. Нашими службами доставки осуществляется доставка до вашего порога, независимо от этажа вашей квартиры.`,
        aboutText7: `Наши Куллеры!
        `,
        aboutText8: `Наша компания также производит кулеры для воды. Существует более 40 видов кулеров. Имеем возможность доставки по всему Узбекистану. Наш шоу-рум работает в Ташкенте. Там мы дадим всю информацию о нашем прахе. Наши кулеры, как и наша вода, уже много лет служат многим нашим клиентам.`,
        aboutText9: `В будущем мы стремимся заслужить доверие наших клиентов, еще больше увеличив эти показатели! `,
        
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
        ourProduct: "Наши продукты",
        cooler: `Модель VT-7SX — сенсорная система управления, в воде
        имеет функцию устранения бактерий и полностью
        кулер, который работает бесшумно`,
        sum: "сум",
        buy: "Покупка",
        deliveryTitle: "Доставка",
        titleSpan: `услуга`,
        deliveryText: `Напрямую с нашей службой доставки воды
        мы доставляем до вашей двери.`,
        freeDel: `Бесплатная доставка`,
        workTime: `24/7 в любое время`,
        location: `Доставка до порога`,
        water: "К жизненным водам",
        waterTitle: `Zam Zam`,
        waterSubtitle: `Вы знали, что это включено?`,
        waterText: `Жизненно важная упакованная природная вода – это вода из священного источника Зам Зам.
        приготовленный с добавлением`,
        water1: `Зам Зам Вода берется из колодца. `,
        water2: `Упаковано в специальные контейнеры`,
        water3: `Поставлено на жизненно важные заводы`,
        water4: `Лабораторное обследование проводится`,
        water5: "Добавляется в Витальные воды.",
        contactTitle: `Связаться`,
        contactSubtitle: `Информация `,
        headOffice: " Наш головной офис",
        locationHead: `г.Ташкент, Шайхонтохурский район, дорога Кичик Халка, 63А`,
        time: `Рабочее время`,
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Yakshanba",
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
        aboutText: ` Unlike other manufacturing companies, Vital Company is proven to be a leading company in the production of water that is beneficial for the health and body of customers.`,
        aboutText2: `The Vital company offers customers not only tasty and healthy water, but also water coolers made using environmentally friendly ingredients that are absolutely harmless to the body.`,
        aboutText3: `Our Vital waters!
        `,
        aboutText4: `Water is the most important source of life for every living thing on earth. Despite the fact that 70% of the earth's surface is covered by water, only 1% of this water is considered drinking water. We VITAL company have done many things to use the source of life as drinking water. The fact that our waters are mountain water and the continuous filtration process without human intervention ensures that the taste and composition of the water is completely safe and healthy. We pass the water through 9-stage Japanese and Chinese technologies, i.e. fully automated filtering processes, balance the water content and add original Zam-Zam waters to make the water tastier. Original Zam-Zam water is brought directly from Saudi Arabia. Many of our customers have praised the taste of the water, and the softness of its sips.`,
        aboutText5: `Our company pays great attention to cleanliness and quality. Capsules returned from customers are checked and unusable capsules are removed. We pass our valid capsules through 15-step cleaning conveyors at 3 different temperatures and send them to the packaging process.`,
        aboutText6: `We deliver our waters to our customers in express delivery services. Our delivery services are delivered to your doorstep, regardless of the floor of your apartment.`,
        aboutText7: `Our Coolers!
        `,
        aboutText8: `Our company also produces water coolers. There are more than 40 types of coolers. We are able to deliver throughout Uzbekistan. Our showroom operates in Tashkent. There we will give all the information about our ashes. Our coolers, like our water, have been serving many of our customers for many years.
        `,
        aboutText9: `In the future, we aim to earn the trust of our customers by increasing these indicators even more!
        `,
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
        ourProduct: "Our Products",
        cooler: `VT-7SX model is a touch control system, in water
        has the function of eliminating bacteria and completely
        is a cooler that works without noise`,
        sum: "sum",
        buy: "Buy",
        deliveryTitle: "Delivery",
        titleSpan: `service`,
        deliveryText: `Directly with our water delivery service
        we deliver to your door.`,
        freeDel: `Free shipping`,
        workTime: `24/7 Anytime`,
        location: `Delivery to the doorstep`,
        water: "Did you know that",
        waterTitle: `Zam Zam`,
        waterSubtitle: `is added to Vital Waters?`,
        waterText: `Vital packaged natural water is water from the sacred Zam Zam spring
        prepared with the addition of`,
        water1: `Zam Zam Water is taken from the well `,
        water2: `Packed in special containers`,
        water3: `Delivered to Vital plants`,
        water4: `Laboratory examination will be carried outi`,
        water5: "It is added to Vital waters",
        contactTitle: `Contact`,
        contactSubtitle: `Information`,
        headOffice: " Our head office",
        locationHead: `Tashkent city, Shaikhontohur district, Kichik Khalka road, 63A`,
        time: `Working time`,
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
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
