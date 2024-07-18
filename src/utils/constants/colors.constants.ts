import {
  DsColorAula,
  DsColorBrand,
  DsColorFeedback,
  DsColorMaterial,
  DsColorNeutral,
  DsColorProvas,
  DsColorQuestoes,
  DsColorRevalida,
} from '@utils/enums/colors.enums';

export const DS_COLOR_BRAND = Object.values(DsColorBrand);
export const DS_COLOR_FEEDBACK = Object.values(DsColorFeedback);
export const DS_COLOR_NEUTRAL = Object.values(DsColorNeutral);

export const DS_COLOR_AULA = Object.values(DsColorAula);
export const DS_COLOR_MATERIAL = Object.values(DsColorMaterial);
export const DS_COLOR_QUESTOES = Object.values(DsColorQuestoes);
export const DS_COLOR_REVALIDA = Object.values(DsColorRevalida);
export const DS_COLOR_PROVAS = Object.values(DsColorProvas);

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
