"use client";

import { useState } from "react";
import GymPricingModal from "./GymPricingModal";
const gruenderFeatures = [
  { text: "12 Monate Laufzeit, endet automatisch", included: true },
  { text: "Eintrainieren inklusive", included: true },
  {
    text: "Einmalig 15 EUR für Zugangsarmband inkl. Holistic- & Milon-App",
    included: true,
  },
  {
    text: "Anschließender Wechsel in reguläre Mitgliedschaften möglich",
    included: true,
  },
];

const foerderFeatures = [
  { text: "24 Monate Laufzeit", included: true },
  {
    text: "Armband, App-Nutzung und Eintrainieren inklusive",
    included: true,
  },
  {
    text: "Weiterentwicklungen des Trainingskonzepts und neue Angebote inklusive",
    included: true,
  },
  { text: "Zusätzliche Vorteile und Bonusaktionen", included: true },
  {
    text: "Pause bis zu 4 Monate möglich, Laufzeit verlängert sich entsprechend",
    included: true,
  },
];

const flexFeatures = [
  { text: "Monatlich kündbar", included: true },
  { text: "Einmalig 15 EUR Eintrainieren", included: true },
  {
    text: "Digitalpauschale für App- und Systemnutzung enthalten",
    included: true,
  },
  { text: "Maximale Flexibilität ohne lange Bindung", included: true },
  { text: "Voller Zugang zu Trainingsangeboten nach Wahl", included: true },
];

const PLAN_MODAL_CONTENT = {
  gruender: {
    title: "Gründermitgliedschaft",
    price: "60 EUR / Monat (12 Monate, endet automatisch ohne Verlängerung)",
    description: [
      "Ideal für den Einstieg mit klarer Laufzeit und der Möglichkeit, danach flexibel in reguläre Mitgliedschaften zu wechseln.",
    ],
    sections: [
      {
        title: "Leistungen",
        items: [
          "Eintrainieren inklusive",
          "Einmalig 15 EUR für Zugangsarmband inkl. Holistic- und Milon-App",
          "Möglichkeit zum anschließenden Wechsel in reguläre Mitgliedschaften",
        ],
      },
    ],
  },
  foerder: {
    title: "Fördermitgliedschaft",
    price: "79 EUR / Monat",
    description: [
      "Du unterstützt aktiv den Aufbau des HolisticGym und trägst dazu bei, eine moderne, zukunftsfähige Gesundheits- und Trainingsstruktur in der Region zu entwickeln.",
      "Gerade in der Aufbauphase ist dieses Konzept mit erhöhtem organisatorischem und strukturellem Aufwand verbunden.",
      "Deine Unterstützung ermöglicht es, Innovationen schneller umzusetzen und das Projekt nachhaltig wachsen zu lassen.",
    ],
    sections: [
      {
        title: "Dein Vorteil",
        items: [
          "Inklusive Armband und App-Nutzung sowie kostenlosem Eintrainieren",
          "Weiterentwicklungen des Trainingskonzepts und neue Angebote inklusive",
          "Zusätzliche Vorteile und Bonusaktionen",
        ],
      },
      {
        title: "Konditionen",
        items: [
          "24 Monate Laufzeit",
          "Pause bis zu 4 Monate möglich, entsprechende Verlängerung der Laufzeit",
          "Wenn du aus persönlichen Gründen Unterstützung brauchst, geben wir diese gerne zurück",
        ],
      },
    ],
  },
  flex: {
    title: "Flexibler Tarif",
    price: "85 EUR / Monat (monatlich kündbar)",
    description: [
      "Maximale Freiheit zum Start ohne langfristige Bindung.",
      "Du bleibst stets flexibel in deiner Nutzung und kannst im Zuge von Erweiterungen und Innovationen in weitere Modelle wechseln (Angaben laut aktueller Preisliste).",
    ],
    sections: [
      {
        title: "Leistungen",
        items: [
          "Einmalig 15 EUR Eintrainieren",
          "Monatliche Digitalpauschale für App- und Systemnutzung enthalten",
          "Maximale Flexibilität ohne lange Bindung",
          "Voller Zugang zu Trainingsangeboten nach Wahl",
        ],
      },
    ],
  },
};

const SECTION_CLASS = "wrapper !bg-white";
const CONTAINER_CLASS =
  "container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20";
const COLUMN_CLASS =
  "md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-none !px-4 max-w-full !mt-8";
const CARD_BODY_CLASS =
  "card-body flex-auto pb-4 xl:!pt-8 xl:!px-10 xl:!pb-5 lg:!pt-8 lg:!px-10 lg:!pb-5 md:!pt-8 md:!px-10 md:!pb-5";
const ICON_CLASS =
  "svg-inject icon-svg text-gym-primary !mb-3 !w-10 !h-10 mx-auto";
const PRICES_CLASS = "prices !text-[#343f52]";
const PRICE_ROW_CLASS = "!justify-start";
const FEATURE_LIST_CLASS =
  "pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left";
const FEATURE_ITEM_BASE_CLASS = "relative !pl-6";
const FEATURE_ITEM_MARGIN_CLASS = "!mt-1.5";
const FEATURE_ICON_CLASS =
  "absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-1 before:align-middle before:table-cell";
const PLAN_BUTTON_CLASS =
  "btn btn-primary !text-white uppercase !bg-gym-primary border-gym-primary hover:text-white hover:bg-gym-primary hover:!border-gym-primary active:text-white active:bg-gym-primary active:border-gym-primary disabled:text-white disabled:bg-gym-primary disabled:border-gym-primary  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]";

const getFeatureIconStyles = (included) => ({
  className: included ? "uil-check" : "uil-times bullet-soft-red",
  backgroundColor: included ? "#dce7f9" : "#fae3e4",
  color: included ? "var(--color-gym-primary)" : "#e2626b",
});

function FeatureLabel({ text }) {
  const [leading, ...rest] = text.split(" ");

  return (
    <span>
      <strong>{leading}</strong> {rest.join(" ")}
    </span>
  );
}

function PlanPrices({ isMonthly, monthlyPrice, yearlyPrice }) {
  return (
    <div className={PRICES_CLASS}>
      <div
        className={`price ${isMonthly ? "price-show" : "price-hidden"} ${PRICE_ROW_CLASS}`}
      >
        <span className="price-currency">€</span>
        <span className="price-value">{monthlyPrice}</span>
        <span className="price-duration">Monat</span>
      </div>
      <div
        className={`price ${!isMonthly ? "price-show" : "price-hidden"} ${PRICE_ROW_CLASS}`}
      >
        <span className="price-currency">€</span>
        <span className="price-value">{yearlyPrice}</span>
        <span className="price-duration">Jahr</span>
      </div>
    </div>
  );
}

function PlanFeatureList({ features, noFirstItemMargin = false }) {
  return (
    <ul className={FEATURE_LIST_CLASS}>
      {features.map((feature, index) => {
        const iconStyles = getFeatureIconStyles(feature.included);
        const itemClassName = `${FEATURE_ITEM_BASE_CLASS} ${
          !noFirstItemMargin || index !== 0 ? FEATURE_ITEM_MARGIN_CLASS : ""
        }`;

        return (
          <li key={index} className={itemClassName.trim()}>
            <i
              className={`${iconStyles.className} ${FEATURE_ICON_CLASS}`}
              style={{
                backgroundColor: iconStyles.backgroundColor,
                color: iconStyles.color,
              }}
            />
            <FeatureLabel text={feature.text} />
          </li>
        );
      })}
    </ul>
  );
}

export default function GymPricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePlanKey, setActivePlanKey] = useState(null);

  const openModal = (planKey) => {
    setActivePlanKey(planKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActivePlanKey(null);
  };

  return (
    <section id="snippet-2" className={SECTION_CLASS}>
      <div className={CONTAINER_CLASS}>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-none !px-4 max-w-full !mx-auto !text-center">
            <h2 className="!text-xs uppercase !text-[#aab0bc] !mb-3 tracking-wide leading-snug">
              Abos
            </h2>
            <h3 className="!text-[calc(1.305rem_+_0.66vw)] font-bold xl:!text-[1.8rem] !leading-[1.3] !mb-20 xl:!mb-6 lg:!mb-6 md:!mb-6 lg:!px-10 xl:!px-10">
              Deine Optionen zum Start
            </h3>
          </div>
          {/*/column */}
        </div>
        {/*/.row */}
        <div className="pricing-wrapper !relative">
          <div
            className="shape bg-dot primary rellax !w-24 !h-32 bg-[radial-gradient(var(--color-gym-primary)_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ top: "0rem", right: "-2.4rem" }}
          />
          <div
            className="shape !rounded-[50%] bg-line red rellax !w-32 !h-32 hidden xl:block lg:block absolute z-[1] opacity-50"
            data-rellax-speed={1}
            style={{ bottom: "0.5rem", left: "-2.5rem" }}
          />
          <div className="flex flex-wrap -mx-4 !mt-3 xl:!mt-5 lg:!mt-5 md:!mt-5">
            <div className={COLUMN_CLASS}>
              <div className="pricing card !text-center">
                <div className={CARD_BODY_CLASS}>
                  <i className="uil uil-shovel text-4xl text-gym-primary"></i>
                  <h4 className="card-title">Gründermitgliedschaft</h4>
                  <PlanPrices
                    isMonthly={isMonthly}
                    monthlyPrice={60}
                    yearlyPrice={60}
                  />
                  {/*/.prices */}
                  <PlanFeatureList
                    features={gruenderFeatures}
                    noFirstItemMargin
                  />
                  <button
                    onClick={() => openModal("gruender")}
                    className={PLAN_BUTTON_CLASS}
                  >
                    Mehr Infos
                  </button>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className={`${COLUMN_CLASS} popular`}>
              <div className="pricing card !text-center">
                <div className={CARD_BODY_CLASS}>
                  <i className="uil uil-heart text-4xl text-gym-primary"></i>
                  <h4 className="card-title">Fördermitgliedschaft</h4>
                  <PlanPrices
                    isMonthly={isMonthly}
                    monthlyPrice={79}
                    yearlyPrice={79}
                  />
                  {/*/.prices */}
                  <PlanFeatureList features={foerderFeatures} />
                  <button
                    onClick={() => openModal("foerder")}
                    className={PLAN_BUTTON_CLASS}
                  >
                    Mehr Infos
                  </button>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
            <div className={`${COLUMN_CLASS} md:!ml-[25%] xl:!ml-0 lg:!ml-0`}>
              <div className="pricing card !text-center">
                <div className={CARD_BODY_CLASS}>
                  <i className="uil uil-rocket text-4xl text-gym-primary"></i>
                  <h4 className="card-title">Flexibler Tarif</h4>
                  <PlanPrices
                    isMonthly={isMonthly}
                    monthlyPrice={85}
                    yearlyPrice={85}
                  />
                  {/*/.prices */}
                  <PlanFeatureList features={flexFeatures} />
                  <button
                    onClick={() => openModal("flex")}
                    className={PLAN_BUTTON_CLASS}
                  >
                    Mehr Infos
                  </button>
                </div>
                {/*/.card-body */}
              </div>
              {/*/.pricing */}
            </div>
            {/*/column */}
          </div>
          {/*/.row */}
        </div>
        {/*/.pricing-wrapper */}
      </div>
      {/* /.container */}
      <GymPricingModal
        isOpen={isModalOpen}
        onClose={closeModal}
        plan={activePlanKey ? PLAN_MODAL_CONTENT[activePlanKey] : null}
      />
    </section>
  );
}
