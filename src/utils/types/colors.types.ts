import type {
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

import type { DsLiteralUnion } from './utils.types';

export type DsColors =
  | `${DsColorBrand}`
  | `${DsColorFeedback}`
  | `${DsColorNeutral}`;

export type DsColorsMedsoft =
  | `${DsColorAula}`
  | `${DsColorMaterial}`
  | `${DsColorQuestoes}`
  | `${DsColorRevalida}`
  | `${DsColorProvas}`;

export type DsColorsProdutos =
  | `${DsColorExtensivo}`
  | `${DsColorMedmaster}`
  | `${DsColorCPMed}`
  | `${DsColorNoPapo}`
  | `${DsColorMEDEletro}`
  | `${DsColorCPVent}`
  | `${DsColorVentilaMED}`
  | `${DsColorIntensivao}`;

export type DsColor = DsLiteralUnion<
  DsColors | DsColorsMedsoft | DsColorsProdutos | string
>;
