"use client";

import { useState } from "react";
import GymPricingModal from "./GymPricingModal";
const gruenderFeatures = [
  { text: "Laufzeit 12 Monate", included: true },
  { text: "Begrenzte Anzahl: 150", included: true },
  {
    text: "Zugang zu verfügbaren Trainingsbereichen: Milon, FIVE und Kraftgeräte",
    included: true,
  },
  {
    text: "App-Nutzung, Wasser-/Kaffeespender und ausgewählte Betreuungsleistungen inklusive",
    included: true,
  },
];

const foerderFeatures = [
  {
    text: "24 Monate Mindestlaufzeit, Kündigung erstmals zum Laufzeitende",
    included: true,
  },
  {
    text: "Voller Zugang zu Trainings-, Regenerations- und Zusatzangeboten",
    included: true,
  },
  {
    text: "Holistic- und Milon-App sowie Einweisung und Trainingsplanung inklusive",
    included: true,
  },
  {
    text: "Dauerhaft 10 % Preisvorteil auf reguläre Mitgliedschaften nach Inbetriebnahme",
    included: true,
  },
  {
    text: "Pause aus wichtigem Grund bis zu 4 Monate möglich",
    included: true,
  },
];

const flexFeatures = [
  { text: "Monatlich kündbar ohne Mindestlaufzeit", included: true },
  {
    text: "Kündigungsfrist 14 Tage vor Monatsende",
    included: true,
  },
  {
    text: "Automatische Verlängerung um jeweils einen Monat ohne Kündigung",
    included: true,
  },
  {
    text: "Voller Zugang zu allen verfügbaren Trainings- und Zusatzangeboten",
    included: true,
  },
];

const PLAN_MODAL_CONTENT = {
  gruender: {
    title: "Gründermitgliedschaft",
    price: "60 EUR / Monat",
    description: [
      "Starte mit der exklusiven Gründermitgliedschaft in ein Training auf einem anderen Level.",
      "Das Angebot ist auf 150 Plätze begrenzt und richtet sich an Mitglieder in der Aufbauphase.",
    ],
    sections: [
      {
        title: "Leistungsumfang",
        items: [
          "Zugang zu den verfügbaren Trainingsbereichen: Milon, FIVE und Kraftgeräte",
          "App-Nutzung inklusive",
          "Wasser- und Kaffeespender inklusive",
          "Ausgewählte Betreuungsleistungen inklusive",
        ],
      },
      {
        title: "Rahmenbedingungen",
        items: [
          "Einmalige Aufnahmegebühr: 15 €",
          "Monatlicher Beitrag: 60 EUR",
          "Laufzeit: 12 Monate",
          "Begrenzte Anzahl: 150 Mitgliedschaften",
        ],
      },
    ],
  },
  foerder: {
    title: "Fördermitgliedschaft",
    price: "79 EUR / Monat",
    description: [
      "Die Fördermitgliedschaft richtet sich an Mitglieder, die das Gym bereits in der Aufbauphase nutzen und von erweiterten Leistungen und Konditionen profitieren wollen.",
      "Du sicherst dir den vollen Zugang zu den verfügbaren Angeboten sowie einen dauerhaften Preisvorteil von 10 % auf den regulären Mitgliedschaftspreis nach vollständiger Inbetriebnahme.",
    ],
    sections: [
      {
        title: "Leistungsumfang",
        items: [
          "Nutzung aller verfügbaren Trainingsbereiche: Milon Kraft- und Ausdauerzirkel, konventionelles Krafttraining und funktionelle Trainingsflächen",
          "Zugang zu Regenerations- und Zusatzangeboten: Spa-/Recovery-Bereich (soweit verfügbar), Getränke und Credits für Zusatzanwendungen (z. B. Hydrojet, sobald verfügbar)",
          "Digitale Trainingssteuerung mit Holistic- und Milon-App",
          "Einweisung, Trainingsplanung und individuelle Betreuung durch qualifiziertes Fachpersonal",
        ],
      },
      {
        title: "Rahmenbedingungen",
        items: [
          "Einmalige Aufnahmegebühr: 15 €",
          "Mindestlaufzeit 24 Monate, ordentliche Kündigung erstmals zum Ende der Mindestlaufzeit, danach monatlich kündbar",
          "Vertragspause aus wichtigem Grund bis maximal 4 Monate möglich; die Laufzeit verlängert sich entsprechend",
          "Alle Leistungen gelten im Rahmen der jeweiligen Verfügbarkeit und Kapazitäten",
        ],
      },
    ],
  },
  flex: {
    title: "Flexibler Tarif",
    price: "89 EUR / Monat",
    description: [
      "Der Flex-Tarif bietet dir vollen Zugang zu allen verfügbaren Trainings- und Zusatzangeboten ohne Mindestlaufzeit.",
      "Damit bleibst du komplett flexibel und kannst monatlich entscheiden, ob du weitermachen möchtest.",
    ],
    sections: [
      {
        title: "Leistungsumfang",
        items: [
          "Voller Zugang zu allen verfügbaren Trainings-, Regenerations- und Zusatzangeboten",
        ],
      },
      {
        title: "Rahmenbedingungen",
        items: [
          "Einmalige Aufnahmegebühr: 15 €",
          "Monatlich kündbar mit Kündigungsfrist von 14 Tagen vor Monatsende",
          "Erfolgt keine Kündigung, verlängert sich der Vertrag jeweils um einen weiteren Monat",
        ],
      },
    ],
  },
};

const SECTION_CLASS = "wrapper !bg-white";
const CONTAINER_CLASS =
  "container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20";
const PRICE_SWITCHER_CLASS =
  "pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] !box-content rounded-3xl border-[0.2rem] border-solid border-transparent";
const PRICE_SWITCHER_ITEM_CLASS =
  "pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercas";
const COLUMN_CLASS =
  "md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-none !px-4 max-w-full !mt-8";
const CARD_BODY_CLASS =
  "card-body flex-auto pb-4 xl:!pt-8 xl:!px-10 xl:!pb-5 lg:!pt-8 lg:!px-10 lg:!pb-5 md:!pt-8 md:!px-10 md:!pb-5";
const ICON_CLASS =
  "svg-inject icon-svg text-gym-primary !mb-3 !w-10 !h-10 mx-auto";
const PRICES_CLASS = "prices !text-[#343f52]";
const FEATURE_LIST_CLASS =
  "pl-0 list-none bullet-bg bullet-soft-primary !mt-7 !mb-8 text-left";
const FEATURE_ITEM_BASE_CLASS = "relative !pl-6";
const FEATURE_ITEM_MARGIN_CLASS = "!mt-1.5";
const FEATURE_ICON_CLASS =
  "absolute left-0 w-4 h-4 text-[0.8rem] leading-none !tracking-[normal] !text-center flex items-center justify-center rounded-[100%] top-1 before:align-middle before:table-cell";
const PLAN_BUTTON_CLASS =
  "btn btn-primary !text-white uppercase !bg-gym-primary border-gym-primary hover:text-white hover:bg-gym-primary hover:!border-gym-primary active:text-white active:bg-gym-primary active:border-gym-primary disabled:text-white disabled:bg-gym-primary disabled:border-gym-primary  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]";

const getFeatureIconStyles = (included) => ({
  className: included ? "uil-check opacity-50" : "uil-times bullet-soft-red",
  backgroundColor: included ? "var(--color-gym-primary)" : "#fae3e4",
  color: included ? "white" : "#e2626b",
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
      <div className={`price ${isMonthly ? "price-show" : "price-hidden"} `}>
        <span className="price-currency">€</span>
        <span className="price-value">{monthlyPrice}</span>
        <span className="price-duration">Monat</span>
      </div>
      <div className={`price ${!isMonthly ? "price-show" : "price-hidden"} `}>
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
                    monthlyPrice={89}
                    yearlyPrice={89}
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
