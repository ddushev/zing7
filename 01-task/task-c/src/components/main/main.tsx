
function Main() {
  const listItems = [
    'Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)',
    'Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;',
    'Взимане на стоки и доставки за от и в България;',
    'Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;',
    'Регулярни групажни линии;',
    'Транспортни услуги до Турция и Близкия изток;',
    'Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.'
  ];
  return (
    <main className="flex-col-container gap-16 items-center">
      <div className="main-text-container">
        <h3 className="main-h3">Решения</h3>
        <p>Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.</p>
        <div>
          <p>Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.</p>
          <ul className="list-disc pl-6">
            {listItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="main-text-container">
        <h3 className="main-h3">Предимства</h3>
        <p>Фокусът ни върху клиентите е същността на нашата работа. Ние доставяме услуги за всички видове бизнес – от малки местни предприятия до мултинационални компании.</p>
        <p>Ние обработваме вашата пратка като всяка друга голяма товарна пратка – старателно и професионално.</p>
      </div>
    </main>
  )
}

export default Main