const { token, daysPerMonth } = require("./constants");

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

const runRequests = async (dates, month) => {
  // foreach percorre as datas e faz a request para cada uma delas
  dates.forEach(async (date) => {
    const dd = String(new Date(date).getDate()).padStart(2, "0");
    const mm = String(month).padStart(2, "0");

    const payload = {
      billable: true,
      date: date,
      extra: false,
      timeSpent: 480,
      title: `Whirlpool - Kanban Board (${dd}/${mm})`,
      projectId: "18ecee4c-7417-41d1-bf26-ace3b1f5f8e2",
    };

    const postOptions = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: headers,
    };

    try {
      const response = await fetch(
        "https://portal-api.lab2dev.com/appointments",
        postOptions
      ).then((response) => response);

      if (response.status !== 200) {
        console.log(response.statusText);
      }
    } catch (err) {
      throw new Error("Erro no servidor: " + err.message);
    }
  });
};

const postAppointment = async (monthYear) => {
  let dates = [];
  const daysNonWorking = [0, 6];
  // looping popula array de datas do mês, tirando finais de semana
  for (let i = 0; i < daysPerMonth[monthYear - 1]; i++) {
    const year = new Date().getFullYear();
    const month = monthYear - 1;
    const day = i + 1;
    const date = new Date(year, month, day);

    if (!daysNonWorking.includes(date.getDay())) {
      dates.push(date.toISOString());
    }
  }

  await runRequests(dates, monthYear);
  console.log(`Apontamentos do mês ${monthYear} concluídos!`);
};

postAppointment(6);
