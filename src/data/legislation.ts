import type { Legislation } from './types';

export const legislation: Legislation[] = [
  {
    id: 'eu-pacte-migration-asile',
    countryOrLevel: 'EU',
    title: 'Pacte européen sur la migration et l\'asile',
    status: 'promulguee',
    date: '2026-06-12',
    description:
      "Neuf règlements et une directive adoptés en mai 2024 par le Parlement européen et le Conseil, entrés en application le 12 juin 2026 dans tous les États membres. Renforce le contrôle aux frontières extérieures, accélère les procédures d'examen des demandes d'asile et instaure un mécanisme de solidarité obligatoire entre États membres.",
    source: {
      name: 'Représentation de la Commission européenne en France',
      url: 'https://france.representation.ec.europa.eu/informations/le-pacte-asile-et-migration-entre-en-vigueur-le-12-juin-2026-06-11_fr',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'fr-loi-immigration-2024',
    countryOrLevel: 'FR',
    title: "Loi n°2024-42 du 26 janvier 2024 pour contrôler l'immigration, améliorer l'intégration",
    status: 'promulguee',
    date: '2024-01-26',
    description:
      "Loi dite « Darmanin ». Une trentaine de dispositions ont été censurées par le Conseil constitutionnel le 25 janvier 2024 (jugées « cavaliers législatifs »), mais le texte promulgué maintient notamment le durcissement des conditions du regroupement familial et de l'accès à certaines prestations sociales.",
    source: {
      name: 'Légifrance',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048912696',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'de-rueckfuehrungsverbesserungsgesetz-2024',
    countryOrLevel: 'DE',
    title: 'Rückführungsverbesserungsgesetz (loi d\'amélioration des expulsions)',
    status: 'promulguee',
    date: '2024-02-27',
    description:
      "Adoptée sous le gouvernement Scholz (coalition SPD-Verts-FDP). Étend la durée de rétention en vue d'expulsion, facilite les fouilles de logements et les expulsions de personnes déboutées du droit d'asile, y compris de nuit.",
    source: {
      name: 'Deutscher Bundestag',
      url: 'https://www.bundestag.de',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'gb-rwanda-scheme-repeal-2024',
    countryOrLevel: 'GB',
    title: 'Safety of Rwanda (Asylum and Immigration) Act 2024',
    status: 'promulguee',
    date: '2024-04-25',
    description:
      "Loi votée sous le gouvernement conservateur de Rishi Sunak organisant l'expulsion des demandeurs d'asile arrivés illégalement vers le Rwanda. Le gouvernement travailliste de Keir Starmer a annoncé l'abandon complet du dispositif dès son arrivée au pouvoir, le 9 juillet 2024, sans qu'aucun vol n'ait eu lieu.",
    source: {
      name: 'UK Government / GOV.UK',
      url: 'https://www.gov.uk/government/news',
      accessedOn: '2026-08-18',
      note: "Statut « mesures concrètes (historique, abrogée le 9 juillet 2024) » — la loi n'a pas été formellement abrogée par le Parlement mais son application a été arrêtée par décision gouvernementale dès juillet 2024.",
    },
  },
];
