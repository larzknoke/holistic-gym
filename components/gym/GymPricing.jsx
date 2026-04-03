"use client";

import { useState } from "react";
import GymPricingModal from "./GymPricingModal";
const gruenderFeatures = [
  { text: "Begrenzte Anzahl: 150", included: true },
  {
    text: "Zugang zu verfügbaren Trainingsbereichen: Milon, FIVE und Kraftgeräte",
    included: true,
  },
  {
    text: "App-Nutzung, Wasser-/Kaffeespender und ausgewählte Betreuungsleistungen inklusive",
    included: true,
  },
  { text: "Laufzeit 12 Monate", included: true },
];

const premiereFeatures = [
  {
    text: "Premierenkonditionen bis 01.02.2027",
    included: true,
  },
  {
    text: "Zugang zu FIVE, Kardio- und Kraftgeräten",
    included: true,
  },
  {
    text: "Zusätzlicher Zugang zu Milon Q+ und Milon X sowie Regenerationsangeboten bis 01.02.2027",
    included: true,
  },
  {
    text: "App-Nutzung, Wasserspender und ausgewählte Betreuungsleistungen inklusive",
    included: true,
  },
  {
    text: "Kündigung bis spätestens 4 Wochen vor Umstellung möglich",
    included: true,
  },
  {
    text: "Einmalige Aufnahmegebühr: 15 EUR",
    included: true,
  },
  {
    text: "Monatlicher Beitrag: 69 EUR",
    included: true,
  },
];

const foerderFeatures = [
  {
    text: "Mindestlaufzeit 24 Monate, danach monatlich kündbar",
    included: true,
  },
  {
    text: "Nutzung aller verfügbaren Trainingsbereiche inklusive Milon, FIVE und Kraftgeräte",
    included: true,
  },
  {
    text: "Zugang zu Regenerations- und Zusatzangeboten nach Verfügbarkeit",
    included: true,
  },
  {
    text: "Digitale Trainingssteuerung mit Holistic- und Milon-App",
    included: true,
  },
  {
    text: "Wasser und Heißgetränke zum Eigenbedarf inklusive",
    included: true,
  },
  {
    text: "Keine Aufnahmegebühr inkl. Zugangsarmband nach Wahl",
    included: true,
  },
  {
    text: "Vertragspause nach Rücksprache bis maximal 4 Monate möglich",
    included: true,
  },
];

const flexFeatures = [
  {
    text: "Voller Zugang zu allen verfügbaren Trainings-, Regenerations- und Zusatzangeboten",
    included: true,
  },
  {
    text: "Einmalige Aufnahmegebühr: 15 €",
    included: true,
  },
  {
    text: "Monatlich kündbar mit Kündigungsfrist von 14 Tagen vor Monatsende",
    included: true,
  },
  {
    text: "Erfolgt keine Kündigung, verlängert sich der Vertrag jeweils um einen weiteren Monat",
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
  premiere: {
    title: "Premierenmitgliedschaft / Basis",
    price: "69 EUR / Monat",
    description: [
      "Die Premierenmitgliedschaft bietet dir umfassenden Zugang zu den verfügbaren Trainingsbereichen und ausgewählten Leistungen in der Aufbauphase. Finde dein individuelles Set up!",
      "Die Premierenkonditionen gelten bis zum 01.02.2027.",
    ],
    sections: [
      {
        title: "Leistungsumfang",
        items: [
          "Zugang zu den verfügbaren Trainingsbereichen: FIVE, Kardio- und Kraftgeräten",
          "Zusätzlicher Zugang zu Milon Q+ Kraft- Ausdauerzirkel und Milon X, sowie Regenerationsangebote nach Verfügbarkeit bis 01.02.2027",
          "App-Nutzungen inklusive",
          "Wasserspender inklusive",
          "Ausgewählte Betreuungsleistungen inklusive",
        ],
      },
      {
        title: "Rahmenbedingungen",
        items: [
          "Einmalige Aufnahmegebühr: 15 €",
          "Monatlicher Beitrag: 69 EUR",
          "Laufzeit mit voller Nutzung bis 01.02.2027, danach 69€ im Monat mit optionaler Zubuchung von z. B. Milon oder Regeneration/Spa je nach Preisausschreibung",
          "Kündigung bis spätestens 4 Wochen vor Umstellung möglich",
        ],
      },
    ],
  },
  foerder: {
    title: "Fördermitgliedschaft/ Premium",
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
          "Wasser und Heißgetränke zum Eigenbedarf inklusive",
          "Einweisung, Trainingsplanung und individuelle Betreuung durch qualifiziertes Fachpersonal",
        ],
      },
      {
        title: "Rahmenbedingungen",
        items: [
          "Keine Aufnahmegebühr, inkl. Zugangsarmband nach Wahl und 2. Sichtungstermin mit Physiotherapeut*innen",
          "Mindestlaufzeit 24 Monate, ordentliche Kündigung erstmals zum Ende der Mindestlaufzeit, danach monatlich kündbar",
          "Vertragspause nach Rücksprache bis maximal 4 Monate möglich; die Laufzeit verlängert sich entsprechend",
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
  const gruenderPlan = PLAN_MODAL_CONTENT.gruender;
  const gruenderLimitHint =
    gruenderFeatures.find((feature) =>
      feature.text.toLowerCase().includes("begrenzte anzahl"),
    )?.text || "Begrenzte Anzahl: 150";
  const gruenderHeroFeatures = gruenderFeatures.filter(
    (feature) => feature.text !== gruenderLimitHint,
  );

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

        <div className="my-10">
          <div className="rounded bg-[linear-gradient(135deg,rgba(24,120,95,0.12),rgba(24,120,95,0.04))] border border-[rgba(24,120,95,0.2)] !p-6 lg:!p-8">
            <div className="flex flex-wrap -mx-4 items-start lg:items-center">
              <div className="w-full lg:w-8/12 !px-4">
                <div className="inline-block !mb-4 px-3 py-1 rounded text-[0.75rem] font-semibold uppercase tracking-wide bg-gym-primary text-white">
                  {gruenderLimitHint}
                </div>
                <h3 className="!mb-2 !text-[1.45rem] lg:!text-2xl !leading-[1.25] font-bold text-[#343f52]">
                  {gruenderPlan.title}
                </h3>
                <p className="!mb-5 text-[#4b5563] max-w-2xl">
                  {gruenderPlan.description[0]}
                </p>
                <ul className="pl-0 list-none !mb-0 text-left grid md:grid-cols-2 gap-x-6 gap-y-2">
                  {gruenderHeroFeatures.map((feature, index) => (
                    <li key={index} className="relative !pl-6">
                      <i
                        className={`uil-check opacity-50 ${FEATURE_ICON_CLASS}`}
                        style={{
                          backgroundColor: "var(--color-gym-primary)",
                          color: "white",
                        }}
                      />
                      <FeatureLabel text={feature.text} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 !px-4 !mt-6 lg:!mt-0">
                <div className="bg-white rounded border border-[rgba(24,120,95,0.14)] !p-5 text-center lg:text-left">
                  <p className="!mb-2 text-[#6b7280] uppercase tracking-wide text-[0.72rem] font-semibold">
                    Beitrag
                  </p>
                  <p className="!mb-4 text-[#343f52] text-3xl font-bold leading-none">
                    60 € / Monat
                  </p>
                  <button
                    onClick={() => openModal("gruender")}
                    className={`${PLAN_BUTTON_CLASS} !w-full lg:!w-auto`}
                  >
                    Mehr Infos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  <i className="uil uil-star text-4xl text-gym-primary"></i>
                  <h4 className="card-title">
                    Premierenmitgliedschaft / Basis
                  </h4>
                  <PlanPrices
                    isMonthly={isMonthly}
                    monthlyPrice={69}
                    yearlyPrice={69}
                  />
                  {/*/.prices */}
                  <PlanFeatureList
                    features={premiereFeatures}
                    noFirstItemMargin
                  />
                  <button
                    onClick={() => openModal("premiere")}
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
                  <h4 className="card-title">Fördermitgliedschaft / Premium</h4>
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
