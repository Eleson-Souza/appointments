const token = "";

const holidaysSP = [
  {
    date: "2023-01-01",
    name: "Confraternização Universal",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-02-20",
    name: "Carnaval",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-02-21",
    name: "Carnaval",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-02-22",
    name: "Quarta-feira de Cinzas",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-04-07",
    name: "Sexta-feira Santa",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-04-21",
    name: "Tiradentes",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-05-01",
    name: "Dia do Trabalhador",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-06-08",
    name: "Corpus Christi",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-07-09",
    name: "Revolução Constitucionalista",
    type: "feriado",
    level: "estadual",
    law: "Lei estadual nº 9.497/1997",
  },
  {
    date: "2023-09-07",
    name: "Independência do Brasil",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-10-12",
    name: "Nossa Senhora Aparecida",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-10-28",
    name: "Dia do Servidor Público",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-11-02",
    name: "Finados",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-11-15",
    name: "Proclamação da República",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-12-24",
    name: "Véspera de Natal",
    type: "facultativo",
    level: "nacional",
  },
  {
    date: "2023-12-25",
    name: "Natal",
    type: "feriado",
    level: "nacional",
  },
  {
    date: "2023-12-31",
    name: "Véspera de Ano-Novo",
    type: "facultativo",
    level: "nacional",
  },
];

const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

module.exports = {
  token,
  daysPerMonth,
};
