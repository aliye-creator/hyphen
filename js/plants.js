// ایجاد داده‌های فرضی رندوم (برای شبیه‌سازی تغییرات واقعی)
function generateMockData() {
  return {
    temperature: getRandomInRange(20, 28),   // دما بین ۲۰ تا ۲۸
    humidity: getRandomInRange(50, 80),      // رطوبت هوا بین ۵۰ تا ۸۰
    light: getRandomInRange(100, 400),       // نور بین ۱۰۰ تا ۴۰۰ لوکس
    soil: getRandomInRange(30, 70)           // رطوبت خاک بین ۳۰ تا ۷۰
  };
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// اجرای اولیه
const data = generateMockData();

// در صورت نیاز به تغییر متناوب داده‌ها، می‌تونی از این استفاده کنی:
// setInterval(() => {
//   const newData = generateMockData();
//   console.log(newData);
//   // اینجا می‌تونی مقادیر جدید رو بذاری توی DOM
// }, 5000);
