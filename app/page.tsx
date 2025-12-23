const VETMANAGER_BOOKING_URL = "https://example.com/vetmanager-booking"; // TODO: вставь реальную ссылку
const VK_URL = "https://vk.com/onlyvet"; // TODO: проверь
const OK_URL = "https://ok.ru/"; // TODO: вставь вашу ссылку
const TG_URL = "https://t.me/"; // TODO: вставь вашу ссылку

export default function Page() {
  return (
    <main className="ov-page">
      {/* Ambient watercolor background (no heavy blocks, lots of air) */}
      <div className="ov-ambient" aria-hidden="true" />

      <header className="ov-header">
        <div className="ov-shell ov-headerInner">
          <div className="ov-brand">
            {/* Logo placeholder: put your logo in /public/logo/onlyvet-color.png */}
            <div className="ov-logo" aria-label="OnlyVet">
              <span className="ov-logoMark" aria-hidden="true" />
              <span className="ov-logoText">OnlyVet</span>
            </div>

            <nav className="ov-nav" aria-label="Навигация">
              <a className="ov-navLink" href="#how">Как это работает</a>
              <a className="ov-navLink" href="#when">Когда подходит</a>
              <a className="ov-navLink" href="#socials">Соцсети</a>
            </nav>
          </div>

          <a className="ov-btn ov-btnPrimary" href={VETMANAGER_BOOKING_URL} target="_blank" rel="noreferrer">
            Записаться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="ov-hero">
        <div className="ov-shell ov-heroGrid">
          <div className="ov-heroText">
            <h1 className="ov-h1">OnlyVet — онлайн-ветеринарная клиника</h1>
            <p className="ov-lead">
              Экспертные консультации, второе мнение и разбор медицинских данных — дистанционно и безопасно.
            </p>

            <div className="ov-slogan" aria-label="Слоган">
              За пределами заботы
            </div>

            <div className="ov-heroActions">
              <a className="ov-btn ov-btnPrimary" href={VETMANAGER_BOOKING_URL} target="_blank" rel="noreferrer">
                Записаться на консультацию
              </a>
              <a className="ov-btn ov-btnGhost" href="#how">
                Как проходит консультация
              </a>
            </div>

            <p className="ov-note">
              Работаем онлайн. Без экстренной очной помощи и процедур.
            </p>
          </div>

          {/* Hero illustration placeholder */}
          <div className="ov-heroArt" aria-label="Иллюстрация">
            <div className="ov-illuFrame">
              <div className="ov-illuMist" aria-hidden="true" />
              <div className="ov-illuHint">
                {/* Place an image later. For now it keeps airy composition. */}
                <div className="ov-illuDot" aria-hidden="true" />
                <div className="ov-illuDot" aria-hidden="true" />
                <div className="ov-illuDot" aria-hidden="true" />
              </div>
              <div className="ov-illuCaption">Иллюстрация: дом, питомец, видеосвязь (без текста в интерфейсе)</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="ov-section">
        <div className="ov-shell">
          <h2 className="ov-h2">Что мы делаем</h2>
          <p className="ov-p">
            Мы помогаем разобраться в ситуации и принять безопасные решения: анализируем данные, объясняем риски и
            формируем понятный план дальнейших шагов.
          </p>

          <div className="ov-pillRow" role="list">
            <span className="ov-pill" role="listitem">Интерпретация анализов и исследований</span>
            <span className="ov-pill" role="listitem">Второе мнение по диагнозу и тактике</span>
            <span className="ov-pill" role="listitem">План обследования и ведения</span>
            <span className="ov-pill" role="listitem">Сопровождение хронических пациентов</span>
          </div>
        </div>
      </section>

      {/* WHEN ONLINE FITS */}
      <section id="when" className="ov-section">
        <div className="ov-shell ov-twoCol">
          <div>
            <h2 className="ov-h2">Когда онлайн-формат подходит</h2>
            <ul className="ov-list">
              <li>У вас есть анализы, УЗИ, рентген, выписки, назначения.</li>
              <li>Диагноз неясен или вызывает сомнения — нужно независимое мнение.</li>
              <li>Заболевание хроническое и важен контроль в динамике.</li>
              <li>Нужна корректировка схемы по новым данным и самочувствию.</li>
              <li>Важно понять, когда требуется очный врач и какие исследования приоритетны.</li>
            </ul>
          </div>

          <div>
            <h3 className="ov-h3">Когда онлайн-формат не подходит</h3>
            <ul className="ov-list ov-listMuted">
              <li>Экстренные и угрожающие жизни состояния.</li>
              <li>Ситуации, где критически нужен очный осмотр или процедуры.</li>
            </ul>

            <div className="ov-softCallout">
              <div className="ov-softTitle">Принцип безопасности</div>
              <div className="ov-softText">
                Если мы видим признаки неотложности, мы честно скажем, что нужно очно и срочно.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="ov-section">
        <div className="ov-shell">
          <h2 className="ov-h2">Как проходит консультация</h2>

          <div className="ov-steps">
            <div className="ov-step">
              <div className="ov-stepNum">1</div>
              <div className="ov-stepBody">
                <div className="ov-stepTitle">Запись через онлайн-расписание</div>
                <div className="ov-stepText">Вы выбираете удобное время и формат связи.</div>
              </div>
            </div>

            <div className="ov-step">
              <div className="ov-stepNum">2</div>
              <div className="ov-stepBody">
                <div className="ov-stepTitle">Связь с врачом (видео / чат)</div>
                <div className="ov-stepText">Обсуждаем симптомы, динамику и ваш запрос — спокойно и по делу.</div>
              </div>
            </div>

            <div className="ov-step">
              <div className="ov-stepNum">3</div>
              <div className="ov-stepBody">
                <div className="ov-stepTitle">Анализ медицинских данных</div>
                <div className="ov-stepText">Разбираем анализы и исследования, проверяем логику тактики.</div>
              </div>
            </div>

            <div className="ov-step">
              <div className="ov-stepNum">4</div>
              <div className="ov-stepBody">
                <div className="ov-stepTitle">Письменное заключение</div>
                <div className="ov-stepText">Вы получаете структурированный план действий и рекомендации.</div>
              </div>
            </div>
          </div>

          <div className="ov-ctaInline">
            <a className="ov-btn ov-btnPrimary" href={VETMANAGER_BOOKING_URL} target="_blank" rel="noreferrer">
              Записаться
            </a>
            <span className="ov-ctaHint">Запись ведёт в Vetmanager — расписание и подтверждения там.</span>
          </div>
        </div>
      </section>

      {/* SECOND OPINION */}
      <section className="ov-section">
        <div className="ov-shell ov-twoCol">
          <div>
            <h2 className="ov-h2">Второе мнение и интерпретация данных</h2>
            <p className="ov-p">
              Мы сравниваем подходы, проверяем обоснованность решений и помогаем увидеть клиническую картину целиком —
              без “угадайки”.
            </p>
            <ul className="ov-list">
              <li>Оценка назначений и альтернатив тактики</li>
              <li>Разбор анализов и исследований (по протоколам и материалам)</li>
              <li>Приоритизация следующих шагов и рисков</li>
            </ul>
          </div>

          <div className="ov-visualCard" aria-label="Абстрактный визуальный элемент">
            <div className="ov-visualTop">
              <div className="ov-miniChart" aria-hidden="true" />
              <div className="ov-miniDoc" aria-hidden="true" />
            </div>
            <div className="ov-visualText">
              Условные графики и документы — без читаемого текста, чисто и абстрактно.
            </div>
          </div>
        </div>
      </section>

      {/* LONG-TERM */}
      <section className="ov-section">
        <div className="ov-shell ov-twoCol">
          <div>
            <h2 className="ov-h2">Долгосрочное сопровождение</h2>
            <p className="ov-p">
              Для хронических пациентов важны контроль и динамика: корректировки по новым данным, мониторинг состояния,
              поддержка между консультациями.
            </p>
            <ul className="ov-list">
              <li>План ведения хронического случая</li>
              <li>Корректировка схем по свежим анализам</li>
              <li>Постоперационный онлайн-контроль</li>
            </ul>
          </div>

          <div className="ov-visualCard" aria-label="Визуальный элемент: календарь и динамика">
            <div className="ov-calendar" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="ov-visualText">Календарь + динамика показателей (условно, без цифр).</div>
          </div>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section className="ov-section">
        <div className="ov-shell">
          <h2 className="ov-h2">Наши специалисты</h2>
          <p className="ov-p">
            Консультации проводят ветеринарные врачи с клиническим опытом, работающие по принципам доказательной медицины.
            Мы честно обозначаем границы онлайн-формата и при необходимости рекомендуем очное обращение.
          </p>

          <div className="ov-softRow">
            <div className="ov-softItem">Клиническое мышление</div>
            <div className="ov-softItem">Работа с данными</div>
            <div className="ov-softItem">Структурированное заключение</div>
            <div className="ov-softItem">Приоритет безопасности</div>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section id="socials" className="ov-section">
        <div className="ov-shell ov-socials">
          <div>
            <h2 className="ov-h2">Мы в социальных сетях</h2>
            <p className="ov-p">
              Подробные разборы, услуги и обновления проекта — в наших официальных сообществах.
            </p>
          </div>

          <div className="ov-socialLinks" aria-label="Социальные сети">
            <a className="ov-socialBtn" href={VK_URL} target="_blank" rel="noreferrer">ВКонтакте</a>
            <a className="ov-socialBtn" href={OK_URL} target="_blank" rel="noreferrer">Одноклассники</a>
            <a className="ov-socialBtn" href={TG_URL} target="_blank" rel="noreferrer">Telegram</a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ov-final">
        <div className="ov-shell ov-finalInner">
          <div className="ov-finalText">
            <h2 className="ov-h2">Готовы обсудить ситуацию вашего питомца?</h2>
            <p className="ov-p">
              Выберите удобное время в онлайн-расписании. Мы разберём данные и сформируем понятный план действий.
            </p>
          </div>

          <a className="ov-btn ov-btnPrimary ov-btnLarge" href={VETMANAGER_BOOKING_URL} target="_blank" rel="noreferrer">
            Записаться на консультацию
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ov-footer">
        <div className="ov-shell ov-footerInner">
          <div className="ov-footerBrand">
            <div className="ov-logo ov-logoSm" aria-label="OnlyVet">
              <span className="ov-logoMark" aria-hidden="true" />
              <span className="ov-logoText">OnlyVet</span>
            </div>
            <div className="ov-footerSlogan">За пределами заботы</div>
          </div>

          <div className="ov-footerLinks">
            {/* TODO: добавь реальные ссылки на документы */}
            <a className="ov-footLink" href="/privacy" aria-disabled="true">
              Политика конфиденциальности
            </a>
            <a className="ov-footLink" href="/offer" aria-disabled="true">
              Публичная оферта
            </a>
            <a className="ov-footLink" href="mailto:info@onlyvet.ru">
              Контактная почта
            </a>
          </div>
        </div>

        <div className="ov-footerBottom">
          <div className="ov-shell ov-footerBottomInner">
            <span>© {new Date().getFullYear()} OnlyVet</span>
            <span className="ov-dot" aria-hidden="true">•</span>
            <a className="ov-footMini" href={VK_URL} target="_blank" rel="noreferrer">VK</a>
            <a className="ov-footMini" href={OK_URL} target="_blank" rel="noreferrer">OK</a>
            <a className="ov-footMini" href={TG_URL} target="_blank" rel="noreferrer">TG</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
