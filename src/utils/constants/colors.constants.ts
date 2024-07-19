import {
  DsColorAula,
  DsColorBrand,
  DsColorCPMed,
  DsColorCPVent,
  DsColorExtensivo,
  DsColorFeedback,
  DsColorIntensivao,
  DsColorMaterial,
  DsColorMEDEletro,
  DsColorMedmaster,
  DsColorNeutral,
  DsColorNoPapo,
  DsColorProvas,
  DsColorQuestoes,
  DsColorRevalida,
  DsColorVentilaMED,
} from '@utils/enums/colors.enums';

export const DS_COLOR_BRAND = Object.values(DsColorBrand);
export const DS_COLOR_NEUTRAL = Object.values(DsColorNeutral);
export const DS_COLOR_FEEDBACK = Object.values(DsColorFeedback);

export const DS_COLOR_AULA = Object.values(DsColorAula);
export const DS_COLOR_MATERIAL = Object.values(DsColorMaterial);
export const DS_COLOR_QUESTOES = Object.values(DsColorQuestoes);
export const DS_COLOR_REVALIDA = Object.values(DsColorRevalida);
export const DS_COLOR_PROVAS = Object.values(DsColorProvas);

export const DS_COLOR_EXTENSIVO = Object.values(DsColorExtensivo);
export const DS_COLOR_MEDMASTER = Object.values(DsColorMedmaster);
export const DS_COLOR_CPMED = Object.values(DsColorCPMed);
export const DS_COLOR_NOPAPO = Object.values(DsColorNoPapo);
export const DS_COLOR_MEDELETRO = Object.values(DsColorMEDEletro);
export const DS_COLOR_CPVENT = Object.values(DsColorCPVent);
export const DS_COLOR_VENTILAMED = Object.values(DsColorVentilaMED);
export const DS_COLOR_INTENSIVAO = Object.values(DsColorIntensivao);

export const DS_COLORS = [
  ...DS_COLOR_BRAND,
  ...DS_COLOR_FEEDBACK,
  ...DS_COLOR_NEUTRAL,
];

export const DS_COLORS_MEDSOFT = [
  ...DS_COLOR_AULA,
  ...DS_COLOR_MATERIAL,
  ...DS_COLOR_QUESTOES,
  ...DS_COLOR_REVALIDA,
  ...DS_COLOR_PROVAS,
];

export const DS_COLORS_PRODUTOS = [
  ...DS_COLOR_EXTENSIVO,
  ...DS_COLOR_MEDMASTER,
  ...DS_COLOR_CPMED,
  ...DS_COLOR_NOPAPO,
  ...DS_COLOR_MEDELETRO,
  ...DS_COLOR_CPVENT,
  ...DS_COLOR_VENTILAMED,
  ...DS_COLOR_INTENSIVAO,
];
