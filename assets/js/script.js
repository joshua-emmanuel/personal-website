function updateDateTime() {
  const date = document.querySelector('[data-testid="currentDay"]');
  const time = document.querySelector('[data-testid="currentTimeUTC"]');

  const now = new Date();
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const currentHour = now.getUTCHours().toString().padStart(2, '0');
  const currentMinute = now.getUTCMinutes().toString().padStart(2, '0');
  const currentSecond = now.getUTCSeconds().toString().padStart(2, '0');
  const currentTime = `${currentHour}:${currentMinute}:${currentSecond}`; // HH:MM:SS format

  date.textContent = days[now.getUTCDay()];
  time.textContent = currentTime;
}

setInterval(updateDateTime, 1000);
updateDateTime();
